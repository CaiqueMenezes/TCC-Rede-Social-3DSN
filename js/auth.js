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
                alert('Usuário logado com sucesso, Bem vindo!')
                window.location.href = "index.html"
            })
            .catch((error) => {
                alert(error)
            })
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

    
