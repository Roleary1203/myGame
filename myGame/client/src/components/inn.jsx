import React from 'react';

const inn = (props) => {

	 var tableStyle = {
       "border": "1px solid black",
       "width": "333px",
    };

if (props.showInn === true) {
		return (
		<div>
		<p>Greetings Traveler, how can I assist you?</p>
		<button>Sleep</button>
		<button>Buy</button>
		<button>Leave</button>
        <h3> Your Hero </h3>
		<table style={tableStyle}>
		<tbody>
        <tr>
          <th>HERO</th>
          <th>ROLE</th> 
          <th>LEVEL</th>
        </tr>
        <tr>
          <td>{props.hero.heroName}</td>
          <td>{props.hero.role}</td>
          <td>{props.hero.level}</td>
        </tr>
        </tbody>
        </table>

		</div>
	  )
	}
	else return null;
}

export default inn;