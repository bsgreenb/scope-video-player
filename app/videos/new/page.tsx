import VideoForm from "../../ui/VideoForm";

const NewVideoPage = () => {
    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl mb-3">Upload a Video</h2>
            <VideoForm />
        </div>
    );
}

export default NewVideoPage;