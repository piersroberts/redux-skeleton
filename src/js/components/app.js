import React from 'react'

export default class App extends React.Component {
	render(){
		return <div><header/><main>{this.props.children}</main><footer/></div>
	}
}