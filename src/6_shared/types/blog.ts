export interface IBlogPost {
    id: number
    info: IInfoBlogPost
    imgCard: string
    date: string
    tags: string[]
}


export interface IInfoBlogPost {
    title: string
    text: string
    sections: ISectionBlogPost[]
}

export interface ISectionBlogPost {
    titleSection: string
    textSection: string
    imageSection: string
}