import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCS6ohpxFKDjMcCUHR_qXqzGMHBl6Nfxf4",
    authDomain: "to-app-cp-56201.firebaseapp.com",
    databaseURL: "https://to-app-cp-56201.firebaseio.com",
    projectId: "to-app-cp-56201",
    storageBucket: "to-app-cp-56201.appspot.com",
    messagingSenderId: "950960207086",
    appId: "1:950960207086:web:1708af8f9c56fcb09f2fff",
    measurementId: "G-T1CERDDTVW"
})

const db = firebaseApp.firestore()

export default db