
const UPDATE_VOICES_MAILS = "UPDATE_VOICES_MAILS"

const fetch_voice_mails = async(dispatch)=>{
    const headers = {
        mode: 'cors',
        Authorization: `Basic ${process.env.REACT_APP_CREDENTIALS}`
        
    }

    const requestUrl = `${process.env.REACT_APP_SERVER_URL}/accounts/${process.env.REACT_APP_ACCOUNTID}/vmboxes/${process.env.REACT_APP_VMBOXID}`

    console.log(headers);
    let response = await fetch(requestUrl,{ headers })
    console.log(response);
    let json = await response.json()
    console.log(json.data);
}


export{
    UPDATE_VOICES_MAILS,
    fetch_voice_mails
}

