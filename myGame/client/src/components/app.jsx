import React from 'react';
import LoginScreen from './login.jsx';
import Inn from './inn.jsx';
import HeroSelect from './heroSelect.jsx';
import CreateHero from './createHero.jsx';
import CreateAccount from './createAccount.jsx';
import TitleScreen from './titleScreen.jsx';
import Adventure from './adventure.jsx';
import Battle from './battle.jsx';
import Victory from './victory.jsx';
import helpers from '../../../helpers.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      currAcc: '',
      currHero: {},
      heroStats: {},
      heroes: [],
			showLogin: false,
			showInn: false,
			showHeroSelect: false,
			showCreateHero: false,
      showCreateAccount: false,
      showTitle: true,
      showAdventure: false,
      showBattle: false,
      showVictory: false,
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

 getAccount(accInfo) {
    fetch(`/getAccount/${JSON.stringify(accInfo)}`)
    .then(response => response.json())
    .then(data => {
      console.log('data: ', data)
      if (data.length === 0) {
        alert('Account name or password is Incorrect. Please try again.')
        this.setState({
          showHeroSelect: false,
          showLogin: true
        })
      } else {
      this.setState({
        currAcc: data
      })
    }
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

  selectHero(hero) {
      this.setState({
      currHero: hero,
      heroStats: helpers.heroStats(hero),
      showHeroSelect: false,
      showInn: true
    })
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

    this.getAccount(loginAccount);
    this.getAllHeroes(loginAccount.accName);
    
    this.setState({
      showLogin: false,
      showHeroSelect: true,
      currAcc: accName
    })
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

  updateHeroHealth(herohp, enemyad) {
    this.setState({
      heroStats: {
        health: herohp - enemyad,
        attackDamage: this.state.heroStats.attackDamage,
        resourceType: this.state.heroStats.resourceType,
        resource: this.state.heroStats.resource
      }
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

  handleGoToTitle() {
    this.setState({
      showTitle: true,
      showHeroSelect: false,
      showLogin: false,
      showCreateAccount: false
    })
  }

  handleGoToInn() {
    this.setState({
      showInn: true,
      showHeroSelect: false,
      showAdventure: false
    })
  }

  handleGoToAdventure() {
    this.setState({
      showAdventure: true,
      showInn: false
    })
  }

  handleGoToBattle() {
    this.setState({
      showBattle: true,
      showAdventure: false
    })
  }

  handleVictory() {
    this.setState({
      showVictory: true,
      showBattle: false,
    })
  }

  render() {
  	return(
      <div>
      	<LoginScreen handleSubmit={this.handleLogin.bind(this)} handleBack={this.handleGoToTitle.bind(this)} showLogin={this.state.showLogin} />
      	<Inn hero={this.state.currHero} heroStats={this.state.heroStats} handleLeave={this.handleGoToAdventure.bind(this)} showInn={this.state.showInn} />
      	<HeroSelect handleSelectHero={this.selectHero.bind(this)} showHeroSelect={this.state.showHeroSelect} handleBack={this.handleGoToTitle.bind(this)} heroes={this.state.heroes} />
      	<CreateHero showCreateHero={this.state.showCreateHero} />
        <CreateAccount handleSubmit={this.handleCreateAcc.bind(this)} handleBack={this.handleGoToTitle.bind(this)} showCreateAccount={this.state.showCreateAccount} />
        <TitleScreen handleCreate={this.handleGoToCreateAcc.bind(this)} handleLogin={this.handleGoToLogin.bind(this)} showTitle={this.state.showTitle} />
        <Adventure handleFight={this.handleGoToBattle.bind(this)} handleBackToInn={this.handleGoToInn.bind(this)} showAdventure={this.state.showAdventure}/>
        <Battle handleHeroHealth={this.updateHeroHealth.bind(this)} handleVictory={this.handleVictory.bind(this)} hero={this.state.currHero} heroStats={this.state.heroStats} showBattle={this.state.showBattle} />
        <Victory showVictory={this.state.showVictory} />
      </div>
  	)
  }
}

export default App;