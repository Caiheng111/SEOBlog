import React, {useState} from 'react'
import { signup, signin, authenticate } from '../../actions/auth';
import Router from 'next/router';

 const SigninComponent = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true

  })

  const { email, password, error, loading, message, showForm } = values

  const handleSubmit = e => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    signin(user).then(data => {
      console.log(data);
        if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
        } else {

          //save user token in cookie

          // save userInfo in localStorage

          // authenticate user 
          authenticate(data,()=>{
            Router.push(`/`)
          })
           
        }
    });
};

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
};

//alert msg
const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');



  const signinForm = () => {
    return (
        <form onSubmit={handleSubmit}>
    

            <div className="form-group">
                <input
                  value={email}
                  onChange={handleChange('email')}
                  type="email"
                  className="form-control"
                  placeholder="Type your email"
                />
            </div>

            <div className="form-group">
                <input
                  value={password}
                  onChange={handleChange('password')}
                  type="password"
                  className="form-control"
                  placeholder="Type your password"
                />
            </div>

            <div>
                <button className="btn btn-primary">Signup</button>
            </div>
        </form>
    );
};
  return (
    <div>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signinForm()}
    </div>
  )
}

export default SigninComponent
