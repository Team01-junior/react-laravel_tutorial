import {Link} from "react-router-dom";
import {useRef} from "react";

export default function Signup(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            passwordConfirmation: passwordConfirmationRef.current.value,
        }
    }

    return(
                <form onSubmit={onSubmit}>
                    <h1 className="title"> Signup for free</h1>
                    <input ref={nameRef} placeholder="Full Name"/>
                    <input ref={emailRef} type="email" placeholder="Email Address"/>
                    <input ref={passwordRef} type="password" placeholder="Password"/>
                    <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation"/>
                    <button className="btn btn-block"> Signup</button>
                    <p className="message">
                        Already Registered? <Link to="/login">Sign in</Link>
                    </p>
                </form>
    )
}