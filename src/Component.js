import { connectToStores } from 'alt-utils';
import { Component } from 'react';
import TodoStore from './TodoStore';

class TodoView extends Component {
    static getStores() {
        return [TodoStore];
    }

    static getPropsFromStores() {
        return TodoStore.getState();
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    );
                })}
            </ul>
        );
    }
}
export default connectToStores(TodoView);
