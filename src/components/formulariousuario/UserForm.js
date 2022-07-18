import Input from './UserInput';
import React from 'react';
import { useState } from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, MensajeExito, MensajeError} from './validacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function UserForm() {
	const [lugar, cambiarLugar] = useState({campo: '', valido: null});
	const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
	const [postal, cambiarPostal] = useState({campo: '', valido: null});
	const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		lugar: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		direccion: /^[#a-zA-Z0-9\s_.+-]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		postal: /^\d{5,10}$/, // 7 a 14 numeros.
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valido === 'true' &&
			nombre.valido === 'true' &&
			apellido.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			lugar.valido === 'true' &&
			direccion.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			cambiarUsuario({campo: '', valido: ''});
			cambiarNombre({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});
			cambiarCorreo({campo: '', valido: null});
			cambiarTelefono({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<div className="shop-box-second">
			<h2>Información de contacto</h2>
			<h3>¿Ya tienes una cuenta? Inicia sesión</h3>
			<div className='shop-item'>
			<input type="email" placeholder='Ingrese su correo' className='email-input'></input>
				<button type="submit" className='submit-button'>Iniciar sesión</button></div>
			</div>

				
				<div className="shop-title"><h2><i class="fa-solid fa-circle-user"></i>  Creación de usuario y datos de envío</h2></div>
			<Formulario action="" onSubmit={onSubmit}>
				<div>
				<select name="ciudad1" id="shop-place">
                            <option value="0" defaultValue>Elige un departamento</option>
                            <optgroup label="Centro">
                                <option value="1">Distrito Capital</option>
                                <option value="2">Cundinamarca</option>
                                <option value="3">Antioquia</option>
                                <option value="4">Santander</option>
                                <option value="5">Tolima</option>
                                <option value="6">Huila</option>
                                <option value="7">Boyacá</option>
                                <option value="8">Risaralda</option>
                                <option value="9">Caldas</option>
                                <option value="10">Quindío</option>
                                <option value="11">Norte de Santander</option>
                            </optgroup>
                            <optgroup label="Norte">
                                <option value="12">Cordoba</option>
                                <option value="13">Sucre</option>
                                <option value="14">Bolivar</option>
                                <option value="15">Cesar</option>
                                <option value="16">Magdalena</option>
                                <option value="17">Atlántico</option>
                                <option value="18">La Guajira</option>
                            </optgroup>
                            <optgroup label="Oriente">
                                <option value="19">Meta</option>
                                <option value="20">Arauca</option>
                                <option value="21">Casanare</option>
                                <option value="22">Vichada</option>
                            </optgroup>
                            <optgroup label="Occidente">
                                <option value="23">Cauca</option>
                                <option value="24">Nariño</option>
                                <option value="25">Valle del Cauca</option>
                                <option value="26">Chocó</option>
                            </optgroup>
                            <optgroup label="Sur">
                                <option value="27">Putumayo</option>
                                <option value="28">Guaviare</option>
                                <option value="29">Vaupés</option>
                                <option value="30">Caquetá</option>
                                <option value="31">Guainía</option>
                            </optgroup>
                        </select>
						</div>
						<div>
						<select name="ciudad1" id="shop-place">
                            <option value="0" defaultValue>Tipo de zona</option>
                            <option value="1" >Urbana - ciudad capital</option>
                            <option value="2" >Urbana - municipio</option>
                            <option value="3" >Rural</option>
							</select>
						</div>
				<Input
					estado={lugar}
					cambiarEstado={cambiarLugar}
					tipo="text"
					label="Ciudad - Municipio"
					placeholder="Ubicación"
					name="usuario"
					leyendaError="La ubicación solo puede contener letras, guiones y espacios."
					expresionRegular={expresiones.lugar}
				/>
				<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Dirección de envío"
					placeholder="Dirección"
					name="usuario"
					leyendaError="La dirección solo puede contener letras, guiones y espacios."
					expresionRegular={expresiones.direccion}
				/>
				<Input
					estado={postal}
					cambiarEstado={cambiarPostal}
					tipo="text"
					label="Código postal"
					placeholder="000000"
					name="postal"
					leyendaError="Ingrese un código de 6 a 10 dígitos"
					expresionRegular={expresiones.telefpostalono}
				/>
				<Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
					label="Nombre de usuario"
					placeholder="Usuario"
					name="usuario"
					leyendaError="El usuario solo puede contener letras, guiones y espacios."
					expresionRegular={expresiones.usuario}
				/>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="Nombre del comprador"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Apellido"
					name="usuario"
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.apellido}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder="Fijo o celular"
					name="telefono"
					leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
					expresionRegular={expresiones.telefono}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="ejemplo@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>
				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					tipo="password"
					label="Repetir Contraseña"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
				/>
				
				
				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox"
							name="terminos"
							id="terminos"
							checked={terminos} 
							onChange={onChangeTerminos}
						/>
						Acepto la política de tratamiento de datos personales, términos y condiciones 
					</Label>
				</ContenedorTerminos>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
				<div className='button-cart'><button className="submit-button">Guardar datos</button></div>
					{formularioValido === true && <Link to="pago"><MensajeExito>Formulario enviado exitosamente!</MensajeExito></Link>}
				</ContenedorBotonCentrado>
			</Formulario>
		</main>
	);
}
 
export default UserForm;