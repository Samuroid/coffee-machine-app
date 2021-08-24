import '../Coffeemachine.css';
import Drink from "./Drink";
import cafeLatteImg from "../img/cafe-latte.png";

function CoffeeMachine(){
    return(
        <div className="coffeeMachine">
            <hgroup className="machineHeader">
                <h2>Coffee Machine</h2>
                <h3>Choose your favourite drink</h3>
            </hgroup>

            <section className="machineBody">
                <Drink 
                key="1"
                itemName="Café Latte" 
                description="A drink you will love" 
                imgSrc={cafeLatteImg}
                imgAlt="Café latte" 
                />
                <Drink 
                key="2"
                itemName="Mocha" 
                description="Get that chocolate feel" 
                imgSrc="../img/mocha.png" 
                imgAlt="Mocha"
                />
                <Drink 
                key="3"
                itemName="Café Té" 
                description="Enjoy coffee & tea together" 
                imgSrc="../img/cafe-te.png"
                imgAlt="Café Té"
                />
                <Drink 
                key="4"
                itemName="Miami Vice" 
                description="Feel the Miami vibe" 
                imgSrc="../img/miami-vice-coffee.png" 
                imgAlt="Miami Vice" 
                />
            </section>
        </div>
    )
}

export default CoffeeMachine;