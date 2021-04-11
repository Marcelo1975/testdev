let data = '';
let fare = '';
let op_1, op_2, op_3 = '';

/* Aviso importante */
const typeWrite = (el) => {
	const textArray = el.innerHTML.split('');
	el.innerHTML = ' ';

	textArray.forEach(function(l, i) {
		setTimeout(function(){
			el.innerHTML += l;
		}, 75 * i);
	});
}

const warning = document.querySelector('.warning');
typeWrite(warning);


/* Pegar o nome da operadora */
const items = document.getElementById('operator'); 
items.addEventListener('change', function(e){
    if (e.target.id == 'operator'){
    	alert(e.target.value); 
    	data = e.target.value;
	}
});


/* Comparando os valores */
const Identicals = () => {
	op_1 = ['15.99', '25.99', '30.95', '65.90', '99.99', '101.99', '69.99', '120.00', '219.99', '49.99', '80.00', '40.00'];
	op_2 = ['9.99', '21.99', '32.99', '96.00', '90.00', '102.99', '70.00', '121.99', '202.90', '59.99', '89.00', '45.99'];
	op_3 = ['12.90', '28.90', '39.99', '21.99', '91.99', '103.00', '64.99', '122.95', '203.00', '34.99', '82.99', '24.99'];

	fare = document.getElementById("fare").value;


	if(op_1.indexOf(fare) > -1 || op_2.indexOf(fare) > -1 || op_3.indexOf(fare) > -1) {
		document.getElementById("demo").innerHTML = '<div class="alert alert-danger" role="alert">Tarifa já existe no sistema com validade de 6 meses</div>';
	}else {
		document.getElementById("demo").innerHTML = ' <div class="alert alert-success" role="alert">Tarifa cadastrada com sucesso na operadora '+data+', com valor de R$'+fare;
		document.getElementById("fare").value = " ";
	}
}

// Evento que é executado ao clicar no botão de enviar
document.getElementById("btn").onclick = function(e) {
	if(
		document.getElementById("operator").value == null ||
		document.getElementById("operator").value == "" ||
		document.getElementById("fare").value == null ||
		document.getElementById("fare").value == ""){
	    alert('Preencha todos os campos!');
	}else{
		Identicals();
		e.preventDefault();			
	}	
}




