import './CSS/my_page.css';
import React from "react";
class My_page extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleBuyClick = this.handleBuyClick.bind(this);
        this.handleBoughtClick = this.handleBoughtClick.bind(this);
        this.state = {isBoughtIn: false};
    }

    handleBuyClick() {
        this.setState({isBoughtIn: true});
    }

    handleBoughtClick() {
        this.setState({isBoughtIn: false});
    }
    render() {
        const isBoughtIn = this.state.isBoughtIn;
        let button;
        if (isBoughtIn) {
            button = <BoughtButton onClick={this.handleBoughtClick} />;
        } else {
            button = <BuyButton onClick={this.handleBuyClick} />;
        }

        return (
            <div className="my_page">
                <div className="card">
                    <div className="card-image-block">
                        <img src={this.props.image} className="card-image"/>
                    </div>

                    <p className="card-name">{this.props.name}</p>
                    <p className="card-message">{this.props.message}</p>
                    <p className="card-price">{this.props.price}</p>

                    <a className="card_icon_basket">
                        <i aria-hidden="true" className="fa fa-shopping-basket"/>
                    </a>

                    {button}
                </div>
            </div>
        );
    }
}

function BuyButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Купить
        </button>
    );
}

function BoughtButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Добавлен в корзину
        </button>
    );
}

export default My_page;