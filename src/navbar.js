import {Link,useHistory} from 'react-router-dom';
import './App.css';
function Navbar()
{
	return(
		<div className="navbar">
		<div style={{ width:"80px",height:"30px" ,border:"2px solid",background:"white",fontSize:"20px"}}>Logo</div>
		    <  Link to="/contact">Contact-us</Link>,
        <  Link to="/analytic">Analytics</Link>

		</div>
		)
}
export default Navbar;