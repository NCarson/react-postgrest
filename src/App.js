import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle} from 'reactstrap';
//import SyntaxHighlighter from 'react-syntax-highlighter';
//import { docco } from 'react-syntax-highlighter/styles/hljs';
import Highlight from 'react-highlight'

//https://stackoverflow.com/questions/17379891/how-to-require-text-files-with-browserify


import Demo, {props as P} from 'react-demo'

import withFetcher from './withFetcher'
import PGFetcher from './PostgrestFetcher'


const Item = (props) => {return(
    <li>{props.i}</li>
)}
Item.propTypes = {
        i: PropTypes.number.isRequired,
}

const FetchSuccess = (props) => {return(
    <div className='fetch-wrapper'>
        <h3>loaded .... :)</h3>
        <ul>
            { props.data.map(item => {
                item.key=item.i; 
                return React.createElement(Item, item)}
            )}
        </ul>
    </div>
)}
FetchSuccess.propTypes = { 
    data: PropTypes.object.isRequired, 
    response: PropTypes.object.isRequired, 
}

const FetchLoading = () => {return(
    <div className='fetch-wrapper'>
        <h3>loading .... :|</h3>
    </div>
)}

const FetchTimedOut = () => {return(
    <div className='fetch-wrapper'>
        <h3>data server timed out :/</h3>
    </div>
)}

const FetchFailed = (props) => {return(
    <div className='fetch-wrapper'>
        <h3>failed! {props.error && props.error.status} :(</h3>
    </div>
)}
FetchFailed.propTypes = { 
    error: PropTypes.object.isRequired,
}

const Fetcher = withFetcher(FetchSuccess, FetchLoading, FetchFailed, FetchTimedOut)
const EmptyFetcher = withFetcher(FetchSuccess)
const get = new PGFetcher().get

const host = 'https://postgrest-test.chessindex.org'
const href = host + '/testing?limit=5'
const bad_href = host + '/not_exist'


const DemoFetcher = (props) => {return(
    <Fetcher
        get={get}
        {...props}
    />
)}

const DemoEmptyFetcher = (props) => {return(
    <EmptyFetcher
        get={get}
        {...props}
    />
)}

class MyDemo extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className='mydemo=wrapper'>
          <Card>
            <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <Demo
                      target={this.props.target}
                      props={this.props.props}
                />
            </CardBody>
          </Card>
      </div>
    );
  }
}

const source = `

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle} from 'reactstrap';

import Demo, {props as P} from 'react-demo'

import withFetcher from './withFetcher'
import PGFetcher from './PostgrestFetcher'


const Item = (props) => {return(
    <li>{props.i}</li>
)}
Item.propTypes = {
        i: PropTypes.number.isRequired,
}

const FetchSuccess = (props) => {return(
    <div className='fetch-wrapper'>
        <h3>loaded .... :)</h3>
        <ul>
            { props.data.map(item => {
                item.key=item.i; 
                return React.createElement(Item, item)}
            )}
        </ul>
    </div>
)}

FetchSuccess.propTypes = { data: PropTypes.object.isRequired, }

const FetchLoading = () => {return(
    <div className='fetch-wrapper'>
        <h3>loading .... :|</h3>
    </div>
)}

const FetchTimedOut = () => {return(
    <div className='fetch-wrapper'>
        <h3>data server timed out :/</h3>
    </div>
)}

const FetchFailed = (props) => {return(
    <div className='fetch-wrapper'>
        <h3>failed! {props.error && props.error.status} :(</h3>
    </div>
)}
FetchFailed.propTypes = { 
    error: PropTypes.object.isRequired,
}

const Fetcher = withFetcher(FetchSuccess, FetchLoading, FetchFailed, FetchTimedOut)
const EmptyFetcher = withFetcher(FetchSuccess)
const get = new PGFetcher().get

const DemoFetcher = (props) => {return(
    <Fetcher
        get={get}
        {...props}
    />
)}

const DemoEmptyFetcher = (props) => {return(
    <EmptyFetcher
        get={get}
        {...props}
    />
)}
`


ReactDOM.render(
    <div className='demo-page'>
        <MyDemo
              title='Normal'
              target={DemoFetcher}
              props={{
                  url: P.string(href),
                  onFetched: P.callback.log(),
                  _simulate_lag: P.number(1000),
              }}
        />
        <MyDemo
              title='Timed Out'
              target={DemoFetcher}
              props={{
                  url: P.string(href),
                  timeout: P.number(3000),
                  _simulate_lag: P.number(10000),
              }}
          />
        <MyDemo
              title='Empty Optional Components'
              target={DemoEmptyFetcher}
              props={{
                  url: P.string(href),
                  onFetched: P.callback.log(),
                  _simulate_lag: P.number(1000),
              }}
        />
        <MyDemo
              title='Fails'
              target={DemoFetcher}
              props={{
                  url: P.string(bad_href),
                  onError: P.callback.log(),
                  _always_fail: P.bool(true),
              }}
        />
        

        <Highlight className='javascript'>{source}</Highlight>
    </div>

    , document.querySelector('#app')
);

