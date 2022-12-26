import axios from 'axios';



export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e4efee0ce0msh7987880bce7513cp1725e9jsn21a636f8dcf7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }

    });
    return data;

};
