import {createStore,combineReducers,applyMiddleware} from 'redux'
import appReducer from './reducers/appReducer'
import voiceMailsReducer from './reducers/voiceMailsReducer'
import thunk from 'redux-thunk'


const middleWare = [thunk]

const AllReducers = combineReducers({app: appReducer, voiceMails: voiceMailsReducer})
const InitialStates = {
        app: {isLoading: true},
        voiceMails: []
}

const store= createStore(AllReducers,InitialStates,applyMiddleware(...middleWare))

export default store

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()