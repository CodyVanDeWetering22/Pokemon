import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js"
import { api, pokeapi } from "./AxiosService.js"

class PokemonService {


    async getPokemon() {
        const res = await pokeapi.get('pokemon')
        console.log('got them', res.data);
        AppState.pokemon = res.data.results

    }
    async getPokemonUrl(pokemonurl) {
        const res = await pokeapi.get(`api/pokemon/${pokemonurl}`)
    }
}


export const pokemonService = new PokemonService()