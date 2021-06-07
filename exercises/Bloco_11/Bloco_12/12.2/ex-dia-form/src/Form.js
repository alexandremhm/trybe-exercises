import React from "react";
import FieldSetOne from './Fieldset1';
import FieldSetTwo from './Fieldset2'

const initialState  = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  moradia: '',
  resumo: '',
  cargo: '',
  descCargo: '',
  Abstract: '',
}

class Form extends React.Component {
  constructor () {
    super ();
    this.state = initialState
    this.handleJob = this.handleJob.bind(this)
    this.toUpper = this.toUpper.bind(this)
    this.handleSpecialCarac = this.handleSpecialCarac.bind(this)
    this.submitBtn = this.submitBtn.bind(this)
    this.eraseForm = this.eraseForm.bind(this)
    this.startsWithNumber = this.startsWithNumber.bind(this)
  }

  handleJob({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  } 

  toUpper ({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: value.toUpperCase(),
    });    
  }

  handleSpecialCarac ({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: value.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ''),
    });    
  }


submitBtn () {
  this.setState({
    Abstract: Object.keys(this.state).map((value, index) => <p key={index}>{value}: {this.state[value]}</p>)
    ,
  });
}

eraseForm () {
  this.setState(initialState)
}

startsWithNumber ({ target }) {
  const { name, value } = target;
  if (/^[0-9]/.test(value)) {
    this.setState({
      [name]: ''
    })
  }
}

  render() {
    
    return (
      <div>
        <form>
          <FieldSetOne state={this.state} startsWithNumber={ this.startsWithNumber }handleSpecialCarac = {this.handleSpecialCarac} toUpper = {this.toUpper} handleJob={this.handleJob} />
          <FieldSetTwo state={this.state} handleJob={this.handleJob} />    
        </form>
        <button type='submit' onClick={this.submitBtn}>Enviar</button>
        <div>
          <h1>Resumo do Curriculo</h1>
          { this.state.Abstract }
        </div>
        <button onClick={ this.eraseForm }>Limpar</button>        
      </div>
    );
  }
}

export default Form;
