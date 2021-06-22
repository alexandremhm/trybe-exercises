Passando uma informação via props para ser renderizada:

No componente que vai receber a props, chamamos ela:

```javascript
class Profil extends React.Component {
  render() {
    return (
      <div>
        <h1> Meu perfil: {this.props.name} </h1>
      </div>
    )
  }
}
```

e no componente pai onde esse componente é chamado:


```javascript
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" render={(props) => <Profile {...props} name="Matheus" /> } />
      </BrowserRouter>
    )
  }
}
```

Ao fornecer a props dentro do render, nós fornecemos um array de props contendo props importantes que o router fornece:

O history: traz as informações, o histórico de navegação do usuário. Por exemplo, o usuário navegou pela Home, pela Profile, etc...

O Match: serve para passarmos parametros pela URL e recebermos na nossa aplicação. Podemos por exemplo receber um parâmetro e utilizarmos para fazer uma requisição a uma API.

Para isso, primeiro adicionamos no nosso App, no componente em seu atributo path:

```javascript
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route path="/profile/:ship" component={Profile} />
        <Route exact path="/" render={(props) => <Profile {...props} name="Matheus" /> } />
      </BrowserRouter>
    )
  }
}
```
Desta maneira ao adicionar na URL uma palavra, ela vai ser exibida na tela:

www.algumaURLaqui/shipAqui

O :ship significa que podemos receber qualquer palavra e que ela será recebida via chave ship. Desta maneira no componente em si adicionamos:

```javascript
class Profile extends React.Component {
  render() {
    return (
      <div>
        const {ship} = this.props.match.params
        <h1> Meu perfil: {this.props.name} </h1>
      </div>
    )
  }
}
```
Vamos recapitular o que você aprendeu até aqui:
No que diz respeito ao componente Route , você pode associar um componente com o caminho da URL via children , component ou render ;

Faz-se uso da prop component de Route quando não é necessário passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente About que não precisa de props setadas para ser chamado, e você precisa mapeá-lo para o caminho de URL /about , você poderia criar uma rota da seguinte forma: ```<Route path="/about" component={About} /> ;```

Já a prop render de Route é usada quando é necessário passar informações adicionais via props para o componente a ser mapeado. Ou seja, se você tem um componente Movies que precisa receber uma lista de filmes via props movies , e você precisa mapeá-lo para o caminho de URL /movies , você poderia criar uma rota da seguinte forma: ```<Route path="/movies" render={(props) => <Movies {...props} movies={['Cars', 'Toy Story', 'The Hobbit']} />} /> ;```

Tanto component quanto render permitem que você tenha acesso a informações de rota ( match , location e history ) via props do componente que você está mapeando. Ou seja, se você tem a rota ```<Route path="/about" component={About} /> ```, About terá match , location e history setadas via props.
