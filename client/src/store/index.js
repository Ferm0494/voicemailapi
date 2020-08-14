import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import appReducer from './reducers/appReducer'
import voiceMailsReducer from './reducers/voiceMailsReducer'
import anchorElReducer from './reducers/anchorEl'
import vmBoxesReducer from './reducers/vmBoxesReducer'
import thunk from 'redux-thunk'
import anchorElReducer2 from './reducers/anchorEl2'
import vmBoxCurrentReducerID from './reducers/vmBox'


const middleWare = [thunk]

const AllReducers = combineReducers({app: appReducer, voiceMails: voiceMailsReducer,anchorEl: anchorElReducer,vmBoxes: vmBoxesReducer,anchorEl2: anchorElReducer2, currentVmBox: vmBoxCurrentReducerID})
const InitialStates = {
        currentVmBox: {box: null},
        vmBoxes:[],
        anchorEl:{anchorEl: null} ,
        anchorEl2:{anchorEl:null},
        app: {isLoading: true},
        voiceMails: []
}

const store= createStore(AllReducers,InitialStates,compose(
        applyMiddleware(...middleWare)))

export default store

//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()