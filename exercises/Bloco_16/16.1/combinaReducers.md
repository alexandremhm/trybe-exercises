Combinando Reducers
Como podemos notar, o Redux auxilia bastante o desenvolvimento do nosso projeto, especialmente quando a aplicação se torna muito complexa.
Imagine que a sua aplicação tenha dezenas de componentes e actions diferentes com lógicas específicas e complicadas. Agora suponha que você precise organizar tudo isso em vários reducers , e pior, depois ainda precise passar todos os reducers para um único store ! :fearful:
O problema que você pode já ter notado é justamente esse, como poderíamos unir vários reducers numa aplicação que, normalmente, possui apenas um store ?
O Redux já possui uma função para resolver isso, a combineReducers() . Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos, por exemplo:

```javascript
// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer});

export default reducerCombinado;
```

Agora basta fazer a sua importação no seu store para a mágica acontecer!
```javascript

import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
...
```