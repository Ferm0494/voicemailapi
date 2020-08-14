import React from "react"
import {Menu, MenuItem, withStyles} from "@material-ui/core"
import { connect } from "react-redux";
import {hide_anchor,hide_fast_anchor} from '../store/actions/anchorElActions'
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
        
        if(typeof folder === "string" && this.props.table){
            this.props.loading()
            this.props.hide_menu(folder,this.props.call_id)
        }else if(typeof folder === "string"){
            this.props.hide_boxes()
            this.props.loading()
            this.props.fetchVoiceMails(folder)
        }else{
            this.props.hide_boxes()
            this.props.hide_not_synced_menu()
        }
        
    }

    render(){
        console.log(this.props)
        let menuItems = this.props.opts === undefined ? this.props.vmBoxes.vmBoxes : this.props.opts
        if(this.props.opts === undefined){
            menuItems = this.props.vmBoxes.vmBoxes.map(item=>{
                return(
                    <MenuItem key={item.id} onClick={(e)=>{
                        this.handleClose(item.id)
                    }} >{item.name}</MenuItem>
                )

                
        })

        return(
            <Menu className={this.props.classes.mt2} id={this.props.id} anchorEl={this.props.anchorEl2.anchorEl}
                keepMounted open={Boolean(this.props.anchorEl2.anchorEl)} onClose={this.handleClose}
            >
        
                {menuItems}
            </Menu>
            )

        }else{
              menuItems = this.props.opts.map(item=>{
                return(
                    <MenuItem key={item} onClick={(e)=>{
                        this.handleClose(item)
                    }} >{item}</MenuItem>
                )
        })
        return(
            <Menu className={this.props.classes.mt2} id={this.props.id} anchorEl={this.props.anchorEl.anchorEl}
                keepMounted open={Boolean(this.props.anchorEl.anchorEl)} onClose={this.handleClose}
            >
        
                {menuItems}
            </Menu>
            )
        }
           
       


        
    }

}

const mapStateToProps2 = (state)=> {
    return state
  };
 
 const mapDispatchToProps2 =(dispatch) =>{
   
     let obj = {
         hide_menu: (folder,id)=>{
            hide_anchor(folder,id).then(action=>{
                dispatch(action)
                mapDispatchToProps(dispatch).fetchVoiceMails()
            })
         },

         hide_not_synced_menu:()=>{
             dispatch(hide_fast_anchor)
         }
        }
   return Object.assign(obj,mapDispatchToProps(dispatch))
        
    
 } 
  
  
  

export default connect(mapStateToProps2,mapDispatchToProps2)(withStyles(styles)(SimpleMenu));
