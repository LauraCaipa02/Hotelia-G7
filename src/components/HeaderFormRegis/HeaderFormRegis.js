import './HeaderFormRegis.css';
import logo from '../../assets/img/logo.png';



function HeaderFormRegis(){
    return(
        <div className='PrincipalHeaderFormRegis'>
            <div className='TitleHeaderFormRegis'>
                <h1>REGISTRO HABITACIONES</h1>
            </div>
            <div className='LogoHeaderFormRegis'>
            <img src={logo} />
            </div>

            
        </div>
    );



}

export {HeaderFormRegis};

function HeaderFormReserva(){
    return(
        <div className='PrincipalHeaderFormRegis'>
            <div className='TitleHeaderFormRegis'>
                <h1>RESERVA HABITACIONES</h1>
            </div>
            <div className='LogoHeaderFormRegis'>
            <img src={logo} />
            </div>

            
        </div>
    );



}

export  {HeaderFormReserva};