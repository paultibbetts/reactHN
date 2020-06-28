import { CollectionType } from '../features/collection/collectionSlice';

const API_URL = 'https://node-hnapi.herokuapp.com/';

export interface Story {
    id: number
    title: string,
    domain: string,
    points: number,
    user: string,
    time: number,
    time_ago: string,
    type: string,
    comments_count: number,
    url: string
}

export type Collection = Story[];

export interface Item extends Story {
    comments: Comment[],
    content: string,
}

export interface Comment {
    level: number,
    user: string,
    time_ago: string
    content: string,
    comments: Comment[]
}

export interface User {
    id: string,
    created_time: number,
    created: string,
    karma: number,
    avg: null,
    about: string
}

export const api = {
    getCollection: (type: CollectionType, page: string) => {
        return new Promise<Collection>((resolve, reject) => {
            fetch(`${API_URL}${type}?page=${page}`)
                .then(res => res.json())
                .then((data: Item[]) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err)
                });
            });
    },
    getItem: (id: string) => {
        return new Promise<Item>((resolve, reject) => {
            fetch(`${API_URL}item/${id}`)
                .then(res => res.json())
                .then((data: Item) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
            });
    },
    getUser: (id: string) => {
        return new Promise<User>((resolve, reject) => {
            fetch(`${API_URL}user/${id}`)
                .then(res => res.json())
                .then((data: User) => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
            });
    }
}