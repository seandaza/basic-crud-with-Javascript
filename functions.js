
let personas = [];
let persona_email = "";


/* Obtener datos de los campos de texto */
const obtenerDatos = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    return{
        nombre,
        apellido,
        email,
        telefono
    }

}

/* Funcion Expresada */
/* ******* Funcion Asociada al Boton de Registro********** */
const agregarPersona2 = () => {

    /* Obtener datos de los campos de texto */
    let objPersona = obtenerDatos();

    console.log("objPersona: ", objPersona);
    console.log("personas: ", personas);
    console.log("onjPersona.apellido: ",objPersona.apellido)

    let personasTempo = personas.filter( element => element.email == objPersona.email);
    let persona = personasTempo[0];

    console.log("persona: ", persona)

    console.log(typeof persona);



    try {
        if (objPersona.nombre == "" || objPersona.apellido == "" || objPersona.email == "" || objPersona.telefono == "" ){
            alert("No se puede registrar un registro vacio");
        } else {
            try {
                if (persona.email == objPersona.email) {
                    alert("Ya existe un registro con el email: " + objPersona.email);
                } else {
/*                     personas.push(objPersona);
                    listarPersonas();
                    limpiar(); */
                }
            } catch (error) {
                personas.push(objPersona);
                listarPersonas();
                limpiar();
            }
        }
    } catch (error) {
        console.log(error);
    }

}



/* ******* Funcion Asociada al Boton de Actualizacion********** */
const actualizarPersona = () => {
    let objPersona = obtenerDatos();

    let personasTempo = personas.filter( element => element.email == objPersona.email && element.email != persona_email);
    let persona = personasTempo[0];
   

    if (persona != undefined) {
        alert("ya existe una persona con ese email");
    } else {
    if (objPersona.nombre == "" || objPersona.apellido == "" || objPersona.email == "" || objPersona.telefono == "" ){
        alert("Solo se pueden actualizar registros hechos previamente");
    } else {
        personas.map( element => {
            if (element.email == persona_email) {
                element.nombre = objPersona.nombre;
                element.apellido = objPersona.apellido;
                element.telefono = objPersona.telefono;
                element.email = objPersona.email; 
            }
        });
        listarPersonas();
        limpiar();
        persona_email = "";
    }

    }
}

/** **** Listar los objetos del array 'personas' en la tabla ******/
const listarPersonas = () => {
    console.log("Listando Personas");
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    cuerpoTabla.innerHTML = "";
    let contador = 0;
    /* Iterar el arreglo 'personas' */
    personas.forEach(objPersona => {
        cuerpoTabla.innerHTML += ` <tr id="f${contador}">
                            <td id="f${contador}c0">${objPersona.nombre}</td>   
                            <td id="f${contador}c1">${objPersona.apellido}</td>
                            <td id="f${contador}c2">${objPersona.email}</td>
                            <td id="f${contador}c3">${objPersona.telefono}</td>
                            <td> <button onclick="editarPersona('${objPersona.email}')">Editar</button> <button onclick="eliminarPersona('${objPersona.email}')" >Eliminar</button>  </td>
                        </tr>`;
    });
}

/* ****** Limpiar Cajas de Texto*********** */
const limpiar = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value="";
}

/* *************Accion asociada al Boton Editar******** */
const editarPersona = (email) => {
    let personasTempo = personas.filter(objPersona => objPersona.email == email);
    let persona = personasTempo[0];
    document.getElementById("nombre").value = persona.nombre;
    document.getElementById("apellido").value = persona.apellido;  
    document.getElementById("email").value = persona.email;
    document.getElementById("telefono").value = persona.telefono;
    console.log("persona.email:", persona.email);

    persona_email = persona.email;

}

/* *************Accion asociada al Boton Eliminar******** */
const eliminarPersona = (email) => {
    let personasTempo = personas.filter(objPersona => objPersona.email != email);
    personas = personasTempo;
    listarPersonas();
    console.log("Persona Registrada: ", personas);
}