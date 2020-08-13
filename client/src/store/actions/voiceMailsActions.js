import fetch from "node-fetch"

const UPDATE_VOICES_MAILS = "UPDATE_VOICES_MAILS"

const fetch_voice_mails = async(dispatch)=>{

    const response = await fetch('/messages')
    console.log(response)

}


export{
    UPDATE_VOICES_MAILS,
    fetch_voice_mails
}

