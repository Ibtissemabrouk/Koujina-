import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyAQ6qfASmc8WNIfYThWFu9_PBa0UBkLvHw",
//   authDomain: "koujinatn-69cd5.firebaseapp.com",
//   databaseURL : "https://koujinatn-69cd5-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "koujinatn-69cd5",
//   storageBucket: "koujinatn-69cd5.appspot.com",
//   messagingSenderId: "419383731016",
//   appId: "1:419383731016:web:a4f2d2a4c449b9abac497d"
// };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const formulaire = document.getElementById('add-food-form');
formulaire.addEventListener('submit' , (e)=>sendFood(e));

function sendFood(e){
    e.preventDefault();
    var recName = document.getElementById('food-name').value;
    var cin = document.getElementById('user-cin').value;
    var recDesc = document.getElementById('food-desc').value;
    var recTown = document.getElementById('food-location').value;
    var recPhotoURL = document.getElementById('food-pic').value;
    console.log(recName,cin,recDesc,recTown,recPhotoURL);
    PostPlatDansDB(recName,cin,recDesc,recTown,recPhotoURL);  //^ stocker les données en DB
    formulaire.reset();
    window.alert("Plat ajouté en base de données ! ");

}

function PostPlatDansDB(recName,cin,recDesc,recTown,recPhotoURL){
set(ref(db,'food/'+cin),
    {
        recName : recName ,
        cin : cin ,
        recDesc : recDesc ,
        recTown : recTown,
        recPhotoURL : recPhotoURL
    }
    )
}