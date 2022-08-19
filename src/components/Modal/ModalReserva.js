import React from'react';
import styled from'styled-components';
import './Modal.css';
import Boton from '../Botones/Botones';


const ModalReserva= ({
    children,
    estado,
    cambiarEstado,
    onSubmit,
    title,
    textbb,
    textbo
}) => {

    return(
        <>
        {estado &&
            <Overlay>
                <ContenedorModal>
                    <h1 className='title titlemodal'>{title}</h1>
                    <form className='formc' onSubmit={onSubmit} >
                        {children}
                        <div className="container_btn_pu">
                            <Boton
                            click={() => cambiarEstado(false)}
                            texto={textbb}
                            clase={"btn_blue btn_blue_modal"}
                            />
                            <Boton 
                            texto={textbo} 
                            clase={"btn_oranje btn_oranje_modal"}
                            type={"submit"}
                            />
                        </div>
                    </form>
                </ContenedorModal>
            </Overlay>
        }
        </>
    );
}
export default ModalReserva;

const Overlay = styled.div`
width: 100vw;
height: 110vh;
position: fixed;
top: 0;
left: 0;
background: #1a1a1a6f;
display: flex;
align-items: center;
justify-content: center;
z-index:100;

@media (min-width: 1200px) {
    height: 100vh;
}`;

const ContenedorModal = styled.div`
width: 250px;
min-height: 100px;
background: var(--cream-color);
position: relative;
border-radius: 5px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: 20px;

@media (min-width: 1024px) {
    width: 1000px;
}`;
