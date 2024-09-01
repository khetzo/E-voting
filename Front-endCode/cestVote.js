// Function to show candidates based on selected school
function showSchoolCandidates() {
    // Hide all school candidate sections
    const schoolCandidates = document.querySelectorAll('.schoolCandidates');
    schoolCandidates.forEach(section => section.style.display = 'none');

    // Get selected school
    const selectedSchool = document.getElementById('schoolSelection').value;

    // Show the corresponding candidates
    if (selectedSchool) {
        document.getElementById(selectedSchool).style.display = 'block';
    }
}

// Function to get the name of the selected school
function getSelectedSchoolName(schoolCode) {
    switch (schoolCode) {
        case 'schoolScienceTech': return 'School of Science and Technology';
        case 'schoolPharmacy': return 'School of Pharmacy';
        case 'schoolMedicine': return 'School of Medicine';
        case 'schoolOralHealth': return 'School of Oral Health';
        case 'schoolHealthSciences': return 'School of Health Sciences';
        default: return '';
    }
}

// Function to submit the vote
function submitVote() {
    // General Ballot selections
    const president = document.querySelector('select[name="president"]').value;
    const deputyPresident = document.querySelector('select[name="deputyPresident"]').value;
    const treasurer = document.querySelector('select[name="treasurer"]').value;
    const liaison = document.querySelector('select[name="liaison"]').value;
    const secretary = document.querySelector('select[name="secretary"]').value;
    const academicOfficer = document.querySelector('select[name="academicOfficer"]').value;

    // School Ballot selection
    const selectedSchool = document.getElementById('schoolSelection').value;

    // Variables for selected school candidates
    let schoolVote = '';
    if (selectedSchool) {
        const candidateSelect = document.querySelector(`#${selectedSchool} select`);
        if (candidateSelect) {
            schoolVote = candidateSelect.value;
        }
    }

    // Validate form completion
    if (!president || !deputyPresident || !treasurer || !liaison || !secretary || !academicOfficer || !schoolVote) {
        alert("Please complete all fields before submitting.");
        
    }
else{
    // Prepare vote data
    const voteData = {
        president: president,
        deputyPresident: deputyPresident,
        treasurer: treasurer,
        liaison: liaison,
        secretary: secretary,
        academicOfficer: academicOfficer,
        selectedSchool: selectedSchool,
        schoolVote: schoolVote,
        timestamp: new Date().toISOString()  // To keep track of when the vote was submitted
    };

    // Retrieve existing votes from localStorage or initialize an empty array
    const allVotes = JSON.parse(localStorage.getItem('votes')) || [];

    // Add new vote to the array
    allVotes.push(voteData);

    // Save votes to localStorage
    localStorage.setItem('votes', JSON.stringify(allVotes));

    // Display confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `
        <p>Thank you for voting! Your selections were:</p>
        <ul>
            <li>President: ${president}</li>
            <li>Deputy President: ${deputyPresident}</li>
            <li>Treasurer: ${treasurer}</li>
            <li>Liaison: ${liaison}</li>
            <li>Secretary: ${secretary}</li>
            <li>Academic Officer: ${academicOfficer}</li>
            <li>Chairperson - ${getSelectedSchoolName(selectedSchool)}: ${schoolVote}</li>
        </ul>
    `;

    // Simulate sending confirmation email
    console.log("Vote confirmed and email sent!");
}
}

// Function to display all votes (for admin or review purposes)
function displayAllVotes() {
    const votes = JSON.parse(localStorage.getItem('votes')) || [];
    if (votes.length === 0) {
        console.log("No votes have been submitted yet.");
        return;
    }

    console.log("Displaying all votes:");
    votes.forEach((vote, index) => {
        console.log(`Vote #${index + 1}:`);
        console.log(`President: ${vote.president}`);
        console.log(`Deputy President: ${vote.deputyPresident}`);
        console.log(`Treasurer: ${vote.treasurer}`);
        console.log(`Liaison: ${vote.liaison}`);
        console.log(`Secretary: ${vote.secretary}`);
        console.log(`Academic Officer: ${vote.academicOfficer}`);
        console.log(`Chairperson (${getSelectedSchoolName(vote.selectedSchool)}): ${vote.schoolVote}`);
        console.log(`Timestamp: ${vote.timestamp}`);
    });
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', function() {
    const schoolSelection = document.getElementById('schoolSelection');
    schoolSelection.addEventListener('change', showSchoolCandidates);

    const submitButton = document.querySelector('button[type="button"]'); // Use querySelector to select the button by type
    submitButton.addEventListener('click', submitVote);
});
