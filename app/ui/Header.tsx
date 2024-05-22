import Image from "next/image";
import Button from "./Button";
import Link from 'next/link';

type HeaderProps = {
    isLoggedIn: boolean;
}  

const Header = ({isLoggedIn}: HeaderProps) => {
    return (
        <header className="w-full p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-1 flex justify-center">
                    <Image src="/logo.png" alt="LearnWell Logo" width={150} height={75} />
                </div>
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <Button>Upload</Button>
                            <Link href="/logout">Logout</Link>
                        </>
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;