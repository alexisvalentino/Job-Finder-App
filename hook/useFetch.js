import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, SetError] = useState(null);

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/${endpoint}',
        headers: {
            'X-RapidAPI-Key': 'f03db697admshe8fe8588452b631p17da17jsne0fc4f5815e8',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {query: 'Python Developer in Texas, USA', page: '1', num_pages: '1'},
    };
}