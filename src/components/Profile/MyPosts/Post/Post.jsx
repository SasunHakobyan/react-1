import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://esahubble.org/media/archives/fitsimages/large/karol_masztalerz_01.jpg'/>
      {props.message}
      <div>
        <span>Likes {props.likeCount}</span>
      </div>
    </div>
  );
}

export default Post;