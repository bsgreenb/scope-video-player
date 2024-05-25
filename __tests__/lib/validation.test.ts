import { isValidMp4Url } from '../../app/lib/validation';

describe('isValidMp4Url', () => {
    test('should return true for valid http MP4 URL', () => {
        const url = 'http://example.com/video.mp4';
        expect(isValidMp4Url(url)).toBe(true);
    });

    test('should return true for valid https MP4 URL', () => {
        const url = 'https://example.com/video.mp4';
        expect(isValidMp4Url(url)).toBe(true);
    });

    test('should return false for URL with invalid protocol', () => {
        const url = 'ftp://example.com/video.mp4';
        expect(isValidMp4Url(url)).toBe(false);
    });

    test('should return false for non-MP4 URL', () => {
        const url = 'http://example.com/video.avi';
        expect(isValidMp4Url(url)).toBe(false);
    });

    test('should return false for invalid URL string', () => {
        const url = 'not a url';
        expect(isValidMp4Url(url)).toBe(false);
    });

    test('should return false for MP4 URL with invalid URL format', () => {
        const url = 'htp://example.com/video.mp4';
        expect(isValidMp4Url(url)).toBe(false);
    });

    test('should return false for valid URL without MP4 extension', () => {
        const url = 'http://example.com/video';
        expect(isValidMp4Url(url)).toBe(false);
    });

    test('should return false for empty string', () => {
        const url = '';
        expect(isValidMp4Url(url)).toBe(false);
    });
});