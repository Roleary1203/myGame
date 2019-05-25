import React from 'react';

const victory = (props) => {
	if (props.showVictory === true) {
    return(
      <div>
      <p> VICTORY </p>
      </div>

	)
  } else return null;
}

export default victory;