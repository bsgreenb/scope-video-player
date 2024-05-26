import Image from "next/legacy/image";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full py-4 mb-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1 flex">
                    <Link href="/">
                        <Image src="/logo.png" alt="LearnWell Logo" width={175} height={87} />
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/videos/new">
                        <Button>Upload</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;