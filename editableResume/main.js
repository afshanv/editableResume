// toogle btn
var skill = document.getElementById('skills-inputs');
var showButton = document.getElementById('show');
var hideButton = document.getElementById('hide');
skill.style.display = 'block';
showButton.style.display = 'none';
// show skills
showButton.addEventListener('click', function () {
    skill.style.display = 'block';
    showButton.style.display = 'none';
    hideButton.style.display = 'inline';
});
// hide skils
hideButton.addEventListener('click', function () {
    skill.style.display = 'none';
    showButton.style.display = 'inline';
    hideButton.style.display = 'none';
});
var profilePic = document.getElementById('profile-pic');
var profileInput = document.getElementById('profileInput');
var generateButton = document.getElementById('generate');
// DOM elements for displaying the resume data
var displayName = document.getElementById('displayName');
var displayField = document.getElementById('displayField');
var displayAddress = document.getElementById('displayAddress');
var displayPhone = document.getElementById('displayPhone');
var displayEmail = document.getElementById('displayEmail');
var displaySkills = document.getElementById('displaySkills');
var displayProfile = document.getElementById('displayProfile');
var displayEducation = document.getElementById('displayEducation');
var displayExperience = document.getElementById('displayExperience');
// Handling profile picture input
profileInput.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        profilePic.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    }
});
// Generate Resume on button click
generateButton.addEventListener('click', function () {
    // Getting form input values
    var name = document.getElementById('name').value;
    var field = document.getElementById('field').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var profile = document.getElementById('profile').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    // Collecting skills
    var skillsInputs = document.querySelectorAll('.skills');
    var skills = Array.from(skillsInputs).map(function (input) { return input.value; });
    // Updating the display with the input values
    displayName.textContent = name;
    displayField.textContent = field;
    displayAddress.textContent = address;
    displayPhone.textContent = phone;
    displayEmail.textContent = email;
    displayProfile.textContent = profile;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;
    // Clearing and updating skills display
    displaySkills.innerHTML = ''; // Clear previous skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        displaySkills.appendChild(li);
    });
});
