import CarouselProfile from "../carousels/CarouselProfile";
import ProfileSidebar from "./Profile.-Sidebar";

const Profile = () => {
    return (
        <>
            <div className="Sidebar">
                <ProfileSidebar />
            </div>
            <div className="Content"><CarouselProfile/></div>
        </>
    );
};

export default Profile;
