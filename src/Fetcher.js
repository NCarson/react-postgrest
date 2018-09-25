
import React from 'react'
import PropTypes from 'prop-types'

import {Fetcher as PGFetcher} from './Postgrest'

class Fetcher extends React.Component {

    static propTypes = {
        component: PropTypes.element.isRequired,
        href: PropTypes.string.isRequired,

        timeout: PropTypes.number.isRequired,
        _debug: PropTypes.bool.isRequired,

        loading: PropTypes.element,
        timed_out: PropTypes.element,
        errored_out: PropTypes.element,
        _simulate_lag: PropTypes.number,
    }

    static defaultProps = {
        timeout: 0,
        _debug: false,
    }

    _initialState() {
        return {
          data : null,
          fetched: false, 
          timed_out: false,
          has_error: false,
        }
    }

    constructor(props) {
        super(props)
        this.state = this._initialState()
        this.fetcher = new PGFetcher()
    }

    componentDidMount() {
        this.props._debug && console.log('FetchOne: mounted')
        this._fetch()
    }

    componentDidUpdate(newprops) {
        this.props._debug && console.log('FetchOne: did update')
        if (!this.props.href === newprops.href) {
            this.setState(this._initialState())
            this._fetch()
        }
    }

    _fetch() {
        this.props._debug && console.log('FetchOne: fetch')
        if (this.props.timeout) {
            // set the clock to timeout
            setTimeout( () => { 
                this.props._debug && console.log('FetchOne: timed out')
                if (!this.state.fetched) {
                    this.setState(
                        {timed_out: true }
                    )
                }
            }, this.props.timeout)
        }

        const x = () => {
            this.fetcher.get(this.props.href)
                .then(response => this._onFetched(response))
                .catch(error => { 
                    this.props._debug && console.log('FetchOne: caught error'), 
                        this.setState({has_error:true, error:error})
                })
        }

        if (this.props._simulate_lag) 
            setTimeout( () => {x()}, this.props._simulate_lag)
        else
            x()
    }

    _onFetched(response) {
        this.props._debug && console.log('FetchOne: onFetched')

        if (!response || !response.data) {
            this.setState({ fetched : true })
            return
        }
        this.setState({ 
            data : response.data,
            fetched : true
        })
    }

    render() {
        this.props._debug && console.log('FetchOne: render', 'fetched:', this.state.fetched)

        if (this.state.has_error)
            return this.props.errored_out ? React.createElement(this.props.errored_out, {error:this.state.error}) : null
        if (this.state.timed_out)
            return this.props.timed_out ? React.createElement(this.props.timed_out) : null
        if (!this.state.fetched)
            return this.props.loading ?  React.createElement(this.props.loading) : null
        return ( 
            React.createElement(this.props.component, {data:this.state.data}) 
        )
    }
}


export default Fetcher

