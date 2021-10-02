import { Component } from "react";

const drinks = [
    {
        id: 1,
        name: "Café Latte",
        desc: "A drink you will love. Traditional Coffee with milk.",
        imgSrc: "../img/cafe-latte.png",
        imgAlt: "Café latte drink",
        price: 1.50
    },
    {
        id: 2,
        name: "Café Té",
        desc: "Enjoy coffee & tea together",
        imgSrc: "../img/cafe-te.png",
        imgAlt: "Café Té drink",
        price: 2
    },
    {
        id: 3,
        name: "Mochacoco",
        desc: "Get that chocolate feel",
        imgSrc: "../img/mocha.png",
        imgAlt: "Mochacoco drink",
        price: 2.50
    },
    {
        id: 3,
        name: "Mochacoco",
        desc: "Get that chocolate feel",
        imgSrc: "../img/mocha.png",
        imgAlt: "Mochacoco drink",
        price: 2.50
    }
];

export default class Drink extends Component{
    state = {
        dateAdded: 0,
        drinkName: 0,
        quantity: 0,
        id: 0
    }

    addQuantity = () => {
        this.setState({
            id: this.props.id,
            quantity: this.state.quantity+1
        })
    }

    minusQuantity = () => {
        if( this.state.quantity > 0 ){
            this.setState({
                id: this.props.id,
                quantity: this.state.quantity-1
            })
        }
    }

    getQuantity = () =>{
        return this.state.quantity;
    }

    getDrink = () =>{
        return this.state;
    }

    addDrink = () =>{
        this.setState(state => ({
            id: state.id,
            drinkName: this.props.itemName,
            dateAdded: new Date().toLocaleTimeString(),
            quantity: state.quantity
        }), // on successful state update send to coffee machine to add drink to the machines order
        () => {
            this.props.addDrinkToOrder( this.getDrink() );
            console.log("drink successfully added to the machine's order");
        });
    }

    render() {
        return(
            <div className="machineItem">
                <hgroup>
                    <h2>{this.props.itemName}</h2>
                    <h3>{this.props.description}</h3>
                </hgroup>
                
                <div className="itemBody">
                    <button type="button" onClick={this.minusQuantity}>-</button>
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                    <button type="button" onClick={this.addQuantity}>+</button>
                </div>
                <p className="itemQty">Qty: {this.getQuantity()}</p>
                <button type="button" onClick={this.addDrink}>add</button>
                
            </div>
        )
    }
}