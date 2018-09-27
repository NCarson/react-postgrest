
import React from 'react'
import PropTypes from 'prop-types'

import equal from 'fast-deep-equal'


const withFetcher = (Success, Loading, Failed, TimedOut) => {

    class WithFetcher extends React.Component {

        static propTypes = {

            //req
            url: PropTypes.string.isRequired,
            get: PropTypes.func.isRequired,

            //default reqs
            timeout: PropTypes.number.isRequired,
            _debug: PropTypes.bool.isRequired,
            _always_fail: PropTypes.bool.isRequired,

            //optional
            onFetched: PropTypes.function,
            onFail: PropTypes.function,
            url_config: PropTypes.object,
            _simulate_lag: PropTypes.number,

        }

        static defaultProps = {
            timeout: 0,
            _debug: false,
            _always_fail: false,
        }

        _initialState() {
            return {
              data : null,
              response: null,
              fetched: false, 
              timed_out: false,
              has_error: this.props._always_fail || false,
            }
        }

        constructor(props) {
            super(props)
            this.state = this._initialState()
            console.debug('state eq', this.state == this._initialState(), this.state === this._initialState())
        }

        componentDidMount() {
            this.props._debug && console.log('withFetcher: mounted')
            this._fetch()
        }

        componentDidUpdate(newprops) {
            this.props._debug && console.log('withFetcher: did update')
            if (!this.props.url === newprops.url || !equal(this.props.url_config, newprops.url_config)) {
                this.setState(this._initialState())
                this._fetch()
            }
        }

        _fetch() {
            this.props._debug && console.log('withFetcher: fetch')
            if (this.props.timeout) {
                // set the clock to timeout
                setTimeout( () => { 
                    this.props._debug && console.log('withFetcher: timed out')
                    if (!this.state.fetched) {
                        this.setState(
                            {timed_out: true }
                        )
                    }
                }, this.props.timeout)
            }

            const x = () => {
                const config = this.props.url_config || {}
                this.props.get(this.props.url, config)
                    .then(response => this._onFetched(response))
                    .catch(error => { 
                        this.props._debug && console.log('withFetcher: caught error'), 
                            this.setState({has_error:true, error:error})
                        this.props.onError & this.props.onError(error)
                    })
            }

            if (this.props._simulate_lag) 
                setTimeout( () => {x()}, this.props._simulate_lag)
            else
                x()
        }

        _onFetched(response) {
            this.props._debug && console.log('withFetcher: onFetched')

            if (!response || !response.data) {
                this.setState({ fetched : true })
                return
            }
            this.setState({ 
                data : response.data,
                fetched : true
            })
            this.props.onFetched && this.props.onFetched(response.data)
        }

        render() {
            this.props._debug && console.log('withFetcher: render', 'fetched:', this.state.fetched)

            if (this.state.has_error)
                return  Failed ? <Failed error={this.state.error} /> : null 
            else if (this.state.timed_out)
                return  TimedOut ? <TimedOut/> : null 
            else if (!this.state.fetched)
                return  Loading ? <Loading /> : null 
            else
                return <Success response={this.state.response} data={this.state.data} />
        }
    }

    return  WithFetcher
}


export default withFetcher


