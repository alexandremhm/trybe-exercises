import React from 'react';

class AboutYou extends React.Component {
  render () {
    const { handleChange, value } = this.props;
    return (
      <label>
        Escreva um pouco sobre você
        <textarea
          name="aboutYou"
          value={value}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default AboutYou;