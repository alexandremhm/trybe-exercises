Criando um link entre os componentes. Primeiro importamos o link do router:

```import Link from 'react-router-dom';```

Depois criamos o link:

```javascript
class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <h1> Minha homepage </h1>        
      </div>
    )
  }
}
```

depois fazemos o mesmo em ABout para que possamos ter um link de retorno.