import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={classes.posts}>
        <Post likeCount='45' message='Hi, how are you'/>
        <Post likeCount='22' message='Its my first post'/>
      </div>
    </div>
  );
}

export default MyPosts;