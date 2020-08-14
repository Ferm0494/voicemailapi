import React from 'react';
import './App.css';
import Spinner from './components/spinner'
import TableComponent from './components/tableComponent'
import {connect} from 'react-redux'
import {loading, done_loading} from './store/actions/appActions'
import {fetch_voice_mails} from './store/actions/voiceMailsActions'
import store from './store/index'
import VmBoxes from './components/vmBoxes'


class App extends React.Component {
  
  componentDidMount(){
    this.props.fetchVoiceMails()
  }


  render(){
    
    return(
      // this.props.app ? <Spinner/> : <TableComponent store={store}  mails={this.props.voiceMails} />
      this.props.app ? <Spinner/> : <VmBoxes/>
    )
  }
}

const mapStateToProps = (state)=> {
  return{
    app: state.app.isLoading,
    voiceMails: state.voiceMails
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    loading: ()=>{
        dispatch(loading)
    },
    doneLoading: ()=>{
      dispatch(done_loading)
    },
    fetchVoiceMails: ()=>{
        dispatch(fetch_voice_mails)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
export{
  mapDispatchToProps,
}