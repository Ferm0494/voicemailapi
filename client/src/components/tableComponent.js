import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core'

class TableComponent extends React.Component {


    render(){
       const mails = this.props.mails.voiceMails
       console.log(mails)
        const components = mails.map(mail=>{
            return (
                <TableRow key={mail.call_id}>
                       <TableCell align="center">{mail.folder}</TableCell> 
                       <TableCell align="center">{mail.from}</TableCell>
                       <TableCell align="center">{mail.to}</TableCell> 
                       <TableCell align="center">{mail.length/1000}S</TableCell>  


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


export default TableComponent