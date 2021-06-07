import React, { Component }from 'react';
import './App.css';
import Loading from './Loading';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userName: '',
      userLastName: '',
      userEmail: '',
      userPhoto: '',
      loading: false
    }
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(_a, b) {
    return b.age < 50
  }

async fetchApi() {
  this.setState( { loading: true },
    async () => {
      const requestReturn = await fetch('https://api.randomuser.me/')
      const requestObject = await requestReturn.json();
      this.setState({
      loading: false,
      userName: requestObject.results[0].name.first,
      userLastName: requestObject.results[0].name.last,
      userEmail: requestObject.results[0].email,
      userPhoto: requestObject.results[0].picture.large,
      age: requestObject.results[0].dob.age
  })
  })  
 }

 render() {
    const { loading, userEmail, userLastName, userName, userPhoto } = this.state;
    return (
      <div className="App">
        { loading === true 
        ? <Loading /> 
        : <div> 
          <p>{userName}</p>
          <p>{userLastName}</p>
          <p>{userEmail}</p>
          <img src={userPhoto} alt={userName} />
          </div>          
          }
      </div>
    );
  }
}

export default App;