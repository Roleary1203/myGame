import React from 'react';

const inn = (props) => {

if (props.showInn === true) {
		return (
		<div>
		<p>Greetings Traveler, how can I assist you?</p>
		<button>Sleep</button>
		<button>Buy</button>
		<button>Leave</button>
		</div>
	  )
	}
	else return null;
}

export default inn;