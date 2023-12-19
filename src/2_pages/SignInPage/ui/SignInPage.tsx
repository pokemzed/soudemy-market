import {FC} from "react";
import Layout from "../../../3_widgets/general/Layout";
import SignPageContainer from "../../../5_entities/sign/SignPageContainer";
import SignInForm from "../../../4_features/auth/SignInForm";

export const SignInPage: FC = () => {
    return (
        <Layout className={"SignInPage"}>
            <SignPageContainer method={'in'}>
                <SignInForm/>
            </SignPageContainer>
        </Layout>
    )
}