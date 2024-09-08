// toogle btn

const skill = document.getElementById('skills-inputs') as HTMLElement;
const showButton = document.getElementById('show') as HTMLButtonElement;
const hideButton = document.getElementById('hide') as HTMLButtonElement;

skill.style.display = 'block';
showButton.style.display = 'none';

// show skills
showButton.addEventListener('click', () => {
    skill.style.display = 'block'
    showButton.style.display = 'none'
    hideButton.style.display = 'inline'
});

// hide skils
hideButton.addEventListener('click', () => {
    skill.style.display = 'none'
    showButton.style.display = 'inline'
    hideButton.style.display = 'none'
});

const profilePic = document.getElementById('profile-pic') as HTMLImageElement;
const profileInput = document.getElementById('profileInput') as HTMLInputElement;
const generateButton = document.getElementById('generate') as HTMLButtonElement;

//  displaying  resume data
const displayName = document.getElementById('displayName') as HTMLElement;
const displayField = document.getElementById('displayField') as HTMLElement;
const displayAddress = document.getElementById('displayAddress') as HTMLElement;
const displayPhone = document.getElementById('displayPhone') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displaySkills = document.getElementById('displaySkills') as HTMLElement;
const displayProfile = document.getElementById('displayProfile') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displayExperience = document.getElementById('displayExperience') as HTMLElement;

// Handling profile 
profileInput.addEventListener('change', function (event) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onloadend = function () {
        profilePic.src = reader.result as string;
    };
    if (file) {
        reader.readAsDataURL(file);
    }
});

// Generate Resume on button click
generateButton.addEventListener('click', () => {
    //  input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const field = (document.getElementById('field') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const profile = (document.getElementById('profile') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Collecting skills
    const skillsInputs = document.querySelectorAll('.skills') as NodeListOf<HTMLInputElement>;
    const skills = Array.from(skillsInputs).map(input => input.value);

    //  display  input values
    displayName.textContent = name;
    displayField.textContent = field;
    displayAddress.textContent = address;
    displayPhone.textContent = phone;
    displayEmail.textContent = email;
    displayProfile.textContent = profile;
    displayEducation.textContent = education;
    displayExperience.textContent = experience;

    //  updating skills display
    displaySkills.innerHTML = ''; 
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        displaySkills.appendChild(li);
    });
});


