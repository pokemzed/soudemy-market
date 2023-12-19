import {FC} from "react";
import Layout from "../../../3_widgets/general/Layout";
import SignPageContainer from "../../../5_entities/sign/SignPageContainer";

export const SignUpPage: FC = () => {
    return (
        <Layout className={'SignUpPage'}>
            <SignPageContainer method={'up'}>
                hello up
            </SignPageContainer>
        </Layout>
    )
}