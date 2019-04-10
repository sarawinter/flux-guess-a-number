import React, { Component } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import './_app.css';

import AiStore from './store/stores/AiStore';
import PlayerStore from './store/stores/PlayerStore';

import AiActions from './store/actions/AiActions';
import PlayerActions from './store/actions/PlayerActions';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    static getStores() {
        return [PlayerStore, AiStore];
    }

    static getPropsFromStores() {
        return {player: PlayerStore.getState(), ai: AiStore.getState()};
    }

    componentDidMount() {
        AiActions.initGame();
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        PlayerActions.guessNumber(this.state.number);
        AiActions.evalGuess(this.state.number);
    }

    render() {

        const history = this.props.player.history.map((item, index) => <li key={index}>{item.guessedNumber}</li>);
        const disabled = this.props.ai.gameIsWon;

        return (
            <div className="App">
                <h1>FLUX</h1>
                <p>Latest guess: {this.props.player.guessedNumber}</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="number" value={this.state.number} onChange={this.handleInputChange} />
                    <button type="submit" disabled={disabled}>Guess</button>
                </form>
                <p>{this.props.ai.message}</p>
                <div>
                    <ul>
                        {history}
                    </ul>
                </div>
            </div>
        );
    }
}


export default connectToStores(App);
