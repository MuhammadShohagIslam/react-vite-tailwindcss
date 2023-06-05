import { FaApple, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { Link } from "react-router-dom";

const OAuthProvider = () => {
    return (
        <div className="flex gap-2 justify-center">
            <Link className=" flex justify-center border border-accent w-20 h-16 rounded-lg py-4 my-4 hover:border-none hover:shadow-2xl ">
                <FaGooglePlusG className="w-8 h-8 text-red-700"></FaGooglePlusG>
            </Link>
            <Link className="flex justify-center border border-accent w-20 h-16 rounded-lg py-4 my-4 hover:border-none hover:shadow-2xl">
                <FaApple className="w-8 h-8"></FaApple>
            </Link>
            <Link className="flex justify-center border border-accent w-20 h-16 rounded-lg py-4 my-4 hover:border-none hover:shadow-2xl">
                <FaFacebookF className="w-8 h-8 text-blue-500"></FaFacebookF>
            </Link>
        </div>
    );
};

export default OAuthProvider;
