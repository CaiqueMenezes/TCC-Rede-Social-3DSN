firebase.auth().onAuthStateChanged(user => {
   
    if (user) {
        var uid = user.uid;
        console.log("usuario conectado")
        
    } else {
       window.location.href = 'register.html'
    }
})