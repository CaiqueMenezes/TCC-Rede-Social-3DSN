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
                alert('Logado')
                window.location.href = "index.html"
            })
            .catch((error) => {
                alert(error)
            })
}