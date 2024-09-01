
    const profileData = localStorage.getItem('profileData');
    const storedUserEmail = localStorage.getItem('userStudentEmail');

   
   
    
if (storedUserEmail){

    document.getElementById('studentEmail').textContent =storedUserEmail;
        if (profileData) {
        let data = JSON.parse(profileData);
    // id is not workink at thise moment
//document.getElementById('studentEmail').textContent = "khetzo@gmail.com";
        document.getElementById('profile-name').textContent =data.fullName;
        document.getElementById('profile-school').textContent = data.school;
        document.getElementById('profile-position').textContent = data.position;
        document.getElementById('profile-manifesto').textContent = data.manifesto;
        if (data.profilePicSrc) {
            //profile will be uplouded later
            document.getElementById('profile-pic').src = data.profilePic;
        }
    } else {
        alert("please create your profile")
        // document.getElementById('studentEmail').textContent = "khetzo@gmail.com";
        // console.log('No profile data found.');
    }

}else{
 alert("please create your profile")
}


