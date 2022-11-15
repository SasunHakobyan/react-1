import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} addPost={props.addPost} posts={props.profilePage.posts} />
    </div>
  );
}

export default Profile;