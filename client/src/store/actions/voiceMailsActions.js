import fetch from "node-fetch"
import {ON,OFF} from './appActions'

const UPDATE_VOICES_MAILS = "UPDATE_VOICES_MAILS"

const fetch_voice_mails = async(dispatch)=>{

    const response = await fetch('/messages')
    const json = await response.json()
    dispatch({type:UPDATE_VOICES_MAILS, payload: json.data})
    dispatch({type: OFF, payload: false})

}


export{
    UPDATE_VOICES_MAILS,
    fetch_voice_mails
}

