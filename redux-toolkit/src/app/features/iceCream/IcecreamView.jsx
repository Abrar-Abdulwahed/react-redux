
import { useDispatch, useSelector } from "react-redux"
import { order, reFund } from "./iceCreamSlice";

function IcecreamView() {
    const numberOfIcecream = useSelector(state => state.icecream.numberOfIcecreams);
    const dispatch = useDispatch();
    return (
      <div>
          <p>Number of icecream - {numberOfIcecream}</p>
          <button onClick={() => dispatch(order())}>Order Icecream</button>
          <button onClick={() => dispatch(reFund(20))}>Refund Icecream</button>
      </div>
    )
  }
  
  export default IcecreamView