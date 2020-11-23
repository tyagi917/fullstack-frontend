import {useState} from 'react';
import ExampleComponent from './recaptcha.js';
import React,{useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import Navbar from './navbar.js';

function Contact()
{
	const[name,setName]=useState("");
	const [lastname,setLastname]=useState("");
	const[email,setEmail]=useState("");
	const[message,setMessage]=useState("");
	//console.log("tyagi");
	function mySubmitHandler(event)
	{
		 event.preventDefault();
		fetch("/post/restult/firstapi",{
			method:"post",
			headers:
			{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				
				name,
				lastname,
				email,
				message,
				
			})
		}).then(res=>res.json()).then(data=>{
			if(data.error)
			{
				console.log("failed");
			}
			else
			{
				console.log("succesful");
				alert("succesful submitted");
			
			}
		})
		
	}
	
	
	return(
		<div>
		<Navbar/>

		<h1>Contact-us-Form</h1>
		 <form onSubmit={mySubmitHandler}>
		 <label for="fname">First name:</label><br/>
      <input
        type='text' placeholder="enter first name"
        onChange={(e)=>setName(e.target.value)}
      /><br/>
       <label for="fname">Last name:</label><br/>
      <input
        type='text' placeholder="enter last name" 
        onChange={(e)=>
        	setLastname(e.target.value)
        	}
        /><br/>
         <label for="fname">Email:</label><br/>
    <input type="email" placeholder="enter email" 
    onChange={(e)=>setEmail(e.target.value)}/><br/>
     <label for="fname">Message:</label><br/>

     <input type="textArea" style={{width:"200px", height:"200px"}} placeholder="enter message" 
    onChange={(e)=>setMessage(e.target.value)}/><br/>
     <ExampleComponent/>
    
    
    <input type="submit"/>
     

      </form>
      
      </div>
      );
}
export default Contact;