import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFavorite} from "../../../../6_shared/store/slices/favoriteGoods.ts";
import {IItem} from "../../../../6_shared/types/catalog/items.ts";
import FavoriteItem from "../../../../4_features/favorite/FavoriteItem";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";

export const ItemsFavorite: React.FC = () => {
    const dispatch = useDispatch()
    const handleDeleteItem = (item: IItem) => {
        dispatch(deleteItemFavorite(item.id))
    }

    const {items} = useSelector((state: any) => state.favorite)

    return (
        <div className={"ItemsFavorite"} style={{marginBottom: !items.length ? '420px' : '0'}}>
            <Container className={'items-block'}>
                <h1>Favorite</h1>
                <div className={'items'}>
                    {
                        items.length > 0 ?
                            items?.map((item: IItem) => {
                                return (
                                    <FavoriteItem key={item.id} item={item} handleItem={handleDeleteItem} itemFavorite={true}/>
                                )
                            })
                            : <h5>Добавьте товары. <Link to={ELinks.LINK_CATALOGPAGE}>В каталог</Link></h5>
                    }
                </div>
            </Container>

        </div>
    )
}