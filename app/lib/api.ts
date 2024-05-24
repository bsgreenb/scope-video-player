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

// TODO: Remove the placeholder for lengthSeconds if Cory adds it.
const transformVideo = (video: VideoResponseProps) => ({
   id: video.id,
   title: video.title,
   author: video.user_id,
   description: video.description,
   lengthSeconds: 320, 
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
    const user_id = 'ben_greenberg';
    const response = await fetch(`${API_BASE_URL}videos?user_id=${user_id}`);
    const responseJson = await response.json();

    return responseJson.videos.map(transformVideo);
}

export async function getVideo(id: string): Promise<VideoProps> {
    const response = await fetch(`${API_BASE_URL}videos/single?video_id=${id}`);
    const responseJson = await response.json();
    return transformVideo(responseJson.video);
}

export async function getComments(videoId: string): Promise<CommentProps[]> {
    const response = await fetch(`${API_BASE_URL}videos/comments?video_id=${videoId}`);
    const responseJson = await response.json();
    return responseJson.comments.map(transformComment);
}