import React from 'react';

class Adress extends React.Component {
  render () {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length === 0) error = 'Digite um endereço válido'

    return (
      <label>
        Endereço Completo
        <input 
          type="text" 
          name="adress" 
          value={value}
          onChange={handleChange}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Adress;