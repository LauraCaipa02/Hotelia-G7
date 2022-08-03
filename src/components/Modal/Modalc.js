import React from'react';
import styled from'styled-components';
import './Modal.css';
import Boton from '../Botones/Botones';


const Modalc=({estado,cambiarEstado,title,tipo,placeholder,placeholdertwo,placeholderthree,name,labeltwo,label,labelthree,estadox})=>{
    return(
        <>
        {estado &&
            <Overlay>
                <ContenedorModal>
                    <h1 className='title titlemodal'>{title}</h1>
                    <form className='formc'>
                        <div  className='containerc_li'><label htmlFor={name} valido={estadox} className="label_modal">{label}</label>
                        <input
                        type={tipo} 
                        placeholder={placeholder}
                        value={estadox}
                        className="input_modal input_modals"
                        />
                        </div>

                        <div className='containerc_li'><label htmlFor={name} valido={estadox} className="label_modal">{labeltwo}</label>
                        <input
                        type={tipo} 
                        placeholder={placeholder}
                        value={estadox}
                        className="input_modal input_modals"
                        />
                        </div>

                        <div className='containerc_li'><label htmlFor={name} valido={estadox} className="label_modal">{labelthree}</label>
                        <input
                        type={tipo} 
                        placeholder={placeholder}
                        value={estadox}
                        className="input_modal input_modals"
                        />
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
export default Modalc;

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
    z-index:100;
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
