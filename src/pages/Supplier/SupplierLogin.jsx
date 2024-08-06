import React from 'react'

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './supplierLogin.css';
import Svg from '../../components/common/svg/Svg';

const SupplierLogin = () => {
  const onSuccess = (response) => {
    const decoded = jwtDecode(response.
      credential)

    console.log(response);
    console.log(decoded);

  };

  const onFailure = (response) => {
    console.log('Login Failed');
  };


  return (
    <div style={{ display: 'flex', position: "fixed" }}>

      <div id='style1'>
      </div>

      <div>
        <Svg></Svg>
      </div>

      <div id="style2">
        <div id="style3">

          <div style={{ marginTop: "80px" }}><h1>Sign up or Log in</h1></div>

          <div style={{ marginTop: "50px" }}>
            <GoogleLogin

              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
            />
            

          </div>


        </div>
      </div>

    </div>
  )
}

export default SupplierLogin
