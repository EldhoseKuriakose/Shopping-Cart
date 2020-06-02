import React from 'react';

class CartItem extends React.Component {
    increaseQuantity = () => {
        //setState form
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //setState form if previous state required
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }   
    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    render() {
        const{price, title, qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828926.svg"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
                            onClick={this.decreaseQuantity}
                        />
                        <img
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;