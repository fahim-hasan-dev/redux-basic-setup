import { useDispatch, useSelector } from "react-redux";
import {
  decriment,
  increment,
  incrimentByValu,
} from "../Redux/Features/counterSlice";

const Home = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className=" flex  gap-4 justify-center ims-center">
      <button
        className="bg-green-500 p-2 rounded-md text-xl text-white"
        onClick={() => dispatch(increment())}
      >
        Incriment
      </button>
      <br />
      {/* <button onClick={() => dispatch(incrimentByValu(5))}>
        Incriment by 5
      </button> */}
      <h1>{count}</h1>
      <button
        className="bg-red-500 p-2 rounded-md text-xl text-white"
        onClick={() => dispatch(decriment())}
      >
        Decriment
      </button>
    </div>
  );
};

export default Home;
