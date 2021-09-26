firebase.auth().onAuthStateChanged(user => {
   
    if (user) {
        var uid = user.uid;
        console.log("usuario conectado")
        
    } else {
       window.location.href = 'https://swongs.netlify.app/register.html'
    }
})