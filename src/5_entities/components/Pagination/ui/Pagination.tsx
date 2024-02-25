import React from "react";

export const Pagination: React.FC<{countItems: number, changePage: (page: number) => void, initialPage: number}> = ({countItems, changePage, initialPage}) => {
    return (
        <div className={"Pagination"}>
            {[...Array(countItems)].map((_, index) => (
                <div
                    key={index}
                    className={index + 1 === initialPage ? 'active-page': ''}
                    onClick={() => changePage(index + 1)}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    )
}