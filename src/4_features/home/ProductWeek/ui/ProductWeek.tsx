import React from "react";
import {useNavigate} from "react-router-dom";

interface IPropsCardProductWeek{
    image: string,
    name: string,
    price: number,
    id: number
}
export const ProductWeek: React.FC<IPropsCardProductWeek> = ({image, name, price, id}) => {
    const navigate = useNavigate()
    const handleClickCard = () => {
        navigate(`/catalog/${id}`)
    }
    return (
        <div onClick={handleClickCard} className={'ProductWeek'}>
            <img src={image} alt=""/>
            <div className={'card-item-info'}>
                <h4>{name}</h4>
                <span>$ {price}</span>
            </div>
        </div>
    )
}