import React from "react"
import {Menu, MenuItem, withStyles} from "@material-ui/core"
import { connect } from "react-redux";
import {hide_anchor} from '../store/actions/anchorElActions'
import {mapDispatchToProps} from '../App'

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


    handleClose(folder){
       this.props.loading()
       this.props.hide_menu(folder,this.props.call_id)
          
        
    }

    render(){
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

const mapStateToProps2 = (state)=> {
    return{
    anchorEl: state.anchorEl.anchorEl
    }
  };
 
 const mapDispatchToProps2 =(dispatch) =>{
   
     let obj = {
         hide_menu: (folder,id)=>{
            hide_anchor(folder,id).then(action=>{
                
                dispatch(action)
                mapDispatchToProps(dispatch).doneLoading()
            })
         }
        }
   return Object.assign(obj,mapDispatchToProps(dispatch))
        
    
 } 
  
  
  

export default connect(mapStateToProps2,mapDispatchToProps2)(withStyles(styles)(SimpleMenu));
