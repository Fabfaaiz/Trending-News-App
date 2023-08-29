import React, { Component } from 'react';
import loading from  './Rolling-1s-31px.gif';

export class Spinner extends Component{
    render(){
        return(
         <div className="d-flex justify-content-center align-items-center">
            <img src={loading} className='my-3'alt="Loading"/>
        </div>
        )
    }
}
export default Spinner;