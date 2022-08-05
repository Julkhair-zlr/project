import React from 'react'
const Login = () => {
    
  return (
    <>
    <form>
      <div>
      <h3>Hi, Welcome to TestPrep24!</h3>
      <button>SignIn with Google</button>
      <hr />
        <div>
            <label> Email ID :: </label>
            <input type='email' value='' placeholder="Enter your Email id..." required/>
            <label> Password :: </label>
            <input type='email' value='' placeholder="Enter your password..." required/>
            <input type='checkbox' value=''/><span>Reemnber Me</span>
            <span> <a href='app'>Forget password ?</a></span>
            <button>Login</button>
            <p>Not registerd yet? <a href='ghck'>Create an Account</a></p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/images/Rectangle1.png" } alt=''></img>
          <img src={process.env.PUBLIC_URL + "/images/Ellipse81.png"  } alt=''></img>
          <img src={process.env.PUBLIC_URL + "/images/Ellipse82.png"  } alt=''></img>
          <img src={process.env.PUBLIC_URL + "/images/Ellipse83.png"  } alt=''></img>
          <img src={process.env.PUBLIC_URL + "/images/Ellipse84.png"  } alt=''></img>
        </div>
      </div>
      </form>
    </>
  );
}

export default Login
