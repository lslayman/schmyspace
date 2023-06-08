import React, { useEffect, useState } from 'react';
import Login from './Login'

function Home(){


    return(
        <>
        <div className="banner">
            <h1 class="centered-text">schmyspace</h1>
            <p class="centered text">we won't radicalize your grandparents</p>
        </div>
        <div>
            <Login />
        </div>
        </>
    )
}
export default Home