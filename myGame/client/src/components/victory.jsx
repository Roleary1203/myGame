import React from 'react';

const victory = (props) => {
//enemy XP = (Char Level * 5) + 45
//hero xp = (Math.floor(266.7 * 1.5) * level
	const checkLevel = () => {
		if (props.hero.xp >= Math.floor(266.7 * 1.5) * props.hero.level) {
			props.handleLevelUp();
			return <p> {`You gained a level!! You are now level ${props.hero.level}`}!!!</p>
		} else {return null}
    }

    const handleContinue = () => {
    	props.handleContinue();
    }
    
	if (props.showVictory === true) {
    return(
      <div>
      <p>You defeated an enemy!!</p>
      <p>{`You gained ${(props.hero.level* 5) + 45} xp`}</p>
         {checkLevel()}
      <p>You plundered 1 gold</p>
      <button onClick={handleContinue}>Continue</button>
      </div>

	)
  } else return null;
}

export default victory;