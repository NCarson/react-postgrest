
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import FetchOne from './FetchOne'
//import Location from './Location'

const Item = (props) => {return(
    <li>{props.name}</li>
)}
Item.propTypes = {
        name: PropTypes.string.isRequired,
}

const FetchData = (props) => {return(
    <div>
        <h3>loaded .... :)</h3>
        <ul>
            { props.data.map(item => {
                item.key=item.id; 
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

const FetchError = () => {return(
    <div>
        <h3>Error :(</h3>
    </div>
)}

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

export default class App extends React.Component {
  render() { return (
      <div className='fetch-page'>
          <h2><a href='/App.js'>app source</a></h2>
          <FetchTest title='normal'>
                <FetchOne 
                    component={FetchData} 
                    href='https://api.chessindex.org/v_opening_name_agg?limit=10'
                    timeout={3000}
                    loaded_component={FetchLoad}
                    timed_out_component={FetchTimedOut}
                    errored_out_component={FetchError}
                />
          </FetchTest>
          <FetchTest title='bad url'>
                <FetchOne 
                    component={FetchData} 
                    href='https://chessindex.org/v_opening_name_agg?limit=10'
                    loaded_component={FetchLoad}
                    timed_out_component={FetchTimedOut}
                    errored_out_component={FetchError}
                />
          </FetchTest>
          <FetchTest title='time out in 3 secs'>
                <FetchOne 
                    component={FetchData} 
                    href='https://api.chessindex.org/v_opening_name_agg?limit=10'
                    timeout={3000}
                    loaded_component={FetchLoad}
                    timed_out_component={FetchTimedOut}
                    errored_out_component={FetchError}
                    _simulate_lag={10000}
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

