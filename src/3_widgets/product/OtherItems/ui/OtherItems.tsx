import React from "react";
import {useAppSelector} from "../../../../6_shared/store";
import {useGetAllCategoryQuery} from "../../../../6_shared/api";
import {Container} from "react-bootstrap";
import CatalogItem from "../../../../5_entities/catalog/CatalogItem";

export const OtherItems: React.FC = () => {
    const {category} = useAppSelector(state => state.goods)
    const {data: otherItems, isError: errorOtherItems} = useGetAllCategoryQuery(category)
    const sliceItems = otherItems?.slice(0,6)

    // TODO: обработать ошибку
    if(errorOtherItems){
        return <h3>Error</h3>
    }

    return (
        <div className={"OtherItems"}>
            <Container className={"other-items_container"}>
                <h2>See also</h2>
                <div className={"items"}>
                    {
                        sliceItems?.map((item, index) => (
                            <CatalogItem key={index} item={item}/>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}