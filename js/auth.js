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

firebase.auth().onAuthStateChanged(user => {
    if (user) {
      var uid = user.uid;
      
      
  } else {
    if (window.location.pathname === '/register.html') return // user is in login page, skip.
    if (window.location.pathname !== '/login.html') {
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

