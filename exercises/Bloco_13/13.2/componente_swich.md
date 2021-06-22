Dada a URL atual da aplicação, o Switch procura de cima para baixo pelo primeiro Route que possuir correspondência entre seu caminho definido na prop path do componente e a URL atual da aplicação. Ou seja, se tivermos um Switch com as rotas abaixo:

```javascript
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/movies" component={Movies} />
  <Route path="/" component={Home} />
</Switch>
```

Ao mudarmos a URL da aplicação para que seu caminho seja /contact , somente o componente Contact será renderizado.
Todos os filhos de um Switch devem ser Route ou Redirect . Apenas o primeiro filho que corresponder ao local atual será renderizado. Se não houvesse o Switch mais de um componente poderia ser renderizado na mesma rota de forma errada.