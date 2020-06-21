import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Navbar from '../components/navbar'

class Publishing extends React.Component{
    render(){
        return(
            <div id='publishingHome'>
                <Navbar/>

            </div>
        )
    }
}

export default Publishing;