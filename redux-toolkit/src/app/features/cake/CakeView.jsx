import { useSelector } from "react-redux"

function CakeView() {
    const numberOfCake = useSelector(state => state.cake.numberOfCakes);
  return (
    <div>
        <p>Number of cakes - {numberOfCake}</p>
        <button>Order Cake</button>
        <button>Refund Cake</button>
    </div>
  )
}

export default CakeView