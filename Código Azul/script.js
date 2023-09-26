// Datos de ejemplo de paciente
const paciente = {
    nombre: "Juan Pérez",
    habitacion: "Habitación 101",
    ubicacion: "Cama",
    tiempoLlamada: "10:30 AM"
};

// Actualizar la información en la página
document.getElementById("patient-name").textContent = `Paciente: ${paciente.nombre}`;
document.getElementById("room-type").textContent = `Tipo de habitación: ${paciente.habitacion}`;
document.getElementById("location").textContent = `Ubicación: ${paciente.ubicacion}`;
document.getElementById("call-time").textContent = `Tiempo de llamada: ${paciente.tiempoLlamada}`;
