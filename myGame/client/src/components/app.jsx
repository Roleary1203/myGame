import React from 'react';
import LoginScreen from './login.jsx';
import Inn from './inn.jsx';
import HeroSelect from './heroSelect.jsx';
import CreateHero from './createHero.jsx';
import CreateAccount from './createAccount.jsx'
import TitleScreen from './titleScreen.jsx'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      currAcc: '',
      heroes: [],
			showLogin: false,
			showInn: false,
			showHeroSelect: false,
			showCreateHero: false,
      showCreateAccount: false,
      showTitle: true,
		}
	}

  createAccount(newAccount) {
     fetch('/createAccount', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccount)
    })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.log('CAUGHT', err))
  }

 getAccount(accName) {
    fetch(`/getAccount/${accName}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        currAcc: data
      })
      console.log('stateAccount',this.state.currAcc)
    })
    .catch(err => console.log(err))
  }

  getAllHeroes(accName) {
    fetch(`/getHeroes/${accName}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        heroes: data
      })
      console.log('stateheroes',this.state.heroes)
    })
    .catch(err => console.log(err))
  }

  handleLogin(e) {
    console.log('logging in');
     let data = new FormData(e.target);
    let accName = data.get('accName')
    let accPassword = data.get('accPassword')
    console.log(accName + ', ' + accPassword)
    let loginAccount = {
      accName,
      accPassword
    }
  }

  handleCreateAcc(e) {
    console.log('created');
    //get data from form
    let data = new FormData(e.target);
    let accName = data.get('accName')
    let accPassword = data.get('accPassword')
    console.log(accName + ', ' + accPassword)
    let newAccount = {
      accName,
      accPassword
    }

    this.createAccount(newAccount);
    this.getAllHeroes(accName);

    this.setState({
      showCreateAccount: false,
      showHeroSelect: true,
      currAcc: accName
    })
  }

  handleGoToCreateAcc() {
    this.setState({
      showTitle: false,
      showCreateAccount: true
    })
  }

  handleGoToLogin() {
    this.setState({
      showTitle: false,
      showLogin: true
    })
  }

  render() {
  	return(
      <div>
      	<LoginScreen handleSubmit={this.handleLogin.bind(this)} showLogin={this.state.showLogin} />
      	<Inn showInn={this.state.showInn} />
      	<HeroSelect showHeroSelect={this.state.showHeroSelect} heroes={this.state.heroes} />
      	<CreateHero showCreateHero={this.state.showCreateHero} />
        <CreateAccount handleSubmit={this.handleCreateAcc.bind(this)} showCreateAccount={this.state.showCreateAccount} />
        <TitleScreen handleCreate={this.handleGoToCreateAcc.bind(this)} handleLogin={this.handleGoToLogin.bind(this)} showTitle={this.state.showTitle} />
      </div>
  	)
  }
}

export default App;