import {useSelector, useDispatch} from "react-redux";
import {buyCake} from "../redux";

function HooksCakeContainer() {

    const numberOfCakes = useSelector(state => state.cake.numberOfCakes) // This access the state from the store

    const dispatch = useDispatch()

    const buyCakes = () => dispatch(buyCake())

    return (
        <div>
            <h2>Number of cakes: {numberOfCakes}</h2>
            <button  onClick={buyCakes}>Buy cakes</button>
        </div>
    )
}

export default HooksCakeContainer
