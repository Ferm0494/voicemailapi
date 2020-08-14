import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,MenuItem,Menu,Button} from '@material-ui/core'
import MenuComponent from './menuComponent'
import store from '../store/index'
import { connect } from 'react-redux';
import {show_anchor} from '../store/actions/anchorElActions'

const options = ['new','saved','deleted']
class TableComponent extends React.Component {

  

    handeClick(event){
        console.log("The event",event)
        this.props.show_menu(event.currentTarget)
    }

    
  

    render(){
       const mails = this.props.mails.voiceMails

    
        const components = mails.map(mail=>{
            return (
                <TableRow key={mail.call_id}>
                       <TableCell align="center">

                           <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" onClick={(e)=>{
                               this.handeClick(e)
                               
                           }} >
                            {mail.folder}
                            <MenuComponent opts={options.filter(x=> x !== mail.folder)} id="simple-menu" store={store} call_id={mail.call_id}/>
                           </Button>
                           
                           </TableCell> 
                       <TableCell align="center">{mail.from}</TableCell>
                       <TableCell align="center">{mail.to}</TableCell> 
                       <TableCell align="center">{mail.length/1000} S</TableCell>  
                </TableRow>
            )
        })
        return(
       <TableContainer> 
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Status </TableCell>
                        <TableCell align="center">From </TableCell>
                        <TableCell align="center">To </TableCell>
                        <TableCell align="center">Duration</TableCell>
                    </TableRow>

                </TableHead>

                <TableBody>
                    {components}
                       
                </TableBody>
           </Table>

       </TableContainer>
        )
    }
}

const mapStateToProps = (state)=> {
    return state
  };
  
  const mapDispatchToProps = (dispatch)=>{
    return {

    show_menu: (event)=>{
        dispatch(show_anchor(event))
    },
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(TableComponent)