const axios = require('axios');

const getClima = async(lat, lng) => {


    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d727c2eae68bf260b3689fa5ef4f4045`);

    // if (resp.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    // }


    return resp.data.main.temp;


}


module.exports = {
    getClima
}