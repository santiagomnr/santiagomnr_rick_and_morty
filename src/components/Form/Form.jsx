import { useState } from "react";
import validation from './validation';
import style from './Form.module.css';
import logoRam from '../../assets/logo_Rick_and_Morty.png'

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
        <div className={style.container} >
            <form onSubmit={handleSubmit} >
                <img
                    src={logoRam}
                    alt="logo"
                    className={style.logo}
                />

                <div className={style.formContainer}>
                    <label className={style.label}>Email</label>
                    <input
                        className={style.input}
                        type="email" 
                        placeholder="EJ:pepito@correo.xd" 
                        name="email" 
                        value={userData.email} 
                        onChange={handleChange} 
                        required
                    />
                    {
                        errors.email ? (
                            <p className={style.error} >{errors.email} </p>
                        ) : errors.emailVacio ? (
                            <p className={style.error} >{errors.emailVacio} </p>
                        ) : (
                            <p className={style.error} >{errors.caracteres} </p>
                        )
                    }
                </div>

                <div className={style.formContainer}>
                    <label className={style.label}>PassWord</label>
                    <input
                        className={style.input}
                        type="passWord" 
                        placeholder="qwerty..." 
                        name="password"  
                        value={userData.password} 
                        onChange={handleChange} 
                        required
                    />
                    {
                        errors.password ? (
                            <p className={style.error} >{errors.password} </p>
                        ) : errors.passVacio ? (
                            <p className={style.error} >{errors.passVacio} </p>
                        ) : (
                            <p className={style.error} >{errors.caracteres} </p>
                        )
                    }
                </div>

                <button type="Submit" className={style.submitButtom}>Submit</button>
            </form>
        </div>
    )
}

export default Form;
