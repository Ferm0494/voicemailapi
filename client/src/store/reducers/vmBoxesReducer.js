import {UPDATE_VOICE_BOXES} from '../actions/vmBoxexActions'

const vmBoxesReducer = (state={},{type,payload})=>{
    switch(type){
        case UPDATE_VOICE_BOXES:
            return {
                vmBoxes: payload
            }
            default:
                    return state;
    }
}

export default vmBoxesReducer 