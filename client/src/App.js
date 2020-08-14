import React from 'react';
import './App.css';
import Spinner from './components/spinner'
import TableComponent from './components/tableComponent'
import {connect} from 'react-redux'
import {loading, done_loading} from './store/actions/appActions'
import {fetch_voice_mails} from './store/actions/voiceMailsActions'
import {fetch_voice_boxes} from './store/actions/vmBoxexActions'
import {show_anchor} from './store/actions/anchorElActions'
import store from './store/index'
import VmBoxes from './components/vmBoxes'


class App extends React.Component {
  
  componentDidMount(){
    this.props.fetchBoxes()
  }


  render(){
    
    return(
      // this.props.app ? <Spinner/> : <TableComponent store={store}  mails={this.props.voiceMails} />
      this.props.app ? <Spinner/> : this.props.voiceMails.length === 0
      ? <VmBoxes/> : 
      <div>
          <VmBoxes/>
          <TableComponent store={store}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return{
    app: state.app.isLoading,
    voiceMails: state.voiceMails,
    anchorEl: state.anchorEl.anchorEl
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
    fetchVoiceMails: (id)=>{
        fetch_voice_mails(dispatch,id).then(action=>{
         dispatch(action)
        })
    },
    fetchBoxes: ()=>{
      dispatch(fetch_voice_boxes)
    },
    show_menu: (event)=>{
      dispatch(show_anchor(event))
  },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
export{
  mapDispatchToProps,
  mapStateToProps
}