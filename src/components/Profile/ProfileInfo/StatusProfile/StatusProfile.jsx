import React from 'react';
import s from './StatusProfile.module.css'



class ProfileStatus extends React.Component {

    state ={
    editMode: false, 
    }

activeEditMode = () =>{
    return this.setState({ editMode : true})}
deactiveEditMode = () =>{
    return this.setState({editMode : false})
}

    render(){
        return(
        <div className={s.status}>
            {this.state.editMode ?
            <input autoFocus={true} onBlur={this.deactiveEditMode} value={this.props.statusText}/> :
            <span onDoubleClick={this.activeEditMode}>{this.props.statusText}</span>
            }
        </div>)
    }
}

export default ProfileStatus