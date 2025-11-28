   // Función para cambiar el color del título    
        function cambiarColor(elemento){
            elemento.style.color = "red"; // Cambiar el color del texto a rojo
            elemento.style.transform = "scale(1.1)";     
    }

    // Función para restaurar el color original del título  
    function restaurarColor(elemento){
            elemento.style.color = "white"; // Cambiar el color del texto a azul
            elemento.style.transform = "scale(1)";       
    }

    function agrandar(elemento){
    elemento.style.transform = "scale(1.1)";    
    }
    function achicar(elemento){
    elemento.style.transform = "scale(1)";
    }
    // Obtener el elemento del título por su ID
    const titulo = document.getElementById("titulo");
            
    // Agregar eventos para cambiar el color cuando se pasa el mouse por encima y restaurar el color cuando se saca el mouse
            
    titulo.addEventListener("mouseover", function () { 
        
        cambiarColor(titulo);
        
    });
            
    titulo.addEventListener("mouseout", function () { 
        
        restaurarColor(titulo);
        
    });

    const titulo1 = document.getElementById("titulo1");

    titulo1.addEventListener("mouseover", function () { 
        
        cambiarColor(titulo1);
        
    });
            
    titulo1.addEventListener("mouseout", function () { 
        
        restaurarColor(titulo1);
        
    });
    const boxes = document.getElementsByClassName("box")
            
   // Iterar sobre la colección de cajas
for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i]; // 'box' es el elemento individual en cada iteración

    
    box.addEventListener("mouseover", function () { 
        agrandar(box); 
    });
            
    
    box.addEventListener("mouseout", function () { 
        // Cuando el mouse sale, llama a achicar y le pasa ESTA caja
        achicar(box); 
    });
}
