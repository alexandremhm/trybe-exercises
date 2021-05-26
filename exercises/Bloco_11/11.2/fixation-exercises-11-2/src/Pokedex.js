import React from 'react';
import Pokemon from './Pokemon.js'

class Pokedex extends React.Component{
  render () {
   const { pokeList } = this.props;
    return (
    <div>
      { pokeList.map((item, index) => <Pokemon pokemon={item} key={index}/>) }
    </div>
    )
  }
}

export default Pokedex;