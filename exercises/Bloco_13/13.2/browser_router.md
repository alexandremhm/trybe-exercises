Primeiro passo importar o componente browser-router:

```import {BrowserRouter} from 'react-router-dom';```

na classe App fazemos com que o nosso componente principal, aquele que vai conter o caminho para outros componentes, ser envolvido pelo BrowserRouter, dessa maneira o componente Home se torna filho do componente BrowserRouter:

```javascript
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  }
}
```
Agora no componente Home vamos criar a rota para o primeiro componente, About. Para isso, primeiro importamos o route:

```import {Route} from 'react-router-dom'```

Depois utilizamos a seguinte sintaxe:

```javascript
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1> Minha homepage </h1>
        <Route path="/about" component={About} />
      </div>
    )
  }
}
```

O codigo como está causa um problema. O componente Home sempre é renderizado na tela, mas em algumas ocasiões gostaríamos que apenas determinado componente seja renderizado. Para resolver isso vamos colocar todas as rotas dentro do BrowserRouter no App:

primeiro ajustamos nossa importacao do router e adicionamos o import de todos os componentes:

```import {BrowserRouter, Route} from 'react-router-dom'```


```javascript
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    )
  }
}
```

Esta sintaxe como children tambem funciona para o route:

```javascript
    <Route path="/about" >
      <About />
    </Route>
```