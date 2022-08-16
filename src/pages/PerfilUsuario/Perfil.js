import Info from '../../components/PerfilUsuario/Perfil';
import Title from '../../components/Titles/Titles';
import Navdash from '../../components/navbar/Navbardash';
import Headerdash from '../../components/header/Headerdash';
import Footerdash from '../../components/Footer/Footerdash';

function PerfilUsuario(){

    return(
        <section className="informacion">
            <Headerdash/>
            <Navdash />
            <div>
                <Title nombre="PERFIL USUARIO"/>
                <Info/>
            </div>
            <Footerdash/>
        </section>
    )
}

export default PerfilUsuario;