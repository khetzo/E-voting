// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the school selection dropdown
    const schoolSelection = document.getElementById('schoolSelection');

    // Function to handle the school selection change
    schoolSelection.addEventListener('change', function() {
        // Get the selected school value
        const selectedSchool = schoolSelection.value;

        // Reset the selected candidate value
        let schoolVote = '';

        // Only proceed if a school is selected
        if (selectedSchool) {
            // Get the corresponding candidate select element
            const candidateSelect = document.querySelector(`#${selectedSchool} select`);

            // Check if the candidate select element exists
            if (candidateSelect) {
                schoolVote = candidateSelect.value; // Get the selected candidate value
            }

            console.log('Selected candidate:', schoolVote); // Output the selected candidate value
        }
    });
});
