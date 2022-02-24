

let personas = [];


/* Funcion Declarada */
function agregarPersona() {
    /* Obtener datos de los campos de texto */
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    /* Construir objeto persona */
    let objPersona = {
        nombre,
        apellido,
        email,
        telefono
    }

    personas.push(objPersona);
    console.log("Persona Registrada: ", personas);

}

/* Funcion Expresada */
/* ******* Funcion Asociada al Boton de Registro********** */
const agregarPersona2 = () => {
        /* Obtener datos de los campos de texto */
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
    
        /* Construir objeto persona */
        let objPersona = {
            nombre,
            apellido,
            email,
            telefono
        }
        if (objPersona.nombre == "" || objPersona.apellido == "" || objPersona.email == "" || objPersona.telefono == "" ){
            alert("Debe completar todos los campos");
        } else {
            personas.push(objPersona);
            console.log("Persona Registrada: ", personas);
            limpiar();
            listarPersonas();
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


/* *************Acciones******** */

const editarPersona = (email) => {
    let personasTempo = personas.filter(objPersona => objPersona.email == email);
    let persona = personasTempo[0];
    document.getElementById("nombre").value = persona.nombre;
    document.getElementById("apellido").value = persona.apellido;
    document.getElementById("email").value = persona.email;
    document.getElementById("telefono").value = persona.telefono;
    eliminarPersona(email);
}

const eliminarPersona = (email) => {
    let personasTempo = personas.filter(objPersona => objPersona.email != email);
    personas = personasTempo;
    listarPersonas();
    console.log("Persona Registrada: ", personas);
}