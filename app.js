/* ══════════════════════════════════════════════════════
   DATOS REALES — extraídos de la planilla institucional
   ══════════════════════════════════════════════════════

   ESTRUCTURA:
     HORARIOS  → curso → ["Turno Mañana / descripción horaria"]
     ESPS_POR_CURSO → curso → [especialidades disponibles]
     ROTS      → especialidad → [rotaciones]
     DOCS      → rotación_key (esp+rot) → [docentes]

   PENDIENTE COMPLETAR: horarios marcados con TODO
   ══════════════════════════════════════════════════════ */

// Turno por curso (Mañana / Tarde)
const HORARIOS = {
  "1° 3°": ["Mañana — Mié 7:40 a 11:20"],
  "1° 4°": ["Tarde — Mar 14:00 a 17:45"],
  "1° 6°": ["Tarde"], "1° 7°": ["Tarde"], "1° 8°": ["Tarde"], "1° 9°": ["Tarde"],
  "2° 1°": ["Mañana — Mié y Jue 7:40 a 11:20"],
  "2° 5°": ["Tarde"], "2° 6°": ["Tarde"], "2° 8°": ["Tarde"], "2° 10°": ["Tarde"],
  "3° 1°": ["Mañana"], "3° 2°": ["Tarde"], "3° 3°": ["Tarde"], "3° 5°": ["Tarde"], "3° 6°": ["Tarde"],
  "4° 1°": ["Mañana"], "4° 2°": ["Mañana"], "4° 3°": ["Mañana"], "4° 4°": ["Tarde"],
  "5° 1°": ["Mañana"], "5° 2°": ["Mañana"], "5° 3°": ["Mañana"], "5° 4°": ["Tarde"],
  "6° 1°": ["Mañana"], "6° 2°": ["Mañana"], "6° 3°": ["Mañana"], "6° 4°": ["Mañana"],
};

// Especialidades disponibles por curso
const ESPS_POR_CURSO = {
  "1° 3°": ["Prácticas Pre-profesionalizantes"],
  "1° 4°": ["Prácticas Pre-profesionalizantes"],
  "1° 6°": ["Prácticas Pre-profesionalizantes"],
  "1° 7°": ["Prácticas Pre-profesionalizantes"],
  "1° 8°": ["Prácticas Pre-profesionalizantes"],
  "1° 9°": ["Prácticas Pre-profesionalizantes"],
  "2° 1°": ["Prácticas Profesionalizantes"],
  "2° 5°": ["Prácticas Pre-profesionalizantes"],
  "2° 6°": ["Prácticas Pre-profesionalizantes"],
  "2° 8°": ["Prácticas Pre-profesionalizantes"],
  "2° 10°": ["Prácticas Pre-profesionalizantes"],
  "3° 1°": ["Electromecánica"],
  "3° 2°": ["Electromecánica"],
  "3° 3°": ["Construcciones"],
  "3° 5°": ["Electromecánica"],
  "3° 6°": ["Mecánica"],
  "4° 1°": ["Construcciones"],
  "4° 2°": ["Mecánica"],
  "4° 3°": ["Electromecánica"],
  "4° 4°": ["Electromecánica"],
  "5° 1°": ["Construcciones"],
  "5° 2°": ["Mecánica"],
  "5° 3°": ["Electromecánica"],
  "5° 4°": ["Electromecánica"],
  "6° 1°": ["Construcciones"],
  "6° 2°": ["Mecánica"],
  "6° 3°": ["Electromecánica"],
  "6° 4°": ["Electromecánica"],
};

/* ══════════════════════════════════════════════════════
   CURSOS_DATA — estructura central por curso.
   ══════════════════════════════════════════════════════ */
const CURSOS_DATA = {
  "1° 3°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Ajuste",       docentes: ["Varela Tomás"] },
    { nombre: "2. Carpintería",  docentes: ["Michel María"] },
    { nombre: "3. Electricidad", docentes: ["Daniel Portillo"] },
  ]},
  "1° 4°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Ajuste",       docentes: ["De Ipola Eduardo"] },
    { nombre: "2. Carpintería",  docentes: ["Castro Janet"] },
    { nombre: "3. Electricidad", docentes: ["Fernández Elías"] },
  ]},
  "1° 6°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Ajuste",       docentes: ["De Ipola Eduardo"] },
    { nombre: "2. Carpintería",  docentes: ["Castro Janet"] },
    { nombre: "3. Electricidad", docentes: ["Fernández Elías"] },
  ]},
  "1° 7°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Ajuste",       docentes: ["De Ipola Eduardo"] },
    { nombre: "2. Carpintería",  docentes: ["Castro Janet"] },
    { nombre: "3. Electricidad", docentes: ["Fernández Elías"] },
  ]},
  "1° 8°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Ajuste",       docentes: ["De Ipola Eduardo"] },
    { nombre: "2. Carpintería",  docentes: ["Castro Janet"] },
    { nombre: "3. Electricidad", docentes: ["Fernández Elías"] },
  ]},
  "1° 9°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Ajuste",       docentes: ["De Ipola Eduardo"] },
    { nombre: "2. Carpintería",  docentes: ["Castro Janet"] },
    { nombre: "3. Electricidad", docentes: ["Fernández Elías"] },
  ]},
  "2° 1°": { especialidad: "Prácticas Profesionalizantes", rotaciones: [
    { nombre: "1. Construcción", docentes: ["Michel María"] },
    { nombre: "2. Electricidad", docentes: ["Castro Rolando"] },
    { nombre: "3. Soldadura",    docentes: ["Varela Tomás"] },
  ]},
  "2° 5°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Construcción", docentes: ["Carrizo Andrea"] },
    { nombre: "2. Electricidad", docentes: ["Enrique Leonardo"] },
    { nombre: "3. Soldadura",    docentes: ["Pes Gustavo y Ojave José"] },
  ]},
  "2° 6°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Construcción", docentes: ["Carrizo Andrea"] },
    { nombre: "2. Electricidad", docentes: ["Enrique Leonardo"] },
    { nombre: "3. Soldadura",    docentes: ["Pes Gustavo y Ojave José"] },
  ]},
  "2° 8°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Construcción", docentes: ["Carrizo Andrea"] },
    { nombre: "2. Electricidad", docentes: ["Enrique Leonardo"] },
    { nombre: "3. Soldadura",    docentes: ["Pes Gustavo y Ojave José"] },
  ]},
  "2° 10°": { especialidad: "Prácticas Pre-profesionalizantes", rotaciones: [
    { nombre: "1. Construcción", docentes: ["Carrizo Andrea"] },
    { nombre: "2. Electricidad", docentes: ["Enrique Leonardo"] },
    { nombre: "3. Soldadura",    docentes: ["Pes Gustavo y Ojave José"] },
  ]},
  "3° 1°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. Electricidad", docentes: ["Bravo Rolando"] },
    { nombre: "2. Mecanizado",   docentes: ["Moreno Brian"] },
    { nombre: "3. Soldaduría",   docentes: ["Parra Jorge"] },
  ]},
  "3° 2°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. Mecanizado",   docentes: ["Cáceres Diego y Arenas Gonzalo"] },
    { nombre: "2. Electricidad", docentes: ["Blasco Ebery y Puebla Ricardo"] },
    { nombre: "3. Soldaduría",   docentes: ["Herrera Rodolfo y Pennesi Agustín"] },
  ]},
  "3° 3°": { especialidad: "Construcciones", rotaciones: [
    { nombre: "Construcción", docentes: ["David Pacheco", "Miranda Samuel"] },
  ]},
  "3° 5°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. Mecanizado",   docentes: ["Cáceres Diego y Arenas Gonzalo"] },
    { nombre: "2. Electricidad", docentes: ["Blasco Ebery y Puebla Ricardo"] },
    { nombre: "3. Soldadura",    docentes: ["Herrera Rodolfo y Pennesi Agustín"] },
  ]},
  "3° 6°": { especialidad: "Mecánica", rotaciones: [
    { nombre: "1. Mecanizado",   docentes: ["Cáceres Diego y Arenas Gonzalo"] },
    { nombre: "2. Electricidad", docentes: ["Blasco Ebery y Puebla Ricardo"] },
    { nombre: "3. Soldadura",    docentes: ["Herrera Rodolfo y Pennesi Agustín"] },
  ]},
  "4° 1°": { especialidad: "Construcciones", rotaciones: [
    { nombre: "Construcción", docentes: ["Portillo Daniel", "Bru Maximiliano"] },
  ]},
  "4° 2°": { especialidad: "Mecánica", rotaciones: [
    { nombre: "1. Tornería",     docentes: ["Cáceres Diego"] },
    { nombre: "2. Electricidad", docentes: ["Bravo Rolando"] },
    { nombre: "3. Soldaduría",   docentes: ["Parra Jorge"] },
  ]},
  "4° 3°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. Tornería",     docentes: ["Cáceres Diego"] },
    { nombre: "2. Electricidad", docentes: ["Bravo Rolando"] },
    { nombre: "3. Soldadura",    docentes: ["Parra Jorge"] },
  ]},
  "4° 4°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. Tornería",     docentes: ["Cáceres Diego y Arenas Gonzalo"] },
    { nombre: "2. Electricidad", docentes: ["Brasco Ebery y Puebla Ricardo"] },
    { nombre: "3. Soldadura",    docentes: ["Herrera Rodolfo y Pennesi Agustín"] },
  ]},
  "5° 1°": { especialidad: "Construcciones", rotaciones: [
    { nombre: "Sin Rotación", docentes: ["Moreno Brian", "Miranda Claudio", "Michel María"] },
  ]},
  "5° 2°": { especialidad: "Mecánica", rotaciones: [
    { nombre: "1. CNC",        docentes: ["Pennesi Agustin"] },
    { nombre: "2. Neumática",  docentes: ["Castillo Joaquin"] },
    { nombre: "3. Mecanizado", docentes: ["Cáceres Diego"] },
  ]},
  "5° 3°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. CNC",        docentes: ["Pennesi Agustin"] },
    { nombre: "2. Neumática",  docentes: ["Sánchez Cristian"] },
    { nombre: "3. Mecanizado", docentes: ["Castillo Joaquin"] },
  ]},
  "5° 4°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. CNC",          docentes: ["Díaz José"] },
    { nombre: "2. Electrónica",  docentes: ["Pennesi Agustín"] },
    { nombre: "3. Neumática",    docentes: ["Olave José"] },
  ]},
  "6° 1°": { especialidad: "Construcciones", rotaciones: [
    { nombre: "Sin Rotación", docentes: ["Miranda Claudio", "Bru Maximiliano"] },
  ]},
  "6° 2°": { especialidad: "Mecánica", rotaciones: [
    { nombre: "1. Oficina Técnica", docentes: ["Varela Tomás"] },
    { nombre: "2. Mantenimiento",   docentes: ["Castillo Joaquin"] },
    { nombre: "3. CNC",             docentes: ["Pennesi Agustin"] },
  ]},
  "6° 3°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. Automatización",           docentes: ["Aldeco Víctor"] },
    { nombre: "2. Fundamentos PLC Arduino",  docentes: ["Sánchez Cristian"] },
    { nombre: "3. CNC",                      docentes: ["Pennesi Agustin"] },
  ]},
  "6° 4°": { especialidad: "Electromecánica", rotaciones: [
    { nombre: "1. Automatización",           docentes: ["Aldeco Víctor"] },
    { nombre: "2. Fundamentos PLC Arduino",  docentes: ["Sánchez Cristian"] },
    { nombre: "3. CNC",                      docentes: ["Pennesi Agustin"] },
  ]},
}
/* ── ALUMNOS POR CURSO ──
   Lista plana de todos los alumnos de cada curso.
   Para los nuevos cursos sin lista cargada aún → lista vacía (editable desde la app)
   ────────────────────────────────────────────────────────── */
const ALUMNOS_POR_CURSO = {
  "1° 3°": [
    "GUEVARA FONSECA, EDUARDO RAUL","HONORATO, BENJAMIN URIEL","ISAGUIRRE, ELEAZAR ISAAC",
    "MEDINA PRADO, TOMAS MIQUEAS","MENDOZA ARIAS, RAMIRO EZEQUIEL","MOLINA GOMEZ, EMMA FRANCHESCA",
    "MUÑOZ ALVARES, ANGELO BAUTISTA","MUÑOZ, VALENTIN DALMIRO",
    "CALO LOPEZ, KEILA JOCELYN YASMIN","CARRERA VIDELA, ABDIAS ISMAEL","CATALDO PEREZ, BRISA YASMIN",
    "DELSON AMAYA, TOMAS GABRIEL","ESQUICE QUEVEDO, GASTÓN LIONEL OSCAR","FLORES LUQUEZ, MILAGROS AYELEN",
    "GARCIA TAQUICHIRI, TAMARA MELANI","GONZALEZ SZODO, BRANDON YAIR","GONZALEZ, DYLAN TAYLOR",
    "PEREYRA RIVAS, TOMAS","PUEBLA PASTRAN, BENJAMIN ESTEBAN","QUINTEROS DIAZ, FRANCISCO",
    "RODRIGUEZ RODRIGUEZ, LUIS EZEQUIEL","ROLDAN YANICELLI, THIAGO LIONEL","ROMERO, NATACHA SILVANA",
    "SOSA ARJONA, BASTIAN ALEJANDRO LAUTARO","VILDOZO LA PORTILLA, LOURDES CAMILA"
  ],
  "1° 4°": [
    "BARDAZZA, ISAI GUSTAVO","CACERES, EMILIA RINA","CASAL ARROYO, CIRO FRANCISCO",
    "CATALANO ORTIZ, IAN MICHEL","CUADROS AGUILAR, BENJAMIN EZEQUIEL","DIAZ, TIAGO",
    "ECHENIQUE LUCENTINI, JOSE MANUEL","ESPEJO MIRANDA, FRANCESCO","GIZZI AVILA, BAUTISTA JOAQUÍN","GUTIERREZ, DAMARIS AILÍN",
    "HERRERA PALET, SANTIAGO","HERRERA PINEDA, NEYEN ANDRÈS","IRANZO, BENJAMIN DAMIÁN",
    "LOVERA AMIEVA MADRID, FACUNDO URIEL","LUCERO CASTRO, ALEXIS MAXIMILIANO",
    "MAGALLANES VOGELMANN, AMBAR","MALAMAN, MATÍAS ALEJANDRO","MANCILLA OCHOA, DYLAN MICHAEL",
    "MARTINEZ SALCEDO, ABRIL ESPERANZA","MOYANO, JAZMIN ABIGAIL",
    "NUÑEZ BEAS, UZIEL NEHUEN","PRAVATA, RICARDO ANTONIO","QUIÑONES ARUSCA, JONATHAN IGNACIO",
    "RODRIGUEZ CAMPO, TIAGO EMMANUEL","SANCHEZ NOLLAS, BASTIAN NOEL","SCROCCO TAPIA, FRANCESCO LEONARDO",
    "TUR CASELLA, CIRO ALEXANDER","VARAS KOPP, JOSÉ FRANCISCO","VARGAS TRAMONTANA, BENJAMIN"
  ],
  "1° 6°": [
    "ACIAR FLORES, MARCOS BENJAMÍN","ALFAYA MALUF, BAUTISTA NAIM","ARANDA CUCUZZA, SANTINO VALENTIN",
    "BELLO GALLO, TIZIANO ADRIÁN","CASTRO-CHIOVE, ZADQUIEL LUCIANO","CECCOLI VIDELA, RAMIRO ADRIEL",
    "CORDOBA GARCIA, BENJAMÍN EZEQUIEL","CORTES NAVARRO, NICOLÁS MATEO","DÍAZ-ASTUTO, LAUTARO JOAQUIN","ESCUDERO CEPEDA, BASTIAN NAHIR JHESUA",
    "FAILLA MONTENEGRO, CLARA NAHIARA","GARRO FUNES, NICOLÁS EMANUEL","GOMEZ FORCADELL, BENJAMIN LAUTARO",
    "GONZALEZ CABANILLA, ELIAN SAMUEL","LETAR, BIANCA VALENTINA","LUJAN QUINTEROS, BRIAN ALEXIS",
    "MALDONADO CORTEZ, EMMANUEL","MARTINENGO, MARIANA","MATTACINI MARCONI, MARTIN EZEQUIEL","MOLINA MORALES, GIOVANNI ALBERTO",
    "MORAN TRIGO, ULISES BENJAMIN","PAEZ ARENAS, HOMERO LEÓN","PEREZ FERREYRA, ABRIL AZUL",
    "QUIROGA MONTIVERO, ISAIAS ANTUAN","QUIROGA, LEONIDAS ALEJANDRO","QUIROS VERDEJO, RAMIRO NAHUEL",
    "SOSA ARAUJO, ASTOR","TORELLI GUTIERREZ, AUGUSTO GABRIEL","TUMBARELLO MARTINEZ, TEO BENJAMIN","VILA ESBERT, MILAGROS ALEXIA","VILCHES PEREYRA, CIRO ALEXANDER"
  ],
  "1° 7°": [
    "ALVAREZ FERNANDEZ, BENJAMÍN ALEXANDER","ATENCIO CASTILLO, DAVID EZEQUIEL",
    "BARBOSA PLAZA, LAUTARO SEBASTIAN","BUSTOS SALAS, ANA GABRIELA",
    "CASTRO BERRIOS, CATALINA CARMELA","CORNEJO PASCUALETTI, IGNACIO DANIEL",
    "CORREA VALLEJOS, ALEJO","ENCINA ALBERT, CIRO","ESCALANTE FERNANDEZ, MELINA","ESCALANTE FERNANDEZ, TADEO NAHUEL",
    "ESCUDERO CARMONA, GUADALUPE JAZMIN","GONZALEZ DANIELI, CAIN EMMANUEL",
    "IBAÑEZ ALFEI, BAUTISTA BENJAMIN","LEVEQUE BASAEZ, FELIPE AGUSTIN",
    "MANINO RAMOS, JEREMIAS NEYEN","MARTINEZ CARRION, GONZALO MANUEL",
    "MARTINEZ CHEHEM, YANIRA SOLEDAD","MEDRANO DOÑA, LIONEL AGUSTÍN","MORALES ACQUAVIVA, FRANCO LUCIANO","MORETA GAVOSTO, SANTINO",
    "MUÑOZ SUAREZ, BENJAMÍN MAURICIO","PEREIRA FERRO, CIRO PAULO","PEREIRA MANDUCA, LAUTARO MARTIN",
    "PEREZ, JEREMÍAS BENJAMÍN JOAN","RANCES ABALLAY, LUCIANO VALENTIN","REYNOSO, LAUTARO",
    "SALINAS POBLETE, BRANDON JEROME","STAGNARO ALVAREZ, TIZIANA LARA","TORRES, TIZIANO ANGEL","VEGA RIVAS, TIZIANO BENJAMÍN"
  ],
  "1° 8°": [
    "ABDALA BAJOUTH VERDE, FRANCHESCO","AGUILAR, IGNACIO BENJAMÍN","BATTISTONI, VALENTINO JOAQUÍN",
    "BIZZOTTO, MARTINA GABRIELA","CALANDRIA LEIVA, MAXIMO PATRICIO NICOLAS","CARRIZO, MÁXIMO JULIÁN",
    "CATALDO, GONZALO DAMIÁN","CORBALAN, XIOMARA","DI MARCO, TIZIANO JOAQUÍN","DIAZ CARRIZO, MAXIMO DARIAN ISMAEL",
    "FAZIO MORALES, MATEO BENJAMIN","FICARA QUIROGA, JUAN NICOLÁS","HERRERA PELAYES, TOMAS ALEJANDRO",
    "LAMIA ARANCIBIA, MATÍAS ANDRÉS","MARQUEZ, SANTINO NICOLAS","MARTINEZ URETA, SANTIAGO BENJAMÍN",
    "MARTINEZ URETA, WALTER LEONEL","MENDEZ VILLEDARY, MAURICIO VALENTÍN","MONTIVERO STRAMANA, JUAN IGNACIO","NUÑEZ PORTILLO, ISABELLA AGOSTINA",
    "OLGUÍN, ZOE ARIADNA","PONCE, MÍA ZAFIRA","QUIROGA, ABIGAIL LUDMILA",
    "RODRIGUEZ, MATÍAS IGNACIO","ROMERO, MATEO","ROSALES DALMAU, ALMA JAZMÍN",
    "TONELLI FIGUEROA, ENZO LIONEL","VARGAS, ELOY","VIDELA DI TOMASO, JOAQUIN ULISES"
  ],
  "1° 9°": [
    "ALFARO, NAHUEL JOAQUIN","ARAYA, THIAGO","ATENCIO, MAURICIO NICOLAS","BAÑOS GARCIA, CASIANO CATRIEL",
    "CALAS, NOAH ALEXANDER NICOLAS","CASTELLANO, LEONARDO MARTÍN","CASTRO CHAVEZ, ALEJO ISMAEL","CORVALÁN ANDRAGÑEZ, IGNACIO BENJAMÍN",
    "COYA, IAN LAUTARO URIEL","GATICA MARZETTI, CIRO PATRICIO",
    "GONZALEZ VALDIVIA, MAURO","GUARDIA, AUGUSTO NICOLÁS","LUCERO HERNANDEZ, MACARENA STEFANIA",
    "LUCERO LOPEZ, FELIPE LEONEL VALENTIN","MANTELLI FERREYRA, XIMENA VIOLETTA","MANZANO PENNESI, CIRO TOMAS",
    "MARTINEZ MOLINA, SANTIAGO MANUEL","MEDINA NAVARRO, MAILEN YASMIN","MENDEZ MASIP, LEANDRO SEBASTIAN","NAVARRETE RODRIGUEZ, URSULA AZUL",
    "PESCARA, NEYEN AGUSTÍN","PIERANTONELLI, BIANCA CATALINA","PORTALURI LOPEZ, TIZIANA MARIA JOSÉ",
    "PUEBLA, BENJAMÍN LIONEL","RIQUELME TELLO, JOAQUIN ROMAN","SOSA LUNA, TIAGO BENJAMIN",
    "VALENZUELA LOPEZ, MATEO ADRIANO","WILSON, ALEJO SAMIR","ZAMORA, MATIAS JESÚS"
  ],
  "2° 1°": [
    "ACIAR ALBORNOZ, MARÍA DEL ROSARIO","AGUERO GONZALEZ, ALVARO NAZARENO",
    "ALBERTOLI ALBERTINI, SANTIAGO MATEO","BASTIAS DE CARA, VALENTINO IAN","CAILLY, THIAGO NICOLAS",
    "CAMPOS, SEBASTIAN LEONEL","CHAILE, MARCOS SAMIR","CORTEZ GUEVARA, TOMAS","FUENTES ROMERO, AZUL MACARENA",
    "GAYA, LAUREANO VALENTÍN","GONZALEZ, YOSELIN ARAMIL","GUERRA AGUILERA, BRIAN MARTÍN",
    "MIATELLO BERMÚDEZ, ALEJANDRO BENJAMÍN","MILLICAY, ALEX URIEL","OROZCO SOSA, JEREMÍAS THIAGO",
    "OSORIO MOLINA, DEIVI IAN JESÚS","PELAYES, IGNACIO GABRIEL",
    "RODRIGUEZ, JAZMÍN ABRIL","RODRIGO, TOBÍAS JONATHAN JESÚS","ROJAS, ALMA NATASHA SOLANGE",
    "SARMIENTO VELEZ, VALENTINA NAOMI","SIERRA GONZALEZ, TOBÍAS AGUSTÍN",
    "SIERRA GONZALEZ, TOMÁS SEBASTIAN","VILLEGAS ROJAS, ALEJANDRO EMANUEL","ZAMORANO, DALMA DANILA"
  ],
  "2° 5°": [
    "ALFARO PALACIOS, LAUTARO EZEQUIEL","ALFONSO PINI, MATIAS AARON","AZABE BARRERA, IAN URIEL",
    "BAIGORRIA ANTOINE, ALEX BASTIAN","BRINGAS RIQUELME, TEO SAMUEL","BUZZAQUI, MÁXIMO ANDRÉ",
    "CAMPO MORENO, SANTINO EXEQUIEL","CARRANZA GARCIA, FABIAN FRANCO","COBOS ROBLEDO, GUIDO MATEO","CUELLO ALANIS, SANTIAGO JOAQUIN",
    "DIAZ CARDOZO, ALEXIS SEBASTIÁN","DÍAZ MIRANDA, SOFÍA VICTORIA","FERNANDEZ CANALES, ISAIAS JOAQUIN",
    "LENCINA GONZALEZ, MARIO AGUSTÍN","MACHACA, TOMMY NAHUEL","MENDEZ MORALES, DIANA YANINA",
    "MOLINA, VALENTINO BENJAMÍN","MOYANO JUNCO, BENJAMÍN EXEQUIEL","MUÑOZ VILLEGAS, ISAÍAS EMANUEL","OLGUIN, LAUTARO JEREMÍAS",
    "PAEZ FONSECA, NAHIR LIONEL","PEREYRA VARGAS, JULIETA VALENTINA","PEREZ, YESICA NATALI",
    "PESCI LIMA, JOAQUIN NICOLAS","QUIROGA, LARA ELIZABETH","ROJAS, NAHUEL ALEJANDRO","SARI NUÑEZ, JOAQUÍN",
    "SOSA CARO, MAXIMILIANO DANIEL","SOSA SANCHEZ, THIAGO JOAQUÍN",
    "TOLABA OCHOA, IGNACIO FACUNDO LORENZO","VARELA CESPEDES, FACUNDO JOEL"
  ],
  "2° 6°": [
    "ALANYA GONZALES, LAUTARO PIERRE","ANGELONI, LAUTARO","APARICIO CONTRERAS, MARTINA GUADALUPE",
    "ARIAS LIPPI, LUCIO BENJAMÍN","ASCANIO, BAUTISTA EMMANUEL","BARIÑA, MARIANO GABRIEL","BARRERA PAEZ, JUAN CRUZ",
    "BARTOLOMEO PIZARRO, BAUTISTA NICOLÁS","BRAVO, MAXIMILIANO ZAIR","BUSTOS, THIAGO URIEL",
    "CALDERON, EZEQUIEL IOSHUA","CARASA CORTES, LUKA ANDRES","CATROPPA, FRANCHESCO","CLAROTTI LAFERRIERE, MÁXIMO",
    "CORREA ORTIZ, FRANCISCO JESUS","DALESIO-SANCHEZ, ALEJO","DEL POPOLO, NOELIA YAZMIN",
    "DIAZ ARREDONDO, VALENTINO STHEFANO","GAMBINO, THIAGO","GONZALEZ, SANTINO",
    "GORIGOITIA, MATEO ANDRÉS","MEDINA ONOFRI, JUAN FRANCISCO","MENDOZA, MATEO GABRIEL",
    "MOREIRA ATENCIO, ANABELLA ELIZABETH","MORENO, MATEO BENJAMÍN","ROBLEDO VILLEGAS, ALAN IGNACIO",
    "SALAS GAROFALO, JUAN IGNACIO","SANCHEZ, NICOLÁS ALEJANDRO","SUAREZ BRIONES, MAIA GUADALUPE","VICENCIO ALLENDE, ZOE LUCILA"
  ],
  "2° 8°": [
    "BRASILI, ALEJO GABRIEL","BREA, MARÍA CONSTANZA","CALDERON, IGNACIO JUAN GABRIEL",
    "CANTOS RETAMALES, BRUNO XAVIER","CHACON QUIROGA, ANGEL JOEL","CUSIMANO CATANA, NICOLÁS GABRIEL",
    "DIAZ DELGADO, THIAGO","DIAZ FOZZATTI, LAUTARO BENJAMÍN","DIAZ, LUCIANO AGUSTIN","FONT, KEVIN BRIAN",
    "FUNES, EMILIANO LUIS","GELVEZ ECHEVARRIETA, BRIAN NAHUEL","GOMEZ POZO, BENJAMÍN LAUTARO",
    "IBAÑEZ, THIAGO LUIS","JORDAN GARCÍA, YAMIL OMAR","MAURE MORALES, MATEO DIEGO NICOLAS",
    "MERCADO CORIA, SANTINO MATEO","NIETO, NAHUEL ALEJANDRO","PEREZ, MAXIMILIANO ARIEL","PONCE, NAIKÈN MARIANA JOSEFINA",
    "REYES PONCE, IGNACIO NICOLAS","ROSALES, PEDRO ALEXIS MAXIMILIANO","RUGGIERO, VICTOR",
    "SILVA OVIEDO, NATHANIEL GABRIEL","SILVEYRA-RODRIGUEZ, EMILIO LEANDRO","TISERA RAMO, ALEX AGUSTIN",
    "VERA TOLEDO, ZAMIRA ALEXANDRA","VIDELA CASTELLANO, ERIC FABIÁN","ZABALA BRITO, ENZO VALENTIN"
  ],
  "2° 10°": [
    "ARAYA, IGNACIO LUCAS WENCESLAO","BARRIOS ALLENDE, MATEO AUGUSTO","BERRIO ALLEGRETTI, MIA GIULIANA",
    "CORIA, SANTINO MAXIMILIANO","D'ORAZIO, BRUNO SANTINO","FIORE MAZA, STEFANO BAUTISTA",
    "FLORES LUQUE, NAZARENA NAHIR","GALDAME, LUCA EXEQUIEL","GONZALEZ SARMIENTO, EDUARDO URIEL","GUIDOLIN STAGNOLI, FAUSTO GEREMIAS",
    "GUIRIN PERALTA, MATEO PABLO","HERNANDEZ SANTANDER, ÁNGEL AUGUSTO","KRSUL AVEIRO, ALEX TIZIANO",
    "MARAVILLA CARRASCO, BAUTISTA BENJAMIN","MARTINEZ VALDIVIA, LUCIANO DAVID","MARTINEZ, ALUHE LUCIANA",
    "MILANESE SOSA, FABRICIO LUCA","MIRANDA TESTA, THIAGO AZAEL","MONTES DE OCA GARCIA, MATEO BENJAMIN","MORALES OCHOA, JEREMÍAS NICOLÁS",
    "MORALES, LEANDRO JAVIER","OLIVA DIAZ, ALEXANDER D'ANGELO BENJAMIN","PATTI IBAÑEZ, ALAN DANIEL",
    "PUCHETTA VARGAS, IAN ELÍAS URIEL","ROMERO BALLARINI, LEANDRO EZEQUIEL","ROMERO, ANGEL ANDRES DAVID",
    "ROSAS VERNAZZA, AYELÉN SOFÍA","TUMBARELLO MARTINEZ, IAN LAUTARO","WERNER CALCAGNO, HAROLD ERWIN SAUL","ZARATE, SANTINO URIEL"
  ],
  "3° 1°": [
    "GOMEZ LOZANO, CRISTIAN NICOLÁS","IBAÑEZ ESCALANTE, MIA ABIGAIL","IRACHETA, SANTIAGO JOAQUIN",
    "LOPEZ LACOQUE, ALEXIS JOEL","LUCERO PANELO, GUILLERMO LIONEL","MARTIN ACOSTA, NICOLÁS GABRIEL","MEDINA GIL, MARTINA JULIETA",
    "AGÜERO GONZALEZ, LAUTARO TOMÁS","ALTURRIA JOFRE, VALENTINA ABIGAIL","BAZAN GODOY, CRISTIAN BENJAMÍN",
    "CARBAJAL, BELINDA PALOMA MELINA","CASTRO VALDEZ, LAUTARO EZEQUIEL","CORNEJO SANCHEZ, JULIANA GUADALUPE","GIMENEZ GIL, DYLAN YAIR",
    "MEYER, JUAN IGNACIO GABRIEL","REYNALS, VANESA JAZMIN","RODRIGUEZ ESPEJO, FRANCESCA NICOLE",
    "SALCEDO, LUDMILA BELEN","SEGURA, JOAQUÍN VALENTINO","VARGAS GODOY, LUCA GASPAR JUSTINIANO"
  ],
  "3° 2°": [
    "CARRIZO LUCERO, SANTIAGO THOMAS","CORVALAN ANDRAGÑEZ, BAUTISTA LAIR","PUEBLA SOSA, LAUTARO BENJAMÍN",
    "ALVAREZ PEREZ, LAUTARO NICOLÁS","ARENAS BERTANI, THIAGO VALENTÍN","BELWON, ANA VICTORIA",
    "CARRAZCO LEAÑO, MAITE DIANA CIELO","CCACYAVILCA MORENO, PEDRO TOMÁS","CEPEDA HERRERA, ADASHALESS MILAGRO","CORDOBA, IGNACIO JOAQUÍN",
    "CORNEJO PASCUALETTI, MIA YASMÍN","GARCIA VILLEGAS, LAUTARO AGUSTÍN","GONZALEZ CABANILLA, LEÓN ISMAEL",
    "GONZALEZ GARCIA, FACUNDO","GUIRALDEZ FLORES, FACUNDO MARTÍN","HORCAS PASTRAN, VALENTINO GABRIEL",
    "MAFAUD BOLCATO, LEANDRO EZEQUIEL","MANCUSO, TOBÍAS AGUSTÍN","MARQUEZ FERRARI, LUCA SANTIAGO","MARTINEZ RUEDA, THIAGO MATIAS",
    "MORENO, MARTINA","OLEA CHANDÍA, SANTINO","PAEZ, JONAS SANTIAGO","ROBLES GARCIA, NOHA",
    "SUAREZ VILDOZA, GASTÓN ANTONIO","VICENCIO COVARRUBIAS, RICARDO LEONEL",
    "VICENTELA SPIGORELLO, FACUNDO SEBASTIÁN","VIDELA MONTES, ANGEL AGUSTIN","FUNES, LEONEL FACUNDO"
  ],
  "3° 3°": [
    "ALAMO CARRETERO, HUGO ROGELIO","BORTOLOTTO, ENZO","CARI RAMOS, KIARA SOFIA",
    "CILAURO GONZALEZ, THIAGO JAVIER","CONDORI MARTINEZ, EZEQUIEL GABRIEL","DE LA FUENTE DELGADO, SAMUEL EXEQUIEL",
    "DEL PONTE, JUAN BAUTISTA","DIAZ, FACUNDO ULISES","GARCIA TAQUICHIRI, CANDELA ADRIANA","GARRIDO, IGNACIO BENJAMIN",
    "LA FLOR CALDERÓN, LAUTARO JULIÁN","LAZARO, TIZIANO EZEQUIEL","LUCERO, LUCIANO JONAS",
    "MARTIN LORENZO, CRISTIAN NAHUEL","MENDEZ MORALES, GABRIEL EDUARDO","MORALES CASTILLO, JAVIER",
    "PEREZ, BAUTISTA BENJAMIN","PUITA ESPINOZA, MELANIE ANAHI","RETAMALES, ÁNGEL JOAQUÍN",
    "RUÍZ ZOTAR, ZOE ANAIS JEZABEL","SILVA LABARDA, FACUNDO GABRIEL","URRA, ANGEL GABRIEL",
    "VALENCIA CARUSO, FACUNDO AGUSTÍN","VALENCIA CARUSO, MARIO HÉCTOR","VILLEGAS-FLORES, GABRIEL DAVID VALENTIN","ZUFIA, JUAN BAUTISTA"
  ],
  "3° 5°": [
    "AZCURRA DE LA PUENTE, MAXIMO CIRO","CARRERA, ALEJANDRO AGUSTÍN","CECCOLI VIDELA, TIAGO AGUSTIN",
    "CORREA ZALAZAR, MATEO GIOVANNI","DI JULIO, GONZALO AGUSTÍN","DIAZ, NAHUEL MAXIMILIANO",
    "GONZALEZ TORRES, DIEGO ARIEL ALEXIS","GONZALEZ, CHRISTOPHER SANTINO","JORDAN SALINAS, JOAQUIN URIEL",
    "MONTAÑEZ ARANGUEZ, ALAN TIZIANO","MORENO, MAXIMO ALEJANDRO","ORELLANO GATICA, FACUNDO EMILIANO",
    "POULER BERTE, AMADA ELENA","SILVA ARACENA, LAUTARO MAXIMILIANO","TOBARES ARACENA, MATÍAS LEONEL",
    "VIDELA GONZALEZ, THIAGO MARTINO","VILLARROEL NARANJO, YOEL CRISTIAN","MOYANO CALLEJON, LUCA JOAQUIN",
    "AGÜERO GOMEZ, ULISES LAUTARO","CORDOBA GARCÍA, NICOLE SOLANGE"
  ],
  "3° 6°": [
    "AZCURRA DE LA PUENTE, MAXIMO CIRO","CARRERA, ALEJANDRO AGUSTÍN","CECCOLI VIDELA, TIAGO AGUSTIN",
    "CORREA ZALAZAR, MATEO GIOVANNI","DI JULIO, GONZALO AGUSTÍN","DIAZ, NAHUEL MAXIMILIANO",
    "GONZALEZ TORRES, DIEGO ARIEL ALEXIS","GONZALEZ, CHRISTOPHER SANTINO","JORDAN SALINAS, JOAQUIN URIEL",
    "MONTAÑEZ ARANGUEZ, ALAN TIZIANO","MORENO, MAXIMO ALEJANDRO","ORELLANO GATICA, FACUNDO EMILIANO",
    "POULER BERTE, AMADA ELENA","SILVA ARACENA, LAUTARO MAXIMILIANO","TOBARES ARACENA, MATÍAS LEONEL",
    "VIDELA GONZALEZ, THIAGO MARTINO","VILLARROEL NARANJO, YOEL CRISTIAN","MOYANO CALLEJON, LUCA JOAQUIN",
    "AGÜERO GOMEZ, ULISES LAUTARO","CORDOBA GARCÍA, NICOLE SOLANGE"
  ],
  "4° 1°": [
    "ARROYO GONZALEZ, LARA ABIGAIL","BAZÁN JARA, DIEGO LAUTARO DANILO","DAVECCHI CESPEDES, MAYRA ANABELLA",
    "FLORES, ULISES DAVID","FUENTES NAVARRO, JULIÁN ISMAEL","HUERTA ATENCIO, NEREA DANISA",
    "LUCERO CASTRO, RODRIGO SAMUEL","MENDOZA ARCE, MILAGROS VALENTINA","OSORIO MOLL, LUCA JESÚS",
    "PERALTA CASTRO, ROCIO GUADALUPE","QUIROGA, CAMILA NEREA"
  ],
  "4° 2°": [
    "ARREGUEZ GIMENEZ, SANTINO JULIÁN","SUAREZ, ENZO JOAQUIN","CASTRO MARCHAN, THIAGO AURELIANO",
    "CHADES ALARCON, FRANCISCO ZAIR","CONCHA CALDERÓN, THIAGO GADIEL",
    "DE CARLE DALCOLMO, RODRIGO FRANCISCO EZEQUIEL","DELGADILLO, IGNACIO JOAQUÍN SANTINO",
    "DIAZ MIRANDA, OCTAVIO ARTURO","DOMINGUEZ MONTENEGRO, GONZALO MATIAS S",
    "ESPONDA ALFARO, GUADALUPE AIME","FAMOSO TAPIA, TIZIANO JULIAN","GALVEZ SOSA, SERGIO LAUTARO",
    "LOPEZ TOLEDO, AGUSTÍN EMMANUEL","MONTAÑEZ ARANGUEZ, DYLAN ADRIEL",
    "MONTUELLE BESACHO, FRANCISCO LIONEL","PERDOMO CASTILLO, JAVIER ALEJANDRO",
    "PEREZ, JENNIFER FABIANA","SANHUEZA PELAYES, JEREMIAS LEONEL","VIDELA FLORES, JEREMÍAS ELOY"
  ],
  "4° 3°": [
    "CARRIZO PUEBLA, LUCIANO RICARDO","CÁSERES, LAUTARO DAMIÁN","GARAY, LUCIANO JOEL",
    "BASILE ACEVEDO, AGUSTÍN DAN","FARIAS LONGONE, ALEXANDER OSCAR","GOMEZ DIAZ, PATRICIO BENJAMÍN",
    "GONZALEZ LAGOS, RODRIGO AGUSTÍN","GONZALEZ NAVARRO, ANGELO ISAIAS","GONZALEZ ROMERO, SANTIAGO MANUEL",
    "HUATAY URIOL, JUAN IGNACIO","LOPEZ, JUAN MANUEL","MENDOZA ARIAS, ENZO LUCAS",
    "MORALES LOBOS, AARON CESAR","ORTIZ, ZAHIRA JOSEFINA","OVIEDO-VELAZQUEZ, FABRIZIO ISAÍAS",
    "OZAN-GONZALEZ, AQUILES DANIEL","POCOSGNICH GONZALEZ, DANTE ANGELO","SPOSATO SCHMITT, SANTIAGO LUCIANO"
  ],
  "4° 4°": [
    "ABAN-MENDEZ, GABRIEL ALEJANDRO","ABUIN CUELLO, ALEJO BENJAMÍN","ARAYA, VALENTÍN SEBASTIÁN",
    "BENITEZ LERMA, ASIER MARCOS","CHAVARRIA CASTRO, TIAGO BENJAMIN","DIAZ VALDIVIA, JOAQUIN EZEQUIEL",
    "FLORES GABRIEL, JOSÉ LUIS","FRUTOS, THIAGO RAÚL","GALLARDO, VALENTIN IGNACIO","GARCIA LUCERO, LIONEL FABRICIO",
    "GARCIA MORENO, MÁXIMO TICIANO","HERRERA ROSALES, CAMILA MILAGROS","IBAÑEZ VALDEZ, ALEJANDRO FABIAN",
    "LOBO, AGUSTÍN LAUTARO","LUCERO HERNANDEZ, CRISTIAN RODRIGO","MARTIN BORRA, JEREMÍAS SEBASTIÁN",
    "MARTINELLI PEREYRA, LAUREANO JOAQUIN","MEDINA LOBOS, TOBÍAS GONZALO","MONTOYA MENDOZA, DAVID AXEL URIEL",
    "ORELLANO JOFRE, JOAQUÍN ROMAN","ORTIZ, MORA VALENTINA","PALAZZO MORENO, JOAQUIN EZEQUIEL",
    "PEREZ, TIZIANO ROMÁN","RASGIDO RUIZ, JOAQUÍN GABRIEL","VALLONE, GIULIANO JAVIER","VASQUEZ, BRISA ROCIO NAHIR",
    "VIDELA SARMIENTO, THIAGO ARIEL","VILLAFAÑE REYES, JOAQUÍN ALEXANDER","VILLARRUEL CORONEL, THIAGO LIONEL","ZAMORA, JUAN GABRIEL"
  ],
  "5° 1°": [
    "AZULA, JULIETA DENISE","BRIZUELA, TIAGO URIEL","FERRARO MORALES, ROSA BRUNELA",
    "COCOLA BAMONDE, JADE SOFIA","GALVEZ SOSA, LARA M. DE LOS ÁNGELES","GELVEZ ECHEVARRIETA, TAMARA AGUSTINA",
    "LEYBA LUNA, NEYEN ARÓN","PITTON, MARTIN OCTAVIO","QUIROGA LAZCORRETA, ISAÍAS ABEL",
    "RETA, ENZO BAUTISTA","RIVERO CAMPANELLA, MARÍA AZUL","RIVERO CAMPANELLA, VALENTINO LUCIANO",
    "RUIZ, LEONEL GINO ANDRÉS","SOSA FLORES, IGNACIO URIEL","VELAZQUEZ JABALOYES, GASTÓN MARTÍN"
  ],
  "5° 2°": [
    "CARASA CORTES, LAUTARO EXEQUIEL","DIAZ, JAVIER FERNANDO","DOMINGUEZ, ENZO MATÍAS",
    "FERNANDEZ RIVEROS, NAHUEL AGUSTIN","OCHOA, DANIELA ABIGAIL","PINEDA, TIAGO NAHUEL",
    "ACIAR ALBORNOZ, SANTINO AGUSTÍN","GODOY QUIROGA, EMILIANO EZEQUIEL",
    "MARTINEZ MOYANO, FACUNDO NAHUEL","NUÑEZ, NAHUEL ALEJANDRO","VILLEGAS MOPARDO, BELÉN"
  ],
  "5° 3°": [
    "AGUILERA, AMIR JULIAN","ALBAREZ GONZALEZ, MATÍAS NICOLÁS","CABANILLA, CARLOS DANIEL",
    "CAMPOS, OSCAR EDUARDO","CARRIZO NICOLOFF, LAURA MARIELA","CLAROTTI LAFFERRIERE, VALENTINO",
    "ECHENIQUE LUCENTINI, JUAN BAUTISTA","GONZALEZ, GABRIEL ALESSANDRO","JARA ROGUIER, TEO",
    "JARA, ESTEBAN ANGEL NAHUEL","LEPEZ, MÁXIMO BENJAMÍN","LOYOLA PESCARA, JULIETA VALENTINA",
    "MUÑOZ PERALTA, LUCAS MAXIMILIANO","ORO CATALAN, BRIAN JOEL","PINO MORETTI, VALENTINO",
    "RETA MERCADO, THIAGO JESÚS ARÓN","ROJAS, THIAGO VALENTÍN","VIDELA ASSON, JUAN CRUZ",
    "ZARATE PEREYRA, AUGUSTO BENJAMÍN","ZARATE PEREYRA, LAUTARO URIEL",
    "CARRASCO LEAÑO, LUZ BIANCA","RUIZ, JUAN LAUTARO"
  ],
  "5° 4°": [
    "ALCARAZ LARA, JUAN MANUEL","AMAYA GALERA, JOAQUIN","BAIGORRIA PORTABELLA, JUAN IGNACIO",
    "BARRACO ESCUDERO, ELÍAS BENJAMÍN","CACERES, DANTE GUILLERMO","CHAVEZ QUINTERO, SANTIAGO NICOLAS",
    "ESCUDERO CEPEDA, IAN TIZIANO","FERREYRA QUINTEROS, THIAGO DAMIÁN","GARRIDO, JULIÁN","GONZALES ROCA, LAUTARO Y.",
    "GUTIERREZ, JUAN CRUZ","KUNEN MONTERO, MAURO FACUNDO","LA FLOR CALDERON, JOAQUÍN IGNACIO","LUNA VON VOGLER, SEBASTIAN VICTOR",
    "MADARIAGA VIRUEL, LUCIANO TOMÁS","MOLINA NUÑEZ, BRANDON ALEJO RAFAEL","MORALES, GABRIEL",
    "MORALES, SANTIAGO ARIEL","NUÑEZ CHACON, CELESTE ABIGAIL","ORTIZ BARISCHETTI, GABRIEL AGUSTIN","RIQUELME PEREDA, MAXIMILIANO FEDERICO"
  ],
  "6° 1°": [
    "ARRIETA VERDEJO, JOAQUÍN SEBASTIÁN","ARROYO MASSA, ELÍAS DARÍO","BAIGORRIA PORTABELLA, PAULA CELESTE",
    "CACERES, DANIEL DARIAN","CEPEDA, FACUNDO NAHUEL","HOREN, DANIEL LUIS ALEJANDRO",
    "LLEDÓ, MÁXIMO VICENTE","MONTENEGRO, JOEL EMILIANO","MORALES, DAVID ISMAEL",
    "PEREZ ELST, BRIAN HERNÁN","QUINTEROS DÍAZ, JOAQUÍN","QUIROGA MARTINEZ, MAXIMILIANO JESÚS","ROJAS DIAZ, ANTONIO GASTÓN"
  ],
  "6° 2°": [
    "BORSELLINO FUENTES, LUCIANO LAUTARO","CATALDO PEREZ, CANDELA LUCÍA","GIMENEZ GIL, WILLIAM URIEL",
    "OROS, LUIS SANTIAGO","PONCE, VALENTINA MARÍA ELENA","PORRA SALINAS, MAURO IGNACIO",
    "QUIROGA CIMARELLI, RODRIGO FACUNDO","RODRIGUEZ ESPEJO, BENJAMIN ROMAN",
    "RODRIGUEZ QUIROGA, NAHUEL VALENTÍN","TORRES CHAVES, CAMILO AGUSTIN"
  ],
  "6° 3°": [
    "BRIZUELA PERNICCI, OCTAVIO GERÓNIMO","CARTES MOYA, MORENA SOFÍA","GARRO MONTAÑEZ, MAIA JAZMÍN",
    "GIORDANO, LAUTARO URIEL","GONZALEZ, ROCÍO CAMILA","IZAGUIRRE, GASTÓN GIULIANO",
    "JORQUERA MARINERO, JOSÉ IGNACIO","LUCERO, LEONARDO FACUNDO","MANTOVANI LENCINA, MARCOS LIONEL",
    "OCAMPO, GASTÓN LEONEL","ORTIZ, EMILIANO JAVIER","PATIRI BASTIAS, WALTER SAMUEL",
    "RODRIGUEZ CONTRERA, PABLO LEONARDO","RODRIGUEZ LAUGLE, JOAQUIN","SOSA, MÁXIMO ROMÁN",
    "VEGA TOBARES, JULIÁN TADEO","ZAMBRANO, MARTÍN JOSÉ","ZAMORANO, FACUNDO AGUSTÍN"
  ],
  "6° 4°": [
    "BARRIOS, RENZO CIRO JESÚS","CONIL, BRUNO ANDRÉS","FARRANDO ESQUICE, JOAQUÍN WALTER ANDRÉS",
    "FORTTE PATTINI, EDUARDO SANTINO","LOPEZ, YOSELIE ARIADNA","NUÑEZ, SANTINO LEONEL",
    "PADILLA MORENO, FLORENCIA ESTEFANÍA","PRADO LUCERO, LUCAS LEONEL","PUEBLA TORREZ, MATIAS URIEL",
    "CLAROTTI LAFFERRIERE, PRIMO GIOVANNI","DIAZ FOZZATTI, THOMAS LIONEL","ESPONDA ALFARO, JAZMÍN ALUHE",
    "GALBAN GODOY, JUAN IGNACIO","GONZALEZ MOLINA, KEVIN MARTÍN","GONZALEZ SILANES, NICOLÁS AGUSTÍN",
    "GUAQUINCHAY GIMENEZ, JORGE ANTONIO URIEL","ROBLEDO, MARTIN ALEJO","ROJAS, FRANCO EZEQUIEL",
    "ZUÑIGA PONCE, MÁXIMO LAUTARO EZEQUIEL"
  ],
};


const COLORS = ["#4f8ef7","#3ecf8e","#f7c14f","#f76f6f","#a78bfa","#f97316","#06b6d4","#84cc16"];

/* ── ESTADO ── */
const S = { curso:"", hor:"", esp:"", rot:"", doc:"", alumnos:[], activities:[], openId:null, rotacionesAlumnos:{} };

/* ── AUTH ── */
function startApp(name) {
  document.getElementById("un").textContent = name;
  restoreAlumnosFromStorage();
  if (window.innerWidth <= 860) {
    document.querySelector(".sidebar").classList.add("open");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("m-fec").valueAsDate = new Date();

  function checkMobile() {
    const isMobile = window.innerWidth <= 860;
    const btn = document.getElementById("btn-toggle-sidebar");
    if (btn) btn.style.display = isMobile ? "flex" : "none";
    const pill = document.querySelector(".user-pill");
    if (pill) pill.style.display = isMobile ? "none" : "flex";
    const sb = document.querySelector(".sidebar");
    if (sb && !isMobile) sb.classList.remove("open");
  }
  checkMobile();
  window.addEventListener("resize", checkMobile);
  startApp("Docente");
});

function toggleSidebar() {
  const sb = document.querySelector(".sidebar");
  sb.classList.toggle("open");
}

// Auto-close sidebar on mobile after pressing Actividades or Ver alumnos
function closeSidebarMobile() {
  if (window.innerWidth <= 860) {
    document.querySelector(".sidebar").classList.remove("open");
  }
}

/* ── DROPDOWNS ── */
function fillSel(id, opts, ph, on) {
  const s = document.getElementById(id);
  s.innerHTML = `<option value="">${ph}</option>`;
  opts.forEach(o => { const op = document.createElement("option"); op.value = op.textContent = o; s.appendChild(op); });
  s.disabled = !on;
}
function badge(id, on) { const el = document.getElementById("b"+id); if (el) el.classList.toggle("on",on); }

function onCurso() {
  S.curso = document.getElementById("s-curso").value;
  S.hor = S.esp = S.rot = S.doc = ""; S.alumnos = [];
  badge(2,false); badge(3,false); badge(4,false); badge(5,false);
  document.getElementById("esp-display").style.color = "var(--mut)";
  document.getElementById("esp-display").textContent = "— Se completa según el curso —";
  const _hd = document.getElementById("hor-display");
  _hd.textContent = "— Se completa según el curso —";
  _hd.style.color = "var(--mut)";
  _hd.style.borderColor = "";
  fillSel("s-rot", [], "— Seleccioná rotación —", false);
  resetDocField(false);

  if (!S.curso) { checkViz(); return; }

  // Paso 1: turno automático (un solo turno por curso)
  const horarios = HORARIOS[S.curso] || [];
  S.hor = horarios[0] || "";
  const horDisplay = document.getElementById("hor-display");
  if (S.hor) {
    horDisplay.textContent = S.hor;
    horDisplay.style.color = "var(--text)";
    horDisplay.style.borderColor = "var(--grn)";
    badge(2, true);
  }

  // Paso 2: especialidad automática
  const cd = CURSOS_DATA[S.curso];
  if (cd) {
    S.esp = cd.especialidad;
    badge(3, true);
    document.getElementById("esp-display").style.color = "var(--text)";
    document.getElementById("esp-display").textContent = cd.especialidad;

    // Paso 3: habilitar rotaciones
    const rotNames = cd.rotaciones.map(r => r.nombre);
    fillSel("s-rot", rotNames, "— Seleccioná rotación —", true);
    badge(4, false);

    // Si hay una sola rotación → auto-seleccionar
    if (rotNames.length === 1) {
      const sel = document.getElementById("s-rot");
      sel.value = rotNames[0];
      S.rot = rotNames[0];
      badge(4, true);
      // Auto-fill docente
      const rotObj = cd.rotaciones[0];
      const docs = rotObj ? rotObj.docentes : [];
      if (docs.length === 1) {
        S.doc = docs[0];
        badge(5, true);
        document.getElementById("doc-wrap").innerHTML = `
          <div style="background:var(--surf2);border:1px solid var(--grn);border-radius:var(--r);
            padding:9px 13px;font-size:.84rem;color:var(--grn);display:flex;align-items:center;gap:8px;">
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>${esc(S.doc)}</div>`;
      } else if (docs.length > 1) {
        S.doc = "";
        document.getElementById("doc-wrap").innerHTML = `<select class="ss" id="s-doc" onchange="onDoc()">${
          ['<option value="">— Seleccioná docente —</option>',
           ...docs.map(d=>`<option>${d}</option>`)].join('')
        }</select>`;
      }
    }
  }

  checkViz();
}

function onHor() { /* turno ahora se setea automáticamente en onCurso */ }

// Paso 3 del sidebar ahora muestra la especialidad (informativo) y paso 4 la rotación
// Renombramos internamente: s-esp ya no se usa como selector, mostramos texto fijo
function onEsp() {
  // No se usa (el campo especialidad se llena solo desde CURSOS_DATA)
}

function onRot() {
  S.rot = document.getElementById("s-rot").value;
  S.doc = ""; S.alumnos = [];
  badge(4, !!S.rot); badge(5, false);

  if (!S.rot) { resetDocField(false); checkViz(); return; }

  const cd = CURSOS_DATA[S.curso];
  const rotObj = cd ? cd.rotaciones.find(r => r.nombre === S.rot) : null;
  const docs = rotObj ? rotObj.docentes : [];

  if (docs.length === 1) {
    // Único docente → autocompleta y muestra como texto, sin selector
    S.doc = docs[0];
    badge(5, true);
    const docWrap = document.getElementById("doc-wrap");
    docWrap.innerHTML = `
      <div style="
        background: var(--surf2); border: 1px solid var(--grn);
        border-radius: var(--r); padding: 9px 13px; font-size: .84rem;
        color: var(--grn); display:flex; align-items:center; gap:8px;
      ">
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        ${esc(S.doc)}
      </div>`;
  } else if (docs.length > 1) {
    // Múltiples docentes → mostrar selector
    S.doc = "";
    badge(5, false);
    const docWrap = document.getElementById("doc-wrap");
    docWrap.innerHTML = `<select class="ss" id="s-doc" onchange="onDoc()">${
      ['<option value="">— Seleccioná docente —</option>',
       ...docs.map(d=>`<option>${d}</option>`)].join('')
    }</select>`;
  } else {
    resetDocField(false);
  }
  checkViz();
}

function onDoc() {
  const sel = document.getElementById("s-doc");
  if (sel) { S.doc = sel.value; badge(5, !!S.doc); S.alumnos = []; }
  checkViz();
}

function resetDocField(enabled) {
  S.doc = "";
  const docWrap = document.getElementById("doc-wrap");
  if (!enabled) {
    docWrap.innerHTML = `<select class="ss" id="s-doc" disabled><option>— Primero seleccioná rotación —</option></select>`;
  }
}

function checkViz() {
  const ok = !!(S.curso && S.hor && S.esp && S.rot && S.doc);
  document.getElementById("btn-viz").disabled = !ok;
  document.getElementById("btn-alum").disabled = !ok;
}

/* ── HELPER: obtener alumnos para el curso+rotación actual ── */
function getAlumnosCursoRot() {
  // Siempre devuelve TODOS los alumnos del curso, sin filtrar por rotación
  const lista = ALUMNOS_POR_CURSO[S.curso];
  if (!lista) return [];
  return Array.isArray(lista) ? lista : [];
}

/* ── VISUALIZAR ── */
function visualizar() {
  const lista = getAlumnosCursoRot();
  S.alumnos = lista.map((n, i) => ({ id: i, nombre: n }));

  const key = skey();
  try { const r = localStorage.getItem(key); S.activities = r ? JSON.parse(r) : []; }
  catch(e) { S.activities = []; }

  document.getElementById("acts-title").textContent = `${S.curso} — ${S.esp}`;
  document.getElementById("acts-chips").innerHTML = `
    <span class="chip">🕒 <strong>${S.hor}</strong></span>
    <span class="chip">🔄 <strong>${S.rot}</strong></span>
    <span class="chip">👤 <strong>${S.doc}</strong></span>
  `;
  closeSidebarMobile();
  show("sc-acts");
  renderActs();
  toast(`${S.alumnos.length} alumnos · ${S.activities.length} actividad${S.activities.length!==1?"es":""}`, "ok");
}

/* ── RENDER ACTIVITIES ── */
function renderActs() {
  const tbody = document.getElementById("acts-tbody");
  const empty = document.getElementById("acts-empty");
  const tbl   = document.getElementById("acts-tbl");

  if (!S.activities.length) { empty.style.display="block"; tbl.style.display="none"; return; }
  empty.style.display = "none"; tbl.style.display = "table";

  tbody.innerHTML = "";
  S.activities.forEach(act => {
    const regs   = act.registros || {};
    const filled = Object.values(regs).filter(r=>r.nota!==""&&r.nota!==undefined || r.asistencia).length;
    const pct    = S.alumnos.length ? Math.round(filled/S.alumnos.length*100) : 0;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="a-name-cell">
          <div class="a-icon">${act.icon||"📋"}</div>
          <span class="a-name">${esc(act.nombre)}</span>
        </div>
      </td>
      <td style="color:var(--mut);white-space:nowrap">${fmtD(act.fecha)}</td>
      <td style="color:var(--mut);font-size:.8rem;max-width:180px">${esc(act.obs)||"—"}</td>
      <td>
        <div class="prog-wrap">
          <div class="prog-bg"><div class="prog-fill" style="width:${pct}%"></div></div>
          <span class="prog-lbl">${filled}/${S.alumnos.length}</span>
        </div>
      </td>
      <td>
        <div class="btn-row">
          <button class="btn-open" onclick="openAct('${act.id}')">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Abrir
          </button>
          <button class="btn-icon del" title="Eliminar" onclick="delAct('${act.id}')">
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function delAct(id) {
  if (!confirm("¿Eliminar esta actividad y todos sus registros?")) return;
  S.activities = S.activities.filter(a=>a.id!==id);
  save(); renderActs(); toast("Actividad eliminada","inf");
}

/* ── OPEN ACTIVITY ── */
function openAct(id) {
  S.openId = id;
  const act = S.activities.find(a=>a.id===id);
  if (!act) return;
  document.getElementById("d-icon").textContent = act.icon||"📋";
  document.getElementById("d-name").textContent = act.nombre;
  document.getElementById("d-fecha").textContent = fmtD(act.fecha);
  document.getElementById("d-obs-span").innerHTML = act.obs ? `💬 ${esc(act.obs)}` : "";
  document.getElementById("det-q").value = "";
  show("sc-det");
  renderDet();
}
function goBack() { show("sc-acts"); renderActs(); }

/* ── RENDER DETAIL ── */
function renderDet() {
  const act  = S.activities.find(a=>a.id===S.openId);
  if (!act) return;
  const regs = act.registros||{};
  const q    = document.getElementById("det-q").value.toLowerCase();
  const list = q ? S.alumnos.filter(a=>a.nombre.toLowerCase().includes(q)) : S.alumnos;

  document.getElementById("det-ct").textContent = `${list.length} de ${S.alumnos.length} alumnos`;

  const vals  = Object.values(regs);
  const notas = vals.filter(r=>r.nota!==""&&r.nota!==undefined);
  const avg   = notas.length ? (notas.reduce((s,r)=>s+parseFloat(r.nota),0)/notas.length).toFixed(1) : "—";
  const pres  = vals.filter(r=>r.asistencia==="P").length;
  const aus   = vals.filter(r=>r.asistencia==="A").length;
  const tard  = vals.filter(r=>r.asistencia==="T").length;

  document.getElementById("d-stats").innerHTML = `
    <div class="sm"><div class="sm-val" style="color:var(--grn)">${pres}</div><div class="sm-lbl">Presentes</div></div>
    <div class="sm"><div class="sm-val" style="color:var(--red)">${aus}</div><div class="sm-lbl">Ausentes</div></div>
    <div class="sm"><div class="sm-val" style="color:var(--acc2)">${tard}</div><div class="sm-lbl">Tardanza</div></div>
    <div class="sm"><div class="sm-val" style="color:var(--acc)">${avg}</div><div class="sm-lbl">Promedio</div></div>
  `;

  const tbody = document.getElementById("det-tbody");
  tbody.innerHTML = "";

  list.forEach((al, idx) => {
    const r = regs[al.id]||{nota:"",asistencia:"",obs:""};
    const init = al.nombre.split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase();
    const col  = COLORS[al.id % COLORS.length];
    const n    = r.nota!==undefined ? r.nota : "";
    const nn   = parseFloat(n);
    const gc   = n===""? "" : nn>=7?"h": nn>=4?"m":"l";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="color:var(--mut);font-size:.78rem">${idx+1}</td>
      <td><div class="s-name-cell"><div class="av" style="background:${col}22;color:${col}">${init}</div>${esc(al.nombre)}</div></td>
      <td>
        <div class="nota-disp ${gc}" id="nd-${al.id}" onclick="focusN(${al.id})">${n!==""?n:"—"}</div>
        <div class="nota-inp-wrap" id="niw-${al.id}">
          <input type="number" id="ni-${al.id}" value="${n}" min="1" max="10" step="0.5"
            onblur="blurN(${al.id})" onkeydown="if(event.key==='Enter')blurN(${al.id})" placeholder="1-10"/>
        </div>
      </td>
      <td>
        <div class="att-sel">
          <button class="att-b ${r.asistencia==='P'?'sp':''}" id="ab-P-${al.id}" onclick="setAtt(${al.id},'P')">P</button>
          <button class="att-b ${r.asistencia==='A'?'sa':''}" id="ab-A-${al.id}" onclick="setAtt(${al.id},'A')">A</button>
          <button class="att-b ${r.asistencia==='T'?'st':''}" id="ab-T-${al.id}" onclick="setAtt(${al.id},'T')">T</button>
        </div>
      </td>
      <td><input class="obs-inp" id="ob-${al.id}" type="text" value="${esc(r.obs||'')}" placeholder="Observaciones…" onchange="setObs(${al.id},this.value)"/></td>
      <td><button class="btn-save-row" onclick="saveRow(${al.id})">Guardar</button></td>
    `;
    tbody.appendChild(tr);

  });
}

/* ── INLINE NOTA ── */
function focusN(aid) {
  document.getElementById("nd-"+aid).style.display = "none";
  const w = document.getElementById("niw-"+aid);
  w.style.display = "flex";
  const i = document.getElementById("ni-"+aid);
  i.focus(); i.select();
}
function blurN(aid) {
  const inp = document.getElementById("ni-"+aid);
  const v   = inp.value.trim();
  if (v !== "" && (parseFloat(v)<1||parseFloat(v)>10)) { toast("Nota entre 1 y 10","err"); inp.focus(); return; }
  const act = S.activities.find(a=>a.id===S.openId);
  if (!act.registros) act.registros = {};
  if (!act.registros[aid]) act.registros[aid] = {nota:"",asistencia:"",obs:""};
  act.registros[aid].nota = v==="" ? "" : parseFloat(v);

  document.getElementById("niw-"+aid).style.display = "none";
  const nd = document.getElementById("nd-"+aid);
  nd.style.display = "";
  const n  = act.registros[aid].nota;
  const gc = n===""?"": n>=7?"h": n>=4?"m":"l";
  nd.className = `nota-disp ${gc}`;
  nd.textContent = n!==""?n:"—";
}

/* ── INLINE ASISTENCIA ── */
function setAtt(aid, v) {
  const act = S.activities.find(a=>a.id===S.openId);
  if (!act.registros) act.registros = {};
  if (!act.registros[aid]) act.registros[aid] = {nota:"",asistencia:"",obs:""};
  const cur = act.registros[aid].asistencia;
  act.registros[aid].asistencia = cur===v ? "" : v;
  const map = {P:"sp",A:"sa",T:"st"};
  ["P","A","T"].forEach(k => {
    const b = document.getElementById(`ab-${k}-${aid}`);
    if (b) b.className = "att-b " + (act.registros[aid].asistencia===k ? map[k] : "");
  });
}

/* ── INLINE OBS ── */
function setObs(aid, val) {
  const act = S.activities.find(a=>a.id===S.openId);
  if (!act.registros) act.registros = {};
  if (!act.registros[aid]) act.registros[aid] = {nota:"",asistencia:"",obs:""};
  act.registros[aid].obs = val;
}

/* ── SAVE ROW ── */
function saveRow(aid) {
  const obsEl = document.getElementById("ob-"+aid);
  if (obsEl) setObs(aid, obsEl.value);
  save();
  renderDet();
  toast("Guardado ✓","ok");
}

/* ── MODAL NUEVA ACTIVIDAD ── */
function openNewAct() {
  document.getElementById("m-nom").value = "";
  document.getElementById("m-fec").valueAsDate = new Date();
  document.getElementById("m-obs").value = "";
  document.getElementById("ov-act").classList.add("open");
  setTimeout(()=>document.getElementById("m-nom").focus(), 80);
}
function closeAct(e) {
  if (e && e.target !== document.getElementById("ov-act")) return;
  document.getElementById("ov-act").classList.remove("open");
}
function createAct() {
  const nom = document.getElementById("m-nom").value.trim();
  const fec = document.getElementById("m-fec").value;
  const obs = document.getElementById("m-obs").value.trim();
  const ico = document.getElementById("m-ico").value;
  if (!nom) { toast("Ingresá un nombre","err"); return; }
  if (!fec) { toast("Seleccioná una fecha","err"); return; }
  S.activities.push({ id: Date.now().toString(36), nombre:nom, fecha:fec, icon:ico, obs, registros:{} });
  save();
  renderActs();
  closeAct();
  toast(`Actividad "${nom}" creada`,"ok");
}

/* ── HELPERS ── */
const SCREEN_HISTORY = [];
const SCREEN_BACK_ACTIONS = {
  "sc-welcome":  null,
  "sc-acts":     () => show("sc-welcome"),
  "sc-det":      () => { show("sc-acts"); renderActs(); },
  "sc-alumnos":  () => show("sc-welcome"),
  "sc-alumno":   () => { show("sc-alumnos"); renderAlumnos(); },
};

function show(id) {
  // Track history
  const current = ["sc-welcome","sc-acts","sc-det","sc-alumnos","sc-alumno"].find(s =>
    document.getElementById(s).style.display !== "none"
  );
  if (current && current !== id) SCREEN_HISTORY.push(current);
  if (SCREEN_HISTORY.length > 20) SCREEN_HISTORY.shift();

  ["sc-welcome","sc-acts","sc-det","sc-alumnos","sc-alumno"].forEach(s => {
    const el = document.getElementById(s);
    const isTarget = s === id;
    el.style.display = isTarget ? (s==="sc-welcome"?"flex":"block") : "none";
    if (isTarget) { el.style.animation="none"; void el.offsetWidth; el.style.animation="fadeUp .35s ease forwards"; }
  });

  // Show/hide global back button
  const btn = document.getElementById("btn-global-back");
  if (btn) btn.style.display = (id !== "sc-welcome") ? "flex" : "none";
}

function goBackGlobal() {
  const current = ["sc-welcome","sc-acts","sc-det","sc-alumnos","sc-alumno"].find(s =>
    document.getElementById(s).style.display !== "none"
  );
  const action = SCREEN_BACK_ACTIONS[current];
  if (action) action();
  else show("sc-welcome");
}

function computeStudentStats(alumnoId) {
  let notas = [], pres = 0, aus = 0, tard = 0, total = 0;
  S.activities.forEach(act => {
    const r = (act.registros||{})[alumnoId];
    if (!r) return;
    total++;
    if (r.nota !== "" && r.nota !== undefined) notas.push(parseFloat(r.nota));
    if (r.asistencia === "P") pres++;
    else if (r.asistencia === "A") aus++;
    else if (r.asistencia === "T") tard++;
  });
  const avg = notas.length ? (notas.reduce((a,b)=>a+b,0)/notas.length).toFixed(1) : null;
  const attTotal = pres + aus + tard;
  const attPct = attTotal ? Math.round(pres/attTotal*100) : null;
  return { avg, notas, pres, aus, tard, total, attPct };
}

/* ── VER ALUMNOS ── */
let alumSort = "nombre";

function verAlumnos() {
  const key = skey();
  try { const r = localStorage.getItem(key); S.activities = r ? JSON.parse(r) : []; } catch(e) { S.activities = []; }
  // Siempre recargar frescos según curso+rotación actual
  S.alumnos = getAlumnosCursoRot().map((n, i) => ({ id: i, nombre: n }));

  document.getElementById("alum-title").textContent = `${S.curso} — Alumnos`;
  document.getElementById("alum-chips").innerHTML = `
    <span class="chip">🕒 <strong>${S.hor}</strong></span>
    <span class="chip">🔄 <strong>${S.rot}</strong></span>
    <span class="chip">👤 <strong>${S.doc}</strong></span>
    <span class="chip">📋 <strong>${S.activities.length} actividades</strong></span>
  `;
  document.getElementById("alum-q").value = "";
  alumSort = "nombre";
  document.querySelectorAll(".sort-tab").forEach((t,i)=>t.classList.toggle("active",i===0));

  loadRotacionesAlumnos();
  closeSidebarMobile();
  show("sc-alumnos");
  renderAlumnos();
}

function setSortAlum(type, btn) {
  alumSort = type;
  document.querySelectorAll(".sort-tab").forEach(t=>t.classList.remove("active"));
  btn.classList.add("active");
  renderAlumnos();
}

function renderAlumnos() {
  const q = document.getElementById("alum-q").value.toLowerCase();
  let list = q ? S.alumnos.filter(a=>a.nombre.toLowerCase().includes(q)) : [...S.alumnos];

  list.sort((a,b) => {
    if (alumSort === "nombre") return a.nombre.localeCompare(b.nombre);
    const sa = computeStudentStats(a.id);
    const sb = computeStudentStats(b.id);
    if (alumSort === "promedio")    return (parseFloat(sb.avg)||0) - (parseFloat(sa.avg)||0);
    if (alumSort === "asistencia")  return (sb.attPct||0) - (sa.attPct||0);
    if (alumSort === "actividades") return sb.total - sa.total;
    return 0;
  });

  document.getElementById("alum-ct").textContent = `${list.length} de ${S.alumnos.length} alumnos`;
  const tbody = document.getElementById("stu-tbody");
  tbody.innerHTML = "";

  list.forEach((al, idx) => {
    const st   = computeStudentStats(al.id);
    const col  = COLORS[al.id % COLORS.length];
    const init = al.nombre.split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase();
    const avgColor = !st.avg ? "var(--mut)" : parseFloat(st.avg)>=7?"var(--grn)":parseFloat(st.avg)>=4?"var(--acc2)":"var(--red)";
    const attColor = st.attPct===null ? "var(--mut)" : st.attPct>=80?"var(--grn)":st.attPct>=60?"var(--acc2)":"var(--red)";

    const dots = S.activities.map(act => {
      const r = (act.registros||{})[al.id];
      let c = "var(--surf3)";
      if (r) {
        if (r.nota !== "" && r.nota !== undefined) {
          const n = parseFloat(r.nota);
          c = n>=7 ? "var(--grn)" : n>=4 ? "var(--acc2)" : "var(--red)";
        } else if (r.asistencia==="P") c = "var(--grn)";
        else if (r.asistencia==="A")  c = "var(--red)";
        else if (r.asistencia==="T")  c = "var(--acc2)";
      }
      return `<div class="s-dot" style="background:${c}" title="${esc(act.nombre)}"></div>`;
    }).join("");

    const tr = document.createElement("tr");
    // Get saved rotation for this student (stored per-student in localStorage)
    const storedRot = (S.rotacionesAlumnos && S.rotacionesAlumnos[al.id]) || "";
    const rotOpts = (CURSOS_DATA[S.curso]?.rotaciones || [])
      .map(r2 => `<option value="${r2.nombre}"${storedRot===r2.nombre?' selected':''}>${r2.nombre}</option>`)
      .join('');

    tr.onclick = (e) => { if (e.target.tagName !== 'SELECT' && e.target.tagName !== 'OPTION') openAlumno(al.id); };
    tr.innerHTML = `
      <td style="color:var(--mut);font-size:.78rem;width:32px">${idx+1}</td>
      <td><div class="stu-name-cell"><div class="stu-av-sm" style="background:${col}22;color:${col}">${init}</div>${esc(al.nombre)}</div></td>
      <td onclick="event.stopPropagation()">
        <select onchange="setAlumnoRot(${al.id}, this.value)" style="background:var(--surf2);border:1px solid var(--bord);border-radius:6px;color:var(--text);padding:5px 8px;font-size:.78rem;cursor:pointer;max-width:160px;">
          <option value="">— sin rotación —</option>
          ${rotOpts}
        </select>
      </td>
      <td><span style="font-family:var(--fh);font-weight:800;font-size:.92rem;color:${avgColor}">${st.avg||"—"}</span></td>
      <td><span style="font-family:var(--fh);font-weight:700;font-size:.88rem;color:${attColor}">${st.attPct!==null?st.attPct+"%":"—"}</span></td>
      <td style="color:var(--grn);font-weight:600">${st.pres||"—"}</td>
      <td style="color:var(--red);font-weight:600">${st.aus||"—"}</td>
      <td style="color:var(--acc2);font-weight:600">${st.tard||"—"}</td>
      <td><div class="dots-strip">${dots||`<span style="color:var(--mut);font-size:.75rem">sin actividades</span>`}</div></td>
    `;
    tbody.appendChild(tr);
  });
}

/* ── STUDENT PROFILE ── */
let openAlumnoId = null;

function openAlumno(aid) {
  openAlumnoId = aid;
  const al  = S.alumnos.find(a=>a.id===aid);
  if (!al) return;
  const st  = computeStudentStats(aid);
  const col = COLORS[aid % COLORS.length];
  const init = al.nombre.split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase();

  const avEl = document.getElementById("sp-av");
  avEl.textContent = init;
  avEl.style.background = col + "22";
  avEl.style.color = col;

  document.getElementById("sp-name").textContent = al.nombre;
  document.getElementById("sp-meta").textContent = `${S.curso} · ${S.esp} · ${S.rot} · ${S.doc}`;

  const avgColor = !st.avg ? "var(--mut)" : parseFloat(st.avg)>=7?"var(--grn)":parseFloat(st.avg)>=4?"var(--acc2)":"var(--red)";
  const attColor = st.attPct===null ? "var(--mut)" : st.attPct>=80?"var(--grn)":st.attPct>=60?"var(--acc2)":"var(--red)";
  document.getElementById("sp-stats").innerHTML = `
    <div class="sm"><div class="sm-val" style="color:${avgColor}">${st.avg||"—"}</div><div class="sm-lbl">Promedio</div></div>
    <div class="sm"><div class="sm-val" style="color:${attColor}">${st.attPct!==null?st.attPct+"%":"—"}</div><div class="sm-lbl">Asistencia</div></div>
    <div class="sm"><div class="sm-val" style="color:var(--grn)">${st.pres}</div><div class="sm-lbl">Presencias</div></div>
    <div class="sm"><div class="sm-val" style="color:var(--red)">${st.aus}</div><div class="sm-lbl">Ausencias</div></div>
    <div class="sm"><div class="sm-val" style="color:var(--acc2)">${st.tard}</div><div class="sm-lbl">Tardanzas</div></div>
  `;

  show("sc-alumno");
  renderAlumno();
}

function goBackAlumnos() { show("sc-alumnos"); renderAlumnos(); }

function renderAlumno() {
  const aid = openAlumnoId;
  const actsOrdered = [...S.activities].sort((a,b)=> a.fecha < b.fecha ? -1 : 1);

  const tlEl = document.getElementById("sp-timeline");
  if (!actsOrdered.length) {
    tlEl.style.display = "none";
  } else {
    tlEl.style.display = "flex";
    tlEl.innerHTML = actsOrdered.map(act => {
      const r = (act.registros||{})[aid];
      let dotStyle = "background:var(--surf3);border-color:var(--bord)";
      let label = "—";
      if (r && r.nota !== "" && r.nota !== undefined) {
        const n = parseFloat(r.nota);
        label = String(n);
        if (n>=7) dotStyle = "background:rgba(62,207,142,.2);border-color:var(--grn);color:var(--grn)";
        else if (n>=4) dotStyle = "background:rgba(247,193,79,.15);border-color:var(--acc2);color:var(--acc2)";
        else dotStyle = "background:rgba(247,111,111,.15);border-color:var(--red);color:var(--red)";
      } else if (r && r.asistencia === "A") {
        dotStyle = "background:rgba(247,111,111,.15);border-color:var(--red);color:var(--red)"; label = "A";
      } else if (r && r.asistencia === "T") {
        dotStyle = "background:rgba(247,193,79,.15);border-color:var(--acc2);color:var(--acc2)"; label = "T";
      } else if (r && r.asistencia === "P") {
        dotStyle = "background:rgba(62,207,142,.15);border-color:var(--grn);color:var(--grn)"; label = "P";
      }
      return `<div class="gt-dot" title="${esc(act.nombre)} — ${fmtD(act.fecha)}">
        <div class="gt-dot-circle" style="${dotStyle}">${label}</div>
        <div class="gt-dot-lbl">${esc(act.nombre)}</div>
      </div>`;
    }).join(`<div style="flex:1;height:1px;background:var(--bord);margin:0 2px;margin-bottom:18px"></div>`);
  }

  const hasAny = actsOrdered.some(act => {
    const r = (act.registros||{})[aid];
    return r && (r.nota!==""&&r.nota!==undefined || r.asistencia || r.obs);
  });

  document.getElementById("sp-empty").style.display = hasAny ? "none" : "block";
  document.getElementById("sp-tbl").style.display   = hasAny ? "table" : "none";

  const tbody = document.getElementById("sp-tbody");
  tbody.innerHTML = "";

  actsOrdered.forEach(act => {
    const r = (act.registros||{})[aid] || {nota:"",asistencia:"",obs:""};
    const n   = r.nota !== undefined ? r.nota : "";
    const nn  = parseFloat(n);
    const gc  = n===""?"":nn>=7?"h":nn>=4?"m":"l";
    const attMap = {P:["p","Presente"],A:["a","Ausente"],T:["t","Tardanza"],"":["n","—"]};
    const [ac,at] = attMap[r.asistencia||""];

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><div class="a-name-cell"><div class="a-icon" style="width:28px;height:28px;font-size:.78rem">${act.icon||"📋"}</div><span style="font-weight:600">${esc(act.nombre)}</span></div></td>
      <td style="color:var(--mut);white-space:nowrap;font-size:.8rem">${fmtD(act.fecha)}</td>
      <td><span class="nota-disp ${gc}" style="cursor:default">${n!==""?n:"—"}</span></td>
      <td><span class="att-badge ${ac}">${at}</span></td>
      <td style="color:var(--mut);font-size:.8rem">${esc(r.obs)||"—"}</td>
    `;
    tbody.appendChild(tr);
  });
}

function skey() { return `gd3|${S.curso}|${S.hor}|${S.esp}|${S.rot}|${S.doc}`; }
function save() {
  try { localStorage.setItem(skey(), JSON.stringify(S.activities)); } catch(e){}
  if (!window.DEMO_MODE && window._fb) {
    const { db, doc, setDoc } = window._fb;
    const id = skey().replace(/[|°\s]/g,"_");
    setDoc(doc(db,"registros",id),{activities:S.activities,ts:new Date().toISOString()}).catch(()=>{});
  }
}
function fmtD(d) {
  if (!d) return "—";
  const [y,m,day] = d.split("-"); return `${day}/${m}/${y}`;
}
function esc(s) {
  if (!s) return "";
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
/* ── ROTACIÓN POR ALUMNO ── */
function setAlumnoRot(aid, valor) {
  if (!S.rotacionesAlumnos) S.rotacionesAlumnos = {};
  S.rotacionesAlumnos[aid] = valor;
  // Persist per course+context key
  try {
    localStorage.setItem("rots|" + skey(), JSON.stringify(S.rotacionesAlumnos));
  } catch(e) {}
}

function loadRotacionesAlumnos() {
  try {
    const saved = localStorage.getItem("rots|" + skey());
    S.rotacionesAlumnos = saved ? JSON.parse(saved) : {};
  } catch(e) { S.rotacionesAlumnos = {}; }
}

/* ── EDITAR ALUMNOS DEL CURSO ── */
function openEditAlumnos() {
  const lista = ALUMNOS_POR_CURSO[S.curso] || [];
  const ta = document.getElementById("alumnos-editor");
  ta.value = lista.join("\n");
  document.getElementById("ov-alumnos-title").textContent = `Editar alumnos — ${S.curso}`;
  updateAlumnosCount();
  ta.addEventListener("input", updateAlumnosCount);
  document.getElementById("ov-alumnos").classList.add("open");
  setTimeout(() => ta.focus(), 80);
}

function updateAlumnosCount() {
  const lines = document.getElementById("alumnos-editor").value
    .split("\n").map(l => l.trim()).filter(l => l.length > 0);
  document.getElementById("alumnos-count").textContent = `${lines.length} alumno${lines.length !== 1 ? "s" : ""}`;
}

function closeEditAlumnos(e) {
  if (e && e.target !== document.getElementById("ov-alumnos")) return;
  document.getElementById("ov-alumnos").classList.remove("open");
}

function saveEditAlumnos() {
  const lines = document.getElementById("alumnos-editor").value
    .split("\n").map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length === 0) { toast("La lista no puede estar vacía", "err"); return; }

  // Update in-memory list
  ALUMNOS_POR_CURSO[S.curso] = lines;

  // Reload S.alumnos immediately
  S.alumnos = lines.map((n, i) => ({ id: i, nombre: n }));

  // Persist to localStorage so survives reload
  try {
    const storageKey = "alumnos|" + S.curso;
    localStorage.setItem(storageKey, JSON.stringify(lines));
  } catch(e) {}

  closeEditAlumnos();
  renderAlumnos();
  toast(`Lista actualizada — ${lines.length} alumnos`, "ok");
}

// On app start, restore any edited student lists from localStorage
function restoreAlumnosFromStorage() {
  Object.keys(ALUMNOS_POR_CURSO).forEach(curso => {
    try {
      const saved = localStorage.getItem("alumnos|" + curso);
      if (saved) ALUMNOS_POR_CURSO[curso] = JSON.parse(saved);
    } catch(e) {}
  });
}

function toast(msg, type="inf") {
  const icons={ok:"✅",err:"❌",inf:"ℹ️"};
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  document.getElementById("toasts").appendChild(t);
  requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("show")));
  setTimeout(()=>{ t.classList.remove("show"); setTimeout(()=>t.remove(),300); }, 2800);
}