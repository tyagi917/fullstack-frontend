
import {Link,useHistory} from 'react-router-dom';
import './App.css';
import React,{Component} from 'react';
//import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../node_modules/react-linechart/dist/styles.css';
 
var dataPoints =[];
class Analytics extends Component {
 
		
		render() {
        const data = [
            {									
                color: "steelblue", 
                points: [{x: 0, y: 0},{x:1,y:1},{x:2,y:2},{x:3,y:4},{x:4,y:5},{x:6,y:4}] 
            }
        ];
		
		return (
			<div>
			<div className="navbar">
			<div style={{ width:"80px",height:"30px" ,border:"2px solid",background:"white",fontSize:"20px"}}>Logo</div>
		    <  Link to="/contact">Contact-us</Link>,
        <  Link to="/analytic">Analytics</Link>

		</div>
		<div className="div">
		<div style={{ marginTop:"20px" ,width:"150px",height:"30px" ,border:"2px solid",background:"white",fontSize:"20px"}}>12 Nov 2020</div>
		<div className="div1" style={{  marginTop:"20px",width:"150px",height:"30px" ,border:"2px solid",background:"white",fontSize:"20px"}}>20Nov 2020</div>
		</div>
		 <div className="App">
                    <h1>My First LineChart</h1>
                    <LineChart 
                        width={600}
                        height={400}
                        data={data}
                    />
                </div>
		</div>
		
		
		
		);
	}
}
export default  Analytics
	
	
 

         
           
          
          
    
 
									
         