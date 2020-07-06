import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Navbar from '../components/navbar'

class Publishing extends React.Component{
    render(){
        return(
            <div id='publishingHome'>
                <Navbar/>

                
                <button className='btn btn-outline-danger btn-lg btn-block'><Link to='/'><h3>Return to Main</h3></Link></button>

            </div>
        )
    }
}

export default Publishing;