import React from 'react';

const victory = (props) => {
	if (props.showVictory === true) {
    return(
      <div>
      <p>You defeated an enemy!!</p>
      <p>You gained 100 xp</p>
      <p>You plundered 1 gold</p>
      <button>Continue</button>
      </div>

	)
  } else return null;
}

export default victory;