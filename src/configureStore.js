import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore(initialState) {
    const buildStore = compose(applyMiddleware(thunk))(createStore)

    const store = buildStore(rootReducer, initialState)

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers'))
        })
    }

    return store
}