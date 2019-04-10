import alt from '../alt';

class AiActions {
    constructor() {
        this.generateActions('initGame', 'evalGuess');
    }
    // initGame() {
    //     return {  };
    // }
    // nan() {
    //     return {  };
    // }
}

export default alt.createActions(AiActions);