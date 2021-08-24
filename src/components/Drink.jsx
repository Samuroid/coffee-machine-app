import { useState } from "react";


function Drink(props){
    const [quantity, setQuantity] = useState(0);

    function minusQuantity(){
        setQuantity(quantity -1);
    }

    function addQuantity(){
        setQuantity( quantity + 1 );
    }

    return(
        <div className="machineItem">
            <hgroup>
                <h2>{props.itemName}</h2>
                <h3>{props.description}</h3>
            </hgroup>
            
            <div className="itemBody">
                <button type="button" onClick={minusQuantity}>-</button>
                <img src={props.imgSrc} alt={props.imgAlt} />
                <button type="button" onClick={addQuantity}>+</button>
            </div>
            <p className="itemQty">Qty: {quantity}</p>
            <button type="button">add</button>
        </div>
    )
}

export default Drink;