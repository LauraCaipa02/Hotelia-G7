
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './userform.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UserForm() {
	const navigate=useNavigate();
    

    const handleSubmit= async (e)=> {
        e.preventDefault();
        const response= await axios.post("https://hoteliakuepag7.herokuapp.com/users")
        if (response.status === 200){
            Swal.fire(
                'Guardado',
                `El usuario ha sido creado`,
                'success')
                navigate("/");
        }
        else {
			console.log("error");
        }
    }
	const validateForm = values => {
		const errors = {};
		if (!values.name) {
			errors.name = 'Este campo es requerido';
		} else if (values.name.length > 15 && values.name.length < 3) {
			errors.name = 'Ingrese entre 3 a 15 caracteres';
		}
		if (!values.lastname) {
			errors.lastname = 'Este campo es requerido';
		} else if (values.lastname.length > 15 && values.lastname.length < 3) {
			errors.lastname = 'Ingrese entre 3 a 15 caracteres';
		}
		if (!values.email) {
			errors.email = 'Ingrese un correo electrónico';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Dirección de correo no válida';
		}
		if (!values.idnumber) {
			errors.idnumber = 'Ingrese un número de identificación';
		} else if (!/^[0-9]{8,15}$/i.test(values.idnumber)) {
			errors.idnumber = '8 a 15 caracteres';
		}
		if (!values.select == "0") {
			errors.select = 'Selecciona un tipo de documento';
		} 
		if (!values.telephone) {
			errors.telephone = 'Teléfono requerido';
		}else if (!/^[0-9]{7,10}$/i.test(values.telephone)) {
			errors.telephone = 'El número debe ser de 7 a 10 caracteres';
		}

		return errors;
	};


	return (
		<main className="user-form">
			<h2 className='form-title'>Ingresa tus datos y registrate para reservar</h2>

		<Formik
			initialValues={{ id: '', tipodoc:'', nombre: '', apellido:'', fnacimiento:'', genero:'', email:'', telefono:'', paisorigen:'', password:'', tipouser:'', img:'' }}
			onSubmit={(values, { setSubmitting }) => {
				
				setTimeout(() => {
					
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 1000);
			}}
			validate={validateForm}
		>
			{(formik, isSubmitting) => (
				
				<Form className="user-formgroup">
					<div className="form-group">
						<div>
					<label htmlFor="tipodoc" className="form-label">Tipo de documento</label>
					<Field id="tipodoc" name="tipodoc" as="select" multiple={false} className={(formik.touched.select && formik.errors.select) ? 'form-invalid' : 'form-select'} type="select">
						<option value="0">Selecciona</option>
						<option value="cc">Cedula de ciudadania</option>
						<option value="ce">Cedula de extranjeria</option>
						<option value="ti">Tarjeta de identidad</option>
						{formik.touched.select && formik.errors.select ? (
							<div className="invalid-feedback">{formik.errors.select}</div>
						) : null}
					</Field></div><div>
						<label htmlFor="id" className='form-label'>Identificación</label>
						<Field id="id" name="id" className={(formik.touched.idnumber && formik.errors.idnumber) ? 'form-invalid' : 'form-input'} type="number" />
						{formik.touched.idnumber && formik.errors.idnumber ? (
							<div className="invalid-feedback">{formik.errors.idnumber}</div>
						) : null}
					</div></div>
					<div className="form-group">
						<div>
					<label for="fnacimiento" className='form-label'>Fecha de nacimiento</label>

						<Field id="fnacimiento" className='form-input' type="date" name="fnacimiento" placeholder="Selecciona fecha de nacimiento"></Field>
					
					</div>
					<div>
					<label htmlFor="paisorigen" className="form-label">Selecciona el país de origen</label>
					<Field id="paisorigen" name="paisorigen" as="select" multiple={false} className={(formik.touched.select && formik.errors.select) ? 'form-invalid' : 'form-select'} type="select">
						<option value="1">Nacionalidad</option>
						<option value="2">Pais</option>
						<option value="3">Region</option>
						{formik.touched.select && formik.errors.select ? (
							<div className="invalid-feedback">{formik.errors.select}</div>) : null}</Field>
					</div>
					</div>
					<div className="form-group">
						<div>
						<label htmlFor="nombre" className="form-label">Nombre</label>
						<Field id="nombre" name="nombre" className={(formik.touched.name && formik.errors.name) ? 'form-invalid' : 'form-input'} type="text" />

						{formik.touched.name && formik.errors.name ? (
							<div className="invalid-feedback">{formik.errors.name}</div>) : null}
					</div><div>
						<label htmlFor="apellido" className='form-label'>Apellido</label>
						<Field id="apellido" name="apellido" className={(formik.touched.lastname && formik.errors.lastname) ? 'form-invalid' : 'form-input'} type="text" />

						{formik.touched.lastname && formik.errors.lastname ? (
							<div className="invalid-feedback">{formik.errors.lastname}</div>) : null}
					</div></div>
					<div className="form-group">
						
					</div>
					<div className="form-group">
						<div>
					<label className="form-label" htmlFor="img">Subir foto de perfil (opcional)</label>
					<Field id="img" type="file" name="img" className="form" />
					</div><div>
						<label className='form-label' htmlFor='genero'>Genero</label>

							<Field id="genero" className="form-check-input" type="radio" name="genero" value="hombre" />
							<label className="form-" htmlFor="gridRadios1">Hombre</label>
						
							<Field id="genero1" className="form-check-input" type="radio" name="genero" value="mujer" />
							<label className="form-" htmlFor="gridRadios2">Mujer</label>
						</div>
					</div>
					<div className="form-group">
						<div>
						<label htmlFor="telefono" className="form-label">Telefono</label>
						<Field id="telefono" name="telefono" className={(formik.touched.telephone && formik.errors.telephone) ? 'form-invalid' : 'form-input'} type="number" />

						{formik.touched.telephone && formik.errors.telephone ? (
							<div className="invalid-feedback">{formik.errors.telephone}</div>) : null}
					</div>
					<div>
					<label htmlFor="email" className='form-label'>Correo electrónico</label>
						<Field id="email" name="email" className={(formik.touched.email && formik.errors.email) ? 'form-invalid' : 'form-input'} type="email" />

						{formik.touched.email && formik.errors.email ? (
							<div className="invalid-feedback">{formik.errors.email}</div>
						) : null}
						</div></div>
					
					<div class="form-group">
						<div>
						<label htmlFor="password" className="form-label">Contraseña</label>
					<Field id="password" type="password" name="password" className="form-input" placeholder="Contraseña"/>
					</div>
					<div>
					<label htmlFor="password2" className="form-label">Repetir contraseña</label>

					<Field id="password2" type="password2" name="password2" className="form-input" placeholder="Repita la contraseña"/>
					</div>
					</div>
					<div class="form-group">
						<Field id="checkbox" name="checkbox" className="form-check-input" type="checkbox"/>
					<label className="form-label" htmlFor="checkbox">Acepto Terminos y Condiciones</label>
					<Link to= '/terminos'>Consulta aquí los terminos y condiciones de Hotelia</Link>

					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary" disabled={isSubmitting} onClick={handleSubmit}>{isSubmitting ? "Cargando..." : "Enviar"} </button>
					</div>
				</Form>
			)
			}
		</Formik >
		</main>
	);
};

export default UserForm;