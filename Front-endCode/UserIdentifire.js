// Function to generate a unique identifier (UUID)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Function to check if the device is new or recognized, and to generate or retrieve user ID
function checkDevice() {
    // Check if 'deviceUUID' exists in localStorage
    let deviceUUID = localStorage.getItem('deviceUUID');

    if (!deviceUUID) {
        // Generate a new UUID
        deviceUUID = generateUUID();
        // Store the new UUID in localStorage
        localStorage.setItem('deviceUUID', deviceUUID);
    }

    // Initialize users storage structure if not exists
    if (!localStorage.getItem('users')) {
        const initialData = {
            users: {}
        };
        localStorage.setItem('users', JSON.stringify(initialData));
    }

    return deviceUUID;
}

// Function to store or update personal data for a specific user
function storePersonalData(userId, personalData) {
    const usersJSON = localStorage.getItem('users');
    const usersData = JSON.parse(usersJSON);

    // Ensure user data exists for the specific userId
    if (!usersData.users[userId]) {
        usersData.users[userId] = {
            personalData: {},
            voting: {}
        };
    }

    // Update personal data without touching voting data
    usersData.users[userId].personalData = { ...usersData.users[userId].personalData, ...personalData };

    // Store updated data back to localStorage
    localStorage.setItem('users', JSON.stringify(usersData));
    console.log('Personal data stored for user:', userId);
}

// Function to store or update voting data for a specific user
function storeVotingData(userId, votingData) {
    const usersJSON = localStorage.getItem('users');
    const usersData = JSON.parse(usersJSON);

    // Ensure user data exists for the specific userId
    if (!usersData.users[userId]) {
        usersData.users[userId] = {
            personalData: {},
            voting: {}
        };
    }

    // Update voting data without touching personal data
    usersData.users[userId].voting = { ...usersData.users[userId].voting, ...votingData };

    // Store updated data back to localStorage
    localStorage.setItem('users', JSON.stringify(usersData));
    console.log('Voting data stored for user:', userId);
}

// Function to retrieve user data from localStorage
function getUserData(userId) {
    const usersJSON = localStorage.getItem('users');

    if (usersJSON) {
        const usersData = JSON.parse(usersJSON);
        return usersData.users[userId] || null;
    }
    return null;
}

// Automatically check device on page load and set up local storage if needed
document.addEventListener('DOMContentLoaded', function() {
    const userId = checkDevice(); // Automatically generates or retrieves user ID

    // Example Usage
    storePersonalData(userId, {
        name: 'John Doe',
        SAID: '1234567890123',
        age: 30
    });

    storeVotingData(userId, {
        president: 'Alice Smith',
        chairman: 'Bob Johnson'
    });

    const userData = getUserData(userId);
    console.log('Retrieved User Data:', userData);
});
