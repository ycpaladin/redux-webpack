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

    render() {
        // const actions = this.props.actions

        return (
            <div>
                <input type="text" className="form-control" ref="input"/>
                <Button onClick={(e) => this.handleClick(e) } bsStyle="primary">Add</Button>
            </div>
        )
    }


}

// AddItem.propTypes = {
//     addItem: 
// }

export default AddItem