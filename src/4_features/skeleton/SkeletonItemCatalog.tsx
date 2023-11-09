import React from "react";
import ContentLoader from "react-content-loader";
const SkeletonItemCatalog: React.FC = () => (
    <ContentLoader
        speed={2}
        width={325}
        height={455}
        viewBox="0 0 330 455"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="365" rx="10" ry="10" width="325" height="43" />
        <rect x="0" y="0" rx="10" ry="10" width="325" height="350" />
        <rect x="0" y="414" rx="10" ry="10" width="325" height="25" />
    </ContentLoader>
)
export default SkeletonItemCatalog