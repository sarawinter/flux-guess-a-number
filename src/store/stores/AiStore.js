import alt from '../alt';
import AiActions from '../actions/AiActions';
import { checkNaN } from '../utils/validate';

class AiStore {
    constructor() {
        this.bindListeners({
            handleInitGame: AiActions.INIT_GAME,
            evaluateGuess: AiActions.EVAL_GUESS,
        });

        this.state = {
            correctNumber: 0,
            gameHasStarted: false,
            gameIsWon: false,
            message: ''
        };
    }

    handleInitGame() {
        const randomNumber = Math.floor((Math.random() * 1000) + 1);

        this.setState({
            correctNumber: randomNumber,
            gameHasStarted: true
        });
    }

    evaluateGuess(currentGuess) {
        const correctNumber = this.state.correctNumber;
        const isNumber = checkNaN(currentGuess);

        if (isNumber) {
            const nr = parseInt(currentGuess);

            if (nr === correctNumber) {
                this._handleWin();
            } else if (nr > correctNumber) {
                this._handleTooHigh();
            } else if (nr < correctNumber) {
                this._handleTooLow();
            }
        } else {
            this._handleNAN();
        }
    }

    _handleNAN() {
        this.setState({
            ...this.state,
            message: 'That is not a number! :('
        });
    }

    _handleWin() {
        this.setState({
            ...this.state,
            gameIsWon: true,
            message: 'That is the correct number! :D'
        });
    }

    _handleTooHigh() {
        this.setState({
            ...this.state,
            message: 'That number is too high.'
        });
    }

    _handleTooLow() {
        this.setState({
            ...this.state,
            message: 'That number is too low.'
        });
    }
}

export default alt.createStore(AiStore, 'AiStore');