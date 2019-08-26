# Store

The redux store holds the entire state tree of the application. The only way to change a state inside the sotre is to dispatch an action to it. The store is not a class. It's just an object with a few methods on it. 

In the example below we use the function `composeWithDevTools` this is a browser extension for [Chrome extension.](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) The `applyMiddleware(thunk)` is for implementing async logic that interacts with with the redux store, read more about thunk [here.](https://github.com/reduxjs/redux-thunk)

```bash
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
  applyMiddleware(thunk)
));

export default configureStore
```
