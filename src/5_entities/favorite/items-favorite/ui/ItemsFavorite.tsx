import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {removeItemFavorite} from "../../../../6_shared/store/slices/favoriteGoods.ts";
import FavoriteItem from "../../../../4_features/favorite/FavoriteItem";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";
import {useAppSelector} from "../../../../6_shared/store";

export const ItemsFavorite: React.FC = () => {
    const {items} = useAppSelector((state) => state.favorite)

    useEffect(() => {
        console.log('zalupa')
    }, [items])

    return (
        <div className={"ItemsFavorite"} style={{marginBottom: !items.length ? '420px' : '0'}}>
            <Container className={'items-block'}>
                <h1>Favorite</h1>
                <div className={'items'}>
                    {
                        items.length > 0 ?
                            items?.map((item: number) => {
                                return (
                                    <FavoriteItem key={item} itemId={item}/>
                                )
                            })
                            : <h5>Добавьте товары. <Link to={ELinks.LINK_CATALOGPAGE}>В каталог</Link></h5>
                    }
                </div>
            </Container>

        </div>
    )
}