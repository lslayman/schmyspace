import React, { useEffect, useState } from 'react';
import Login from './Login'

function Home({setUsers}){


    return(
        <>
        <div className="banner">
            <img className="landing page logo" src="./public/landing-page-logo.png" alt="Logo"/>
            <h1 className="centered-text">schmyspace</h1>
            <p className="centered text">we won't radicalize your grandparents</p>
        </div>
        <div className="welcome">
            <h2>Welcome to schmyspace!</h2>
            <p>If you've been missing a time of yore, when you could get on social media to make friends, watch "Charlie the Unicorn", out-scene the scenecore kids, and brag about being straight-edge but still a force to be reckoned with in the mosh pit, look no further, schmyspace is here! Though still a work in progress, our little site was inspired by a long-lost social media platform that existed in the good-old days when the internet almost felt quaint and you didn't have to worry about algorithms clogging your feed with garbage, billionaires selling your private information to hostile foreign governments. Kick up your feet and stay a while! We don't have all the bells and whistles just yet, but we promise not to radicalize your grandparents. </p>
        </div>
        </>
    )
}
export default Home