import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Navbar extends React.Component {
    render() {
        return <nav className={'nav-wrapper orange darken-1'}>
            <div className={'container'}>
                <Link to={'/'} className={"brand-logo"}>Project</Link>
                <ul className={'right'}>
                    <li><Link to={'/'}>Menu</Link></li>
                    <li><Link to={'/cart'}>Cart
                        {this.props.items.length > 0 ? <span>: {this.props.total}$ ({this.props.wholeQuantity})</span> : <span>: Empty</span>}
                    </Link></li>
                </ul>
            </div>
        </nav>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total,
        wholeQuantity: state.wholeQuantity
    }
}

export default connect(mapStateToProps)(Navbar)
