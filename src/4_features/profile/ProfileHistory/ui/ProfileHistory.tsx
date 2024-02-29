import {FC} from "react";
import ProfileHistoryCard from "../../../../5_entities/profile/profile-history-card";
import {useUserAuth} from "../../../../6_shared/hooks/useUserAuth.ts";

export const ProfileHistory: FC = () => {
    const {userInfo} = useUserAuth()
    console.log(userInfo)
    return (
        <div className={"ProfileHistory"}>
            <h1>{userInfo.email}</h1>
        </div>
    )
}