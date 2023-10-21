function set_cooki(name,pass){
    chrome.runtime.sendMessage({ action: "setCookies", username: name, password: pass });
}
chrome.tabs.query({ currentWindow: true, url: "https://moodle.iitd.ac.in/login/index.php" }, (t) => {
    if(t[0]==undefined)window.open("https://moodle.iitd.ac.in/login/index.php");
});

document.getElementById("form").addEventListener("submit", (e) => {
    set_cooki(document.getElementById("name").value,document.getElementById("password").value);
    document.getElementById("status").innerHTML="Updated!!";
});
