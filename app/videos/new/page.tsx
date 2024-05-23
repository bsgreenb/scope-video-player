import Button from "../../ui/Button";

const NewVideoPage = () => {
    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl mb-3">Upload a Video</h2>
            <div className="mb-3">
                <input type="text" className="border border-gray-300 rounded px-4 py-2" placeholder="Title your video" size={40} />
            </div>
            <div className="mb-3">
                <input type="text" className="border border-gray-300 rounded px-4 py-2" placeholder="http://example.com/my_movie.mp4" size={40} />
            </div>
            <div className="mb-3">
                <Button>Upload</Button>
            </div>

        </div>
    );
}

export default NewVideoPage;