import React from'react';
import styled from'styled-components';
import './Modal.css';
import Boton from '../Botones/Botones';


const Modal=({estado,cambiarEstado,title,tipo,tipodos,placeholder,placeholdertwo,placeholderthree,name,labeltwo,label,estadox})=>{
    return(
        <>
        {estado &&
            <Overlay>
                <ContenedorModal>
                    <h1 className='title titlemodal'>{title}</h1>
                    <form className='formc'>
                        <div><label htmlFor={name} valido={estadox} className="label_modal">{label}</label>
                        <input
                        type={tipo} 
                        placeholder={placeholder}
                        value={estadox}
                        className="input_modal input_modals"
                        />
                        </div>

                        <div><label htmlFor={name} valido={estadox} className="label_modal">{labeltwo}</label>
                        <div className='container_li'>
                        <select className="input_modal input_modalp">
                        <option>+500</option>
                        <option>+51 </option>
                        <option>+54 </option>
                        <option>+55 </option>
                        <option>+56 </option>
                        <option selected>+57 </option>
                        <option>+58 </option>
                        <option>+591 </option>
                        <option>+592</option>
                        <option>+593</option>
                        <option>+594</option>
                        <option>+595 </option>
                        <option>+597 </option>
                        <option>+598 </option>
                        </select>
                        <input
                        type={tipo} 
                        placeholder={placeholderthree}
                        value={estadox}
                        className="input_modal input_modalt"
                        />
                        </div>
                        </div>

                        <div className='container_btn_pu'>
                            <Boton click={()=>cambiarEstado(false)} texto={"Volver"} clase={"btn_blue btn_blue_modal"}/>
                            <Boton texto={"Guardar"}  clase={"btn_oranje btn_oranje_modal"}/>
                        </div>  
                    </form>
                </ContenedorModal>
            </Overlay>
        }
        </>
    );
}
export default Modal;
const Overlay=styled.div`
    width:100vw;
    height:110vh;
    position:fixed;
    top:0;
    left:0;
    background:#19191966;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (min-width: 1200px){
		height:100vh;
	}
    `;
const ContenedorModal=styled.div`
    width:250px;
    min-height:100px;
    background:#fff;
    position:relative;
    border-radius: 5px;
    box-shadow:rgba(100,100,111,0.2)0px 7px 29px 0px;
    padding:20px;
    @media (min-width: 1200px){
		width:520px;
	}
    `;
