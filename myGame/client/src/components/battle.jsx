import React from 'react';

class Battle extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			turn: 'player',
			turnNum: 0,
			combatText: []

		}
		this.handleAttack = this.handleAttack.bind(this);
	}

	checkEnemyHealth() {
		//if enemy dies
  	if (this.props.enemy.health <= 0) {
  		this.state.combatText.push(`enemy dies`);
  		this.setState({
  			combatText: this.state.combatText
  		})
  		alert(`${this.props.enemy.name} has been defeated`);
  		this.props.handleVictory();
      this.setState({
        turn: 'player',
        turnNum: 0,
        combatText: []
      })
      return true
  	} else {
      return false
    }
	}


  handleAttack() {
  	var enemyhp = this.props.enemy.health;
  	var enemyad =this.props.enemy.attackDamage;
  	var herohp = this.props.heroStats.health;
  	var heroad = this.props.heroStats.attackDamage;
    //player attack
    this.state.combatText.push(`You attack the enemy for ${heroad} damage.`);
    this.props.handleEnemyHealth(enemyhp,heroad);
  	this.setState({
  		turn: 'enemy',
  		turnNum: this.state.turnNum ++,
  		combatText: this.state.combatText
  	})

    //enemy attack
  	setTimeout(() => {
  		if (this.checkEnemyHealth() === true) {
        return null;
      } else {
        
        this.state.combatText.push(`The enemy attacks you for ${enemyad} damage.`)
        this.props.handleHeroHealth(herohp,enemyad);
        this.setState({
          turn: 'player',
          turnNum: this.state.turnNum ++,
          combatText: this.state.combatText
        })
      }


  	 }, 5000);

  }

	render() {
	if (this.props.showBattle === true) {
		return (
			<div>
         <div>
         <p>{"Current Turn: " + this.state.turn}</p>
       <h1> {this.props.hero.heroName}</h1>
       <h3> {"Health " + this.props.heroStats.health}</h3>
       <h3> {this.props.heroStats.resourceType + " " + this.props.heroStats.resource} </h3>
       <h3> {"Damage " + this.props.heroStats.attackDamage} </h3>
       <button disabled={this.state.turn === 'enemy'} onClick={this.handleAttack}>Attack</button>
       <button disabled={this.state.turn === 'enemy'} onClick={this.handleSpecial}>Special Attack</button>
         </div>
         <div>
         <h1> {this.props.enemy.name} </h1>
         <h3> {"Health " + this.props.enemy.health}</h3>
         </div>
         <div>
         {this.state.combatText.map((text,index) => {
         	return <p key={index}>{text}</p>
         })}
         </div>
         </div>
       
		)
	} else return null;
  }
}


export default Battle;
