import { Link } from "react-router-dom";

const NavItem = ({
    activePathName,
    navItemName,
    pathName,
    isMobile = false,
    setIsMobileMenu,
    isMobileMenu,
}) => {
    return (
        <li
            className={`${isMobile ? "py-2" : "py-0"} mr-14 sm:ml-8 md:ml-10`}
            onClick={() => setIsMobileMenu && setIsMobileMenu(!isMobileMenu)}
        >
            <Link
                to={pathName}
                className={`relative hover:bg-transparent ${
                    activePathName === pathName
                        ? "text-primary"
                        : "text-secondary"
                }  transition-all active:bg-transparent focus:bg-transparent hover:text-primary p-0 text-[19px] font-semibold py-4 `}
            >
                {navItemName}
            </Link>
        </li>
    );
};

export default NavItem;
