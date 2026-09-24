// ============================================================
//  CREDITOS DE MAGIKALEA
//  Abre este archivo con el Bloc de notas para editarlo.
// ============================================================
//
//  COMO AGREGAR UN ARTISTA
//  1. Copia un bloque que empiece con { y termine con },
//  2. Pegalo justo antes de la linea ]; de ARTISTAS
//  3. Pega el enlace de Instagram o de X.
//  4. Si conoces el nombre, escribilo en nombre.
//     Si dejas nombre vacio, la pagina usa el usuario del enlace.
//  5. La foto: guarda el archivo en assets/artistas
//     y escribe la ruta en foto. Ejemplo: "assets/artistas/ana.jpg"
//  6. La carta: guarda una imagen pequena en assets/baja
//     (unos 340 px de ancho) y escribe la ruta en carta.
//     Ejemplo: "assets/baja/mi-carta.jpg"
//  7. Para que salga en una pestaña del catálogo, en CARTAS
//     escribe el tipo: "elementales", "magos", "bendiciones",
//     "maldiciones" o "joker".
//  8. Guarda el archivo y recarga la pagina.
//
//  No borres las comillas " " ni las comas ,
// ============================================================

var EQUIPO = [
  {
    nombre: "Francisco Balbuena",
    alias: "MesiasArt",
    iniciales: "FB",
    foto: "assets/artistas/mesiasart.jpg",
    carta: "",
    instagram: "",
    x: "https://x.com/mesiasart",
    credito: "Creador / Game Design",
    roles: [
      "Creator · Game Director · Game Designer",
      "Programmer · Project Coordinator",
      "Card Illustrator"
    ]
  },
  {
    nombre: "Ronny Correa",
    alias: "",
    iniciales: "RC",
    foto: "",
    carta: "",
    instagram: "https://www.instagram.com/ronny.correa.5/",
    x: "",
    credito: "Desarrollo",
    roles: [
      "Lead Programmer",
      "Technical Foundation · Game Systems",
    ]
  },
  {
    nombre: "Yonson Carbonell",
    alias: "YonsonCB",
    iniciales: "YC",
    foto: "assets/artistas/yonsoncb.jpg",
    carta: "",
    instagram: "",
    x: "https://x.com/Yonsoncb",
    credito: "Artista principal",
    roles: [
      "Lead Artist",
      "Backgrounds · UI · Icons · Card Art"
    ]
  },
  {
    nombre: "Gabriel Toribio",
    alias: "",
    iniciales: "GC",
    foto: "",
    carta: "",
    instagram: "https://www.instagram.com/gabriel.nadamas/",
    x: "",
    credito: "Graphic Design",
    roles: [
      "Graphic Designer · Card Production · Logo"
    ]
  }
];

var ARTISTAS = [
  {
    nombre: "DarkerEve",
    foto: "",
    carta: "assets/baja/Maga - Mao.jpg",
    instagram: "https://www.instagram.com/darkereve/",
    x: ""
  },
  {
    nombre: "YonsonCB",
    foto: "",
    carta: "assets/baja/Fortune's Favor.jpg",
    instagram: "https://www.instagram.com/cloudettesama/",
    x: ""
  },
  {
    nombre: "Kosena Master",
    foto: "",
    carta: "assets/baja/Deadeye.jpg",
    instagram: "https://www.instagram.com/kosena_master/",
    x: ""
  },
  {
    nombre: "Ossy Jo",
    foto: "",
    carta: "assets/baja/Sacrifice.jpg",
    instagram: "https://www.instagram.com/ossy.jo/",
    x: ""
  },
  {
    nombre: "Nattibie",
    foto: "",
    carta: "assets/baja/Nightmare Joker.jpg",
    instagram: "https://www.instagram.com/nattibie/",
    x: ""
  },
  {
    nombre: "JoiseArt",
    foto: "",
    carta: "assets/baja/Mago - Seigi copia.jpg",
    instagram: "https://www.instagram.com/joiseart/",
    x: ""
  },
  {
    nombre: "Froggynami",
    foto: "",
    carta: "assets/baja/Destiny Bond copia.jpg",
    instagram: "https://www.instagram.com/froggynami/",
    x: ""
  },
  {
    nombre: "Spencer Draw",
    foto: "",
    carta: "assets/baja/Seal of Silence.jpg",
    instagram: "https://www.instagram.com/spencer_draw_/",
    x: ""
  },
  {
    nombre: "Manuel Shoo",
    foto: "",
    carta: "assets/baja/Double Strike.jpg",
    instagram: "https://www.instagram.com/manuelshoo/",
    x: ""
  },
  {
    nombre: "Kuzanagi009",
    foto: "",
    carta: "assets/baja/Maga - Sybil.jpg",
    instagram: "https://www.instagram.com/kuzanagi009/",
    x: ""
  }
];

// tipo: "elementales", "magos", "bendiciones", "maldiciones" o "joker"
// Dejalo vacio "" si todavia no sabes en que pestaña va.
var CARTAS = [
  { archivo: "assets/baja/Arcane Call.jpg", tipo: "bendiciones" },
  { archivo: "assets/baja/Blood for Blood copia.jpg", tipo: "maldiciones" },
  { archivo: "assets/baja/Clairvoyance.jpg", tipo: "bendiciones" },
  { archivo: "assets/baja/Deadeye.jpg", tipo: "bendiciones" },
  { archivo: "assets/baja/Destiny Bond copia.jpg", tipo: "maldiciones" },
  { archivo: "assets/baja/Double Strike.jpg", tipo: "bendiciones" },
  { archivo: "assets/baja/ELEMENTAL - AGUA copia.jpg", tipo: "elementales" },
  { archivo: "assets/baja/ELEMENTAL - FUEGO copia.jpg", tipo: "elementales" },
  { archivo: "assets/baja/ELEMENTAL - PLANTA copia.jpg", tipo: "elementales" },
  { archivo: "assets/baja/ELEMENTAL - ROCA copia.jpg", tipo: "elementales" },
  { archivo: "assets/baja/ELEMENTAL - TRUENO copia.jpg", tipo: "elementales" },
  { archivo: "assets/baja/Fortune's Favor.jpg", tipo: "bendiciones" },
  { archivo: "assets/baja/Maga - Mao.jpg", tipo: "magos" },
  { archivo: "assets/baja/Maga - Naira.jpg", tipo: "magos" },
  { archivo: "assets/baja/Maga - Sybil.jpg", tipo: "magos" },
  { archivo: "assets/baja/Mago - Seigi copia.jpg", tipo: "magos" },
  { archivo: "assets/baja/Nightmare Joker.jpg", tipo: "joker" },
  { archivo: "assets/baja/Recovery copia.jpg", tipo: "Bendicion" },
  { archivo: "assets/baja/Sacrifice.jpg", tipo: "maldiciones" },
  { archivo: "assets/baja/Seal of Silence.jpg", tipo: "bendiciones" }
];
