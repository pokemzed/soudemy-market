import {FC} from "react";
import Layout from "../../../3_widgets/general/Layout";
import {Helmet} from "react-helmet";
import ProfileSections from "../../../3_widgets/profile/ProfileSections";

export const ProfilePage: FC = () => {

    return (
        <Layout className={"ProfilePage"}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Your profile - your capabilities"/>
                <title>Profile</title>
            </Helmet>
            <ProfileSections/>
        </Layout>
    )
}