// Get the elements and create variables
const fullNameInput = document.getElementById('fullName');
const schoolSelect = document.getElementById('school');
const positionInput = document.getElementById('position');
const manifestoInput = document.getElementById('manifesto');
const profilePicInput = document.getElementById('profile-pic-input');

// Text elements to display user data
let fullNameText;
let schoolText;
let positionText;
let manifestoText;
let profilePicSrc;

   // JavaScript to handle profile picture preview
   document.getElementById('profile-pic-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-pic-preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
// Function to create profile and store in localStorage
function createProfile() {
    // Get values from inputs
    fullNameText = fullNameInput.value;
    schoolText = schoolSelect.options[schoolSelect.selectedIndex].text;
    positionText = positionInput.value;
    manifestoText = manifestoInput.value;
    profilePicSrc = profilePicInput.src
    if (!fullNameText || !schoolText || !positionText || !manifestoText) {
        alert("Please fill out all fields.");
        return;
    }
    // Store data in localStorage
    localStorage.setItem('profileData', JSON.stringify({
        fullName: fullNameText,
        school: schoolText,
        position: positionText,
        manifesto: manifestoText,
     
    }));          



 //console.log(localStorage.fullName)
    // Navigate to profiles.html
    alert("Please fill out all fields."+ localStorage.fullName);
//fix the path use ../pr then select
    window.location.href = "profiles.html";
} 
