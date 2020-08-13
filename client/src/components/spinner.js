import React from "react"
import CircularProgress from '@material-ui/core/CircularProgress';


class Spinner extends React.Component{


    render(){
        const myStyle = {
                width: "100%",
                height:"100%",
                display: "flex",
                justifyContent:"center",
                alignItems: "center"


        }
        return(
            <div style= {myStyle}>
                <CircularProgress color="secondary"/>
            </div>
        )
    }


}

export default Spinner