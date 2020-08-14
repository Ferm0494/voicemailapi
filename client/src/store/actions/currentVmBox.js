const UPDATE_CURRENT_VMBOX = "UPDATE_VMBOX"

const update_current_vmbox=(box)=>{

    return {type: UPDATE_CURRENT_VMBOX, payload:box }
}

export{
    UPDATE_CURRENT_VMBOX,
    update_current_vmbox
}