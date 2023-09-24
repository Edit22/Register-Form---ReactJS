
import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validateForm = () => {
        const newErrors = { email: '', password: '' };

        if(!email) {
            newErrors.email = "We need your email here";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Write down your email address";
        }

        if(!pass) {
            newErrors.password = "You must remember your password and write it down here";
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => !errors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        
        const isFormValid = validateForm();

        if (isFormValid) {
            console.log("Log in successfull!");
        }
    };

    return (
    <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
       
    
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>    
    )
}