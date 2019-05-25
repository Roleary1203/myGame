import React from 'react';

const inn = (props) => {

	const handleLeave = () => {
		props.handleLeave();
	}

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
		<button onClick={handleLeave}>Leave</button>


        <h3> Your Hero </h3>
		<table style={tableStyle}>
		<tbody>
        <tr style={tableStyle}>
          <th>NAME</th>
          <th>ROLE</th> 
          <th>LEVEL</th>
          <th>GOLD</th>
          <th>HEALTH</th>
          <th>ATTACK DAMAGE</th>

        </tr>
        <tr>
          <td>{props.hero.heroName}</td>
          <td>{props.hero.role}</td>
          <td>{props.hero.level}</td>
          <td>0</td>
          <td>{props.heroStats.health}</td>
          <td>{props.heroStats.attackDamage}</td>
        </tr>
        </tbody>
        </table>

		</div>
	  )
	}
	else return null;
}

export default inn;