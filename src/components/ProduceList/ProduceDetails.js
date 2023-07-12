import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { likeProduce } from "../../store/produce";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();



  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => {
            dispatch(likeProduce(produce.id))
          }}
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