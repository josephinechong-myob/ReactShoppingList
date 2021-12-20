import React from 'react';
import './style.css';
import { useImperativeHandle } from 'react/cjs/react.production.min';

export default class ShoppingItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        
        }
        this.checked = this.checked.bind(this);
    }

    checked(event){
        event.preventDefault();
        this.props.handleTick(this.props.item.id);
        item.button.disabled = true;
    }

    render(){
    return <div className={"item"}>
        <span>{this.props.item.name}</span>
        <button onClick={this.checked}>Tick!</button>
        </div>

    }
}
