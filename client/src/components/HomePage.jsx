import React, { useState, useEffect } from "react"
import { Link, NavLink, Route } from "react-router-dom"
import Posts from "./Posts"

function HomePage({ users }){
    const [posts, setPosts] = useState([]);
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        const fetchedPosts = [];
        setPosts(fetchedPosts);
    }, [])

    useEffect(() => {
        const fetchFriendsList = async => {
            try {
                const response = fetch(`/api/friends/`);
                const data = response.json();
                setFriendsList(data.friends);
            } catch (error) {
                console.error('Error fetching friends list:', error);
            }
        };

        fetchFriendsList();
    }, []);

    function handleSubmit(e){
        e.preventDefault()
        fetch('/api/users')
    }

    return(
        <>
        <div className="homepage-container">
            <div className="left-column">
                <div className="user-info-container">
                    <div className="container-header">
                        <h2>Welcome, {users.username}!</h2>
                    </div>
                    <img src={users.profile_picture} alt="Profile Photo" style={{maxWidth: '100%', maxheight: '100%'}}/>
                    <div className="profile-links">
                        <ul>
                            <li><NavLink to="/profile" className='profileLink'>View my profile!</NavLink></li>
                            <li><NavLink to="/blog" className='profileLink'>Manage blog</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="message-center-container">
                    <div className="message-container-header">
                        <h3>My Mail</h3>
                        <div class="link-container">
                            <Link to="/messages" class="link">send message</Link>
                            <Link to="#" class="link">post bulletin</Link>
                            <Link to="#" class="link">instant messages</Link>
                            <Link to="#" class="link">check forum</Link>
                        </div>
                    </div>
                </div>
                <div className="announcement-container">
                    <div className="announcement-header">
                        <p><b>Schmyspace Announcements</b></p>
                    </div>
                    <p>Welcome to Schmyspace! We're still working out some bugs and hammering out some details but we're very excited to have you here. Keep an eye out for fun new developments and features in the future!</p>
                </div>
            </div>
            <div className="right-column">
                <div className="profile-blog-container">
                    <p><b>Your Latest Blog Entries</b></p>
                    <NavLink to="/blog" className="blogLink"><b>[New Entry]</b></NavLink>
                    {posts.length > 0 ? (
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>There are no Blog Entries yet.</p>
                    )}
                </div>
                <div className="home-friend-container">
                    <div className="home-friend-header">
                        <p><b>Your Friends</b></p>
                    </div>
                    <div>
                        {friendsList.length === 0 ? (
                            <p>Looks like you haven't made any friends yet. What are you doing? Get on out there!</p>
                        ) : (
                            <ul>
                                {friendsList.slice(0, 4).map((friend) => (
                                    <li key={friend.id}>
                                        <img src={friend.profile_photo} alt ="Friend Profile Photo" />
                                        <p>{friend.username}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage