
import {UPDATE_VOICES_MAILS} from '../actions/voiceMailsActions'

const voiceMailsReducer = (state={},{type,payload})=>{
    switch (type) {
        case UPDATE_VOICES_MAILS:
            
          return{
              voiceMails: payload
          }
    
        default:
            return state
    }

}

export default voiceMailsReducer