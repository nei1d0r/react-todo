import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content : ""
    }

    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({content : ""})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <label>Add New Todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <button>Submit Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo