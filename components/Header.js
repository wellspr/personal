import Link from "next/link";

const Header = () => {
    return <>
        <header>
            <h1>
                <Link href={"/"}>Paulowells.com</Link>
            </h1>
            <nav>
                <Link href={"/"}>Home</Link> 
                <Link href={"/projects"}>Projects</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
            </nav>
        </header>
        <hr />
    </>;
};

export default Header;