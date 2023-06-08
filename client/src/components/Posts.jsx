import { useState, useEffect } from "react";

function Posts({ title, content, user, currentUser, handleDelete, handleEdit, id }) {
  const [isCurrentUserPost, setIsCurrentUserPost] = useState(false);

  useEffect(() => {
    setIsCurrentUserPost(currentUser && currentUser.id=== user.id);
  }, [currentUser, user]);

  return (
    <div>
      <h2>{title}</h2>
      {isCurrentUserPost && (
        <div>
          <button onClick={()=>handleDelete(id)}>Delete</button>
          <button onClick={()=>handleEdit(id)}>Edit</button>
        </div>
      )}
      <h5>{user.username}</h5>
      <h4>{content}</h4>
    </div>
  );
}

export default Posts;