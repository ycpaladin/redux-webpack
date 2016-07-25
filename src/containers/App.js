import React, {Component} from 'react'
import Content from '../compoments/Content'
import AddPanle from '../Compoments/AddPanle'
import {connect} from  'react-redux'
import * as ItemActions from  '../actions'
import { bindActionCreators } from 'redux'

class App extends Component {
    render() {
        const actions = this.props.actions;
        return (
            <div>
                <AddPanle addItem={actions.addItem}/>
                <Content
                    items={this.props.items}
                    areAllComplete={this.props.areAllComplete}
                    deleteItem={actions.deleteItem}
                    updateItem={actions.updateItem}
                    changeEditState={actions.changeEditState}
                    changeCompletedState={actions.changeCompletedState}
                    setAllChecked={actions.setAllChecked}
                    allComplete={actions.allComplete}
                    />
            </div>

        )
    }
}


export default connect(state => ({
    items: state.items.items,
    areAllComplete: state.items.allComplete
}), dispatch => ({
    actions: bindActionCreators(ItemActions, dispatch)
}))(App)

