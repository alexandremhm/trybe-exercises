import React from 'react';

class FieldSetTwo extends React.Component {
  render () {
    const { state, handleJob } = this.props;
    return (
      <fieldset>
      <label>
        Resumo do Currículo
        <textarea name="resumo" maxLength="1000" required   onChange={ handleJob } value={ state.resumo }/>
      </label>
      <label>
        Cargo
        <input type='text' name="cargo" maxLength="40" required onMouseEnter={() => {
          alert('Preencha com cuidado esta informação.');
        }} onChange={ handleJob } value={ state.cargo }/>
      </label>
      <label>
        Descrição do Cargo
        <textarea name="descCargo" maxLength="500" required  onChange={ handleJob } value={ state.descCargo }/>
      </label>
    </fieldset>
    )
  }
}

export default FieldSetTwo;