import {buyCake} from "../redux";
import {connect} from "react-redux";
import {useCallback, useState} from "react";

function CakeContainerWithInput(props) {

    // Since we want to accept a user input and change the UI accordingly we need to add a useState
    const [number, setNumber] = useState(1)

    const inputHandler = useCallback((event) => {
        setNumber(event.target.value)
    }, [setNumber])

    return (
        <div>
            <h2>Number of cakes: {props.numberOfCakes}</h2>
            <input type="text" value={number} onChange={inputHandler}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

// Now we need to see how we can add the necessary data into the props
const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes // Since we have multiple reducers we need to specify which one we want
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainerWithInput)
