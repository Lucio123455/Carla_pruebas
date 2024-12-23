document.getElementById('register').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreUsuario = document.getElementById('username').value;
    const mail = document.getElementById('email').value;
    const contraseña = document.getElementById('password').value;
    const confirmacionContraseña = document.getElementById('confirm-password').value;

    if (contraseña === confirmacionContraseña) {
        const nuevoUsuario = {
            id: Date.now(), 
            nombreUsuario,
            mail,
            contraseña
        };
        
        agregarUsuario(nuevoUsuario);
        
        document.getElementById('register').reset();
        
        alert("Usuario registrado exitosamente!");
    } else {
        alert("Las contraseñas no coinciden");
    }
});

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

function agregarUsuario(usuario) {
    let usuarios = obtenerUsuarios(); 
    usuarios.push(usuario);  
    guardarUsuarios(usuarios);  
}

function guardarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));  
    console.log("Usuarios guardados en localStorage:", usuarios); 
}