import React, { Component } from 'react'
import ListItem from './ListItem'
class Content extends Component {

    render() {
        let Items = this.props.items.toArray().map((item, index) =>
            <ListItem
                text={item}
                key={index}
                index={index}
                deleteItem={this.props.deleteItem}
                updateItem={this.props.updateItem}
                complete={true}
                />);
        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={this._onToggleCompleteAll}
                    checked={this.props.areAllComplete ? 'checked' : ''}
                    />
                <ul id="todo-list">
                    {Items}
                </ul>
            </section> 
        )
    }

    _onToggleCompleteAll() {

    }

}


export default Content