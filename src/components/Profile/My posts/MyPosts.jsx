import React from 'react';
import s from './MyPosts.module.css'
import MyPostReduxForm from './MyPostsForm';
import Post from './Post/Post';


const MyPosts = (props) =>{



let PostNew = props.posts.map( p =><Post message = {p.message} like = {p.like}/>)



let sendNewPost = (value) =>{
    props.onSendNewPost(value.newPost);
}


    return(
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <MyPostReduxForm onSubmit={sendNewPost}/>
            </div>
            <div className={s.posts}>
        {PostNew}            
      </div>
     </div>
    )
}
export default MyPosts

