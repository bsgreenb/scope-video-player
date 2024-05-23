import Image from "next/image";
import Button from "./Button";

const Header = () => {
    return (
        <header className="w-full py-4 mb-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1 flex justify-center">
                    <Image src="/logo.png" alt="LearnWell Logo" width={175} height={87} />
                </div>
                <div className="flex items-center space-x-4">
                    <Button>Upload</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;