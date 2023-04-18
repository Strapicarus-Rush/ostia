module.exports = function (){
    // const Dictionary =
    return {not_autorized: (lang) => { if (lang === 'es') { return 'No autorizado.' } else { return 'Not autorized.' } },
        user_not_found: (lang) => { if (lang === 'es') { return 'Usuario no encontrado.' } else { return 'User not found.' } },
        wrong_user_pass: (lang) => { if (lang === 'es') { return 'Usuario o contraseña incorrecta.' } else { return 'Wrong user or password.' } },
        unknown_error: (lang) => { if (lang === 'es') { return 'Error desconocido.' } else { return 'Unknown error.' } },
        error: (lang) => { if (lang === 'es') { return 'Hubo un error.' } else { return 'There was an error.' } }}
    // return Dictionary;
}