import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    console.log(props.profileData);
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profileData.photos?.large} />
            </div>
        </div>
    );
}

export default ProfileInfo;