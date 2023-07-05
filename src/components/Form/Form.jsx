import { useState } from "react";
import validation from './validation';

const Form = (props) => {
    const { login } = props;
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});
    
    const handleChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name] : evento.target.value
        })
        setErrors(validation({
            ...userData,
            [evento.target.name] : evento.target.value
        }))
    };

    const handleSubmit = (evento) => {
        evento.preventDefault()
        login(userData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="EJ,pepito@salame.com.xd" 
                    name="email" 
                    value={userData.email} 
                    onChange={handleChange} 
                />
                {
                    errors.email ? (
                        <p style={{color:"red"}} >{errors.email}</p>
                    ) : errors.emailVacio ? (
                        <p style={{color:"red"}} >{errors.emailVacio} </p>
                    ) : (
                        <p style={{color:"red"}} >{errors.caracteres} </p>
                    )
                }

                <label>PassWord</label>
                <input 
                    type="passWord" 
                    placeholder="zzz..." 
                    name="password"  
                    value={userData.password} 
                    onChange={handleChange} 
                />
                {
                    errors.password ? (
                        <p style={{color:"red"}} >{errors.password} </p>
                    ) : errors.passVacio ? (
                        <p style={{color:"red"}} >{errors.passVacio} </p>
                    ) : (
                        <p style={{color:"red"}} >{errors.caracteres} </p>
                    )
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
