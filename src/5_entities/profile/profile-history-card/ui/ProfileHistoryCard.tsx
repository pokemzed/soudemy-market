import {FC} from "react";

export const ProfileHistoryCard: FC <{order: any}> = ({order}) => {
    return (
        <div className={"ProfileHistoryCard"}>
            <h1>{order}</h1>
        </div>
    )
}