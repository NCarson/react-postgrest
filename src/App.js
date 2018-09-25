import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import Fetcher from './Fetcher'

const Item = (props) => {return(
    <li>{props.i}</li>
)}
Item.propTypes = {
        i: PropTypes.number.isRequired,
}

const FetchData = (props) => {return(
    <div>
        <h3>loaded .... :)</h3>
        <ul>
            { props.data.map(item => {
                item.key=item.i; 
                return React.createElement(Item, item)}
            )}
        </ul>
    </div>
)}

FetchData.propTypes = { data: PropTypes.object.isRequired, }

const FetchLoad = () => {return(
    <div>
        <h3>loading .... :|</h3>
    </div>
)}

const FetchTimedOut = () => {return(
    <div>
        <h3>data server timed out :/</h3>
    </div>
)}

const FetchError = (props) => {return(
    <div>
        <h3>Error {props.error.status} :(</h3>
    </div>
)}
FetchError.propTypes = { 
    error: PropTypes.string.isRequired,
}

const FetchTest = (props) => {return(
    <div 
        className='fetch-test'
        style={{border: '2px solid blue', padding: '1em', display:'inline-block', margin: '1em', verticalAlign:'top'}}
    >
        <h2
            style={{color: 'blue', padding:'1em'}}
        >
            {props.title}
        </h2>
        {props.children}
    </div>
)}
FetchTest.propTypes = { 
    title: PropTypes.string.isRequired, 
    children: PropTypes.array.isRequired, 
}

const host = 'https://postgrest-test.chessindex.org'
const href = host + '/testing?limit=5'
const bad_href = host + '/not_exist'

export default class App extends React.Component {
  render() { return (

      <div className='fetch-page'>
          <h2><a href='/App.js'>app source</a></h2>
          <FetchTest title='normal'>
                <Fetcher
                    component={FetchData} 
                    href={href}
                    timeout={3000}
                    loading={FetchLoad}
                    timed_out={FetchTimedOut}
                    errored_out={FetchError}
                />
          </FetchTest>
          <FetchTest title='bad url'>
                <Fetcher
                    component={FetchData} 
                    href={bad_href}
                    loading={FetchLoad}
                    timed_out={FetchTimedOut}
                    errored_out={FetchError}
                />
          </FetchTest>
          <FetchTest title='time out in 3 secs'>
                <Fetcher
                    component={FetchData} 
                    href={href}
                    timeout={3000}
                    loading={FetchLoad}
                    timed_out={FetchTimedOut}
                    errored_out={FetchError}
                    _simulate_lag={10000}
                />
           </FetchTest>
           <FetchTest title='empty optional components'>
                <Fetcher
                    component={FetchData} 
                    href={href}
                    _simulate_lag={1000}
                />
           </FetchTest>
        </div>
    )}
}

ReactDOM.render(
    <div>
		<App />
    </div>
    , document.querySelector('#app')
);

