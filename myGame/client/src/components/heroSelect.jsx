import React from 'react';

const heroSelect = (props) => {
	if (props.showHeroSelect === true) {
		return (
			<div>
			<ul>
			<li><button>Fruitnut LvL 7 Warrior</button></li>
			<li>Fruitfuzz</li>
			<li>Fruitcup</li>
			<li>Fruitbat</li>
			<li>Fruitsnack</li>
			<li>Fruitcake</li>
			<li>Fruittree</li>
			<li>Fruitjuice</li>
			<li>Fruitsalad</li>
            </ul>
			<button>create</button>
			<button>delete</button>
			<button>back</button>
			</div>
		)
	}
	else return null;
}

export default heroSelect;