import React from "react";
// import {BrowserRouter} from "react-router-dom";
import {Provider as ProviderRedux} from "react-redux";
import {store, persist} from "../../6_shared/store/store.ts";
import {PersistGate} from "redux-persist/integration/react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";


interface IProps {
    children: React.ReactNode
}

export const Provider: React.FC<IProps> = ({children}) => {
    return (
        <ProviderRedux store={store}>
            <BrowserRouter>
                <PersistGate loading={null} persistor={persist}>
                    <ToastContainer position={"top-right"}/>
                    {children}
                </PersistGate>
            </BrowserRouter>
        </ProviderRedux>
    )
}