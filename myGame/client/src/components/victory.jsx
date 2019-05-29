import React from 'react';

const victory = (props) => {
//enemy XP = (Char Level * 5) + 45
//hero xp = (Math.floor(266.7 * 1.5) * level
	const checkLevel = () => {
		if (props.hero.xp >= Math.floor(266.7 * 1.5) * props.hero.level) {
			return <p> {`You gained a level!! You are now level ${props.hero.level + 1}`}!!!</p>
		} else {
			return <p>{`You are ${props.hero.xp} / ${Math.floor(266.7 * 1.5) * props.hero.level} from leveling`}</p>
		}
    }

    const checkXP = () => {
    	if (props.enemy.bonusXP === true) {
    		return  <p>{`You gained ${((props.hero.level* 5) + 45) * 4} xp`}</p>
        } else 
            return  <p>{`You gained ${(props.hero.level* 5) + 45} xp`}</p>
    }

    const handleContinue = () => {
    	props.handleContinue();
    }

	if (props.showVictory === true) {
    return(
      <div>
      <p>{`You defeated ${props.enemy.name}!!`}</p>
         {checkXP()}
         {checkLevel()}
      <p>You plundered 1 gold</p>
      <button onClick={handleContinue}>Continue</button>
      </div>

	)
  } else return null;
}

export default victory;