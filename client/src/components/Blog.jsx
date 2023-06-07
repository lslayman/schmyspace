import Posts from "./Posts"
import { useState } from "react"

function Blog({posts}){
    const [blogPost, setBlogPost] = useState('')
    const postList = posts.map((post)=>{
        return <Posts
            key={post.id}
            title={post.title}
            content={post.content}
        />
    })

    function handleSubmit(e){
        e.preventDefault()
        fetch('/api/posts', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({blogPost: blogPost})
        })
            .then(res=>res.json())
            .then(data=>setBlogPost(data))
    }

    return(
        <div className="blog">
            <div className="new-blog-title">
                <h3>New Blog</h3>
            </div>
            <div>
                <form className="new-blog-wrapper" onSubmit={handleSubmit}>
                    <input type="text" className="new-blog" />
                    <button type="submit" className="new-blog-button">Submit</button>
                </form>
            </div>
            <div>
                {postList}
            </div>
        </div>
    )
}

export default Blog