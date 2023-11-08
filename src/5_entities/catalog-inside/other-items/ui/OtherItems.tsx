import React from "react";
import {Container} from "react-bootstrap";
import {useGetAllCategoryQuery} from "../../../../6_shared/api";
import CatalogItem from "../../../../4_features/catalog/CatalogItem";
import {useSelector} from "react-redux";

export const OtherItems: React.FC = () => {
    const {category} = useSelector((state: any) => state.goods)
    const {data: otherItems, isError: errorOtherItems} = useGetAllCategoryQuery(category)
    const sliceItems = otherItems?.slice(0,6)

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