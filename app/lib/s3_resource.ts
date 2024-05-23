const s3_bucket = 'scope-videos';

export const getVideoThumbnailUrl = (videoId: string) => {
    return `https://${s3_bucket}.s3.amazonaws.com/video-id-${videoId}/${videoId}.png`;
}

export const getVideoUrl = (videoId: string) => {
    return `https://${s3_bucket}.s3.amazonaws.com/video-id-${videoId}/${videoId}.mp4`;
}