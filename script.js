console.warn("carga de script");

var contador=0;

function incrementa() {
	// body...
	let x = document.getElementById('cuenta');
	//x.innerText=contador;
	//x.innerText=new Date().toLocaleTimeString();
	x.innerText=new Date().toString();
	contador=contador+1;
	
	setTimeout(incrementa,1000);


}
incrementa();