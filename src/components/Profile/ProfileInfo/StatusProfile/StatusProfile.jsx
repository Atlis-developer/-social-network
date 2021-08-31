import React, { useState } from 'react';
import s from './StatusProfile.module.css'



class ProfileStatus extends React.Component {

    state ={
    editMode: false, 
    status: ''
    }



activeEditMode = () =>{
    this.setState({ editMode : true})}
deactiveEditMode = () =>{
    this.setState({editMode : false})
    this.props.updateUserStatus (this.state.status);
}
statusChange = (e) =>{
    this.setState({
        status:e.currentTarget.value
        }) 
}

componentDidUpdate = (prevProps, prevState) =>{

    if (prevProps.status !== this.props.status){
 
        this.setState({
            status : this.props.status
        })
    }
}

    render(){
        return(
        <div className={s.status}>
            {this.state.editMode ?
            <input onChange={this.statusChange} autoFocus={true} onBlur={this.deactiveEditMode} value={this.status}/> :
            <span onDoubleClick={this.activeEditMode}>{this.props.status || '-*-*-*-*-'}</span>
            }
        </div>)
    }
}

export default ProfileStatus