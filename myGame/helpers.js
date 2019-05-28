const helpers = {

	heroStats: (hero) => {
	var heroStats = {};

  if (hero.role === 'warrior') {
  	heroStats = {
  		health: 25 + (5 * hero.level),
  		attackDamage: 3 + (2 * hero.level),
      resourceType: 'Rage',
      resource: 0
      }
  	} 

  	else if (hero.role === 'mage') {
  	  heroStats = {
  		health: 10 + (3 * hero.level),
  		attackDamage: 5 + (4 * hero.level),
      resourceType: 'Mana',
      resource: 100
      }
  	} 

  	else if (hero.role === 'assassin') {
      heroStats = {
      	health: 15 + (4 * hero.level),
      	attackDamage: 4 + (3 * hero.level),
        resourceType: 'Energy',
        resource: 0
      }
  	}
  return heroStats;
},

  enemies: (chapter, subchapter) => {
    var enemy = {};

    if ((chapter === 0 || 1) && subchapter === 1) {
      enemy = {
        name: "lizard man",
        health: 15,
        attackDamage: 2
      }
    }

    else if (chapter === 1 && subchapter === 2) {
      enemy = {
        name: "lizard warrior",
        health: 20,
        attackDamage: 2
      }
    }

    else if (chapter === 1 && subchapter === 3) {
      enemy = {
        name: "lizard assassin",
        health: 15,
        attackDamage: 4
      }
    }

    else if (chapter === 1 && subchapter === 4) {
      enemy = {
        name: "Lizard King's guard",
        health: 25,
        attackDamage: 3
      }
    }

    else if (chapter === 1 && subchapter === 5) {
      enemy = {
        name: "Lizard King",
        health: 30,
        attackDamage: 4,
        bonusXP: true
      }
    }
    return enemy;
  }

}

export default helpers;