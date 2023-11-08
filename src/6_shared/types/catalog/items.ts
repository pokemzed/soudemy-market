export interface ICartItem {
    imgMain: string,
    info: {
        title: string,
        text: string
    }
    price: number,
    id: number,
    count: number
}

export interface IItem {
    imgMain: string,
    info: {
        title: string,
        text: string
    }
    price: number,
    id: number,
    category: string
}

export interface IInitialGoods {
    category: string,
    search: string,
    limitItems: number,
}