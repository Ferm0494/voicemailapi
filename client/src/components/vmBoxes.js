import React from "react"
import {Button} from '@material-ui/core'
import MenuComponent from './menuComponent'
import store from '../store/index'
import { connect } from "react-redux"
import {mapDispatchToProps} from "../App"


class VmBoxes extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
       
    }

    handleClick(event){
    this.props.show_menu(event)
    
    }

    render(){
        return(
            <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>{
                this.handleClick(e.currentTarget)
            }}>
            See my VmBoxes
            
            </Button>

            <MenuComponent id="simple-menu" store={store}/>
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
