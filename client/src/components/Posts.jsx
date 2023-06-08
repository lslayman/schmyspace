import { useState, useEffect } from "react"

function Posts({title, content, user}){

    return(
        <div>
            <h2>{title}</h2>
            <h5>{user.username}</h5>
            <h4>{content}</h4>
        </div>
    )
}

export default Posts