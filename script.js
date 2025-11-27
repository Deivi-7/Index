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

    // Obtener el elemento del título por su ID
    const titulo = document.getElementById("titulo");
            
    // Agregar eventos para cambiar el color cuando se pasa el mouse por encima y restaurar el color cuando se saca el mouse
            
    titulo.addEventListener("mouseover", function () { 
        
        cambiarColor(titulo);
        
    });
            
    titulo.addEventListener("mouseout", function () { 
        
        restaurarColor(titulo);
        
    });
