import React from "react";
import SearchParams from "../../../../4_features/blog/SearchParams";
import CategoryParams from "../../../../4_features/blog/CategoryParams";

export const BlogParams: React.FC = () => {
    return (
        <div className={"BlogParams"}>
            <SearchParams/>
            <CategoryParams/>
        </div>
    )
}