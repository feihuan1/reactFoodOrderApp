import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"

export default function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false)
            return
        };

        props.onAddToCart(enteredAmountNumber);
    };

    return(
      
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="amout" input={{
                id:"amount" + props.id,
                type:"number",
                min:"1",
                max:"99",
                step:"1",
                defaultValue:"1"
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
      
    )
}