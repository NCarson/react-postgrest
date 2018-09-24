import React from 'react'
import { Alert, Fade } from 'reactstrap';
import PropTypes from 'prop-types';

import Config from '../config'
import * as Postgrest from './Postgrest'
import WrapError from './WrapError'

import Pager from '../components/Pager'
import SortDropdown from '../components/SortDropdown'


const SearchSummary = (props) => {return(
    <div className='search-summary-wrapper'>
        <div className='search-summary'>
            { props.count ? `Found ${props.count} results` : 'Nothing found' }
            { props.location.search ? ` for '${props.location.search}'` : '' }
        </div>
    </div>
)}
SearchSummary.propTypes = {
    count: PropTypes.number.isRequired,
    search: PropTypes.string.isRequired
}


const SearchHeader = (props) => { 
    if (!props.count && props.location.search)
        return (<div className='search-header'><SearchSummary location={props.location}  count={props.count} /></div>)
    if (!props.count)
        return null
    if (props.page_count > 1) { return(
        <div className='search-header'>
            <Pager
                count={props.page_count}
                location={props.location}
            /> 
            <SortDropdown location={props.location} />
            {  props.location.search && <SearchSummary location={props.location}  count={props.count} /> }
        </div>
    )}
    return null
}


class _Fetcher extends React.Component {

    static propTypes = {
        view: PropTypes.string.isRequired,
        render: PropTypes.any.isRequired,
        location: PropTypes.shape({
            uri: PropTypes.object,
            q : PropTypes.string,
            page : PropTypes.number,
            }),
        match: PropTypes.shape( {
                params: PropTypes.object.isRequired
        }),
        order : PropTypes.object,
    }

    constructor(props) {
        super(props)
        this.state = {
          data : null,
          page_count : null,
          count: null,
          has_error: false,
          fetched: false, 
          timed_out: false,
        }
    }
    componentDidMount() {
        Config.log('Fetcher: mounted')
        this._set_state()
    }
    componentDidUpdate(props) {
        Config.log('Fetcher: did update')
        if (!this.props.location.equal(props.location)) {
            this._set_state()
        }
    }
    _set_state() {
        Config.log('Fetcher: set state')
        const fetcher = new Postgrest.Pagination(Config.api_host, this.props.view, Config.pagination)
        this.setState( {
            fetched: false,
            has_error: false,
            timed_out: false,
            data: null,
            page_count: null,
            count: null,
        })

        // set the clock to timeout
        setTimeout(function(){ 
            if (!this.state.fetched)
                this.setState({timed_out: true })
        }.bind(this), Config.api_timeout)

        fetcher.set_query(this.props.location.apiQuery())
        // async fetch
        fetcher.get(this.props.location.page)
            .then(response => this._on_fetched(response))
            .catch(error => this._on_error(error))
    }

    _on_fetched(response) {
        Config.log('Fetcher: on_fetched')
        if (!response || !response.data)
            return

        var data = response.data

        if (this.props.onFetched) 
            if (this.props.canonical) {
                const fetcher = new Postgrest.Pagination(Config.api_host, this.props.view, Config.pagination)
                fetcher.set_query(this.props.location.canonicalApiQuery())
                fetcher.get(1)
                    .then((r) => r && r.data && this.props.onFetched(r.data[0]))
                    .catch((e) => this._on_error(e))
            }
            else
                this.props.onFetched(data.shift())

        this.setState({ 
            data : data,
            page_count: response.page_count,
            count: response.count,
            fetched : true
        })
    }

    _on_error(error) {
        Config.warn(error)
        this.setState({ 
            has_error: true,
            fetched: true
        })
    }
    render() {
        if (!this.state.fetched)
            return (<div className='search-wrapper-loading'></div>)
        Config.log('Fetcher: render', this.state.fetched)
        if (this.state.has_error) { return (
          <Alert color='danger' className="section error_box">Something went wrong.</Alert>
        )}
        /*
        if (this.state.timed_out) { return (
            <Alert color='danger' className="section error_box">Data server not responding ...</Alert>
        )}
        */
        if (this.state.fetched) {

      return (
          <Fade className='search-wrapper'>
              <SearchHeader 
                  location={this.props.location}
                  count={this.state.count}
                  page_count={this.state.page_count}
              />
            { this.state.data.map(item => {
                    item.key=item.id; 
                    item.onClick = (ev, props) => {
                        ev.stopPropagation() 
                        return this.props.onBoardClick && this.props.onBoardClick(props)
                    }
                    return React.createElement(this.props.render, item)}
                )
            }
            <br/><br/>
            { this.state.page_count > 1 && <Pager

                count={this.state.page_count}
                location={this.props.location}
                /> }
          </Fade>
         )
       }
    }
}


const Fetcher = WrapError(_Fetcher)
export default Fetcher

