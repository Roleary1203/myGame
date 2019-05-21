import React from 'react';

const heroSelect = (props) => {

	const handleSelectHero = (e) => {
      e.preventDefault()
      var hero = JSON.parse(e.currentTarget.getAttribute('hero'));
      //var cloneOfHero = JSON.parse(JSON.stringify(hero));
      console.log(hero);
      //console.log(cloneOfHero);
      props.handleSelectHero(hero);
	}

	const handleCreate = () => {
		console.log('CREATE')
	}

	const handleDelete = () => {
		console.log('DELETE')
	}

	const handleBack = () => {
		props.handleBack();
	}
	if (props.showHeroSelect === true) {
		return (
			<div>
			<ul>
		      {props.heroes.map((hero,index) => {
              return <li key={index}><button hero={JSON.stringify(hero)} onClick={handleSelectHero}>{hero.heroName + ' level ' + hero.level + ' ' + hero.role}</button></li>
                })
              }
            </ul>
			<button onClick={handleCreate}>create</button>
			<button onClick={handleDelete}>delete</button>
			<button onClick={handleBack}>back</button>
			</div>
		)
	}
	else return null;
}

export default heroSelect;

/*
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
*/