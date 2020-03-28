export interface CommentModel {
    level: number,
    user: string,
    time_ago: string
    content: string,
    comments: CommentModel[]
}