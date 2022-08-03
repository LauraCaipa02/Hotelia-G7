import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCamera, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { Link, useNavigate } from 'react-router-dom'
import './searchroom.css';
import { TodasHabitaciones } from '../../functions/funciones'


function SearchBar () {

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        pet: 0
    })

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === 'increment' ? options[name] + 1 : options[name] - 1,
            }
        })
    }


    const handleSearch = () => {
        navigate("/busqueda", { state: { date, options } });
    }

    return (
        <main className='search-bar'>
            <div className="search-container">
                        <div className="search-title">
                            <h3>Haz tu reservación</h3>
                        </div>
                        <div>
                            <div className="search-content">                            
                                <div className="search-item">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} a ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

                                    {openDate && (<DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date} className="date"
                                        minDate={new Date()}
                                    />)
                                    }
                                </div>

                                <div className="search-item">
                                    <FontAwesomeIcon icon={faPerson} />
                                    <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adultos - ${options.children} niños - ${options.pet} mascotas`}</span>
                                    {
                                        openOptions && (
                                            <div className="options-list">
                                                <div className="options-item">
                                                    <span>Adultos</span>
                                                    <div className="options-button">
                                                        <button onClick={() => handleOption("adult", "decrement")} className='optionsBtn' disabled={options.adult <= 1}>-</button>
                                                        <span>{options.adult}</span>
                                                        <button onClick={() => handleOption("adult", "increment")} className='optionsBtn'>+</button>
                                                    </div>
                                                </div>
                                                <div className="options-item">
                                                    <span>Niños</span>
                                                    <div className="options-button">
                                                        <button onClick={() => handleOption("children", "decrement")} className='optionsBtn' disabled={options.children <= 0}> - </button>
                                                        <span>{options.children}</span>
                                                        <button onClick={() => handleOption("children", "increment")} className='optionsBtn'>+</button>
                                                    </div>
                                                </div>
                                                <div className="options-item">
                                                    <span>Mascotas</span>
                                                    <div className="options-button">
                                                        <button onClick={() => handleOption("pet", "decrement")} className='optionsBtn' disabled={options.pet <= 0}> - </button>
                                                        <span>{options.pet}</span>
                                                        <button onClick={() => handleOption("pet", "increment")} className='optionsBtn'>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="search-item">
                                    <button className='btn-search' onClick={handleSearch}>Buscar</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="img-bground"></div>
                        </main>
    )
}

export default SearchBar;
