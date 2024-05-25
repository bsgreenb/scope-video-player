// https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
export function isValidMp4Url(text: string) {
    let url;
    try {
        url = new URL(text);
    } catch (_) {
        return false;  
    }
    return (url.protocol === "http:" || url.protocol === "https:") && url.pathname.endsWith('.mp4');
}