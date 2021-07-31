
import Drink from "./Drink";

function CoffeeMachine(){
    return(
        <div className="coffeeMachine">
            <hgroup className="machineHeader">
                <h2>Coffee Machine</h2>
                <h3>Choose your favourite drink</h3>
            </hgroup>

            <section className="machineBody">
                <Drink />
                <Drink />
                <Drink />
                <Drink />
            </section>
        </div>
    )
}

export default CoffeeMachine;