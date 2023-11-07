function esDiaHabil(fecha) {
    // Excluir fines de semana (sábado = 6, domingo = 0)
    if (fecha.getDay() === 6 || fecha.getDay() === 0) {
      return false;
    }
  
    // Lista de días festivos federales en 2024 (puedes agregar más si es necesario)
    var diasFestivos = [
      new Date(2024, 0, 1),   // Año Nuevo
      new Date(2024, 0, 15),  // Día de Martin Luther King Jr.
      new Date(2024, 1, 19),  // Día de los Presidentes
      new Date(2024, 4, 27),  // Día de la Recordación
      new Date(2024, 6, 4),   // Día de la Independencia
      new Date(2024, 8, 2),   // Día del Trabajo
      new Date(2024, 9, 14),  // Día de Colón
      new Date(2024, 10, 11), // Día de los Veteranos
      new Date(2024, 10, 28), // Día de Acción de Gracias
      new Date(2024, 11, 25)  // Navidad
    ];
  
    // Excluir los días festivos
    for (var i = 0; i < diasFestivos.length; i++) {
      if (fecha.getTime() === diasFestivos[i].getTime()) {
        return false;
      }
    }
  
    return true;
  }
  
  function calcularDiasHabiles(year) {
    var fecha = new Date(year, 0, 1);
    var diasHabiles = 0;
  
    while (fecha.getFullYear() === year) {
      if (esDiaHabil(fecha)) {
        diasHabiles++;
      }
      fecha.setDate(fecha.getDate() + 1);
    }
  
    return diasHabiles;
  }
  
  var year = 2024;
  var diasHabiles = calcularDiasHabiles(year);
  
  console.log("El número de días hábiles en " + year + " es: " + diasHabiles);
  