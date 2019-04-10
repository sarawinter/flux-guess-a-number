import alt from '../alt';

class PlayerActions {
    guessNumber(guessedNumber) {
        return { guessedNumber };
    }
}

export default alt.createActions(PlayerActions);