import fetch from "node-fetch"
import {OFF} from './appActions'

const UPDATE_VOICE_BOXES = "UPDATE_VOICE_BOXES"

const fetch_voice_boxes = async(dispatch)=>{
    const response= await fetch('/vmboxes')
    const json= await response.json()
    dispatch({type:UPDATE_VOICE_BOXES, payload: json.data})
    dispatch({type: OFF, payload: false})
}

export {
    UPDATE_VOICE_BOXES,
    fetch_voice_boxes
}