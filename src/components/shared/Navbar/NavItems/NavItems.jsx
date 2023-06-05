import { useAuth } from "../../../../context/AuthProvider/AuthProvider";
import NavItem from "./NavItem/NavItem";
import { useLocation } from "react-router-dom";

const NavItems = () => {
    const { user } = useAuth();
    const activePathName = useLocation().pathname;
    console.log(user);
    return (
        <>
            <NavItem
                pathName={"/"}
                activePathName={activePathName}
                navItemName={"Home"}
            />
            <NavItem
                pathName={"/about-us"}
                activePathName={activePathName}
                navItemName={"About Us"}
            />
            <NavItem
                pathName={"/blogs"}
                activePathName={activePathName}
                navItemName={"Blog"}
            />
            <NavItem
                pathName={"/contact"}
                activePathName={activePathName}
                navItemName={"Contact"}
            />
            {user?.uid && (
                <>
                    <NavItem
                        pathName={"/wishlist"}
                        activePathName={activePathName}
                        navItemName={"Wishlist"}
                    />
                </>
            )}
        </>
    );
};

export default NavItems;
