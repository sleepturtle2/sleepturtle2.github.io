const chk = document.getElementById('chk');
const github = document.getElementById('github-image');
const leetcode = document.getElementById('leetcode-image');
const linkedin = document.getElementById('linkedin-image');


chk.addEventListener('change', () => {
    console.log(chk.checked);

    if (chk.checked) { //dark theme
        document.getElementById('theme-style').href = "dark-theme.css";
        github.src = "images/github-logo-dark.png";
        leetcode.src = "images/leetcode-logo-dark.png";
        linkedin.src = "images/linkedin-logo-dark.png";
    } else { //change back to light theme
        document.getElementById('theme-style').href = "";
        github.src = "images/github-logo-light.png";
        leetcode.src = "images/leetcode-logo-light.png";
        linkedin.src = "images/linkedin-logo-light.jpg";
    }

});