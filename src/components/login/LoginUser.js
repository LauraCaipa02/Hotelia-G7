import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png'
import { Formik } from 'formik';
import './loginuser.css';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import {useState, useEffect} from "react";
// import Cookies from 'universal-cookie';

function LoginUser() {
	const navigate=useNavigate();

    // const url="https://hoteliakuepag7.herokuapp.com/users";

    // const getData=async()=>{
    //     const response=axios.get(url);
    //     return response;
    // }

    // const cookies = new Cookies();
    
    // const [userEmail, cambiarUserEmail] = useState({campo: ''});
    // const [userPassword, cambiarUserPassword] = useState({campo: ''});

    // // const handleChangeModal=({target})=>{ //tarteg permite generar un nuevo evento
    // //     cambiarEmail({...email,[target.name]:target.value
    // //     });
    // // }

    // const [dataModal,setDataModal]=useState({});

    // const handleChangeModal=({target})=>{ //tarteg permite generar un nuevo evento
    //     cambiarUserEmail({...userEmail,[target.name]:target.value
    //     });
    // }
    // const Login=async(e)=>{
    //     e.preventDefault();

    //     let email=userEmail.campo;
    //     let password=userPassword.campo;

    //     await axios.get(url,{params: {email, password}})
    //     .then(response=>{
    //         console.log(email+"hola")
    //         console.log(response.data)
    //     return response.data;})

    //     .then(response=>{
    //         if (response.length>0) {
    //             console.log(response)
                
    //             var respuesta=response[0];
    //             cookies.set('_id', respuesta._id, {path: "/perfil"});
    //             cookies.set('tipodoc', respuesta.tipodoc, {path: "/perfil"});
    //             cookies.set('numdoc', respuesta.numdoc, {path: "/perfil"});
    //             cookies.set('nombre', respuesta.nombre, {path: "/perfil"});
    //             cookies.set('apellido', respuesta.apellido, {path: "/perfil"});
    //             cookies.set('fnacimiento', respuesta.fnacimiento, {path: "/perfil"});
    //             cookies.set('genero', respuesta.genero, {path: "/perfil"});
    //             cookies.set('email', respuesta.email, {path: "/perfil"});
    //             cookies.set('telefono', respuesta.telefono, {path: "/perfil"});
    //             cookies.set('paisorigen', respuesta.paisorigen, {path: "/perfil"});
    //             cookies.set('password', respuesta.password, {path: "/perfil"});
    //             cookies.set('tipouser', respuesta.tipouser, {path: "/perfil"});
    //             cookies.set('img', respuesta.img, {path: "/perfil"});
    //             cookies.set('reservas', respuesta.reservas, {path: "/perfil"});

    //             console.log(respuesta)

    //             console.log(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
    //             //window.location.href="./perfil";

    //             cambiarUserEmail({campo: ''});
    //             cambiarUserPassword({campo: ''});


    //     }else{
    //         alert('El usuario o la contraseña no son correctos');
    //     }
    // })
    // }
    
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
                    if (values.email === 'marioyepes@gmail.com' && values.password ==='Administrador'){
                    navigate('/admin/habitaciones');}
                    else if (values.email === 'benitomz@gmail.com' && values.password ==='Usuario'){
                    navigate('/habitaciones');
                    }else{
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
            <div className='login-register'>
            <p >¿No tienes una cuenta aún? <Link to='/registro' >Registrate aquí</Link></p>
            </div>
            </div>
            
        </main>
    )
                }
    export default LoginUser;