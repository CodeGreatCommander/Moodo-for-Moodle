var x=document.cookie;
x=x.split(";").map(x=>x.trim())
var username="",password="";
if(x.filter(x=>x.startsWith("username")).length==0 || x.filter(x=>x.startsWith("password")).length==0){
}
else{
    username=x.filter(x=>x.startsWith("username"))[0].split("=")[1];
    password=x.filter(x=>x.startsWith("password"))[0].split("=")[1];
}
document.getElementById('username').value=username;
document.getElementById('password').value=password;
var st=document.getElementById('login').innerText;
st=st.substring(st.indexOf("Please"),st.indexOf("="));
var r="";
if(st.startsWith("Please enter second value ")){
    r=st.split(",")[1].trim();
}
else if(st.startsWith("Please enter first value ")){// 52 - 66 
    let x=st.substring("Please enter first value ".length).split(",").map(x=>x.trim());
    r=x[0];
}
else if(st.startsWith("Please subtract")){// 52 - 66 
    let x=st.substring("Please subtract".length).split(" - ").map(x=>x.trim());
    r=parseInt(x[0])-parseInt(x[1]);
}
else if(st.startsWith("Please add")){// 52 + 66 
    let x=st.substring("Please add".length).split(" + ").map(x=>x.trim());
    r=parseInt(x[0])+parseInt(x[1]);
}
console.log(document.cookies)
document.getElementById("valuepkg3").value=r;
// document.getElementById("login").submit();