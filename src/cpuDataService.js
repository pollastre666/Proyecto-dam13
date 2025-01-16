import axios from 'axios';

const API_URL = 'https://cpu-data.p.rapidapi.com/cpus?page=1';
const API_KEY = '30815c02b2msh11eb30098ae03f5p14fc34jsncddef1a4dadc'; 

const getCPUs = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'cpu-data.p.rapidapi.com',
            },
        });
        console.log('Datos de la API:', response.data); 
        return response.data;
    } catch (error) {
        console.error('Error al obtener CPUs:', error); 
        throw error; 
    }
};

export default getCPUs;
