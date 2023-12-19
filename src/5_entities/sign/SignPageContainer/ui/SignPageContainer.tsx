import {FC, ReactNode} from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

interface ISignContainer{
    method: string,
    children: ReactNode
}

export const SignPageContainer: FC<ISignContainer> = ({method, children}) => {
    return (
        <Container className={"SignPageContainer"}>
            <div className={"content"}>
                <h1>
                    {method === 'in' && <>SignIn / <Link to={'/auth/reg'}>SignUp</Link></>}
                    {method === 'up' && <>SignUp / <Link to={'/auth/login'}>SignIn</Link></>}
                </h1>
                {children}
            </div>
        </Container>
    )
}