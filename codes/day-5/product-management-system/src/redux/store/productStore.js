import { createStore, applyMiddleware } from 'redux'
import rootReducer from './index'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const productStore = createStore(rootReducer, 
   composeWithDevTools(applyMiddleware(loggerMiddleware, thunkMiddleware, sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default productStore;