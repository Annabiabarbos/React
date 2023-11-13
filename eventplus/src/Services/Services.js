import axios from "axios";

//Rota para recurso evento
export const eventsResource = '/Evento'

//Rota para recurso Proximos Eventos
export const nextEventResource = '/Evento/ListarProximos'

//Rota para o recurso Tipos De Evento 
export const eventsTypeResource = '/TiposEvento'


const apiPort = '7118';
const  localApiUri = `https://localhost:${apiPort}/api`;
const externaApiUri = null;

const api = axios.create({
    baseURL : localApiUri
});

export default api;