import React from "react"
import {Menu, MenuItem, withStyles} from "@material-ui/core"
import { connect } from "react-redux";
import {hide_anchor} from '../store/actions/anchorElActions'

const styles = (theme) => ({
    mt2: {
      marginTop: "3em"
    },
  });
class SimpleMenu extends React.Component{
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }


    handleClose(){
        
    }

    render(){
        console.log(this.props)
        let menuItems = this.props.opts.map(item=>{
                return(
                    <MenuItem key={item} onClick={(e)=>{
                        this.handleClose(item)
                    }} >{item}</MenuItem>
                )
        })
        return(
        <Menu className={this.props.classes.mt2} id={this.props.id} anchorEl={this.props.anchorEl}
            keepMounted open={Boolean(this.props.anchorEl)} onClose={this.handleClose}
        >
    
            {menuItems}
        </Menu>
        )
    }

}

const mapStateToProps = (state)=> {
    return{
    anchorEl: state.anchorEl.anchorEl
    }
  };
 
 const mapDispatchToProps =(dispatch) =>{
     return{
         hide_menu: ()=>{
                dispatch(hide_anchor)
         }
     }
 } 
  
  
  

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SimpleMenu));
