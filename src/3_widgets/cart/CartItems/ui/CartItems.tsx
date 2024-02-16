import React from "react";
import {clearItemsCart} from "../../../../6_shared/store/slices/cartSlice.ts";
import {ICartItem} from "../../../../6_shared/types/catalog/items.ts";
import CartItem from "../../../../5_entities/cart/CartItem";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";
import {Container} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";
import AddToCart from "../../../../4_features/cart/AddToCart";
import RemoveToCart from "../../../../4_features/cart/RemoveToCart";

export const CartItems: React.FC = () => {
    const {cartItems} = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    return (
        <Container className={"CartItems"} style={{marginBottom: !cartItems.length ? '420px' : '300px'}}>
            <div className={"items-cart_title"}>
                <h1>Cart</h1>
                {
                    cartItems.length > 0 && (
                        <span
                            onClick={() => {
                            if (confirm('Вы действительно хотите очистить корзину?')) dispatch(clearItemsCart())
                        }}>
                            Очистить корзину
                        </span>
                    )
                }
            </div>
            <div className={"items"}>
                {cartItems?.map((item: ICartItem) => (
                    <CartItem
                        key={item.id}
                        itemInfo={item}
                        addCart={<AddToCart item={item}/>}
                        removeCart={<RemoveToCart item={item}/>}
                    />
                ))}
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