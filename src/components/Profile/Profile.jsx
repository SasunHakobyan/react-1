import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.profilePage.newPostText} dispatch={props.dispatch}
                     posts={props.profilePage.posts}/>
        </div>
    );
}

export default Profile;