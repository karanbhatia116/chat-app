import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = ()=>{
        auth.signInWithPopup(provider).then((result)=> {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            });
        }

            ).catch(error=>alert(error.message))
    }
    return (
        <div className = 'login'>
            <div className = 'login__container'>
            {/* <img src = '//upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png' alt = ""></img> */}
            <img src = './clonelogo.ico' alt = ""></img>
            <div className = 'login__text'>
                <h1>Sign in to Chat app</h1>
            </div>
            <Button onClick = {signIn}>Signin with Google</Button>
            </div>
        </div>
    )
}

export default Login
