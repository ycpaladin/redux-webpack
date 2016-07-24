import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class AddItem extends Component {

    handleClick(e) {
        var that = this;
        // return function () {
        var value = that.refs.input.value;
        that.props.addItem(value);
        // }

    }

    // render() {
    //     // const actions = this.props.actions

    //     return (
    //         <div>
    //             <input type="text" className="form-control" ref="input"/>
    //             <Button onClick={(e) => this.handleClick(e) } bsStyle="primary">Add</Button>
    //         </div>
    //     )
    // }

    render() {
        return (
            <header id="header">
                <h1>todos</h1>
                <AddItemInput
                    id="new-todo"
                    placeholder="What needs to be done?"
                    addItem={this.props.addItem}
                    />
            </header>
        );
    }



}


class AddItemInput extends Component {

    render() {

        return (
            <input type="text"
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onKeyDown={(e)=>this._onKeyDown(e)}
                autoFocus={true}
                ref="input"
                />
        )
    }

    _onKeyDown(event) {
        if (event.keyCode === 13) {
            var input = this.refs.input;
            this.props.addItem(input.value)
            input.value = '';
        }
    }
}

// AddItem.propTypes = {
//     addItem: 
// }

export default AddItem