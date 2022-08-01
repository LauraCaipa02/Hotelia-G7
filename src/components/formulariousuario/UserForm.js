import { Formik } from 'formik';
import './userform.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CountryDropdown } from 'react-country-region-selector';

function UserForm() {
	
	const navigate = useNavigate();


	const validateForm = values => {
		const errors = {};
		if (!values.password) {
			errors.password = 'Contraseña requerida';
		} else if (values.password.length > 20 && values.password.length < 7) {
			errors.password = 'Minimo 7 caracteres';
		}
		
		if (!values.nombre) {
			errors.nombre = 'Este campo es requerido';
		} else if (values.nombre.length > 15 && values.nombre.length < 3) {
			errors.nombre = 'Ingrese entre 3 a 15 caracteres';
		}
		if (!values.apellido) {
			errors.apellido = 'Este campo es requerido';
		} else if (values.apellido.length > 15 && values.apellido.length < 3) {
			errors.apellido = 'Ingrese entre 3 a 15 caracteres';
		}
		if (!values.email) {
			errors.email = 'Ingrese un correo electrónico';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Dirección de correo no válida';
		}
		if (!values._id) {
			errors._id = 'Ingrese un número de identificación';
		} else if (!/^[0-9]{8,15}$/i.test(values._id)) {
			errors._id = '8 a 15 caracteres';
		}
		if (values.tipodoc == 0) {
			errors.tipodoc = 'Selecciona un tipo de documento';
		}
		if (!values.paisorigen === "0") {
			errors.paisorigen = 'Selecciona un pais';
		}
		if (!values.telefono) {
			errors.telefono = 'Teléfono requerido';
		} else if (!/^[0-9]{7,10}$/i.test(values.telefono)) {
			errors.telefono = 'El número debe ser de 7 a 10 caracteres';
		}
		
		return errors;
	};


	return (
		<main className="user-form">
			<h2 className='form-title'>Ingresa tus datos y registrate para reservar</h2>
			<Formik
				initialValues={{ _id: '', tipodoc: '', nombre: '', apellido: '', fnacimiento: '', genero: '', email: '', telefono: '', paisorigen: 'Colombia', password: '', tipouser: 'huesped', img: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' }}
				validate={validateForm}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
					console.log(JSON.stringify(values, null, 2));
					if(Swal.fire({
						title: '¿Continuar con el envío de la información?',
						showDenyButton: true,
						showCancelButton: true,
						confirmButtonText: 'Si',
						cancelButtonText: 'Cancelar', 
						denyButtonText: `No`,
					  }).then((result) => {
						/* Read more about isConfirmed, isDenied below */
						if (result.isConfirmed) {
						axios.post('https://hoteliakuepag7.herokuapp.com/users', values)
						Swal.fire('Formulario enviado', '', 'success')
						} else if (result.isDenied) {
						Swal.fire('La información no fue enviada', '', 'info')
						}
					  })) ;
					setSubmitting(false);
					}, 1000);
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

					<form onSubmit={handleSubmit} className="user-formgroup">
						<div className="form-group">
							<div>
								<label htmlFor="tipodoc" className="form-label">Tipo de documento</label>
								<select id="tipodoc" name="tipodoc" onChange={handleChange} onBlur={handleBlur} value={values.tipodoc} className={(touched.tipodoc && errors.tipodoc) ? 'form-invalid' : 'form-select'} type="select" required>
									<option value="0">Selecciona</option>
									<option value="Cedula de ciudadania">Cedula de ciudadania</option>
									<option value="Cedula de extranjeria">Cedula de extranjeria</option>
									<option value="Tarjeta de identidad">Tarjeta de identidad</option>
									<option value="NIP">NIP</option>
									<option value="Pasaporte">Pasaporte</option>
									<option value="Permiso permanencia">Permiso especial de permanencia</option>
								</select>
								{touched.tipodoc && errors.tipodoc ? (
									<div className="invalid-feedback">{errors.tipodoc}</div>
								) : null}</div><div>
								<label htmlFor="_id" className='form-label'>Identificación</label>
								<input id="_id" name="_id" onChange={handleChange} onBlur={handleBlur} value={values._id} className={(touched._id && errors._id) ? 'form-invalid' : 'form-input'} type="number" />
								{touched._id && errors._id ? (
									<div className="invalid-feedback">{errors._id}</div>
								) : null}
							</div></div>
						<div className="form-group">
							<div>
								<label for="fnacimiento" className='form-label'>Fecha de nacimiento</label>
								<input id="fnacimiento" onChange={handleChange} onBlur={handleBlur} value={values.fnacimiento} className='form-input' type="date" name="fnacimiento" placeholder="Selecciona fecha de nacimiento" required></input>

							</div>
							<div>
								<label htmlFor="paisorigen" className="form-label">Selecciona el país de origen</label>
								<CountryDropdown id="paisorigen" name="paisorigen" value={values.paisorigen} onChange={(_, e) => handleChange(e)} onBlur={handleBlur} className={(touched.paisorigen && errors.paisorigen) ? 'form-invalid' : 'form-select'}/>
									{touched.paisorigen && errors.paisorigen ? (
										<div className="invalid-feedback">{errors.paisorigen}</div>
									) : null}
							</div>
						</div>
						<div className="form-group">
							<div>
								<label htmlFor="nombre" className="form-label">Nombre</label>
								<input id="nombre" name="nombre" onChange={handleChange} onBlur={handleBlur} value={values.nombre} className={(touched.nombre && errors.nombre) ? 'form-invalid' : 'form-input'} type="text" />
								{touched.name && errors.name ? (
									<div className="invalid-feedback">{errors.nombre}</div>
								) : null}
							</div><div>
								<label htmlFor="apellido" className='form-label'>Apellido</label>
								<input id="apellido" name="apellido" onChange={handleChange} onBlur={handleBlur} value={values.apellido} className={(touched.apellido && errors.apellido) ? 'form-invalid' : 'form-input'} type="text" />
								{touched.apellido && errors.apellido ? (
									<div className="invalid-feedback">{errors.apellido}</div>
								) : null}
							</div></div>
						
						<div className="form-group">
							<div>
								<label className="form-label" htmlFor="img">Subir foto de perfil (opcional)</label>
								<input id="img" type="file" onChange={handleChange} onBlur={handleBlur} name="img" className="form" placeholder='holi'/>
							</div><div>
								<label className='form-label' htmlFor='genero'>Genero</label>
								<input id='genero' name='genero' onChange={handleChange} onBlur={handleBlur} value='hombre' className="form-check-input" type="radio"/>
								<label className="form-" htmlFor="gridRadios1">Hombre</label>
								<input id='genero1' name='genero' onChange={handleChange} onBlur={handleBlur} value='mujer' className="form-check-input" type="radio" />
								<label className="form-" htmlFor="gridRadios2">Mujer</label>
								<input id='genero0' name='genero' onChange={handleChange} onBlur={handleBlur} value='otro' className="form-check-input" type="radio" />
								<label className="form-" htmlFor="gridRadios2">Otro</label>
							</div>
						</div>
						<div className="form-group">
							<div>
								<label htmlFor="telefono" className="form-label">Telefono</label>
								<input id="telefono" name="telefono" onChange={handleChange} onBlur={handleBlur} value={values.telefono} className={(touched.telefono && errors.telefono) ? 'form-invalid' : 'form-input'} type="number" />
								{touched.telefono && errors.telefono ? (
									<div className="invalid-feedback">{errors.telefono}</div>
								) : null}
							</div>
							<div>
								<label htmlFor="email" className='form-label'>Correo electrónico</label>
								<input id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={(touched.email && errors.email) ? 'form-invalid' : 'form-input'} type="email" />

								{touched.email && errors.email ? (
									<div className="invalid-feedback">{errors.email}</div>
								) : null}
							</div></div>

						<div className="form-group">
							<div>
								<label htmlFor="password" className="form-label">Contraseña</label>
								<input id="password" type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} name="password" className={(touched.password && errors.password) ? 'form-invalid' : 'form-input'} placeholder="Contraseña" />
								{touched.password && errors.password ? (
									<div className="invalid-feedback">{errors.password}</div>
								) : null}
							</div>
							<div>
								<label htmlFor="confirm" className="form-label">Repetir contraseña</label>
								<input id="confirm" type="password" name="confirm" className={(touched.confirm && errors.confirm) ? 'form-invalid' : 'form-input'}  placeholder="Repita la contraseña" />
								{touched.confirm && errors.confirm ? (
									<div className="invalid-feedback">{errors.confirm}</div>
								) : null}
							</div>
							
						</div>
						<div className="form-group">
							<input id="checkbox" name="checkbox" className="form-check-input" type="checkbox" required/>
							<label className="form-label" htmlFor="checkbox">Acepto Terminos y Condiciones</label>
							<Link to='/terminos'>Consulta aquí los terminos y condiciones de Hotelia</Link>
							<div className='user-hidden'>
								<label htmlFor="tipouser" className="form-label">Usuario</label>
								<input id="tipouser" type="text" name="tipouser" className="form-input" placeholder="huesped" />
							</div>
						</div>
						<div className="form-group">
							<button type="submit" className="form-submit" disabled={isSubmitting}>{isSubmitting ? "Cargando..." : "Enviar"} </button>
						</div>
					</form>
                )}
            </Formik>
		</main>
	);
};

export default UserForm;