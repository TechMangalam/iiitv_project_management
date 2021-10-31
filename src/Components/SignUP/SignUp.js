import React from "react";
import {useHistory} from "react-router-dom";

import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";



const SignUp = () => {
    const history = useHistory()


    const registerUser = () => {
        const userName = document.getElementById("Name").value;
        const userEmail = document.getElementById("emailS").value;
        const userPass = document.getElementById("passwordS").value;
        const userConfPass = document.getElementById("passwordC").value;

        const auth = getAuth();


        if (userName != null && userEmail != null && userPass != null && userConfPass != null && userPass === userPass) {

            createUserWithEmailAndPassword(auth, userEmail, userPass).then((userCredential) => {

                updateProfile(auth.currentUser, {
                    displayName: userName
                }).then(() => {
                    history.push("/")

                }).catch((error) => {
                    // An error occurred
                    // ...
                });


            })

        }

    }


    function loginUser() {
        history.push("/Login")
    }

    return (
        <div id="container" className="container text-center">
            <div className="row ">
                <div className="col-sm-10 offset-sm-1 text-center">

                    <div action="./" className="sign-in-form align-center">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV_Logo.jpg?alt=media&token=fbcc68ab-82f5-498f-a669-0f6bd0227809"
                            style={{height: '120px', width: '110px', margin: '80px'}} alt=""/>
                        <h2 className="title">IIIT Vadodara Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"/>
                            <input style={{
                                background:'none',
                                outline: 'none',
                                border: 'none',
                                lineHeight:'1',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: '#333'
                            }} type="text" placeholder="User Name" id="Name"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"/>
                            <input style={{
                                background:'none',
                                outline: 'none',
                                border: 'none',
                                lineHeight:'1',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: '#333'
                            }} type="email" placeholder="User Email" id="emailS"/>
                        </div>

                        <div className="input-field">
                            <i className="fas fa-lock"/>
                            <input style={{
                                background:'none',
                                outline: 'none',
                                border: 'none',
                                lineHeight:'1',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: '#333'
                            }} type="password" placeholder="Password" id="passwordS"/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"/>
                            <input style={{
                                background:'none',
                                outline: 'none',
                                border: 'none',
                                lineHeight:'1',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                color: '#333'
                            }} type="password" placeholder="Confirm Password" id="passwordC"/>
                        </div>
                        <div className="container text-center d-flex-vertical">
                            <button className="btn-submit solid text-center" id="sign_up_btn"
                                    onClick={registerUser}>Register</button>
                            <br/>
                            <button className="btn btn-outline-primary w-50 solid text-center" id="sign_in_btn"
                                    onClick={loginUser}>Already have account ,SignIn</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )


}


export default SignUp;