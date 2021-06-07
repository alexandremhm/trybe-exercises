import React from 'react';
import Data from './Data';

class FieldSetOne extends React.Component {
  render () {
    const { state, handleJob, toUpper, handleSpecialCarac, startsWithNumber } = this.props
    return (
      <fieldset>
            <label>
              Nome Completo
              <input type="text" maxLength="40" name="nome" required onChange={(event) => {toUpper(event)} } value={ state.nome }/>
            </label>
            <label>
              Email
              <input type="email" maxLength="50" name="email" required  onChange={ handleJob } value={ state.email } />
            </label>
            <label>
              CPF
              <input type="text" maxLength="11" name="cpf" required  onChange={ handleJob } value={ state.cpf }/>
            </label>
            <label>
              Endereço
              <input type="text" maxLength="200" name="endereco" required  onChange={ (event) => {handleSpecialCarac(event)}} value={ state.endereco }/>
            </label>
            <label>
              Cidade
              <input type="text" maxLength="28" name="cidade" required  onBlur={startsWithNumber} onChange={ handleJob } value={ state.cidade }/>
            </label>
            <label>
              Estado
              <select name='estado'  onChange={ handleJob } value={ state.estado }>
                {Data.map((state, index) => (
                  <option key={index} name={state}>{state}</option>
                ))}
              </select>
            </label>
            <label>
              Moradia
              <input name="moradia" type="radio"  onChange={ handleJob } value='Casa'/> Casa
              <input name="moradia" type="radio"  onChange={ handleJob } value='Apartamento'/> Apartamento
            </label>
          </fieldset>
    )
  }
}

export default FieldSetOne;