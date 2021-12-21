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
        //console.log(id);
        var itemsArray = this.state.items;

        for (var i = 0; i < itemsArray.length; i++) {

            if(itemsArray[i].id === id){
                itemsArray[i].checked = true;
            }
        }

        this.setState({ 
            itemsArray: [...itemsArray]
         });
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