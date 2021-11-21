const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textare = document.querySelectorAll('#formulario textarea');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	texto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	coordinador: /^[a-zA-ZÀ-ÿ\s]{1,75}$/,
	plan: /^[A-Z]$/,
	claveoficial: /^[a-zA-Z0-9\_\-]{1,10}$/,
	numerico: /^[0-9]{1,2}$/,
	creditototal: /^[0-9]{1,3}$/,
	clavemateria:/^[a-zA-Z0-9\_\-]{1,20}$/,
	nombreasig:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	nombreasigcorto: /^[a-zA-Z0-9\_\-]{1,30}$/,
	horas:  /^[0-9]{1,4}$/,
	text:/^[a-zA-ZÀ-ÿ\s]{1,500}$/,

	
}

const campos = {
	carreras: false,
	coordinadores: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "carrera":
			validarCampo(expresiones.texto, e.target, 'carrera');
		break;
		case "coordinador":
			validarCampo(expresiones.coordinador, e.target, 'coordinador');
		break;
		
		//formulario plan
		case "plan":
			validarCampo(expresiones.plan, e.target, 'plan');
		break;
		case "claveoficial":
			validarCampo(expresiones.claveoficial, e.target, 'claveoficial');
		break;
		case "periododuracion":
			validarCampo(expresiones.numerico, e.target, 'periododuracion');
		break;
		case "creditostotales":
			validarCampo(expresiones.creditototal, e.target, 'creditostotales');
		break;
		case "periodomaximo":
			validarCampo(expresiones.numerico, e.target, 'periodomaximo');
		break;
		case "claveasignatura":
			validarCampo(expresiones.clavemateria, e.target, 'claveasignatura');
		break;
		case "nombreasignatura":
			validarCampo(expresiones.nombreasig, e.target, 'nombreasignatura');
		break;
		case "nombrecortoasignatura":
			validarCampo(expresiones.nombreasigcorto, e.target, 'nombrecortoasignatura');
		break;
		case "creditoasignatura":
			validarCampo(expresiones.creditototal, e.target, 'creditoasignatura');
		break;
		case "horasteoricas":
			validarCampo(expresiones.horas, e.target, 'horasteoricas');
		break;
		case "horaspracticas":
			validarCampo(expresiones.horas, e.target, 'horaspracticas');
		break;
		case "horastotales":
			validarCampo(expresiones.horas, e.target, 'horastotales');
		break;
		case "planacademico":
			validarCampo(expresiones.clavemateria, e.target, 'planacademico');
		break;
		case "caracterizacion":
			validartextarea(expresiones.text, e.target, 'caracterizacion');
		break;
		case "competencia":
			validartextarea(expresiones.text, e.target, 'competencia');
		break;
		case "intuicion":
			validartextarea(expresiones.text, e.target, 'intuicion');
		break;
		case "descripcion1":
			validartextarea(expresiones.text, e.target, 'descripcion1');
		break;
		case "sub":
			validartextarea(expresiones.text, e.target, 'sub');
		break;
		case "descripcion2":
			validartextarea(expresiones.text, e.target, 'descripcion2');
		break;
		case "competenciasgenericas":
			validartextarea(expresiones.text, e.target, 'competenciasgenericas');
		break;
		case "actividades":
			validartextarea(expresiones.text, e.target, 'actividades');
		break;


		
		
		
	}
}
//validacion de inputs
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.querySelector(`#grupo__${campo} input`).classList.remove('is-invalid');
		document.querySelector(`#grupo__${campo} input`).classList.add('is-valid');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		//document.querySelector(`#grupo__${campo} i`).classList.add('zmdi-check-circle');
		//document.querySelector(`#grupo__${campo} i`).classList.remove('zmdi-close-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} input`).classList.remove('is-valid');
		document.querySelector(`#grupo__${campo} input`).classList.add('is-invalid');
		//document.querySelector(`#grupo__${campo} i`).classList.add('zmdi-close-circle');
		//document.querySelector(`#grupo__${campo} i`).classList.remove('zmdi-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


//validacion de text area

const validartextarea = (expresion, textarea, campo) => {
	if(expresion.test(textarea.value)){
		document.querySelector(`#grupo__${campo} textarea`).classList.remove('is-invalid');
		document.querySelector(`#grupo__${campo} textarea`).classList.add('is-valid');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} textarea`).classList.remove('is-valid');
		document.querySelector(`#grupo__${campo} textarea`).classList.add('is-invalid');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}




inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

textare.forEach((textarea) => {
	textarea.addEventListener('keyup', validarFormulario);
	textarea.addEventListener('blur', validarFormulario);
});

//formulario.addEventListener('submit', (e) => {
	//e.preventDefault();

	//if(campos.carrera && campos.coordinador){
		//formulario.reset();
		//document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			//icono.classList.remove('formulario__grupo-correcto');
			//document.querySelector('#grupo__carrera input').classList.remove('is-valid');
			//document.querySelector('#grupo__coordinador input').classList.remove('is-valid');
			//inputvacio();

		//});
		
	//}

//});


function limpiarformulario(){
	formulario.reset();

}


function guardar(){
   
    var _unidad = document.getElementById("numerounidad").value;
    var _des1 = document.getElementById("descripcion1").value;
    var _sub = document.getElementById("sub").value;
    var _des2 = document.getElementById("descripcion2").value;
	var _comp = document.getElementById("competenciasgenericas").value;
	var _act = document.getElementById("actividades").value;
    // if(_nom.trim()==''){
    //     alert("Ingrese nombre del producto");
    // }
    // if(_cat.trim()==''){
    //     alert("Ingrese categoria del producto");

    // }
    // if(_precio.trim()==''){
    //     alert("Ingrese precio del producto");
        
    // }
    // if(_stock.trim()==''){
    //     alert("Ingrese stock del producto");
        
    // }

    var fila="<tr class='colortr'><th class='text-center' scope='row'>"+_unidad+"</th><td>"+_des1+"</td><td>"+_sub+"</td><td>"+_des2+"</td><td>"+_comp+"</td><td>"+_act+"</td></tr>";

    document.getElementById("tabla").insertRow(-1).innerHTML =  fila;

	formulario.reset();
}

