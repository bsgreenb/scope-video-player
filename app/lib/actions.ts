// Server actions
'use server';

import { createComment } from "./api";
import { revalidatePath } from 'next/cache'

export async function submitComment(prevState: {error?: string}, formData: FormData): Promise<{error?: string}> {
    
    const videoId = formData.get("videoId") as string;
    const content = formData.get("content") as string;
    const author = 'ben_greenberg';
    
    if (content.trim() == '') {
        return {error: "Your comment was empty"};
    }
    if (content.length > 1000) {
        return {error: "Your comment was too long"};
    }

    return createComment(videoId, content, author)
        .then(() => {
            revalidatePath(`/videos/${videoId}`);
            return {};
        })
        .catch(() => {
          return {error: "There was an error submitting your comment.  Please try again later."};  
        });
}