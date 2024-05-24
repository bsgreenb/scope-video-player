import Button from "../../ui/Button";

const NewVideoPage = () => {
    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl mb-3">Upload a Video</h2>
            <div className="mb-3">
                <label className="text-gray-700 mb-1 block" htmlFor="videoTitle">Title</label>
                <input id="videoTitle" type="text" className="border border-gray-300 rounded p-2 w-full" placeholder="Your video title" />
            </div>
            <div className="mb-1">
                <label className="text-gray-700 mb-1 block" htmlFor="videoDescription">Description</label>
                <textarea id="videoDescription" className="border border-gray-300 rounded p-2 w-full" placeholder="Description of your video" rows={3} />
            </div>
            <div className="mb-3">
                <label className="text-gray-700 mb-1 block" htmlFor="videoUrl">URL</label>
                <input id="videoUrl" type="url" className="border border-gray-300 rounded p-2 w-full" placeholder="http://example.com/my_movie.mp4" />
            </div>
            <div className="mb-3">
                <Button>Upload</Button>
            </div>
        </div>
    );
}

export default NewVideoPage;