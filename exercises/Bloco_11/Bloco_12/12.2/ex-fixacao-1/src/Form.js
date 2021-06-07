import React from "react";
import AboutYou from './AboutYou.js'
import Adress from './Adress.js'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      aboutYou: '',
      age: 0,
      adress: '',
      moradia: '',
      noticias: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Tipo de moradia
            <select 
            name="moradia"
            value={this.state.moradia}
            onChange={this.handleChange}
            >
              <option>Casa</option>
              <option>Apartamento</option>
            </select>
          </label>
          <Adress value={ this.state.adress } handleChange={ this.handleChange } />
          <label>
            Idade
            <input 
            type="number" 
            name="age" 
            value={this.state.age}
            onChange={this.handleChange}
            />
          </label>
          <AboutYou value={ this.state.aboutYou } handleChange={ this.handleChange }/>
          <label>
            Aceita receber Notícias?
            <input 
            type='checkbox'
            name='noticias'
            value={this.state.noticias}
            onChange={this.handleChange}            
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
