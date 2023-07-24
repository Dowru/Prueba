
function tabla() {
    const tbody = document.getElementById("tBody");
    fetch("http://localhost:3030/api/estudiantes")  
        .then(response => response.json()) 
        .then(data => {  
            data.forEach(function(estudiantes) { 

                const fila = tbody.insertRow(); 

                const celda1 = fila.insertCell(); 
                const celda2 = fila.insertCell();
                const celda3 = fila.insertCell();
                const celda4 = fila.insertCell();
                const celda5 = fila.insertCell();
                const celda6 = fila.insertCell();

                celda1.textContent = estudiantes.id; 
                celda2.textContent = estudiantes.nombre;
                celda3.textContent = estudiantes.apellido;
                celda4.textContent = estudiantes.edad;
                celda5.textContent = estudiantes.semestre;
                celda6.textContent = estudiantes.estudia ? "Si" : "No";
                });
            });
    }

    tabla();