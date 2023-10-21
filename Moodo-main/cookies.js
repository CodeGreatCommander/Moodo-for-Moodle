function set_cooki(name,pass){
    document.cookie="username="+name+'; expires=Wed, 18 Dec 2024 12:00:00 UTC; path=/";'
    document.cookie="password="+pass+'; expires=Wed, 18 Dec 2024 12:00:00 UTC; path=/";'
}
function get_data(){
    st=document.cookie;
    ls=st.split(';')
    return {'username':ls[0].split('=')[1],'pass':ls[1].split('=')[1]}
}
export default {set_cooki,get_data}