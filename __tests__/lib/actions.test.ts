import { revalidatePath } from "next/cache";
import { submitComment, submitVideo } from "../../app/lib/actions";
import { isValidMp4Url } from "../../app/lib/validation";
import { createComment, createVideo } from "../../app/lib/api";

// Mock the modules
jest.mock('../../app/lib/validation', () => ({
    isValidMp4Url: jest.fn(),
}));

jest.mock('../../app/lib/api', () => ({
    createVideo: jest.fn(),
    createComment: jest.fn(),
}));

jest.mock('next/cache', () => ({
    revalidatePath: jest.fn(),
}));

describe('submitVideo', () => {
    const createFormData = (title: string, description: string, videoUrl: string): FormData => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('videoUrl', videoUrl);
        return formData;
    };

    it('should return error if title or videoUrl is missing', async () => {
        const formData = createFormData('', 'A description', 'http://example.com/video.mp4');
        const result = await submitVideo({}, formData);
        expect(result).toEqual({error: "Please fill in all fields"});
    });
    
    test('should return error if title is too long', async () => {
        const formData = createFormData('a'.repeat(101), 'A description', 'http://example.com/video.mp4');
        const result = await submitVideo({}, formData);
        expect(result).toEqual({error: "Title was too long"});
    });

    test('should return error if description is too long', async () => {
        const formData = createFormData('A title', 'a'.repeat(1001), 'http://example.com/video.mp4');
        const result = await submitVideo({}, formData);
        expect(result).toEqual({error: "Description was too long"});
    });

    test('should return error if video URL is invalid', async () => {
        (isValidMp4Url as jest.Mock).mockReturnValue(false);
        const formData = createFormData('A title', 'A description', 'invalid-url');
        const result = await submitVideo({}, formData);
        expect(result).toEqual({error: "Invalid video URL"});
    });

    test('should return success if video submission is successful', async () => {
        (isValidMp4Url as jest.Mock).mockReturnValue(true);
        (createVideo as jest.Mock).mockResolvedValue({});
        const formData = createFormData('A title', 'A description', 'http://example.com/video.mp4');
        const result = await submitVideo({}, formData);
        expect(result).toEqual({success: true, title: 'A title'});
        expect(revalidatePath).toHaveBeenCalledWith('/');
    });

    test('should return error if video submission fails', async () => {
        (isValidMp4Url as jest.Mock).mockReturnValue(true);
        (createVideo as jest.Mock).mockRejectedValue(new Error('Submission failed'));
        const formData = createFormData('A title', 'A description', 'http://example.com/video.mp4');
        const result = await submitVideo({}, formData);
        expect(result).toEqual({error: "There was an error submitting your video.  Please try again later."});
    });
});

describe('submitComment', () => {
    const createFormData = (videoId: string, content: string): FormData => {
        const formData = new FormData();
        formData.append('videoId', videoId);
        formData.append('content', content);
        return formData;
    };

    it('should return error if content is missing', async () => {
        const formData = createFormData('123', '');
        const result = await submitComment({}, formData);
        expect(result).toEqual({error: "Your comment was empty"});
    });

    test('should return error if content is too long', async () => {
        const formData = createFormData('123', 'a'.repeat(1001));
        const result = await submitComment({}, formData);
        expect(result).toEqual({error: "Your comment was too long"});
    });

    test('should return success if comment submission is successful', async () => {
        (createComment as jest.Mock).mockResolvedValue({});
        const formData = createFormData('123', 'A comment');
        const result = await submitComment({}, formData);
        expect(result).toEqual({});
        expect(revalidatePath).toHaveBeenCalledWith('/');
        expect(revalidatePath).toHaveBeenCalledWith('/videos/123');
    });

    test('should return error if comment submission fails', async () => {
        (createComment as jest.Mock).mockRejectedValue(new Error('Submission failed'));
        const formData = createFormData('123', 'A comment');
        const result = await submitComment({}, formData);
        expect(result).toEqual({error: "There was an error submitting your comment.  Please try again later."});
    });
});