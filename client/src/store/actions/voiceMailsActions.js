import fetch from "node-fetch"
import {ON,OFF} from './appActions'

const UPDATE_VOICES_MAILS = "UPDATE_VOICES_MAILS"

const fetch_voice_mails = async(dispatch,id)=>{
   
    const response = await fetch(`/${id}/messages`)
    const json = await response.json()
    return {type:UPDATE_VOICES_MAILS, payload: json.data}

}


export{
    UPDATE_VOICES_MAILS,
    fetch_voice_mails
}

