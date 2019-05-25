import React from 'react';

class Adventure extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			accept: false,
			spokeWithStranger: false
		}
		this.handleAccept = this.handleAccept.bind(this);
		this.handleFight = this.handleFight.bind(this);
		this.handleBackToInn = this.handleBackToInn.bind(this);
		this.handleRun = this.handleRun.bind(this);
	}
 

  handleAccept() {
  	this.setState({
  		accept: true
    })
  } 

  handleBackToInn() {
  	this.setState({
  		spokeWithStranger: true
  	})
  	this.props.handleBackToInn();
  }

  handleFight() {
  	this.props.handleFight();
  }

  handleRun() {
  	let roll = Math.floor(Math.random() * 100)+ 1
    console.log(roll)
  	if (roll <= 25) {
  		alert('You failed to run away!')
  		this.props.handleFight();
  	} else {
  		this.props.handleBackToInn();
  	}
  }

  render() {

  if (this.props.showAdventure === true && this.state.spokeWithStranger === false && this.state.accept === false) {
  	return (
    <div>
      <p> Cloaked Stranger: Hello there, you look like you can help me and this village. You are new here but I must tell you there is an evil lizard monster that lives not to far from here.</p>
      <p> He and his minions are a terror. I was wondering if you think you could go and stop this monster once and for all?</p>
      <p> Just follow that path and you will eventually find him. Return to me here if you are able to defeat him. Thank you and good luck stranger.</p>
      
      <button onClick={this.handleAccept}> Accept and follow path</button>
      <button onClick={this.handleBackToInn}> Back to Inn </button>
    </div>
  	)
  } else if (this.props.showAdventure === true && this.state.accept === true) {
  	return (
      <div>
      <h3>QUEST 1: Stopping the Lizard</h3>
      <p> Lizard man: You have entered the lizard kings territory!! You will never leave!! ARGRgRGRGGrrgRG </p>
      <button onClick={this.handleFight}>Fight</button>
      <button onClick={this.handleRun}>Run</button>
      </div>
  	)
  } else if (this.props.showAdventure === true && this.state.spokeWithStranger === true) {
  	return(
  		<div>
    <p> Cloaked Stranger: Hello again, I hope you are now able to help me now. He is still up the path and needs to be stopped.</p>
    <p> Please, will you now go and put an end to his evil reign? </p>

      <button onClick={this.handleAccept}> Accept and follow path</button>
      <button onClick={this.handleBackToInn}> Back to Inn </button>
      </div>



  	)
  } else return null;
}
}



export default Adventure;