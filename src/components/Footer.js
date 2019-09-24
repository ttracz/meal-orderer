import React from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Footer extends React.Component {
    render() {
        return <footer className="page-footer orange darken-1">
            <div className="footer-copyright">
                <div className="container">
                    {/*© 2019 TTRACZ*/}
                    <a className="black-text" href="http://github.com/ttracz">
                        <img src="https://image.flaticon.com/icons/svg/25/25231.svg" className="github-icon"/> see my git
                    </a>
                </div>
            </div>
        </footer>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total,
        wholeQuantity: state.wholeQuantity
    }
}

export default connect(mapStateToProps)(Footer)
