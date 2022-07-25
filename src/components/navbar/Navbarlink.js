import {faBed,faUserAstronaut,faCalendarCheck} from '@fortawesome/free-solid-svg-icons';

const navbarLink = [
    {
    icon:{faBed},
    title: 'Perfil',
    to: '/perfil',
    },
    {
    icon:{faUserAstronaut},
    title: 'Mis Reservas',
    to: '/Reservas',
    },
    {
    icon:{faCalendarCheck},
    title: 'Habitaciones Disponibles',
    to: '/habitaciones',
    },
  ]
  
  export default navbarLink