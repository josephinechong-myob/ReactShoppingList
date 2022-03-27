import React from 'react';
import ShoppingItem from './ShoppingItem';
import './style.css';
import Button from '@mui/material/Button';

export default class Main extends React.Component{

    constructor(props){//modular, testing - pros of using components
        super(props);

        this.state = {
            items:[
                { id: "1", name: "Milk", checked: false},
                { id: "2", name: "Bread", checked: false},
                { id: "3", name: "Eggs", checked: false}
            ],
            itemToAdd:'',
            catfact:''
        }
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleTick = this.handleTick.bind(this);
        this.itemToAddChanged = this.itemToAddChanged.bind(this);
    }

    componentDidMount(){
        fetch('https://catfact.ninja/fact')
        .then(
            (response)=>{
                if (response.status !==200){
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then((data)=> {
                    console.log(data.fact);
                    this.setState({
                        catfact: data.fact
                    })
                });
            }
        )
        .catch((err)=>{
            console.log('Fetch Error :-S', err);
        });
    }
   
    handleAddItem(event){
        event.preventDefault();
        console.log('I was clicked!');
        var items = this.state.items;
        var itemToAdd = this.state.itemToAdd;
        var inputValidator = /[A-Za-z]+/

        if(itemToAdd !== '' && inputValidator.test(itemToAdd)){
            var newItem = { id: (items.length+1).toString(), name: itemToAdd, checked: false };
            items.push(newItem);
            itemToAdd = '';
            this.setState({
                items: items,
                itemToAdd
            })
        }
        else{
            window.alert("Please enter a value")
        }
    }

    handleTick(id){
        var itemsArray = this.state.items;

        for (var i = 0; i < itemsArray.length; i++) {

            if(itemsArray[i].id === id){
                itemsArray[i].checked = true;
            }
        }

        this.setState({ 
            items:itemsArray //can change itemsArray to items
         });
    }

    itemToAddChanged(event){
        event.preventDefault();
        var itemToAdd = event.target.value;
        this.setState({
            itemToAdd
        })
    }

    render(){
        return(
            <>
            <h1>My Shopping List</h1>
            <h2 id={"catfact"}>{this.state.catfact}</h2>
            <form id={"form"} onSubmit={(event)=>event.preventDefault()}>
                <span>What would you like to add?</span>
                <input type={"text"} onChange={this.itemToAddChanged} value={this.state.itemToAdd}/>
                <Button id={"add-me-button"} onClick={this.handleAddItem} variant="contained">Add me!</Button>

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