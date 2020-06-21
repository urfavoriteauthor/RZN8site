import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';

class Contact extends React.Component{
    render(){
        return(
            <div id='contact'>
                <div><h5>At this time we are not able to offer printing Services. 
                    Please take a second to view our Publishing services for authors and musicians.</h5></div>
                

                    <button className='btn btn-dark'id='homebtn'><Link to='/'><h1>Return to Main</h1></Link></button>
    </div>
        )
    }
}

export default Contact;