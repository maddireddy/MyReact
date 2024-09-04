function ProfilePicture(){

    const handleClick = (e) => e.target.style.display = "none";

    return(<img src="Final.jpg" onClick={(e) => handleClick(e)}></img>);

}

export default ProfilePicture