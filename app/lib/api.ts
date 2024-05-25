import { CommentProps, VideoProps } from "./definitions";

const API_BASE_URL = 'https://take-home-assessment-423502.uc.r.appspot.com/api/';

type VideoResponseProps = {
    id: string;
    title: string;
    user_id: string;
    description: string;
    created_at: string;
    num_comments: number;
    video_url: string;
};

const transformVideo = (video: VideoResponseProps) => ({
   id: video.id,
   title: video.title,
   videoUrl: video.video_url,
   author: video.user_id,
   description: video.description,
   createdAt: video.created_at,
   numComments: video.num_comments
});

type CommentResponseProps = {
    id: string;
    created_at: string;
    content: string;
    user_id: string;
};  

const transformComment = (comment: CommentResponseProps) => ({
    id: comment.id,
    createdAt: comment.created_at,
    content: comment.content,
    author: comment.user_id
});

export async function getVideos() : Promise<VideoProps[]> {
    const user_id = 'nutty_professor';
    const response = await fetch(`${API_BASE_URL}videos?user_id=${user_id}`);
    const responseJson = await response.json();

    return responseJson.videos.map(transformVideo);
}

export async function getVideo(id: string): Promise<VideoProps> {
    const response = await fetch(`${API_BASE_URL}videos/single?video_id=${id}`);
    const responseJson = await response.json();
    return transformVideo(responseJson.video);
}

export async function createVideo(title: string, description: string, videoUrl: string, author: string) {
    const response = await fetch(`${API_BASE_URL}videos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
            video_url: videoUrl,
            user_id: author,
        })
    });
    if (!response.ok) {
        throw new Error(`Failed to create video with title=${title}, description=${description}, videoUrl=${videoUrl}, author=${author}: ${response.statusText}`);
    }
}

export async function getComments(videoId: string): Promise<CommentProps[]> {
    const response = await fetch(`${API_BASE_URL}videos/comments?video_id=${videoId}`);
    const responseJson = await response.json();
    return responseJson.comments.map(transformComment);
}

export async function createComment(videoId: string, content: string, author: string) {
    const response = await fetch(`${API_BASE_URL}videos/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            video_id: videoId,
            content: content,
            user_id: author,
        })
    });
    if (!response.ok) {
        throw new Error(`Failed to create comment with videoId=${videoId}, content=${content}, author=${author}: ${response.statusText}`);
    }
}
