import React from "react";
import {useGetBlogPostQuery} from "../../../../6_shared/api";
import LoaderPage from "../../../../6_shared/ui/LoaderPage";
import {useAppSelector} from "../../../../6_shared/store";

export const PostInfo: React.FC = () => {
    const postId = useAppSelector(state => state.blogPost.postId)
    const {data: infoPost, isError, isLoading} = useGetBlogPostQuery(postId)


    if(isError){
        return <div className={"PostInfo"}>
            <div className={"error-get-post"}>
                <span>Ошибка получения статьи. Попробуйте позже</span>
            </div>
        </div>
    }


    if(isLoading){
        return <div className={"PostInfo"}>
            <LoaderPage/>
        </div>
    }


    return infoPost && (
        <div className={"PostInfo"}>
            <div className={"main-about"}>
                <h1>{infoPost[0].info.title}</h1>
                <p>{infoPost[0].info.text}</p>
                <img src={infoPost[0].imgCard} alt={`Изображение (${infoPost[0].info.title})`}/>
            </div>
            {
                !!infoPost[0].info.sections && (
                    <div className={'sections-post'}>
                        {infoPost[0].info.sections.map((section, index) => (
                            <div className={"section"} key={index}>
                                <h2>{section.titleSection}</h2>
                                <p>{section.textSection}</p>
                                <img src={section.imageSection} alt={`Изображение (${section.titleSection})`}/>
                                <div className={'separator'}></div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}