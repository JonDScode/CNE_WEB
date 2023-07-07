
            var counter = 1

            // codigo para que el boton 1 lleve a la slide 1
            function contadorA1(){
                counter = 1
            }
            const boton1 = document.getElementById("radio1");
            boton1.addEventListener("click", contadorA1)

            // codigo para que el boton 2 lleve al slide 2
            function contadorA2(){
                counter = 2
            }
            const boton2 = document.getElementById("radio2");
            boton2.addEventListener("click", contadorA2)

            // codigo para que el boton 3 lleve a la slide 3
            function contadorA3(){
                counter = 3
            }
            const boton3 = document.getElementById("radio3");
            boton3.addEventListener("click", contadorA3)

            // codigo para que el boton 4 lleve a la slide 4
            function contadorA4(){
                counter = 4
            }
            const boton4 = document.getElementById("radio4");
            boton4.addEventListener("click", contadorA4)

            setInterval(function(){
                document.getElementById('radio' + counter).checked = true;
                counter++;
                if(counter > 4){
                    counter = 1
                }
            }, 2000);
        