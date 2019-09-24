import React, {Component} from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {addQuantity, removeFromCart, removeQuantity} from "../actions/cartActions";

class Cart extends Component {

    handleClickRemove = (id) => {
        this.props.removeFromCart(id);
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleRemoveQuantity = (id) => {
        this.props.removeQuantity(id);
    }

    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="card " key={item.id}>
                            <div className="card-image">
                                <img src={item.img} alt={item.img}/>
                            </div>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s6">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p>
                                    </div>
                                    <div className="col s6 text-right center-block">
                                        <p>
                                            <b>Q: {item.quantity}</b>
                                            <Link to="/cart"><i className="material-icons quantity-btn"
                                                                onClick={(id) => this.handleAddQuantity(item.id)}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons quantity-btn"
                                                                onClick={(id) => this.handleRemoveQuantity(item.id)}>arrow_drop_down</i></Link>

                                            <button className="btn red remove"
                                                    onClick={() => this.handleClickRemove(item.id)}>
                                                <i className="material-icons"
                                                   onClick={(id) => this.handleAddQuantity(item.id)}>delete</i>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    )
                })
            ) :

            (
                <p>Your cart is empty.</p>
            )
        return (
            <div className="container">
                <h4 className="center">Your cart</h4>
                <ul className="box shopping-cart">
                    {addedItems}
                </ul>
                <hr/>
                <div className={'text-right'}>
                    <h5>Total: {this.props.total} $</h5>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchFromProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        addQuantity: (id) => dispatch(addQuantity(id)),
        removeQuantity: (id) => dispatch(removeQuantity(id))
    }
}

export default connect(mapStateToProps, mapDispatchFromProps)(Cart)
