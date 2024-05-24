export type VideoProps = {
    id: string;
    title: string;
    author: string;
    description: string;
    lengthSeconds: number;
    createdAt: string;
    numComments: number;
}

export type CommentProps = {
    id: string;
    createdAt: string;
    content: string;
    author: string;
}