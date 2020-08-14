import React from "react"
import {Button} from '@material-ui/core'
import MenuComponent from './menuComponent'
import store from '../store/index'
import {mapDispatchToProps} from './tableComponent'
import { connect } from "react-redux"


class VmBoxes extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
    this.props.show_menu(event.current_target)
    
    }

    render(){
        return(
            <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e)=>{
                this.handleClick(e)
            }}>
            See my VmBoxes
            
            </Button>

            <MenuComponent id="simple-menu" opts={this.props.vmboxes} store={store}/>
            </div>
        )
    }

}
const mapStateToProps= (state)=>{
    return{
            vmboxes: state.vmboxes
      }
}



export default connect(mapStateToProps)(VmBoxes)
