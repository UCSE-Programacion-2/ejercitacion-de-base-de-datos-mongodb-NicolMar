/* 
  Ejercitación: Consultas Raw en MongoDB

  Escribe en cada variable el objeto JSON/BSON de búsqueda, modificación o ordenamiento
  que utilizarías en MongoDB Compass o Atlas.
  
  Ejemplo: Si te piden buscar el equipo "Argentina", escribirías:
  const buscarArgentina = { equipo: "Argentina" };
*/

// 1. Búsqueda exacta: Escribe el filtro para encontrar a los equipos del continente "Europa".
const buscarEuropa = {
  continente: 'Europa',
};

// 2. Búsqueda parcial ($in): Filtra los equipos esperados por el test.
const buscarGruposCOF = {
  equipo: { $in: ['Argentina', 'Marruecos', 'Croacia'] },
};

// 3. Búsqueda parcial ($regex): Filtra los equipos cuyo técnico contenga la palabra "Lionel".
const buscarTecnicoLionel = {
  tecnico: { $regex: 'Lionel', $options: 'i' },
};

// 4. Búsqueda con operador $gt: Filtra los equipos con más de 1 campeonato mundial.
const buscarMasDeUnMundial = {
  campeonatos_mundiales: { $gt: 1 },
};

// 5. Búsqueda en subdocumentos ($gte): goles a favor mayor o igual a 15.
const buscarGolesAFavor = {
  'rendimiento.goles_a_favor': { $gte: 15 },
};

// 6. Búsqueda en arreglos: equipos con al menos un jugador del Paris Saint-Germain.
const buscarJugadoresPSG = {
  'jugadores.club_actual': 'Paris Saint-Germain',
};

// 7. Operadores Lógicos ($or): grupo F o continente Sudamérica.
const buscarGrupoFOAmerica = {
  $or: [{ grupo: 'F' }, { continente: 'Sudamérica' }],
};

// 8. Búsqueda exacta: equipos del grupo J.
const buscarGrupoJ = {
  grupo: 'J',
};

// 9. Ordenamiento: ordenar por goles de jugadores de mayor a menor.
const ordenarPorGanados = {
  'rendimiento.ganados': -1,
};

// 10. Modificación ($set): cambiar el técnico.
const actualizarTecnicoCampeon = {
  $set: {
    tecnico: 'Lionel Scaloni (Campeón)',
  },
};

module.exports = {
  buscarEuropa,
  buscarGruposCOF,
  buscarTecnicoLionel,
  buscarMasDeUnMundial,
  buscarGolesAFavor,
  buscarJugadoresPSG,
  buscarGrupoFOAmerica,
  buscarGrupoJ,
  ordenarPorGanados,
  actualizarTecnicoCampeon,
};