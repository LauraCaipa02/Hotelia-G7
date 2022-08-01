import { useEffect, useState } from "react";
import axios from 'axios'

const useFetch = () => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await axios.get('https://hoteliakuepag7.herokuapp.com/habitaciones');
                setData(res.data);
            } catch(err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
        //for live refresh or reFetch, put url here, but if i want on button click, only remove url
    }, ['https://hoteliakuepag7.herokuapp.com/habitaciones']);

    const reFetch = async () => {
        setLoading(true);

        try {
            const res = await axios.get('https://hoteliakuepag7.herokuapp.com/habitaciones');
            setData(res.data);
        } catch(error) {
            setError(error);
        }
        setLoading(false);
    };
    return {data, loading, error, reFetch};
};

export default useFetch;