import {FC} from "react";
import ProfileHistoryCard from "../../../../5_entities/profile/profile-history-card";

export const ProfileHistory: FC = () => {
    const orders = ["Яблоко", "Апельсин", "Груша"];
    return (
        <div className={"ProfileHistory"}>
            {orders?.map(order => <ProfileHistoryCard key={order} order={order}/>)}
        </div>
    )
}