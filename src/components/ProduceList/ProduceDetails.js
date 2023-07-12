import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();



  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button  onClick={ () => {
          dispatch(addToCart(produce.id))
        }}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;