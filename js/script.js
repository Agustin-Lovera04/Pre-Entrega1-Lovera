/* LOGEAR */
function login(){
    //DECLARA USUARIO Y CONTRASEÑA
    const USER = "Agustin"
    const CONTRASENIA = "222"

    //DECLARA VARIABLES
    let usuario
    let pass
    let Intentos = 1

    //APLICAMOS CONDICIONAL (DO..WHILE)
    do {
        do {
            usuario = prompt("Ingresa usuario " + "(Intento " + Intentos + " de 3)");
        } while (usuario == "");

        do {

            pass = prompt("Ingresa contraseña " + "(Intento " + Intentos + " de 3)");
    
        } while (pass == "");


        if (usuario === USER && CONTRASENIA === pass) {

            alert("Bienvenido " + usuario + "\nHAS ACCEDIDO A TU COTIZADOR DE INVERSIONES ANUALES" );
            
            Cotizador()
    
            break;

        } else {

            alert("Usuario o contraseña incorrecto" + " (Quedan " + (3 - Intentos) + " Intentos)");
        }

        Intentos++;

    } while (Intentos <= 3);
    
    //Si (Intentos) es mayor, Se bloquea
    if (Intentos > 3) {

        alert("Tu cuenta fue bloqueada")
    }   
    
}
login()

function Cotizador(){
    
    do {
        let capital

        do {
            capital = prompt(
                "Declara el valor de tu inversion, sin $ \nEl valor sera tomado en Pesos Argentinos \nNO COLOQUES PALABRAS \nEjemplo: 50.000 , 500 , 100 , 50 ")

        } while (isNaN(capital) || capital <= 0)
        
        if(!isNaN(capital)){alert("DECLARASTE INVERTIR: $" + capital + " ARS")}

        let tiempo

        do {
            tiempo = prompt(
                "Declara la cantidad de dias, en los que se mantendran invertidos, tus capitales \n NO COLOQUES PALABRAS \n Ejemplo: 30 , 40, 100, 450" ) 
        } while (isNaN(tiempo) || tiempo <= 0)

        if(!isNaN(tiempo)){alert("TIEMPO DE INVERSION: " + tiempo + " DIAS")}

        let inversionUser
        let dolar = 1
        let plazoFijo = 2
        let bonos = 3

        do {
            inversionUser = parseInt(prompt("Elige entre las siguientes opciones, en que fondo destiranas tu inverion:" + "\n" + dolar + " DOLAR (OPCION 1) (60% interes anual)" + "\n" + plazoFijo + " PLAZO FIJO (OPCION 2) (40% interes anual)" + "\n" + bonos  + " BONOS(OPCION 3) (80% interes anual)\n DEBES COLOCAR 1, 2 O 3"))
        } while (inversionUser !== 1 && inversionUser !== 2 && inversionUser !== 3 )

        
        
        if(inversionUser == 1 || inversionUser == 2 || inversionUser == 3){
            if(inversionUser == 1){alert("DECIDISTE INVERTIR EN DOLAR \ninversion : " + capital + "\nduracion: " + tiempo + "\n EL CALCULO DE GANANCIA SE REALIZARA ASI: \n $ x (0.6 x tiempo/365) = $ARS GANANCIA")
            
            let calculo = (capital*(0.6*tiempo/365))
            alert("TU GANANCIA EN PESOS SERA DE $" + calculo.toFixed(2) + " ANUAL")     
            }
            else if(inversionUser == 2){alert("DECIDISTE INVERTIR EN PLAZOS FIJOS \ninversion : " + capital + "\nduracion: " + tiempo + "\n EL CALCULO DE GANANCIA SE REALIZARA ASI: \n $ x (0.4 x tiempo/365) = $ARS GANANCIA")
            
            let calculo = (capital*(0.4*tiempo/365))
            alert("TU GANANCIA EN PESOS SERA DE $" + calculo.toFixed(2) + " ANUAL")
        }
            else{alert("DECIDISTE INVERTIR EN BONOS \ninversion : " + capital + "\nduracion: " + tiempo + "\n EL CALCULO DE GANANCIA SE REALIZARA ASI: \n $ x (0.8 x tiempo/365) = $ARS GANANCIA")
            
            let calculo = (capital*(0.8*tiempo/365))
            alert("TU GANANCIA EN PESOS SERA DE $" + calculo.toFixed(2) + " ANUAL")}
        } 

        alert("GRACIAS POR USAR NUESTRO COTIZADOR, ESPERAMOS TU VUELTA")
    }while (inversionUser == "" || inversionUser == "" || inversionUser == "")
 
}

