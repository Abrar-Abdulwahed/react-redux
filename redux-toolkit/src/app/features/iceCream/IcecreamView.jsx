import { useSelector } from "react-redux"

function IcecreamView() {
    const numberOfIcecream = useSelector(state => state.icecream.numberOfIcecreams)
    return (
      <div>
          <p>Number of icecream - {numberOfIcecream}</p>
          <button>Order Icecream</button>
          <button>Refund Icecream</button>
      </div>
    )
  }
  
  export default IcecreamView