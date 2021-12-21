import React from 'react';
import './style.css';
import { useImperativeHandle } from 'react/cjs/react.production.min';

export default class ShoppingItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        
        }
        this.isChecked = this.isChecked.bind(this);
    }

    isChecked(event){
        event.preventDefault();
        this.props.handleTick(this.props.item.id);
    }

    
    render(){
    return <div className={"item"}>
        <span className={this.props.item.checked ? 'ticked' : null }>{this.props.item.name}</span>
        <button disabled={this.props.item.checked} onClick={this.isChecked}>Tick!</button>
        </div>

    }
}
