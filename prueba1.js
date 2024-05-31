/*
let cont=1
while(cont<11){
    alert("hola"+cont)
    cont=cont+1
}
*/
/*
let cont=1
do{
    alert("hola"+cont)
    cont++
}
while(cont>11)
*/
/*
for(let i=1;i<=10;i++){
    alert("hola"+i)
}
*/
/*
let promedio=0
let cont=1
let x
let suma=0
while(x!==0){
    x=parseInt(prompt("ingrese un numero"))
    suma=suma+x
    cont=cont+1
}
promedio=suma/(cont-1)
*/
/*
let cantidad=parseInt(prompt("ingrese la cantidad de numeros que desea introducir"))

let contm=0
let conti=0
let contmm=0

for(let i=1;i<=cantidad;i++){
    let numero=parseInt(prompt("ingrese un numero"))
    if(numero>0){
        contmm=contmm+1
    }else{
        if(numero===0){
            conti=conti+1
        }else{
            contm=contm+1
        }
    }

}
    

alert("la cantidad de numeros mayor a 0 son:"+contmm)
alert("la cantidad de numeros iguales a 0 son:"+conti)
alert("la cantidad de numeros menores a 0 son:"+contm)
*/
/*
let letra
while(letra!=" "){
  letra=prompt("ingrese una letra")
   if(letra!==" "){
        if(letra==="a"||letra==="e"||letra==="i"||letra==="o"||letra==="u"){
            alert("la letra es una vocal")
        }else{
            alert("la letra no es una vocal")
            
        }
    }
}
*/
/*
let salario=1500
let año=0
for(let i=1;i<=6;i++){
    salario=salario*1.1
   año++
   alert("su salario en el año  " +año+ " es : "+salario.toFixed(2))
}
alert("su salario al cabo de los 6 años es:  "+salario.toFixed(2))
*/
/*
let cantidad=parseInt(prompt("ingrese la cantidad de hambruguesas que desea llevar"))
let cantd=0
let cants=0
let cantt=0
let  mdp
let subtotal=0
for(let i=1;i<=cantidad;i++){
    let tipo=prompt("ingrese el tipo de hamburguesa que desea llevar: (S) sencilla ,(D) doble,(T) triple")
    if(tipo==="S"){
        cants++
    }else{
        if(tipo==="D"){
            cantd++
        }else{
            cantt++
        }

    
    }
   

}

subtotal=(cants*20)+(cantd*25)+(cantt*28)
mdp=prompt("ingrese el medio de pago 1)tarjeta 2)efectivo")
if(mdp===1){
    subtotal*1.5
}else{
    subtotal=subtotal
}
alert("el precio final de su compra es de:"+subtotal)
/*
let cantidaddefocos=parseInt(prompt("ingrese la cantidad de focos que desea llevar"))
let contv=0
let contb=0
let contr=0
for(let i=1 ; i<=cantidaddefocos;i++){
    let tipo=prompt("ingrese el color del foco (V)verdes (B)blancos (R)rojos")
    if(tipo==="V"){
        contv++
    }else{
        if(tipo==="B"){
            contb++
        }else{
            contr++
        }
    }
    
}
alert("la cantidad de focos verdes son: " +contv)
alert("la cantidad de focos rojos son:" + contr)
alert("la cantidad de focos blancos son:" + contb)
 */
/*
let ahorrodiario
let ahorroanual
let cont=1
for(let i=1;i<=12;i++ ){
    cont=cont*3
    ahorroanual=cont
    ahorrodiario=(ahorroanual/365)
}
alert("el ahorro anual que obtendra es de:"+ahorroanual.toFixed(2))
alert("el ahorro diario que obtendra sera de:"+ahorrodiario.toFixed(2))
*/
/*
let numero=parseInt(prompt("ingrese un numero"))

for(let i=1;i<=10;i++){

    
    console.log(numero+" x "+i+ " : " + (numero*i))
    document.write(numero+" x "+i+ " : " + (numero*i)+"<br>")
}
  */
 /*
 let articulos=parseInt(prompt("ingrese cuatnos productos desea llevar")) 
 let descuento=0,subtotal=0,total=0,descuentototal=0
 for(let i=1;i<=articulos;i++){
    let precio=parseInt(prompt("ingrese el precio del producto que va a llevar"))
    if(precio>=200){
        descuento=(precio*0.15)
    }else{
        if(precio>=100){
            descuento=(precio*0.12)
        }else{
            descuento=(precio*0.10)
        }
       
    }
    subtotal=precio-descuento
    total=total+subtotal//total+=subtotal
    descuentototal=descuentototal+descuento
    alert("va a pagar por el articulo numero "+i+ " $ "+subtotal+ " y el descuento fue de "+descuento)
    
 }  
 alert("el total a pagar va a ser de  $"+  +total+ " y el descuento fue de "+descuentototal)
*/
/*
let anios=parseInt(prompt("ingrese la cantidad de años"));
if(isNaN(anios)||anios<=0){
    console.log("por favor,ingrese un numero de años valido")
}
else{
      for(let i=1;i<=anios;i++){
        let saldo=0
        for(let mes=1;mes<=12;mes++){
            let cantidadMes=parseFloat(prompt("ingrese la cantidad a depositar para el mes"+mes))
           //verificar si la cantidad ingresada es un numero valido//
           if(isNaN(cantidadMes)||cantidadMes<=0){
            console.log("por favor,ingrese la cantidad valida para el mes"+mes+"del año")
            break;
           }else{
            saldo+=cantidadMes;//sumar la cantidad depositada al saldo
        }

    }
   let interesanual=saldo*0.10 //10% del interes anual
   saldo+=interesanual
   console.log("inversion final despues de"+i+"año(s): $ "+saldo)
}
}
*/
/*
let edad,cant,promedioescuela=0
  let escuela=prompt("ingrese la escuela")
  let salones=prompt("ingrese la cantidad de salones que desea analizar")
  let acumuladoredad=0
  let promedioedad=0
  for(let i=1;i<=salones;i++){
    cant=+prompt("ingrese la cantidad de estudiantes en el salon "+i)
         acumuladoredad=0
        for(let j=1;j<=cant;j++){
            edad=+prompt("ingrese la edad del "+j+" estudiante")
            acumuladoredad=acumuladoredad+edad
        }
        promedioedad=(acumuladoredad/cant)
        alert("el promedio de los estuiantes en el curso "+i+ " es:"+promedioedad.toFixed(2))
        promedioescuela+=promedioedad

  }

  
  alert("el promedio de de la escuela"+escuela+ "es:"+(promedioescuela/salones))
*/
 /*
 let ventas=+prompt("ingrese la cantidad de ventas")
 let precio
 let conti=0,contt=0
 let global=0 
 for(let i=1;i<=ventas;i++){
    precio=+prompt("ingrese el precio de la "+i+" venta")
        if(precio<=10000){
            conti++
        }else{
            if(precio<20000){
              contt++
            }
        }
    global=global+precio
    alert("el precio en de la venta"+i+"es"+precio)

 }
 alert("la cantidad de ventas menores o iguales a $10000 fueron: "+conti+" mientras que las ventas mayores a $10000 fueron pero menores a $20000: "+contt)
 alert("el precio global de todas las ventas es de $ "+global)
 */
/*
let alumnos=prompt("ingrese la cantidad de alumnos")
let nota 
let contd=0,conta=0
for(let i=1;i<=alumnos;i++){
    nota=+prompt("ingrese la nota del "+i+" alumno")
    if(nota<1 || nota>10 || isNaN(nota)){
        alert("ingrese una calificacion valida")
        i--
    }
    if(nota<7){
    contd++

    }else{
        conta++
    }
    
}
alert("la cantidad de personas aprobadas es de "+contd+" y la cantidad de personas aprobadas es de "+conta)
*/
/*
let trabajadores=prompt("ingrese la cantidad de trabajadores")
let nombre="";
let sueldo=0,horas=0;semanal=0;
let descuento=0,descuento2=0,descuento3=0
for(let i=1;i<=trabajadores;i++){
    nombre=prompt("ingrese su nombre")
    horas=prompt("ingrese las horas trabajadas")
    sueldo=+prompt("ingrese el sueldo por hora que usted recibe")
   semanal = sueldo*horas
    if(semanal>0 && semanal<=150){
        descuento=semanal*0.5
    }
    else{
    if(semanal<300){
        descuento=semanal*0.7
    }else{
        if(semanal<450)
            descuento=semanal*0.9
    }
    }
    alert("su sueldo semanal es de: "+(semanal-descuento))
}
*/
/*
let cantidad=prompt("ingrese la cantidad de numeros que va a ingresar")
let numero
let resultado
for(let i=1;i<=cantidad;i++){
    numero=prompt("ingrese un numero")
    if(numero>=0){
        resultado=numero**3
        alert("el numero "+i+" elevado al cubo es: "+resultado)
    }
   else{
    alert("ingrese un numero positivo,por favor")
    
   }
}
*/
/*
let numero=parseInt(prompt("ingrese el numero al que desea crearle la tabla de multiplicacion"))
for(let i=1;i<=10;i++){
    document.write(numero+" x "+i+" = "+(numero*i)+"<br>")
    
}
*/

/*
ejercicio 18
let cant_notas=parseint(prompt("ingrese la cantidad de notas"))
let bandera=true,notamax,notamin,acum_notas=0,promedio=0;
for(let i=1;i<=cant_notas;i++){
    let nota=parseint(prompt("ingresa la nota numero"+i))
    if(bandera===true){
        notamin=nota
        notamax=nota
        bandera=false
    }else{
        if(nota>notamax){
          notamax=nota  
        }else{
            if(nota<notamin){
                notamin=nota
            }
        }
           
        
    }
    acum_notas+=nota
}
promedio=(acum_notas/cant_notas)
alert("la nota mas alta fue de "+notamax)
alert("la nota mas baja fue de notamin")
alert("el promedio fue de "+promedio)

*/
/*
let cantidad=+prompt("ingrese la cantidad de vehiculos que posee")
let clave
let precio=0
let impuesto
let acum1=0,acum2=0,acum3=0
for(let i=1;i<=cantidad;i++){
    clave=+prompt("ingrese la clave del vehiculo (1,2 o 3)")
    precio=+prompt("ingrese el precio del auto")
    if(clave===1){
        impuesto=precio*1.10
        acum1=acum1+impuesto
    }else{
        if(clave===2){
            impuesto=precio*1.07
            acum2=acum2+impuesto

        }else{
            if(clave===3){
                impuesto=precio*1.05
                acum3=acum3+impuesto

            }
        }
    }
    alert("por el auto nº "+i+" va a pagar $"+impuesto)
}
alert("por la categoria 1 gasto: $"+acum1.toFixed(2))
alert("por la categoria 2 gasto: $"+acum2.toFixed(2))
alert("por la categoria 3 gasto: $"+acum3.toFixed(2))
alert("el total que usted va a gastar es de $"+(acum1+acum2+acum3).toFixed(2))
*/
//INTERVALO 
//LET NUM1=PARSEINT(PROMPT())
//LET NUM2=PARSEINT(PROMPT())
//if(NUM2>NUM1)
//FOR(LET I=NUM1;I<=NUM2;I++){
    //console.log(I)
    
//}
//}ELSE{
  //  if(NUM2<NUM1){
    //    for(let i=num2;i<=num1;i++){
      //      console.log(i)
        //}else{
          //  console.log("no hay intervalo")
        //}
    //}

//}
/*
let num1=2
let num2=100
for(let i=num1;i<=num2;i=i+2){
    document.write(i+("<br>"))

}
*/
/*
let intervalo1=parseint(prompt("ingrese el numero 1"))
let intervalo2=parseInt(prompt("ingrese el numero 2"))
if(intervalo1===intervalo2){
    alert("los numeros son iguales")
}else{
    if(intervalo1>intervalo2){
        let aux=intervalo2
        intervalo2=intervalo1
        intervalo1=aux
    }
    let cont_intervalo=0,suma=0//inicio contador y acumulador
    for(let i=intervalo;i<=intervalo;i++){
        document.write(i+"<br>")
        suma+=i
        cont_intervalo++
    }
    console.log("la suma es de"+suma)
}
*/
/*
for(let i=1;i<=10;i++){
    console.log("la tabla del "+ i)
    for(let j=1;j<=10;j++){
        console.log(i*j)

    }

}
*/
/*
let cant_productos=+prompt("ingrese la cantidad de productos que desea llevar")
let precio
let acum=0
let ok=true
let preciomax
let preciomin
for(let i=1;i<=cant_productos;i++){
    precio=parseInt(prompt("ingrese el precio del producto"))
    if(ok===true){
        preciomax=precio
        preciomin=precio
        ok=false
    }else{
        if(precio>preciomax){
            preciomax=precio
        }else{
            if(precio<preciomin)
                preciomin=precio
        }
    }

acum=acum+precio
}
alert("el precio maximo es de : $"+preciomax)
alert("el precio minimo es de : $"+preciomin)
alert("el gasto total fue de : $"+acum)
*/
/*
realice un algoritmo que determine el sueldosemanal de N trabajadores considerando que se les descuenta por impuestos a las ganancias el 5% de su sueldo si ganan entre 0 y 1500$,se les descuenta el 7% si gana mas de $1500 pero menos de $3000, y 9% si gnana mas de $3000 por hs trabajada.Ademas se le descontaran a todos:los aportes jubilatorios,(11%),obra social(3%).Mostrar aparte el neto todos los descuentos realizados,

*/
/*
let trabajadores=parseInt(prompt("ingrese la cantidad de trabajadores"))
let sueldo=0
let descuento=0;
let obrasocial
let jubilacion
let horas=0;
let sueldoxhora=0;

for(let i=1;i<=trabajadores;i++){
    sueldoxhora=parseFloat(prompt("ingrese su sueldo x hora"))
    horas=parseFloat(prompt("ingrese las horas trabajadas"))
    sueldo=(sueldoxhora*horas)*7
    if(sueldoxhora<=1500){
        descuento=sueldo*(0.5)
     
        if(sueldoxhora<3000){
            descuento=sueldo*(0.7)
        
        }else{
            if(sueldo>3000){
                descuento=sueldo*(0.9)
            }
        }
    }
    obrasocial=sueldo*(0.3)
    jubilacion=sueldo*(0.11)
    console.log("su sueldo con el impuesto a la ganancia es de "+sueldo-descuento)
    console.log("la obra social es de:"+sueldo-obrasocial)
    console.log("impuesto de jubilacion:"+sueldo-jubilacion)
    console.loh("el sueldo neto es de:"+sueldo-descuento-obrasocial-jubilacion)
}
*/
/*
let intervalo1=parseInt(prompt("ingrese el primer numero"))
let intervalo2=parseInt(prompt("ingrese el segundo numero"))
let cont=0;
let acum=0;
if(intervalo1===intervalo2){
    alert("los numeros son iguales,elija numeros correctos")
}else{
    if(intervalo1>intervalo2){
        let aux=intervalo2
        intervalo2=intervalo1
        intervalo1=aux
    }else{
        for(let i=intervalo1;i<=intervalo2;i++){
            if(i%3===0 && i%5===0){
                cont++
                acum=acum+i
            }
        }
    
    }
}

alert("la cantidad de multiplos es de "+cont)
alert("la suma de tosos los multiplos es de "+acum)
*/
/*
let productos=parseInt(prompt("ingrese la cantidad de productos"))
let bandera=true
let preciomin=0,preciomax=0
let precio
for(let i=1;i<=productos;i++){
  precio
    if(bandera===true){
        preciomin=nota
        preciomax=nota
        bandera=false
    }else{
        if(preciomin>preciomax){
          notamax=nota  
        }else{
            if(preciomin<preciomax){
                preciomin=prod
            }
        }
           
        
    }

}
*/
/*
4-Simula un cajero automatico que permite al usuario retirar dinero,depositar dinero y verificar el saldo de su cuenta.Con un saldo inicial de $10.000
*/
let saldo=10.000
let opcion
let cns
let dpsdn
let retirar
while(opcion!=4){
    opcion=parseint(prompt("1)conoce su saldo\n 2) depositar dinero\n 3)retirar dinero\n 4)salir"))
    if(opcion===1){
        alert("su saldo es"+saldo)
    }else{
        if(opcion===2){
            dpsdn=parseInt(prompt("ingrese dinero"))
            saldo=saldo+dpsdn
        }else{
            if(opcion===3){
                retirar=parseInt(prompt("ingrese cuanto dinero desea retirar"))
                saldo=saldo-retirar

            }
        }
    }
}
