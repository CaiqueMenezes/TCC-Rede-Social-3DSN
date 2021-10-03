auth = firebase.auth()



function login() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut()
    }
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "index.html"
            alert("Usuário Conectado, Bem Vindo!")
        })
        .catch((error) => {
            alert(error)
        })


}

const googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://swongs.netlify.app/register.html');

    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(error)
        });
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        var uid = user.uid;

    } else {
        if (window.location.pathname === '/register.html') return // user is in login page, skip.
        if (window.location.pathname !== '/login.html') return
        if (window.location.pathname == 'index.html') return
        if (window.location.pathname == '/projetos-cadastrados') {
            window.location = 'login.html'
        }
    }
})



function register() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert('usuário registrado com sucesso, efetue o login para continuar');
            window.location.href = "login.html"
        })
        .catch((error) => {
            alert(error)
        })
}


function logOut() {
    auth.signOut()
        .then(() => {
            alert('Usuário deslogado com sucesso');
            window.location.href = "login.html"
        })
        .catch((error) => {
            alert(error)
        })


}

function funcoes() {
    login()
    authState()
}

