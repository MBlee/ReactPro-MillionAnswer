// import {createStore} from 'redux'
import reducers from './reducer'


import {createStore,compose} from 'redux'
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers();
const store = createStore(reducers, enhancer);

// const store = createStore(reducers)

export default store
