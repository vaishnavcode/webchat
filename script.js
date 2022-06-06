const firebaseConfig = { 
apiKey: "AIzaSyCwvC2PBW0pTtC2lz1WnVBoBaaRI9MCEgE", authDomain: "vimoweb-javascript.firebaseapp.com", databaseURL: "https://vimoweb-javascript-default-rtdb.firebaseio.com", 
projectId: "vimoweb-javascript", storageBucket: "vimoweb-javascript.appspot.com", messagingSenderId: "880730176154", 
appId: "1:880730176154:web:bd9eef168f45b16a693d23", measurementId: "G-SRB960BE0X" 
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
const home=document.querySelector(".Home");
const hlb=document.querySelector(".logo-btn");
const acc=document.querySelector(".account");
const supr=document.querySelector(".sup-reset");
sir=document.querySelector(".si-reset");
const back=document.querySelector(".back");
const etxt=document.querySelector(".email-txt");
const pastxt=document.querySelector(".password-txt");
const unametxt=document.querySelector(".username-txt");
const supetxt=document.querySelector(".sup-email-txt");
const suppastxt=document.querySelector(".sup-password-txt");
const sisubmit=document.querySelector(".si-submit");
const supsubmit=document.querySelector(".sup-submit");
const siupnav=document.querySelector(".sign-up-navigator");
const signnav=document.querySelector(".sign-in-navigator");
const login=document.querySelector(".login");
const signup=document.querySelector(".sign-up");
hlb.addEventListener("click", navigate_acc);
sir.addEventListener("click", lclear);
back.addEventListener("click", navigate_home);
siupnav.addEventListener("click", siupnpgnav);
supr.addEventListener("click", sclear);
signnav.addEventListener("click", signpgnav);
supsubmit.addEventListener("click", sign_up_process);
unametxt.addEventListener("keyup", userchecking);
sisubmit.addEventListener("click", login_process);
function navigate_acc() {
home.style.display="none";
acc.style.display="flex";
}
function lclear() {
etxt.value="";
pastxt.value="";
}
function sclear() {
unametxt.value="";
supetxt.value="";
suppastxt.value="";
}
function navigate_home() {
acc.style.display="none";
home.style.display="flex";
unametxt.value="";
etxt.value="";
pastxt.value="";
supetxt.value="";
suppastxt.value="";
signup.style.display="none";
login.style.display="flex";
}
function siupnpgnav() {
login.style.display="none";
signup.style.display="flex";
}
function signpgnav() {
signup.style.display="none";
login.style.display="flex";
}
function sign_up_process() {
database.ref("users/"+unametxt.value).set({
"username":unametxt.value,
"password":suppastxt.value,
"email":supetxt.value
});				
}
function userchecking(){
const u_error=document.querySelector(".u-error");
console.log(u_error.innerText);
database.ref("users").orderByChild("username").equalTo(unametxt.value).on("value", function (snapshot) {
if(snapshot.val()==null) {
u_error.style.display="flex";
u_error.style.position="relative";
u_error.style.top="30px";
u_error.style.fontSize="1.5em";
u_error.innerText="Username is available"
u_error.style.color="green";
}				
else{
u_error.style.display="flex";
u_error.style.position="relative";
u_error.style.top="30px";
u_error.style.fontSize="1.5em";
u_error.innerText="Username is already exist"
u_error.style.color="red";
}
});
}
function login_process() {
database.ref().on("value", function (snapshot) {
snapval=snapshot.val();
uemailpas=snapval['users'][etxt.value]['password'];
if(uemailpas==pastxt.value) {
alert("yah you loged");
}
else {
alert("Bad Credentials");
etxt.value="";
pastxt.value="";
}
});
}