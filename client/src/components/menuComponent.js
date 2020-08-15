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
        console.log(this.props);
        if(typeof folder === "string" && this.props.table){
            this.props.loading()
            this.props.hide_menu(folder,this.props.call_id,this.props.currentVmBox.box)
        }else{
            this.props.hide_boxes()
            this.props.hide_not_synced_menu()
        }
        
    }

    render(){

        let id= this.props.call_id
       
          let options = this.props.opts.map(item=>{
               return(
                   <MenuItem  key={id.concat(item)} onClick={(e)=>{
                       this.handleClose(item)
                   }}>
                    {item}
                   </MenuItem>
               )
           })
    
           
        return(
            <Menu className={this.props.classes.mt2} id={id} anchorEl={this.props.anchorEl.anchorEl[id]}
                keepMounted open={Boolean(this.props.anchorEl.anchorEl[id])} onClose={this.handleClose}
            >
                 {options}
         
            </Menu>
            )
        }
    }



const mapStateToProps2 = (state)=> {    
    return state
  };
 
 const mapDispatchToProps2 =(dispatch) =>{
   
     let obj = {
         hide_menu: (folder,id,box)=>{
            hide_anchor(folder,id,box).then(action=>{
                dispatch(action)
                mapDispatchToProps(dispatch).fetchVoiceMails(box)
            })
         },

         hide_not_synced_menu:()=>{
             dispatch(hide_fast_anchor)
         }
        }
   return Object.assign(obj,mapDispatchToProps(dispatch))
        
    
 } 
  
  
  

export default connect(mapStateToProps2,mapDispatchToProps2)(withStyles(styles)(SimpleMenu));
