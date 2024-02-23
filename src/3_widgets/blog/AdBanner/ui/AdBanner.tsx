import React from "react";

export const AdBanner: React.FC = () => {
    return (
        <div className={"AdBannerBlog"}>
            <img src="/images/blog/ad-banner1.webp" alt="Изображение рекламного баннера"/>
            <div className={"text"}>
                <h3>Мягкие диваны только у нас</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid deserunt ducimus illum nobis optio quasi qui quia repellendus similique?</p>
            </div>
        </div>
    )
}