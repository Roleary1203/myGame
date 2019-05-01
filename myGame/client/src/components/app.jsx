import React from 'react';
import LoginScreen from './login.jsx';
import Inn from './inn.jsx';
import HeroSelect from './heroSelect.jsx';
import CreateHero from './createHero.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLogin: false,
			showInn: false,
			showHeroSelect: false,
			showCreateHero: true
		}
	}
  render() {
  	return(
      <div>
      	<LoginScreen showLogin={this.state.showLogin} />
      	<Inn showInn={this.state.showInn} />
      	<HeroSelect showHeroSelect={this.state.showHeroSelect} />
      	<CreateHero showCreateHero={this.state.showCreateHero} />
      </div>
  	)
  }
}

export default App;