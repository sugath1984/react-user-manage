import React from 'react';
import { Link } from 'react-router-dom'

let AppLayout = function (props) {
    return(
        <div>
            <header>
                <h1>Welcome to user management</h1>
                <Link  to="/users"> View Users </Link>
                <br/>
                <hr/>
            </header>
            <main>
                { props.children }
            </main>
        </div>
    )
}

export default AppLayout