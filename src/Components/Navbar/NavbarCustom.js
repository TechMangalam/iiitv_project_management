import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElementsCustom';
import {useHistory} from "react-router-dom";
import ReactDOM from 'react-dom';
import {signOut, getAuth} from "firebase/auth";
import Login from "../../Login/Login";
import App from "../../App";



const NavbarCustom = () => {

	const history = useHistory()

	function logout() {
		//alert("Logout Successfully")
		const auth = getAuth();
		signOut(auth).then(() => {
			console.log(auth)

			history.push("/Login")
			// ReactDOM.render(
			//   <React.StrictMode>
			//     <Login />
			//   </React.StrictMode>,
			//   document.getElementById('root')
			// );
		}).catch((error) => {
			alert(error)
		});

	}


return (
	<>
	<Nav className="d-flex">
		<Bars />

		<NavMenu>

        <a className="navbar-brand" href="/">
        <img src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809" width="60" height="80%" className="d-inline-block align-center" alt=""/>
        &emsp; IIITV Project Management
        </a>

		<NavLink to='/Student' >
			Students
		</NavLink>
		<NavLink to='/Faculty' >
			Faculty
		</NavLink>
		<NavLink to='/Admin' >
			Admin
		</NavLink>

        <form className="d-flex h-100">
            {/*<input className="form-control mx-auto h-50 my-auto" type="search" placeholder="Search" aria-label="Search"/>*/}
            &emsp;
            <button className="btn btn-outline-success h-50 my-auto" onClick={logout} type="submit">Logout</button>
        </form>

		</NavMenu>

        
		
	</Nav>
	</>
);
};

export default NavbarCustom;
