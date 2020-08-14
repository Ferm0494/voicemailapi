import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import appReducer from './reducers/appReducer'
import voiceMailsReducer from './reducers/voiceMailsReducer'
import anchorElReducer from './reducers/anchorEl'
import thunk from 'redux-thunk'


const middleWare = [thunk]

const AllReducers = combineReducers({app: appReducer, voiceMails: voiceMailsReducer,anchorEl: anchorElReducer})
const InitialStates = {
        anchorEl:{anchorEl: null} ,
        app: {isLoading: true},
        voiceMails: []
}

const store= createStore(AllReducers,InitialStates,compose(
        applyMiddleware(...middleWare),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()