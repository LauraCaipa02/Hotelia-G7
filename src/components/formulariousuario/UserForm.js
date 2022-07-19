
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import './userform.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UserForm() {
	const navigate=useNavigate();
    const [data, setData] = useState({ id: '', tipodoc:'', nombre: '', apellido:'', fnacimiento:'', genero:'', email:'', telefono:'', paisorigen:'', password:'', tipouser:'', img:''})
    
    const handleChange=({target})=> {
        setData({
            ...data,
            [target.name]
            :target.value
        })
    }
    const url = "https://hoteliakuepag7.herokuapp.com/users";

    const handleSubmit= async (e)=> {
        e.preventDefault();
        const response= await axios.post(url,data)
        if (response.status === 201){
            Swal.fire(
                'Guardado',
                `El usuario <strong>${response.data.nombre}</strong> ha sido creado`,
                'success')
                navigate("/");
        }
        else {
			Swal.fire(
                'Error',
                `El usuario <strong>${response.data.nombre}</strong> no fue creado`,
                'error')
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
					<label htmlFor="framework" className="form-label">Tipo de documento</label>

					<Field name="select" as="select" value={data.tipodoc} onChange={handleChange} multiple={false} className={(formik.touched.select && formik.errors.select) ? 'form-invalid' : 'form-select'} type="select">
						<option value="0">Selecciona</option>
						<option value="cc">Cedula de ciudadania</option>
						<option value="ce">Cedula de extranjeria</option>
						<option value="ti">Tarjeta de identidad</option>
						{formik.touched.select && formik.errors.select ? (
							<div className="invalid-feedback">{formik.errors.select}</div>
						) : null}
					</Field></div><div>
						<label htmlFor="idnumber" className='form-label'>Identificación</label>
						<Field name="idnumber" value={data._id} onChange={handleChange} className={(formik.touched.idnumber && formik.errors.idnumber) ? 'form-invalid' : 'form-input'} type="number" />
						{formik.touched.idnumber && formik.errors.idnumber ? (
							<div className="invalid-feedback">{formik.errors.idnumber}</div>
						) : null}
					</div></div>
					<div className="form-group">
						<div>
					<label for="birthday" className='form-label'>Fecha de nacimiento</label>

						<input className='form-input' type="date" name="birthday" placeholder="Selecciona fecha de nacimiento" value={data.fnacimiento} onChange={handleChange}></input>
					
					</div>
					<div>
					<label htmlFor="country" className="form-label">Selecciona el país de origen</label>
					<Field name="country" as="select" multiple={false} value={data.paisorigen} onChange={handleChange} className={(formik.touched.select && formik.errors.select) ? 'form-invalid' : 'form-select'} type="select">
						<option value="react">Nacionalidad</option>
						<option value="ng">Pais</option>
						<option value="vue">Region</option>
						{formik.touched.select && formik.errors.select ? (
							<div className="invalid-feedback">{formik.errors.select}</div>
						) : null}
					</Field>
					</div>
					</div>
					<div className="form-group">
						<div>
						<label htmlFor="name" className="form-label">Nombre</label>
						<Field name="name" value={data.nombre} onChange={handleChange} className={(formik.touched.name && formik.errors.name) ? 'form-invalid' : 'form-input'} type="text" />

						{formik.touched.name && formik.errors.name ? (
							<div className="invalid-feedback">{formik.errors.name}</div>
						) : null}
					</div><div>
						<label htmlFor="lastname" className='form-label'>Apellido</label>
						<Field name="lastname" value={data.apellido} onChange={handleChange} className={(formik.touched.lastname && formik.errors.lastname) ? 'form-invalid' : 'form-input'} type="text" />

						{formik.touched.lastname && formik.errors.lastname ? (
							<div className="invalid-feedback">{formik.errors.lastname}</div>
						) : null}
					</div></div>
					<div className="form-group">
						
					</div>
					<div className="form-group">
						<div>
					<label className="form-label" htmlFor="customFile">Subir foto de perfil (opcional)</label>
					<Field type="file" name="uploadedfile" value={data.img} onChange={handleChange} className="form" id="customFile" />
					</div><div>
						<label className='form-label'>Genero</label>

							<Field className="form-check-input" value={data.genero} onChange={handleChange} type="radio" name="gridRadios" id="gridRadios1" value="male" />
							<label className="form-" htmlFor="gridRadios1">Hombre</label>
						
							<Field className="form-check-input" value={data.genero} onChange={handleChange} type="radio" name="gridRadios" id="gridRadios2" value="female" />
							<label className="form-" htmlFor="gridRadios2">Mujer</label>
						</div>
					</div>
					<div className="form-group">
						<div>
						<label htmlFor="telephone" className="form-label">Telefono</label>
						<Field name="telephone" value={data.telefono} onChange={handleChange} className={(formik.touched.telephone && formik.errors.telephone) ? 'form-invalid' : 'form-input'} type="number" />

						{formik.touched.telephone && formik.errors.telephone ? (
							<div className="invalid-feedback">{formik.errors.telephone}</div>
						) : null}
					</div>
					<div>
					<label htmlFor="email" className='form-label'>Correo electrónico</label>
						<Field name="email" value={data.email} onChange={handleChange} className={(formik.touched.email && formik.errors.email) ? 'form-invalid' : 'form-input'} type="email" />

						{formik.touched.email && formik.errors.email ? (
							<div className="invalid-feedback">{formik.errors.email}</div>
						) : null}
						</div></div>
					
					<div class="form-group">
						<div>
						<label htmlFor="password" className="form-label">Contraseña</label>
					<Field type="password" name="password" value={data.password} onChange={handleChange} className="form-input" placeholder="Contraseña"/>
					</div>
					<div>
					<label htmlFor="password2" className="form-label">Repetir contraseña</label>

					<Field type="password2" name="password2" className="form-input" placeholder="Repita la contraseña"/>
					</div>
					</div>
					<div class="form-group">
						<Field name="terms" className="form-check-input" type="checkbox" id="gridCheck" />
					<label className="form-label" htmlFor="gridCheck">Acepto Terminos y Condiciones</label>
					<Link to= '/tienda'>Consulta aquí los terminos y condiciones de Hotelia</Link>

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