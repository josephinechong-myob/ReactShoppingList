import React from 'react';
import ShoppingItem from './ShoppingItem';
import './style.css';

export default class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            items:[
                { id: "1", name:"Milk", checked: false},
                { id: "2", name: "Bread", checked: false},
                { id: "3", name: "Eggs", checked:false}
            ],
            itemToAdd:''
        }

        //this.handleClick = this.handleClick.bind(this);
        this.handleTick = this.handleTick.bind(this);
    }
   
    handleClick(event){
        event.preventDefault();
        console.log('I was clicked!');
    }

    handleTick(id){
        console.log(id); //set checked to true to disable button - update the state
        for (var i = 0; i < this.state.items.length; i++) {
        
                this.state.items[i].checked = true;
                console.log(this.state.items[i].checked);
                ShoppingItem.item.button.disabled = true;
                //ShoppingItem.item.span.className = "ticked";
            
        }
    }

    render(){
        return(
            <>
            <h1>My Shopping List</h1>
    
            <form id={"form"}>
                <span>What would you like to add?</span>
                <input type={"text"} id={"new-item"} onChange={(event)=>{console.log(event.target.value)}} />
                <button id={"add-me-button"} onClick={this.handleClick}>Add me!</button>
                
                <div>
                    {this.state.items.map(item => (
                        
                        <ShoppingItem key={item.id} item={item} handleTick={this.handleTick}/>
                        
                    ))}   
                </div>
                
            </form>
            </>
        )
    }
    
}