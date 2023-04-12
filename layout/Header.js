import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const Header = () => {

    const navRef = useRef(null);
    const brandRef = useRef(null);

    useEffect(() => {
        const currentNav = navRef.current;
        const currentBrandRef = brandRef.current;

        const onScroll = () => {
            if (window.scrollY > 80) {
                currentBrandRef.style.opacity = 0;
                currentBrandRef.style.height = 0;
                currentNav.style.marginTop = 0;
                currentNav.style.fontSize = "1.4rem";
                return;

            }
            currentBrandRef.style.opacity = 1;
            currentBrandRef.style.height = "2rem";
            currentNav.style.marginTop = "1rem";
            currentNav.style.fontSize = "1.6rem";
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return <header className="header">
        <div className="brand" ref={brandRef}>
            <h1>
                <Link href={"/"}>paulowells.com</Link>
            </h1>
        </div>
        <nav className="header__nav" ref={navRef}>
            <HeaderLink 
                href={"/"}
                label="Home"
            />
            <HeaderLink 
                href={"/projects"}
                label="Projects"
            />
            <HeaderLink 
                href={"/about"}
                label="About"
            />
            <HeaderLink 
                href={"/contact"}
                label="Contact"
            />
        </nav>
    </header>;
};


const HeaderLink = ({ href, label }) => {
    const router = useRouter();
    const activeLink = (link) => router.route === link;

    return <Link 
        href={href}
        className={
            `header__link ${activeLink(href) && 
            `header__link--active`}`
        }>
        { label }
    </Link>
};

export default Header;