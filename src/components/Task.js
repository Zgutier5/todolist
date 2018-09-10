import React, { Component } from 'react';
class Task extends Component {
    render() {
        return (
            <div className="task">
                <li>{this.props.taskName} <button onClick={this.props.onDelete}>X</button></li>
            </div>
        );
    }
}

export default Task;