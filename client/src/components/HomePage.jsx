import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"

function HomePage(){



    return(
        <div className="home-page">
            <div className="profile-summary">
                <h1>Hello {user}!</h1>
            </div>
        </div>
    )
}

export default HomePage