import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider as ProviderRedux} from "react-redux";
import {store, persist} from "../../6_shared/store/store.ts";
import {PersistGate} from "redux-persist/integration/react";


interface IProps {
    children: React.ReactNode
}

export const Provider: React.FC<IProps> = ({children}) => {
    return (
        <ProviderRedux store={store}>
            <BrowserRouter>
                <PersistGate loading={null} persistor={persist}>
                    {children}
                </PersistGate>
            </BrowserRouter>
        </ProviderRedux>
    )
}