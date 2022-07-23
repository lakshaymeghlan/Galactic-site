  const firebaseConfig = {

    apiKey: "AIzaSyBLqZCVyqZClkyvs-rcXP_Ks5stPAQhmT4",

    authDomain: "signuppage-2214a.firebaseapp.com",

    databaseURL: "https://signuppage-2214a-default-rtdb.firebaseio.com",

    projectId: "signuppage-2214a",

    storageBucket: "signuppage-2214a.appspot.com",

    messagingSenderId: "258180566276",

    appId: "1:258180566276:web:08c69431c002d302dc9451",

    measurementId: "G-F27L6MWDTQ"

  };




var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('name'),
        email : getId('email'),
        password : getId('password')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}