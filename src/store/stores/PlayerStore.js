import alt from '../alt';
import PlayerActions from '../actions/PlayerActions';
import { checkNaN } from '../utils/validate';

class PlayerStore {
    constructor() {
        this.bindListeners({
            handleGuessNumber: PlayerActions.GUESS_NUMBER
        });

        this.state = {
            guessedNumber: 0,
            history: [],
            isNumber: false
        };
    }

    handleGuessNumber(response) {
        const isNumber = checkNaN(response.guessedNumber);

        this.setState({
            guessedNumber: response.guessedNumber,
            history: this.state.history.concat(response),
            isNumber: isNumber
        });
    }
}

export default alt.createStore(PlayerStore, 'PlayerStore');