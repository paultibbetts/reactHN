export interface ItemModel {
    id: number,
    content: string,
    title: string,
    domain: string,
    points: number,
    user: string,
    time_ago: string,
    type: string,
    comments: any[],
    comments_count: number,
    url: string
}