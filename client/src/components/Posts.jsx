import { useState, useEffect } from "react";

function Posts({ title, content, user, currentUser, handleEdit, handleDelete, handleEditTitle, handleEditContent, id }) {
    const [isCurrentUserPost, setIsCurrentUserPost] = useState(false);
    const [edit, setEdit] = useState(false)
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedContent, setEditedContent] = useState(content);

  useEffect(() => {
    setIsCurrentUserPost(currentUser && currentUser.id=== user.id);
  }, [currentUser, user]);

  function handleEditSubmit(e){

    const updatedPost = {
        title: editedTitle,
        content: editedContent
    }
    handleEdit(id, updatedPost)
    setEdit(false)
  }

  function handleInput(e){
    if (e.target.id === 'title'){
        setEditedTitle(e.target.textContent)
        handleEditTitle(e)
    }
    else if (e.target.id === 'content'){
        setEditedContent(e.target.textContent)
        handleEditContent(e)
    }
  }

  return (
    <div>
        {isCurrentUserPost && (
        <div>
          <button onClick={()=>handleDelete(id)}>Delete</button>
          <button onClick={()=>setEdit(!edit)}>Edit</button>
        </div>
      )}
        {edit ? (
        <div>
            <h2 contentEditable onInput={handleInput} id="title">{title}</h2>
            <h5>{user.username}</h5>
            <h4 contentEditable onInput={handleInput} id="content">{content}</h4>
            <button onClick={handleEditSubmit}>Submit Edit</button>
        </div>
        ) : (
            <div>
            <h2>{title}</h2>
            <h5>{user.username}</h5>
            <h4>{content}</h4>
            </div>
        ) } 
    </div>
  );
}

export default Posts;