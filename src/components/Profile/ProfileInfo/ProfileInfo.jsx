import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={props.profileData.photos?.large}/>
            </div>
            <div className={classes.descriptionBlock}>
                <h4>{props.profileData.fullName}</h4>
                <h5>{props.profileData.lookingForAJobDescription}</h5>
            </div>
        </div>
    );
}

export default ProfileInfo;