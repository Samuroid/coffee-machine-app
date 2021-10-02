import '../Coffeemachine.css';
import Drink from "./Drink";
import cafeLatteImg from "../img/cafe-latte.png";
import mochaImg from "../img/mochaccino.png";
import cafeTeImg from "../img/cafe-te.png";
import miamiViceImg from "../img/miami-vice.png";
import { useState } from "react";

function CoffeeMachine(){
    const anOrder = {
        id: 0,
        drinks: [{}]
    }
    const [order, setOrder] = useState(anOrder);

    function addDrinkToOrder(drink){
        setOrder(prevOrder => {
            // let {id} = drink; // get the drink id

            return{
                ...prevOrder,
                drinks: [...prevOrder.drinks, drink]
            }
            
        })
    }

    return(
        <div className="coffeeMachine">
            <hgroup className="machineHeader">
                <h2>Coffee Machine</h2>
                <h3>Choose your favourite drink</h3>
            </hgroup>

            <section className="machineBody">
                <Drink 
                key="1"
                id="1"
                itemName="Café Latte" 
                description="A drink you will love" 
                imgSrc={cafeLatteImg}
                imgAlt="Cafe latte" 
                addDrinkToOrder={addDrinkToOrder}
                />
                <Drink 
                key="2"
                id="2"
                itemName="Mocha" 
                description="Get that chocolate feel" 
                imgSrc={mochaImg} 
                imgAlt="Mocha cafe"
                addDrinkToOrder={addDrinkToOrder}
                />
                <Drink 
                key="3"
                id="3"
                itemName="Café Té" 
                description="Enjoy coffee & tea together" 
                imgSrc={cafeTeImg}
                imgAlt="Cafe tea"
                addDrinkToOrder={addDrinkToOrder}
                />
                <Drink 
                key="4"
                id="4"
                itemName="Miami Vice" 
                description="Feel the Miami vibe" 
                imgSrc={miamiViceImg} 
                imgAlt="Miami Vice coffee" 
                addDrinkToOrder={addDrinkToOrder}
                />
            </section>
        </div>
    )
}

export default CoffeeMachine;