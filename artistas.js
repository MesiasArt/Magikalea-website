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
//  8. Si otra persona trabajo la misma carta (por ejemplo el color),
//     agrega "tambien" dentro de ese artista, con su nombre y rol.
//     Ejemplo:
//     tambien: [
//       { nombre: "Ana", rol: "Color", foto: "", instagram: "https://www.instagram.com/ana" }
//     ]
//  9. Guarda el archivo y recarga la pagina.
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
    instagram: "https://www.instagram.com/mesiasart",
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
    foto: "assets/artistas/ronny_correa.jpg",
    carta: "",
    instagram: "https://www.instagram.com/ronny.correa.5/",
    x: "https://x.com/ronny.correa.5",
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
    instagram: "https://www.instagram.com/Yonsoncb",
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
    foto: "assets/artistas/gabriel_toribio.jpg",
    carta: "",
    instagram: "https://www.instagram.com/gabriel.nadamas/",
    x: "https://x.com/gabriel.nadamas",
    credito: "Graphic Design",
    roles: [
      "Graphic Designer · Card Production · Logo"
    ]
  }
];

var ARTISTAS = [
  {
    nombre: "MesiasArt",
    foto: "assets/artistas/mesiasart.jpg",
    carta: "assets/baja/Arcane Call.jpg",
    instagram: "https://www.instagram.com/mesiasartrd/",
    x: "https://x.com/mesiasart"
  },
  {
    nombre: "DarkerEve",
    foto: "assets/artistas/darkereve.jpg",
    carta: "assets/baja/Maga - Mao.jpg",
    instagram: "https://www.instagram.com/darkereve/",
    x: "https://x.com/darkereve"
  },
  {
    nombre: "YonsonCB",
    foto: "assets/artistas/yonsoncb.jpg",
    carta: "assets/baja/Fortune's Favor.jpg",
    instagram: "https://www.instagram.com/cloudettesama/",
    x: "https://x.com/cloudettesama"
  },
  {
    nombre: "桜上水ナミ(Nami)",
    foto: "assets/artistas/桜上水ナミ(Nami).jpg",
    carta: "assets/baja/Maga - Naira.jpg",
    instagram: "https://www.instagram.com/N_sakurajyousui",
    x: "https://x.com/N_sakurajyousui"
  },
  {
    nombre: "Kosena Master",
    foto: "assets/artistas/kosena_master.jpg",
    carta: "assets/baja/Deadeye.jpg",
    instagram: "https://www.instagram.com/kosena_master/",
    x: "https://x.com/kosena_master"
  },
 {
    nombre: "XamuraiRD",
    foto: "assets/artistas/xamurai_rd.jpg",
    carta: "assets/baja/ELEMENTAL - AGUA copia.jpg",
    instagram: "https://www.instagram.com/xamurai_rd/",
    x: "https://x.com/xamurai_rd",
    tambien: [
      {
        nombre: "Wellinton Nommo",
        foto: "assets/artistas/Wellinton Nommo.jpg",
        instagram: "https://www.instagram.com/welinthon_simeon/",
        rol: "Color"
      }
    ]
  },
  {
    nombre: "XamuraiRD",
    foto: "assets/artistas/xamurai_rd.jpg",
    carta: "assets/baja/ELEMENTAL - TRUENO copia.jpg",
    instagram: "https://www.instagram.com/xamurai_rd/",
    x: "https://x.com/xamurai_rd",
    tambien: [
      {
        nombre: "jj_artxd",
        foto: "assets/artistas/jj_artxd.jpg",
        instagram: "https://www.instagram.com/jj_artxd/",
        rol: "Color"
      }
    ]
  },
  {
    nombre: "XamuraiRD",
    foto: "assets/artistas/xamurai_rd.jpg",
    carta: "assets/baja/ELEMENTAL - PLANTA copia.jpg",
    instagram: "https://www.instagram.com/xamurai_rd/",
    x: "https://x.com/xamurai_rd",
    tambien: [
      {
        nombre: "Kai-hos",
        foto: "assets/artistas/kai-hos.png",
        DA: "https://www.deviantart.com/akaiakira",
        rol: "Color"
      }
    ]
  },
  {
    nombre: "XamuraiRD",
    foto: "assets/artistas/xamurai_rd.jpg",
    carta: "assets/baja/ELEMENTAL - FUEGO copia.jpg",
    instagram: "https://www.instagram.com/xamurai_rd/",
    x: "https://x.com/xamurai_rd",
    tambien: [
      {
        nombre: "Anderson-07",
        foto: "assets/artistas/anderson-07.jpg",
        DA: "https://www.deviantart.com/anderson-07",
        rol: "Color"
      }
    ]
  },
  {
    nombre: "XamuraiRD",
    foto: "assets/artistas/xamurai_rd.jpg",
    carta: "assets/baja/ELEMENTAL - ROCA copia.jpg",
    instagram: "https://www.instagram.com/xamurai_rd/",
    x: "https://x.com/xamurai_rd",
    tambien: [
      {
        nombre: "???",
        foto: "",
        rol: "Color"
      }
    ]
  },
  {
    nombre: "Ossy Jo",
    foto: "assets/artistas/ossy_jo.jpg",
    carta: "assets/baja/Sacrifice.jpg",
    instagram: "https://www.instagram.com/ossy.jo/",
    x: "https://x.com/ossy.jo"
  },
  {
    nombre: "Nattibie",
    foto: "assets/artistas/Nattibie.jpg",
    carta: "assets/baja/Nightmare Joker.jpg",
    instagram: "https://www.instagram.com/nattibie/",
    x: "https://x.com/nattibie"
  },
  {
    nombre: "JoiseArt",
    foto: "assets/artistas/joiseart.jpg",
    carta: "assets/baja/Mago - Seigi copia.jpg",
    instagram: "https://www.instagram.com/joiseart/",
    x: "https://x.com/joiseart"
  },
  {
    nombre: "Froggynami",
    foto: "assets/artistas/froggynami.jpg",
    carta: "assets/baja/Destiny Bond copia.jpg",
    instagram: "https://www.instagram.com/froggynami/",
    x: "https://x.com/froggynami"
  },
  {
    nombre: "Spencer Draw",
    foto: "assets/artistas/spencer_draw.jpg",
    carta: "assets/baja/Seal of Silence.jpg",
    instagram: "https://www.instagram.com/spencer_draw_/",
    x: "https://x.com/spencer_draw_"
  },
  {
    nombre: "Manuel Shoo",
    foto: "assets/artistas/manuel_shoo.jpg",
    carta: "assets/baja/Double Strike.jpg",
    instagram: "https://www.instagram.com/manuelshoo/",
    x: "https://x.com/manuelshoo"
  },
  {
    nombre: "Kuzanagi009",
    foto: "assets/artistas/kuzanagi009.jpg",
    carta: "assets/baja/Maga - Sybil.jpg",
    instagram: "https://www.instagram.com/kuzanagi009/",
    x: "https://x.com/kuzanagi009"
  },
  {
    nombre: "YonsonCB",
    foto: "assets/artistas/yonsoncb.jpg",
    carta: "assets/baja/Clairvoyance.jpg",
    instagram: "https://www.instagram.com/cloudettesama/",
    x: "https://x.com/cloudettesama"
  },
  {
    nombre: "桜上水ナミ(Nami)",
    foto: "assets/artistas/桜上水ナミ(Nami).jpg",
    carta: "assets/baja/Blood for Blood copia.jpg",
    instagram: "https://www.instagram.com/N_sakurajyousui",
    x: "https://x.com/N_sakurajyousui"
  },
  {
    nombre: "Salted_Over",
    foto: "assets/artistas/salted_over.jpg",
    carta: "assets/baja/Recovery copia.jpg",
    instagram: "https://www.instagram.com/salted_over/",
    x: "https://x.com/salted_over/"
  },
   {
    nombre: "Nicodomo",
    foto: "assets/artistas/Nicodomo.jpg",
    carta: "assets/baja/Mirror.jpg",
    instagram: "https://www.instagram.com/nicodomo19/",
    x: "https://x.com/nicodomo19"
  },
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

// ============================================================
//  TESTERS
//  Un nombre por linea, entre comillas y con coma al final.
//  Salen en 3 columnas debajo de "Forma parte del juego".
//  Ejemplo:
//  var TESTERS = [
//    "Ana",
//    "Luis",
//  ];
// ============================================================
var TESTERS = [
  "Ariel Hernandez",
  "Bryan Guillermo R.",
  "Rommel Pichardo",
];
