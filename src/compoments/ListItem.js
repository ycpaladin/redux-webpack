import React, { Component } from 'react'
import * as item from  '../actions/item'
import {connect} from  'react-redux'
import { bindActionCreators } from 'redux'
import classNames  from 'classnames';

class ListItem extends Component {

   
    // render() {
    //     return (
    //         <li>
    //             <span>{this.props.item}</span>
    //             <input type="button" value="删除" onClick={this.props.deleteItem.bind(this, this.props.index) } />
    //         </li>
    //     )
    // }

    // getInitialState() {
    //     return { isEditing: false };
    // }



    render() {

        if (!this.state) {
            this.state = { isEditing: false };
        }

        var item = this.props;
        var actions = item.actions;
        var input;
        if (this.state.isEditing) {
            input =
                <ListItemInput
                    className="edit"
                    index={item.index}
                    value={item.text}
                    updateItem={item.updateItem}
                    complete={(e) =>this.complete()}
                    />;
        }

        return (
            <li
                className={classNames({
                    'completed': item.complete,
                    'editing': this.state.isEditing
                }) }
                key={item.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={item.complete}
                        onChange={this._onToggleComplete}
                        />
                    <label onDoubleClick={(e) => this._onDoubleClick() }>
                        {item.text}
                    </label>
                    <button className="destroy" onClick={this.props.deleteItem.bind(this, this.props.index) } />
                </div>
                {input}
            </li>
        );
    }


    _onDoubleClick() {

        // this.props.actions.changeEditState(true);
        this.setState({ isEditing: true })
    }

    _onToggleComplete() {

    }

    _onDestroyClick() {

    }

    complete() {
        this.setState({ isEditing: false })
    }
}


class ListItemInput extends Component {

    render() {
        return (
            <input type="text"
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={(e) => this._save() }
                // onChange={this._handerChange}
                onkeydown={this._handerKeyDown}
                value={this.props.value}
                autoFocus={true}
                ref="input"
                />
        );
    }

    _save() {
        var input = this.refs.input;
        this.props.updateItem(this.props.index, input.value);
        input.value = '';
        this.props.complete();
    }

    _handerChange(e) {

    }

    _handerKeyDown(e) {
        if (e.keyCode === 13) {
            this._save();
        }
    }
}


export default ListItem