        // Sample profiles data
        const sampleProfiles = [
            {
                picture: 'profile-pic1.png',
                fullName: 'Alice Johnson',
                position: 'President',
                school: 'Greenwood High',
                manifesto: 'Committed to bringing positive change!'
            },
            {
                picture: 'profile-pic2.png',
                fullName: 'Bob Smith',
                position: 'Vice President',
                school: 'Sunset Academy',
                manifesto: 'Dedicated to improving student life!'
            },
            {
                picture: 'profile-pic2.png',
                fullName: 'Bob Smith',
                position: 'Vice President',
                school: 'Sunset Academy',
                manifesto: 'Dedicated to improving student life!'
            },
            {
                picture: 'profile-pic2.png',
                fullName: 'Bob Smith',
                position: 'Vice President',
                school: 'Sunset Academy',
                manifesto: 'Dedicated to improving student life!'
            },
            {
                picture: 'profile-pic2.png',
                fullName: 'Bob Smith',
                position: 'Vice President',
                school: 'Sunset Academy',
                manifesto: 'Dedicated to improving student life!'
            },
          
        ];


        function saveProfilesToLocalStorage(profiles) {
            // Convert profiles array to JSON string
            const profilesJson = JSON.stringify(profiles);
            // Save JSON string to local storage
            localStorage.setItem('profiles', profilesJson);
        }
 // Function to get profiles from local storage
function getProfilesFromLocalStorage() {
    // Retrieve JSON string from local storage
    const profilesJson = localStorage.getItem('profiles');
    // Convert JSON string back to array
    return profilesJson ? JSON.parse(profilesJson) : [];
}

        function generateProfileCards(profiles) {
            const container = document.getElementById('profile-container');
            profiles.forEach(profile => {
                const card = document.createElement('div');
                card.className = 'profile-card';
                
                card.innerHTML = `
                    <div class="profile-card-inner">
                        <div class="profile-card-front">
                            <img src="${profile.picture}" alt="${profile.fullName}">
                            <h2>${profile.fullName}</h2>
                            <p><strong>Position:</strong> ${profile.position}</p>
                            <p><strong>School:</strong> ${profile.school}</p>
                        </div>
                        <div class="profile-card-back">
                            <img src="${profile.picture}" alt="${profile.fullName}">
                            <p>${profile.manifesto}</p>
                        </div>
                    </div>
                `;
                
                container.appendChild(card);
            });
        }
        window.onload = () => {
            const storedProfiles = getProfilesFromLocalStorage();
            if (storedProfiles.length === 0) {
                saveProfilesToLocalStorage(sampleProfiles);
                generateProfileCards(sampleProfiles);
            } else {
                generateProfileCards(storedProfiles);
            }
        };
        window.onload = () => generateProfileCards(sampleProfiles);
//   const profileData = localStorage.getItem('profileData');
// let data = JSON.parse(profileData);
//   // Store the sample profiles in local storage
//   localStorage.setItem('profiles', JSON.stringify(sampleProfiles));

// document.getElementById('profile-manifesto').textContent = data.manifesto;
// document.getElementById('profile-picture').textContent = data.manifesto;
// document.getElementById('profile-name').textContent =data.fullName;
// document.getElementById('profile-school').textContent = data.school;
// document.getElementById('profile-position').textContent = data.position;
// document.getElementById('profile-manifesto').textContent = data.manifesto;



