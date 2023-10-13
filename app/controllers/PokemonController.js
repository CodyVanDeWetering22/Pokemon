import { AppState } from "../AppState.js";
import { pokemonService } from "../services/PokemonService.js";
import { setHTML } from "../utils/Writer.js";




function _drawPokemon() {
    const pokemon = AppState.pokemon
    console.log('do i ever run', pokemon);
    let content = ''
    pokemon.forEach(pokeman => content += `<div>
    <button onclick="app.PokemonController.getPokemonBy('${pokeman.url}')" class="w-100 m-2 btn btn-warning">
    ${pokeman.name}
    </button>
</div>`)
    console.log(content);
    setHTML('pokemon', content)


}


export class PokemonController {
    constructor() {
        console.log('loaded');
        AppState.on('pokemon', _drawPokemon)
        this.getpokemon()
    }
    async getpokemon() {
        try {
            await pokemonService.getPokemon()
        } catch (error) {

        }
    }


    async getPokemonBy(pokemonurl) {
        try {
            await pokemonService.getPokemonUrl(pokemonurl)
        } catch (error) {

        }
    }
}