document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreUsuario = document.getElementById('username').value;
    const contraseña = document.getElementById('password').value;

    validarInicioDeSesion(nombreUsuario, contraseña)
});

function validarInicioDeSesion(nombreUsuario, contraseña) {
    let usuarios = obtenerUsuarios();
    const usuario = buscarUsuario(nombreUsuario, usuarios);
    
    if (usuario) {
        if (usuario.contraseña === contraseña) {
            localStorage.setItem('esUsuario', 'true');
            window.location.href = 'http://127.0.0.1:5500/index.html'; 
            return true; 
        } else {
            alert("Contraseña incorrecta");
            return false; 
        }
    } else {
        alert("Usuario no encontrado");
        return false; 
    }
}

function buscarUsuario(nombreUsuario, usuarios) {
    return usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario);
}

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}