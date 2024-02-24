import React from "react";
import {Route, Routes} from "react-router-dom";
import {ROUTES_LIST} from "../../6_shared/constants/routes.tsx";

export const Router: React.FC = () => {
    return (
        <Routes>
            {
                ROUTES_LIST.map((elem, index) => {
                    return (
                        <Route key={index} path={elem.path} element={elem.element}/>
                    )
                })
            }
        </Routes>
    )
}