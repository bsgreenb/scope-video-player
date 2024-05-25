export type VideoProps = {
    id: string;
    title: string;
    videoUrl: string;
    author: string;
    description: string;
    createdAt: string;
    numComments: number;
}

export type CommentProps = {
    id: string;
    createdAt: string;
    content: string;
    author: string;
}