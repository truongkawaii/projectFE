import React, { useEffect, useState } from 'react'
import './Login.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link , useHistory} from 'react-router-dom';
import { userLogin } from '../../state/actions';
function Login() {
  const token = useSelector(state=>state.loginUser.token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const handlerLoginUser = () => {
    console.log('LOGIn', user);
    dispatch(userLogin(user));
  };

  useEffect(() => {
     if (token) {
      history.push('/admin')
     }
    return () => {
       
    }
  }, [token])

  
  return (
    <div class="main-wrapper">
      <div class="page-wrapper full-page">
        <div class="page-content d-flex align-items-center justify-content-center">
          <div class="row w-100 mx-0 auth-page">
            <div class="col-md-8 col-xl-6 mx-auto">
              <div class="card">
                <div class="row">
                  <div class="col-md-4 pr-md-0">
                    <div class="auth-left-wrapper">
                    </div>
                  </div>
                  <div class="col-md-8 pl-md-0">
                    <div class="auth-form-wrapper px-4 py-5">
                      <a href="#" class="noble-ui-logo d-block mb-2">Noble<span>UI</span></a>
                      <h5 class="text-muted font-weight-normal mb-4">Welcome back! Log in to your account.</h5>
                      <form class="forms-sample">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control"  value={user.username} onChange={e=>setUser({...user,username:e.target.value})} id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control"  value={user.password} onChange={e=>setUser({...user,password:e.target.value})}  id="exampleInputPassword1" autocomplete="current-password" placeholder="Password" />
                        </div>
                        <div class="form-check form-check-flat form-check-primary">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" />
                          Remember me
                        </label>
                        </div>
                        <div class="mt-3">
                          <h4 onClick={handlerLoginUser}   class="btn btn-primary mr-2 mb-2 mb-md-0 text-white">Login</h4>
                          <button type="button" class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0">
                            <i class="btn-icon-prepend" data-feather="twitter"></i>
                          Login with twitter
                        </button>
                        </div>
                        <a href="register.html" class="d-block mt-3 text-muted">Not a user? Sign up</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
