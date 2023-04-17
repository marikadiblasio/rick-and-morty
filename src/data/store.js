// const characters = [];

// export { characters} NN VA BENE
//QUI SOLO I DATA CHE DEVONO ESSERE CONVIDISI PER TUTTA L'APPLICAZIONE:
//- BASEURL DELL'API;

import { reactive} from 'vue';
export const store = reactive({
    CharacterList: [],
    baseUrl: 'https://rickandmortyapi.com/api/',
    endpoint: 'character' //posso inizializzarlo come stringa vuota e poi nella mounted di ogni componente metto la chiamata che mi serve
}) //così rendo reattivo qualunque cosa passo tra le graffe del "metodo" reactive dell'oggetto store