import React from 'react';
import LoginScreen from './login.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLogin: true
		}
	}
  render() {
  	return(
      <div>
      	<LoginScreen showLogin={this.state.showLogin} />
      </div>
  	)
  }
}

export default App;