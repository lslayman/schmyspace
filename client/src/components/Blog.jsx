import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import PostsUsername from "./PostsUsername";

function Blog({ posts, users, user, setPosts }) {
    const [blogPost, setBlogPost] = useState({ title: "", content: "Create Your Blog Here!", user_id: users.id  });

    const reversedPosts = posts ? Array.from(posts).reverse() : [];

    const postList = reversedPosts?.map((post) => {
    return <Posts 
        key={post.id} 
        title={post.title} 
        content={post.content}
        user={post.user}
    />;
    });

    function handleSubmit(e) {
    console.log(blogPost)
    fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogPost),
    })
        .then((res) => res.json())
        .then((data) => {
        setPosts(prevBlogData => [...prevBlogData, data]);
        })
    }

    function handleTitleChange(e) {
    setBlogPost({ ...blogPost, title: e.target.value });
    }

    function handleContentChange(e) {
    setBlogPost({ ...blogPost, content: e.target.value });
    }

    return (
    <div className="blog">
        <div className="new-blog-title">
        <h3>Create Blog Entry</h3>
        </div>
        <div>
        <form className="new-blog-wrapper" onSubmit={handleSubmit}>
            <h5 className="new-blog-subject">Subject:</h5>
            <input
            type="text"
            className="new-blog-title-input"
            value={blogPost.title}
            onChange={handleTitleChange}
            />
            <h5 className="new-blog-content">Content:</h5>
            <textarea
            id='new-blog-id'
            className="new-blog"
            placeholder={blogPost.content}
            rows='5'
            cols='50'
            onChange={handleContentChange}></textarea>
            <br />
            <button type="submit" className="new-blog-button">
            Publish Blog Entry
            </button>
        </form>
        </div>
        <div className="post-list">{postList}</div>
    </div>
    );
    }

export default Blog;