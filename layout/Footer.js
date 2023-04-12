const year = new Date().getFullYear();

const Footer = () => {
    return <footer className="footer">
        <p>&copy; { year } paulowells.com | personal website</p>
    </footer>;
};

export default Footer;