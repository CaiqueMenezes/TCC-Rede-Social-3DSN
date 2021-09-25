auth = firebase.auth()

function login() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut()
    }
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then( () => {
                window.location.href = "index.html"
            })
            .catch((error) => {
                alert(error)
            })
            
                
}

function authState() {
    auth.onAuthStateChanged(user => {
        if (user) {
            alert('Usuário logado com sucesso, Bem vindo!')
            var uid = user.uid;
           

          } else {
            
          }
})
}
window.onload = authVerify();

function authVerify(e) {

    var user = firebase.auth().currentUser;

    if (user == '' || user == null) {
        window.location.href = "https://swongs.netlify.app/register"
        e.preventDefault()
    } else {
        window.location.href = "https://swongs.netlify.app/"
    }
}


function register() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
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

