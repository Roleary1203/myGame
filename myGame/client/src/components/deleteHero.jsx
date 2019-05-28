import React from 'react';

const deleteHero = (props) => {

	const handleSelectHero = (e) => {
      var hero = JSON.parse(e.currentTarget.getAttribute('hero'));
      console.log(hero);
      props.handleDeleteHero(hero);
	}


	if (props.showDeleteHero === true) {
		return (
          <div>
          <h3>Choose a Hero to delete</h3>
			<ul>
		      {props.heroes.map((hero,index) => {
              return <li key={index}><button hero={JSON.stringify(hero)} onClick={handleSelectHero}>{hero.heroName + ' level ' + hero.level + ' ' + hero.role}</button></li>
                })
              }
            </ul>
          </div>
		)
	} else return null;
}

export default deleteHero;