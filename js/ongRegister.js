function Cadastrar() {
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let cause = document.getElementById('cause').value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value

    let json = {
        'picture': 'teste',
        'name': name,
        'description': description,
        'cause': cause,
        'contact': contact,
        'email': email,
        'address': address
    }

    axios.post("http://localhost:3001/auth/ongRegister", json, function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");

    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })

}

function GetFile(e) {
    let name = document.getElementById('name').value
    let images = document.getElementById('image')
    images.addEventListener("change", function(event) {
        var file = images.files
        var picture = ''
        console.log(file)
        storageRef = firebaseConfig.storage().ref()
        const fileRef = storageRef.child('ongs/' + name + '/' + file.name)
        fileRef.put(file).then(() => {
            let url = await fileRef.getDownloadURL();
            picture = url
        })

    })
}







