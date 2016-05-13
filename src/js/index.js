import ReactDOM from 'react-dom'
import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'


class Base extends React.Component {
	render(){
		return (
			<div class="main">
            	{this.props.children}
            </div>
        )
	}
}

class Home extends React.Component {
	render(){
		return <span>It works!</span>
	}
}

class NoMatch extends React.Component {
	render(){
		return <h1>404</h1>
	}
}

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={Base}>
    	<IndexRoute component={Home} />
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>),
 	document.getElementById('app')
);