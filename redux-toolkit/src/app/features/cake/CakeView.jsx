import { useDispatch, useSelector } from "react-redux"
import { order, reFund } from "./cakeSlice";

function CakeView() {
    const numberOfCake = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
        <p>Number of cakes - {numberOfCake}</p>
        <button onClick={() => dispatch(order())}>Order Cake</button>
        <button onClick={() => dispatch(reFund(10))}>Refund Cake</button>
    </div>
  )
}

export default CakeView