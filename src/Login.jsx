import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CommanNavBar from './CommanNavBar';
import './Login.css';
export default function Login() {

    let nevigate = useNavigate();

    let [register, setregister] = useState(false);
    let [fname, setfname] = useState("");
    let [lname, setlname] = useState("");
    let [password, setpassword] = useState("");
    let [cpassword, setcpassword] = useState("");
    let [email, setemail] = useState("");
    let [utype, setutype] = useState("");

    let userregister = (event) => {
        event.preventDefault();
        let u = { fname, lname, email, password, cpassword, utype }
        axios.post(`https://e-commerce-backend-2-20tr.onrender.com/register`, u)
            .then((response) => {
                alert(response.data);
            })
            .catch((error) => {
                alert("server error register")
            })


    }


    let login = (event) => {
        event.preventDefault();
        let user = { email, password };

        axios.post('https://e-commerce-backend-2-20tr.onrender.com/login', user)
            .then((response) => {
                if (response.data) {
                    let user = response.data;
                    alert(user.fname);
                    console.log(response.data);
                    localStorage.setItem("userinfo", JSON.stringify(response.data))


                    if (user.utype.toLowerCase() === "bussiness user") {

                        nevigate("/bussinessdashboard");
                    }
                    else {
                        nevigate("/userdashboard");

                    }
                }


            })
            .catch(() => { })
    }



    return (
        <div className='bg'  >
            <CommanNavBar></CommanNavBar>

            {register ?

                <form className='d-flex flex-column align-items-center gap-3 form-control' onSubmit={login}>
                    <h1 style={{ textAlign: "center" }}>User Login</h1>
                    <div className='row' >
                        <div className='col'>
                            <label>Email :</label><input type="text" onChange={(event) => { setemail(event.target.value) }}></input><br></br>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label>Password :</label><input type="password" onChange={(event) => { setpassword(event.target.value) }}></input><br></br>
                        </div>

                    </div>
                    <div className='row w-30'>
                        <div className='col'>
                            <button type='submit' className='btn btn-info'>Login</button>
                        </div>
                        <div className='col'>
                            <button type='button' className='btn btn-warning' onClick={() => { setregister(false) }}>Register</button>
                        </div>

                    </div>




                </form> :
                <div  >


                    <form className='d-flex flex-column align-items-center gap-3 form-control' onSubmit={userregister} >
                        <h1 style={{ textAlign: "center" }}>User Registation</h1>
                        <div className='row w-100'>
                            <div className='col'>
                                <label className='form-label'>First Name:</label><input type='text' onChange={(e) => { setfname(e.target.value) }}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label'>Last Name :</label><input type='text' onChange={(e) => { setlname(e.target.value) }}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label'>Email :</label><input type='email' onChange={(e) => { setemail(e.target.value) }}></input>
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col'>
                                <label className='form-label'>Password :</label><input type='password' onChange={(e) => { setpassword(e.target.value) }}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label'>C Password : </label><input type='password' onChange={(e) => { setcpassword(e.target.value) }}></input>
                            </div>
                            <div className='col'>
                                <label className='form-label'>User Type :</label><select onChange={(e) => { setutype(e.target.value) }}>
                                    <option value="">Select Option</option>
                                    <option value="bussiness user">Bussiness User</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                        </div>
                        <div className='row w-70'>
                            <div className='col'>
                                <button type='submit' className='btn btn-info '>Register</button>
                            </div>
                            <div className='col'>
                                <button type='button' className='btn btn-warning' onClick={() => { setregister(true) }}> login</button>
                            </div>
                        </div>


                    </form>

                </div>


            }
        </div>
    )
}
