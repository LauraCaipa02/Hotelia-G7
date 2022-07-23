import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png'
import { Formik } from 'formik';
import './loginuser.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginUser() {
	const navigate=useNavigate();

    return (
        
        <main className='login-container'>
            <div className='login-box'>
                <img src={Logo} alt='logo' className='login-logo'/>
                <h3 className='login-heading'>Inicia sesión</h3>
                <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Requerido';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Correo electrónico no válido';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    
                    setTimeout(() => {
                        
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                       }, 1000);
                       if (values.email == 'user@hotelia.com' && values.password =='hotelia'){
                    navigate('/dashboard');}
                    else {
                        alert('Usuario o contraseña incorrecto')
                    }
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="login-form">
                        <label htmlFor='email' className='login-label'>Usuario</label>
                        <input
                            className='login-input'
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <label htmlFor='password' className='login-label'>Contraseña</label>
                        <input
                            className='login-input'
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <div className='submit-box'><button className='login-submit' type="submit" disabled={isSubmitting}>
                            Ingresar
                        </button></div>
                    </form>
                )}
            </Formik>
            <p>¿No tienes una cuenta aún? <Link to='/registro'>Registrate aquí</Link></p>

            </div>
            
        </main>
    )
                }
    export default LoginUser;