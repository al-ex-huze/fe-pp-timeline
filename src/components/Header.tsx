import "../styles/Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div className="Header__logo-bg-1">
                <img className="Header__logo-1"
                    src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah2ffffff.png"
                    alt="AH Logo"
                />
            </div>
            {/* <div className="Header__logo-bg-2">
                <img className="Header__logo-2"
                    src="https://alimageexbuckhuetzepub.s3.eu-north-1.amazonaws.com/ah2ffffff.png"
                    alt="AH Logo"
                />
            </div> */}
        </div>
    );
};

export default Header;
