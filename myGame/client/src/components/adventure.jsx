import React from 'react';

class Adventure extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      chapterCompleted: false,
			spokeWithStranger: false,
		}
		this.handleAccept = this.handleAccept.bind(this);
		this.handleFight = this.handleFight.bind(this);
		this.handleBackToInn = this.handleBackToInn.bind(this);
		this.handleRun = this.handleRun.bind(this);
	}
 

  handleAccept() {
    this.props.nextChapter();
  } 

  handleBackToInn() {
  	this.setState({
  		spokeWithStranger: true
  	})
  	this.props.handleBackToInn();
  }

  handleFight() {
    this.props.newEnemy();
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

    const check = this.props.showAdventure === true;
    const chapter = this.props.hero.chapter;
    const subChapter = this.props.hero.subChapter;

  if (check === true && this.state.spokeWithStranger === false && chapter === 0) {
  	return (
      //intro quest
    <div>
      <p> Cloaked Stranger: Hello there, you look like you can help me and this village. You are new here but I must tell you there is an evil lizard monster that lives not to far from here.</p>
      <p> He and his minions are a terror. I was wondering if you think you could go and stop this monster once and for all?</p>
      <p> Just follow that path and you will eventually find him. Return to me here if you are able to defeat him. Thank you and good luck stranger.</p>
      
      <button onClick={this.handleAccept}> Accept and follow path</button>
      <button onClick={this.handleBackToInn}> Back to Inn </button>
    </div>
  	)
  } else if (check === true && chapter === 1 && subChapter === 1) {
  	return (
      //begin chapter 1
      <div>
      <h3>CHAPTER 1: Stopping the Lizard</h3>
      <p> {`${this.props.enemy.name}: You have entered the lizard kings territory!! You will never leave!! ARGRgRGRGGrrgRG`} </p>
      <button onClick={this.handleFight}>Fight</button>
      <button onClick={this.handleRun}>Run</button>
      </div>
  	)
  } else if (check === true && this.state.spokeWithStranger === true) {
  	return(
      //if didnt accept intro
  		<div>
    <p> Cloaked Stranger: Hello again, I hope you are now able to help me now. He is still up the path and needs to be stopped.</p>
    <p> Please, will you now go and put an end to his evil reign? </p>

      <button onClick={this.handleAccept}> Accept and follow path</button>
      <button onClick={this.handleBackToInn}> Back to Inn </button>
      </div>
    )
  } else if (check === true && chapter === 1 && subChapter === 2) {
    return (
      <div>
      <h3>CHAPTER 1: Stopping the Lizard</h3>
      <p> {`${this.props.enemy.name}: WHERE ONE FALLS ANOTHER WILL RISE!!!! FOR THE LIZARD KING!!!!`} </p>
      <button onClick={this.handleFight}>Fight</button>
      <button onClick={this.handleRun}>Run</button>
      </div>
    )
  } else if (check === true && chapter === 1 && subChapter === 3) {
      return (
      <div>
      <h3>CHAPTER 1: Stopping the Lizard</h3>
      <p> {`${this.props.enemy.name}: I'll kill you in one swift strike...`} </p>
      <button onClick={this.handleFight}>Fight</button>
      <button onClick={this.handleRun}>Run</button>
      </div>
      )
  } else if (check === true && chapter === 1 && subChapter === 4) {
      return (
      <div>
      <h3>CHAPTER 1: Stopping the Lizard</h3>
      <p> {`${this.props.enemy.name}: You wont get by me. I give my life to protect the king!!`} </p>
      <button onClick={this.handleFight}>Fight</button>
      <button onClick={this.handleRun}>Run</button>
      </div>
      )
  } else if (check === true && chapter === 1 && subChapter === 5) {
     return (
      <div>
      <h3>CHAPTER 1: Stopping the Lizard</h3>
      <p> {`${this.props.enemy.name}: You....you have slain my best men, I will show you true strength! Die by my hand you puny softskin!!`} </p>
      <button onClick={this.handleFight}>Fight</button>
      <button onClick={this.handleRun}>Run</button>
      </div>
      )
   } else return null;
}
}



export default Adventure;