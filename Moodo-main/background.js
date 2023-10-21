chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "setCookies") {
      const { username, password } = request;
      chrome.cookies.set({ url: "https://moodle.iitd.ac.in/login/index.php", name: "username", value: username });
      chrome.cookies.set({ url: "https://moodle.iitd.ac.in/login/index.php", name: "password", value: password });
    }
});
function get_data(){
    var username="",password="";
    chrome.cookies.get({ url: "https://moodle.iitd.ac.in/login/index.php", name: "username" }, (cookie) => {
        if(cookie!=null){
            username=cookie.value;
        }
    });
    chrome.cookies.get({ url: "https://moodle.iitd.ac.in/login/index.php", name: "password" }, (cookie) => {
        if(cookie!=null){
            password=cookie.value;
        }
    });
    console.log(username,password)
}
get_data();
chrome.tabs.onUpdated.addListener((tid,o,tab)=>{
    if(tab.url=="https://moodle.iitd.ac.in/login/index.php"){
    chrome.scripting.executeScript({ files: ["scripting.js"], target: { tabId: tid } },
        (t) => {
            // document.getElementById("popuptext").innerHTML = "MISSION ACCOMPLISHED";
            // document.cookie=get_data();
            // console.log(get_data());
            get_data();
        }
    )}
});
