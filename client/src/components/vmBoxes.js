import React from "react"
import {Button} from '@material-ui/core'
import { connect } from "react-redux"
import {mapDispatchToProps} from "../App"
import {Menu,MenuItem} from '@material-ui/core'


class VmBoxes extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handelClose = this.handelClose.bind(this)
       
    }

    handleClick(event){
    this.props.show_boxes(event)
    
    }

    handelClose(folder){
        this.props.setCurrentBox(folder);
        this.props.hide_boxes()
        this.props.loading()
        this.props.fetchVoiceMails(folder)
    }

    render(){
       let opts = this.props.vmBoxes.vmBoxes.map(item=>{
            return(
                <MenuItem key={item.id} onClick={()=>{
                    this.handelClose(item.id)
                }}>{item.name}</MenuItem>
            )
       })
        return(
            <div>
            <Button aria-controls="simple-menu2" aria-haspopup="true" onClick={(e)=>{
                this.handleClick(e.currentTarget)
            }}>
            See my VmBoxes
            
            </Button>
            <Menu id="simple-menu2" anchorEl={this.props.anchorEl2.anchorEl} keepMounted open={Boolean(this.props.anchorEl2.anchorEl)} onClose={this.handleClose}>
                {opts}
            </Menu>
            
            </div>
        )
    }

}

const mapStateToProps2=(state)=>{
    return state
}
const mapDispatchToProps2= (dispatch)=>{
    return mapDispatchToProps(dispatch)
}



export default connect(mapStateToProps2,mapDispatchToProps2)(VmBoxes)
