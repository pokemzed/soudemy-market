import React from "react";
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ICartItem} from "../../../../6_shared/types/catalog/items.ts";
import CartItem from "../../../../4_features/cart/CartItem";
import {clearItemsCart} from "../../../../6_shared/store/slices/cartSlice.ts";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";

export const ItemsCart: React.FC = () => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector((state: any) => state.cart)

    return (
        <Container className={"ItemsCart"} style={{marginBottom: !cartItems.length ? '420px' : '300px'}}>
            <div className={"items-cart_title"}>
                <h1>Cart</h1>
                {
                    cartItems.length > 0 && (
                        <span onClick={() => {
                            if (confirm('Вы действительно хотите очистить корзину?')) dispatch(clearItemsCart())
                        }}>Очистить корзину</span>
                    )
                }
            </div>
            <div className={"items"}>
                {cartItems && cartItems.map((item: ICartItem) => <CartItem key={item.id} itemInfo={item}/>)}
                {!cartItems.length && <h5>Добавьте товары. <Link to={ELinks.LINK_CATALOGPAGE}>В каталог</Link></h5>}
            </div>
            {
                cartItems.length > 0 && (<div className={"placing-order"}>
                    <Link to={ELinks.LINK_HOMEPAGE}>Placing order</Link>
                </div>)
            }
        </Container>
    )
}