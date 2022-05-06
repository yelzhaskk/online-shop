import './CSS/Header.css';
import './CSS/font-awesome-4.7.0/css/font-awesome.min.css';
import icon_header from './images/icon-header.png';
// functional component
let Header = () => {
    return (
        <div className="header">
            <a href="#" className="icon_header_block">
                <img src={icon_header} className="icon-header"/>
                <p className="name_header">OnlineShop</p>
            </a>

            <a href="#" className="icon_basket_header">
                <i aria-hidden="true" className="fa fa-shopping-basket"/>
            </a>
        </div>
    );
};

export default Header;