const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    console.log(chk.checked);

    if (chk.checked) { //dark theme
        document.getElementById('theme-style').href = "dark-theme.css";
    } else { //change back to light theme
        document.getElementById('theme-style').href = "";
    }
});