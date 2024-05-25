import { API_BASE_URL, createVideo } from '../../app/lib/api';

global.fetch = jest.fn();

describe('createVideo', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const videoUrl = 'http://example.com/video.mp4';
    const author = 'test_author';

    const fetchResponse = (ok: boolean, statusText = '') => Promise.resolve({
        ok,
        statusText,
    });

    test('should create a video successfully', async () => {
        (fetch as jest.Mock).mockImplementation(() => fetchResponse(true));

        await expect(createVideo(title, description, videoUrl, author)).resolves.not.toThrow();

        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                video_url: videoUrl,
                user_id: author,
            }),
        });
    });

    test('should throw an error if video creation fails', async () => {
        (fetch as jest.Mock).mockImplementation(() => fetchResponse(false, 'Internal Server Error'));

        await expect(createVideo(title, description, videoUrl, author)).rejects.toThrow(
            `Failed to create video with title=${title}, description=${description}, videoUrl=${videoUrl}, author=${author}: Internal Server Error`
        );

        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                video_url: videoUrl,
                user_id: author,
            }),
        });
    });
});