const chk = document.getElementById('chk');
const github = document.getElementById('github-image');
const leetcode = document.getElementById('leetcode-image');
const linkedin = document.getElementById('linkedin-image');
let theme = localStorage.getItem('theme');

console.log(localStorage.getItem('theme'));

chk.addEventListener('change', () => {
    console.log(chk.checked);

    if (chk.checked) { //dark theme
        document.getElementById('theme-style').href = "dark-theme.css";
        github.src = "images/github-logo-dark.png";
        leetcode.src = "images/leetcode-logo-dark.png";
        linkedin.src = "images/linkedin-logo-dark.png";
        localStorage.setItem('theme', 'dark');
        console.log(localStorage.getItem('theme'));
    } else { //change back to light theme
        document.getElementById('theme-style').href = "";
        github.src = "images/github-logo-light.png";
        leetcode.src = "images/leetcode-logo-light.png";
        linkedin.src = "images/linkedin-logo-light.jpg";
        localStorage.setItem('theme', 'light');
        console.log(localStorage.getItem('theme'));
    }

});


if (theme == 'dark') { //dark theme
    chk.checked = true;
    document.getElementById('theme-style').href = "dark-theme.css";
    github.src = "images/github-logo-dark.png";
    leetcode.src = "images/leetcode-logo-dark.png";
    linkedin.src = "images/linkedin-logo-dark.png";
    localStorage.setItem('theme', 'dark');
} else {
    chk.checked = false;
    document.getElementById('theme-style').href = "";
    github.src = "images/github-logo-light.png";
    leetcode.src = "images/leetcode-logo-light.png";
    linkedin.src = "images/linkedin-logo-light.jpg";
    localStorage.setItem('theme', 'light');
}