const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
const manaAvailable = mage.mana - 15;

const mageDamage = () => { 
  const damage = mage.intelligence * 2;
  const number = Math.round(Math.random() * damage);
  if (manaAvailable < 15) {    
    return 'Não possui mana suficiente!'
  } else if (number >= mage.intelligence|| number <= damage) {
    return number;
  }
}


const damageMana = (funcDamage, funcMana) => {
  const manaSpent = {
    damage: funcDamage,
  }
}

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const warriorDamage = () => { 
  const damage = warrior.strength * warrior.weaponDmg;
  const number = Math.round(Math.random() * damage);
  if (number >= warrior.strength || number <= damage) {
    return number;
  }
}


const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};


const dragonDamage = () => {  
  const number = Math.round(Math.random() * dragon.strength)
  if (number >= 15 || number <= dragon.strength) {
    return number;
  }
}

const battleMembers = { mage, warrior, dragon };

const warriorTurn = () => {
  const warriorTurnDamage = warriorDamage();
  const dragonLife = {
    healthPoints: 350 - warriorTurnDamage,
    strength: 50,
    damage: warriorTurnDamage,
  };

  const warriorNewDamage = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: warriorDamage(),
  }
  const newDragonLife = Object.assign(dragon, dragonLife);
  const newWarriorDam = Object.assign(warrior, warriorNewDamage);

}

const mageTurn = () => {
  const mageDam = mageDamage()
  const dragonLifeNew = {
    healthPoints: 350 - mageDam,
    strength: 50,
    damage: undefined,
  };
  const mageNew = {
    healthPoints: 130,
    intelligence: 45,
    mana: manaAvailable,
    damage: undefined,
  };
  const newDragonLife = Object.assign(dragon, dragonLifeNew);
  const newMageDam = Object.assign(mage, mageNew);
  
}

const dragonTurn = () => {
  const dragonDam = dragonDamage();
  const dragonLifeNew = {
    healthPoints: 350,
    strength: 50,
    damage: dragonDam,
  };
  const mageNew = {
    healthPoints: 130 - dragonDam,
    intelligence: 45,
    mana: manaAvailable,
    damage: mageDamage(),
  };
  const warriorNewDamage = {
    healthPoints: 200 - dragonDam,
    strength: 30,
    weaponDmg: 2,
    damage: warriorTurn(),
  }
  const newDragonLife = Object.assign(dragon, dragonLifeNew);
  const newMageDam = Object.assign(mage, mageNew);
  const newWarriorDam = Object.assign(warrior, warriorNewDamage);

};

const gameActions = {
  
  warriorTurn: warriorTurn(),
  mageTurn: mageTurn(),
  dragonTurn: dragonTurn(),  
   returnObject: () => {
     console.log(Object.assign(battleMembers, this));
  }
};

console.log(gameActions.returnObject())