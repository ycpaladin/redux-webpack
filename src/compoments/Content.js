import React, { Component } from 'react'

class Content extends Component {

    render() {
        let Items = this.props.items.toArray().map((item,index) => <ListItem item={item} key={index} deleteItem={this.props.deleteItem} />);
        return (
            <ul>
                {Items}
            </ul>
        )
    }
}

class ListItem extends Component {

    render() {
        return (
            <li>
                <span>{this.props.item}</span>
                <input type="button" value="删除" onClick={this.props.deleteItem.bind(this, this.props.item) } />
            </li>
        )
    }
}


export default Content