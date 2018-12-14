//copyright 2018 Nate Carson
import React from 'react'
import PropTypes from 'prop-types'

import equal from 'fast-deep-equal'

function getDisplayName(WrappedComponent) {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

/**
 * The HOC creatation function
 * @param {React.Component} Success - component to populate after the data is fetched
 * @param {object} [config={}]
 * @param {React.Component} [config.Loading=null] - component to show while data is being fetched
 * @param {React.Component} [config.Failed=null] - component to show if the fetch fails
 * @param {React.Component} [config.TimedOut=null] - component to show if the fetch take too long
 * @param {boolean} [config.debug=false] - log extra info
 * @param {function} [config.log=console.log] - loggin function
 * @param {boolean} [config.always_fail=false] - always render Failed component (for testing and debugging)
 * @param {number} [config.simulate_lag=0] - set a timeout to simualte network lag (for testing and debugging)
 * @param {boolean} [config.singleton=false] - return first element of fetched array
*/
const withFetcher = (Success, config={}) => {
    config.Loading = config.Loading || null // component to display while fetching
    config.Failed = config.Failed || null // component to display on fetch failure
    config.TimedOut= config.TimedOut || null // component to display after timeout timer is set
    config.debug = config.debug || false  // output extra info
    config.log = config.console || console.log // debugging console
    config.always_fail = config.always_fail || false // alway render failed component
    config.simulate_lag = config.simulate_lag || 0 // set a timeout to simulate network lag
    config.singleton = config.singleton || false // return first element of fetched data array

    /**
     * The returned HOC Fetching component
     * @param {object} props
     * @param {string} props.url - the url to fetch
     * @param {string} props.getFunc - the fetching function
     * @param {number} [props.timeout=0] - how many ms to declare timed out condition
     * @param {object} [props.url_config] - config to be passed to getFunc
     * @param {function} [props.onFetched] - onFetched(response)
     * @param {function} [props.onFailed] - onFailed(error)
    */
    class WithFetcher extends React.Component {

        static propTypes = {

            //req
            url: PropTypes.string.isRequired,
            getFunc: PropTypes.func.isRequired,

            //default reqs
            timeout: PropTypes.number.isRequired,

            //optional
            url_config: PropTypes.object,
            onFetched: PropTypes.func,
            onFailed: PropTypes.func,
        }

        static defaultProps = {
            timeout: 0,

        }

        _initialState() {
            return {
              data : null,
              response: null,
              fetched: false, 
              timed_out: false,
              has_error: config.always_fail || false,
            }
        }

        constructor(props) {
            super(props)
            this.state = this._initialState()
        }

        componentDidMount() {
            config.debug && config.log('withFetcher: mounted')
            this._fetch()
        }

        componentDidUpdate(newprops) {
            config.debug && config.log('withFetcher: did update')
            //XXX this kind of nasty to test equality of config
            //    Is there a better way?
            if (!this.props.url === newprops.url || !equal(this.props.url_config, newprops.url_config)) {
                this.setState(this._initialState())
                this._fetch()
            }
        }

        _fetch() {
            config.debug && config.log('withFetcher: fetch')
            if (this.props.timeout) {
                // set the clock to timeout
                setTimeout( () => { 
                    config.debug && config.log('withFetcher: timed out')
                    if (!this.state.fetched) {
                        this.setState(
                            {timed_out: true }
                        )
                    }
                }, this.props.timeout)
            }

            const x = () => {
                const config = this.props.url_config || {}
                this.props.getFunc(this.props.url, config)
                    .then(response => this._onFetched(response))
                    .catch(error => { 
                        config.debug && config.log('withFetcher: caught error'), 
                            this.setState({has_error:true, error:error})
                        this.props.onFailed && this.props.onFailed(error)
                    })
            }

            if (config.simulate_lag) 
                setTimeout( () => {x()}, config.simulate_lag)
            else
                x()
        }

        _onFetched(response) {
            config.debug && config.log('withFetcher: onFetched')

            const {data, ...pruned_response } = response
            this.setState({ 
                data : data,
                response: pruned_response,
                fetched : true,
            })
            this.props.onFetched && this.props.onFetched(response.data)
        }

        render() {
            config.debug && config.log('withFetcher: render', 'fetched:', this.state.fetched)

            var data = this.state.data
            if (config.singleton) {
                if (data)
                    data = data[0]
            }

            const {url, getFunc, timeout, onFetched, onFailed, //eslint-disable-line no-unused-vars
                url_config, ...other_props } = this.props //eslint-disable-line no-unused-vars

            if (this.state.has_error)
                return  config.Failed ? <config.Failed error={this.state.error} {...other_props} /> : null 
            else if (this.state.timed_out)
                return  config.TimedOut ? <config.TimedOut {...other_props} />  : null 
            else if (!this.state.fetched) {
                return  config.Loading ? <config.Loading {...other_props} /> : null 
            } else {
                return (
                    <Success 
                        response={this.state.response} 
                        data={data}
                        {...other_props}
                    />
                )
            }
        }
    }

    WithFetcher.displayName = `WithFetcher(${getDisplayName(Success)})`;
    return  WithFetcher
}

export default withFetcher
