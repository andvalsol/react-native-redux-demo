import React from "react";
import {connect} from "react-redux";
import {buyCake, buyIceCream} from "../redux";

function ItemContainer(props) {
    return (
        <div>
            <h2>Item: {props.item}</h2>
            <button onClick={props.buyItem}>Buy item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? buyCake() : buyIceCream()

    return {
        buyItem: () => dispatch(dispatchFunction)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
