import React from 'react';
import ReactDOM from 'react-dom';
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
    }
   
    handleClick(event){
        event.preventDefault();
        console.log('I was clicked!');
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
                        <div key={item.id}>
                            <h2>{JSON.stringify(item.name)}</h2>
                        </div>
                    ))}   
                </div>
            </form>
            </>
        )
    }
    
}