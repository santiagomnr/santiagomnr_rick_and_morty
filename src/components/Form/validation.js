const validation = (data) => {
    const emailRegexp = new RegExp(/\S+@\S+\.\S+/);
    // const passwordRegexp = new RegExp (/^[a-z0-9_-]{6,18$}/)
    let errors = {};

    if (!emailRegexp.test(data.email)) {
        errors.email = "Debe ingresar un email valido";
    }

    if (!data.email) {
        errors.emailVacio = "Debes ingresar un mail";
    }

    if (data.email.length > 35) {
        errors.caracteres = "Debe ser un email menor a 35 caracteres";
    }

    // if (!passwordRegexp.test(data.password)) {
    //     errors.password = "Debe contener letras y numeros, tiene que tener una longitud entre 6 y 10 caracteres"
    // }
    if (!/\d/.test(data.password)) {
        errors.p1 = "La contraseña debe tener al menos un numero.";
      }

    return errors;
};

export default validation;
