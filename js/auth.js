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
        })
        .catch((error) => {
            alert(error)
        })


}


auth.onAuthStateChanged(user => {
   
    if (user) {
        var uid = user.uid;
        console.log("usuario conectado")
    } else {
        console.log("usuario desconectado")
        window.location.href = "https://swongs.netlify.app/register"
    }
})




function authVerify() {
    var user = firebase.auth().currentUser;

    if (user) {
        console.log("teste")
    } else {
        console.log("teste")
    }

}






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
        window.location.href = "index.html"
    })
    .catch((error) => {
        alert(error)
    })

   
}

function funcoes() {
    login()
    authState()
}

