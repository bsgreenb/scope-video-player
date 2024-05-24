// Server actions
'use server';

import { createComment } from "./api";
import { revalidatePath } from 'next/cache'

export async function submitComment(prevState: {error?: string}, formData: FormData) {
    
    const videoId = formData.get("videoId") as string;
    const content = formData.get("content") as string;
    const author = 'ben_greenberg';
    
    // TODO: validate inputs

    // TODO: remove this testing thing
    if (content === "err_test") {
        return {error: "Something went wrong"};
    }

    // TODO: wrap api call in try_catch, errs on their side are just 500s
    await createComment(videoId, content, author);

    revalidatePath(`/videos/${videoId}`);

    return {};
}