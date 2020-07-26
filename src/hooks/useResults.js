import { useState, useEffect } from "react";
import zomato from "../api/zomato";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, seterrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            // Wait for the response and assign to variable once got response
            const response = await zomato.get('/search', {
                params: {
                    entity_id: 7,
                    entity_type: 'city',
                    q: searchTerm
                }
            });
            console.log('Success!!!')
            setResults(response.data.restaurants);
            seterrorMessage('');
        } catch (error) {
            seterrorMessage('Sorry, Something went wrong!');
        }
    };

    useEffect(() => {
        searchApi('pizza');
    }, []);

    return [searchApi, results, errorMessage];
};