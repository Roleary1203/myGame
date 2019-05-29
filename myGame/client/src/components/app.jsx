import React from 'react';
import LoginScreen from './login.jsx';
import Inn from './inn.jsx';
import HeroSelect from './heroSelect.jsx';
import CreateHero from './createHero.jsx';
import DeleteHero from './deleteHero.jsx';
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
      currEnemy: {},
      heroStats: {},
      heroes: [],
			showLogin: false,
			showInn: false,
			showHeroSelect: false,
			showCreateHero: false,
      showDeleteHero: false,
      showCreateAccount: false,
      showTitle: true,
      showAdventure: false,
      showBattle: false,
      showVictory: false,
      endDemo: false
		}
	}

  //enemy XP = (Char Level * 5) + 45
  //hero xp = (Math.floor(266.7 * 1.5) * level

  endDemo() {
    this.setState({
      endDemo: true,
      currHero: {}
    })
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

  createHero(newHero) {
     fetch('/newHero', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHero)
    })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.log('CAUGHT', err))
  }

  deleteHero(hero) {
    fetch('/deleteHero/', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hero)
    })
    .then(response => response.json())
    .then(data => console.log(data))

    this.getAllHeroes(this.state.currAcc[0].accountName);
    this.setState({
      showDeleteHero: false,
      showHeroSelect: true
    })
  
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
    console.log('select:', hero)
      this.setState({
      currHero: hero,
      heroStats: helpers.heroStats(hero),
      showHeroSelect: false,
      showInn: true,
      currEnemy: helpers.enemies(hero.chapter, hero.subChapter)
    })
  } 

  newEnemy() {
    this.setState({
      currEnemy: helpers.enemies(this.state.currHero.chapter, this.state.currHero.subChapter)
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
    this.getAccount(newAccount);
    this.getAllHeroes(accName);

    this.setState({
      showCreateAccount: false,
      showHeroSelect: true,
    })
  }

   handleCreateHero(e) {
   let acc = this.state.currAcc[0].accountName;
   console.log(acc)
   //get data from form
    let data = new FormData(e.target);
    let name = data.get('name')
    let role = data.get('role')
    console.log(name + ', ' + role)
    let newHero = {
      name,
      role,
      acc
    }

   
   this.createHero(newHero);
   this.getAllHeroes(acc);
   
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

  updateHeroResource(amount) {
    this.setState({
      heroStats: {
        health: this.state.heroStats.health,
        attackDamage:this.state.heroStats.attackDamage,
        resourceType: this.state.heroStats.resourceType,
        resource: this.state.heroStats.resource + amount
      }
    })
  }

  updateEnemyHealth(enemyhp, heroad) {
    this.setState({
      currEnemy: {
        name: this.state.currEnemy.name,
        health: enemyhp - heroad,
        attackDamage: this.state.currEnemy.attackDamage,
        bonusXP: this.state.currEnemy.bonusXP
      }
    })
  }

  handleLevelUp() {
    this.setState({
        heroName: this.state.currHero.heroName,
        level: this.state.currHero.level++,
        xp: 0,
        role: this.state.currHero.role,
        chapter: this.state.currHero.chapter,
        subChapter: this.state.currHero.subChapter
    })
  }

  handleSleep() {
    alert("You are fully rested");
    this.setState({
       heroStats: helpers.heroStats(this.state.currHero),
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
      showCreateAccount: false,
      showAdventure: false
    })
  }

  handleGoToHeroSelect() {
    this.setState({
      showCreateHero: false,
      showHeroSelect: true
    })
  }

  handleGoToCreateHero() {
    this.setState({
      showHeroSelect: false,
      showCreateHero: true
    })
  }

  handleGoToDeleteHero() {
    this.setState({
      showHeroSelect: false,
      showDeleteHero: true
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
    console.log(this.state.currEnemy)
    if (this.state.currEnemy.bonusXP === true) {
      this.setState({
        currHero: {
        heroName: this.state.currHero.heroName,
        level: this.state.currHero.level,
        xp: this.state.currHero.xp + ((this.state.currHero.level * 5) + 45) * 4,
        role: this.state.currHero.role,
        chapter: this.state.currHero.chapter,
        subChapter: this.state.currHero.subChapter
      },
      showVictory: true,
      showBattle: false,
      })
    } else {
    this.setState({
      currHero: {
        heroName: this.state.currHero.heroName,
        level: this.state.currHero.level,
        xp: this.state.currHero.xp + (this.state.currHero.level * 5) + 45,
        role: this.state.currHero.role,
        chapter: this.state.currHero.chapter,
        subChapter: this.state.currHero.subChapter
      },
      showVictory: true,
      showBattle: false,
    })
   }
  }

  handleNextChapter() {
    this.setState({
      currHero: {
        heroName: this.state.currHero.heroName,
        level: this.state.currHero.level,
        xp: this.state.currHero.xp,
        role: this.state.currHero.role,
        chapter: this.state.currHero.chapter + 1,
        subChapter: this.state.currHero.subChapter
      }
    })
  }

  handleNextSubChapter() {  
  this.setState({
      currHero: {
        heroName: this.state.currHero.heroName,
        level: this.state.currHero.level,
        xp: this.state.currHero.xp,
        role: this.state.currHero.role,
        chapter: this.state.currHero.chapter,
        subChapter: this.state.currHero.subChapter + 1
      },
      showVictory: false,
      showAdventure: true,
      currEnemy: helpers.enemies(this.state.currHero.chapter, this.state.currHero.subChapter + 1)


    }) 
  }

  render() {
  	return(
      <div>
      	<LoginScreen handleSubmit={this.handleLogin.bind(this)} handleBack={this.handleGoToTitle.bind(this)} showLogin={this.state.showLogin} />
      	<Inn hero={this.state.currHero} heroStats={this.state.heroStats} handleSleep={this.handleSleep.bind(this)} handleLeave={this.handleGoToAdventure.bind(this)} showInn={this.state.showInn} />
      	<HeroSelect handleCreateHero={this.handleGoToCreateHero.bind(this)} handleSelectHero={this.selectHero.bind(this)} handleGoToDeleteHero={this.handleGoToDeleteHero.bind(this)} showHeroSelect={this.state.showHeroSelect} handleBack={this.handleGoToTitle.bind(this)} heroes={this.state.heroes} />
      	<CreateHero handleCreateNewHero={this.handleCreateHero.bind(this)} handleBack={this.handleGoToHeroSelect.bind(this)} showCreateHero={this.state.showCreateHero} />
        <DeleteHero handleDeleteHero={this.deleteHero.bind(this)} heroes={this.state.heroes} showDeleteHero={this.state.showDeleteHero} />
        <CreateAccount handleSubmit={this.handleCreateAcc.bind(this)} handleBack={this.handleGoToTitle.bind(this)} showCreateAccount={this.state.showCreateAccount} />
        <TitleScreen handleCreate={this.handleGoToCreateAcc.bind(this)} handleLogin={this.handleGoToLogin.bind(this)} showTitle={this.state.showTitle} />
        <Adventure nextChapter={this.handleNextChapter.bind(this)} handleFight={this.handleGoToBattle.bind(this)} handleBackToInn={this.handleGoToInn.bind(this)} handleBackToTitle={this.handleGoToTitle.bind(this)} hero={this.state.currHero} enemy={this.state.currEnemy} newEnemy={this.newEnemy.bind(this)} endDemo={this.endDemo.bind(this)} end={this.state.endDemo} showAdventure={this.state.showAdventure}/>
        <Battle handleHeroResource={this.updateHeroResource.bind(this)} handleHeroHealth={this.updateHeroHealth.bind(this)} handleEnemyHealth={this.updateEnemyHealth.bind(this)} handleVictory={this.handleVictory.bind(this)} hero={this.state.currHero} heroStats={this.state.heroStats} enemy={this.state.currEnemy} showBattle={this.state.showBattle} />
        <Victory handleLevelUp={this.handleLevelUp.bind(this)} handleContinue={this.handleNextSubChapter.bind(this)} showVictory={this.state.showVictory} hero={this.state.currHero} enemy={this.state.currEnemy} />
      </div>
  	)
  }
}

export default App;