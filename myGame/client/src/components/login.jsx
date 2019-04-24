import React from 'react';

const loginScreen = (props) => {

	if (props.showLogin === true) {
		return (
			<div>
			Log IN to PLay The BEST Game EvAR
			</div>
	  )
	}
	else return null;
}

export default loginScreen;