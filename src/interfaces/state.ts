import { INews } from "./news"

export interface IStateNews {
    news: INews[],
    filter: string
}