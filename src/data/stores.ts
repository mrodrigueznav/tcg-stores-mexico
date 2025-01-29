export interface Store {
  id: string;
  name: string;
  estado: string;
  address: string;
  games: ('Pokemon' | 'Lorcana')[];
  events: {
    day: string;
    game: 'Pokemon' | 'Lorcana';
    time: string;
    description: string;
  }[];
  contact: {
    phone?: string;
    facebook?: string;
    instagram?: string;
    website?: string;
  };
}

export const stores: Store[] = [
  {
    id: 'kitsune',
    name: 'Kitsune Hobby Center',
    estado: 'Ciudad de México',
    address: 'Av. Juarez 32-Despacho 409, Colonia Centro, Centro, Cuauhtémoc, 06010 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Lunes',
        game: 'Lorcana',
        time: '19:00',
        description: 'Liga Lorcana'
      },
      {
        day: 'Domingo',
        game: 'Lorcana',
        time: '13:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {
      facebook: 'https://www.facebook.com/p/Kitsune-Hobby-Center-61553393109818/'
    }
  },
  {
    id: 'totem',
    name: 'TOTEM TCG',
    estado: 'Ciudad de México',
    address: 'Avenida Universidad 790 Sótano 1, Cda. Emiliano Zapata local 4, Sta Cruz Atoyac, 03310 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Martes',
        game: 'Lorcana',
        time: '19:30',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'pub',
    name: 'The Pub Game Store',
    estado: 'Ciudad de México',
    address: 'Av. Coyoacán 27, código 2, Col del Valle Centro, Benito Juárez, 03103 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Martes',
        game: 'Lorcana',
        time: '19:30',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'versus',
    name: 'Versus Tienda',
    estado: 'Estado de México',
    address: 'Av. Vía Adolfo López Mateos Manzana 001, Bosques de Moctezuma, 53150 Naucalpan de Juárez, Méx.',
    games: ['Lorcana'],
    events: [
      {
        day: 'Martes',
        game: 'Lorcana',
        time: '19:30',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'kodama',
    name: 'Kodama',
    estado: 'Ciudad de México',
    address: 'Eugenia 1161, Narvarte Poniente, Benito Juárez, 03020 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Miércoles',
        game: 'Lorcana',
        time: '18:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'red-queen',
    name: 'Red Queen Hobbies',
    estado: 'Ciudad de México',
    address: 'San Antonio 154, Cd. de los Deportes, Benito Juárez, 03710 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Miércoles',
        game: 'Lorcana',
        time: '19:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'the-nest',
    name: 'The Nest',
    estado: 'Ciudad de México',
    address: 'Balderas 39-piso 6 oficina 2, Colonia Centro, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Miércoles',
        game: 'Lorcana',
        time: '19:00',
        description: 'Liga Lorcana'
      },
      {
        day: 'Sábado',
        game: 'Lorcana',
        time: '15:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'mistery-gift',
    name: 'Mistery Gift',
    estado: 'Ciudad de México',
    address: 'Av. Universidad 790 Local 11 Sotano, Av. Universidad 790-local 11, Sta Cruz Atoyac, Benito Juárez, 03310 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Miércoles',
        game: 'Lorcana',
        time: '19:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'la-cueva',
    name: 'La Cueva Game Store',
    estado: 'Estado de México',
    address: 'Av Pdte Adolfo López Mateos 75-1er piso, Mexico Nuevo, 52966 Cdad. López Mateos, Méx.',
    games: ['Lorcana'],
    events: [
      {
        day: 'Miércoles',
        game: 'Lorcana',
        time: '14:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'mistery-chest',
    name: 'Mistery Chest',
    estado: 'Ciudad de México',
    address: 'Av. Patriotismo 857-Local 13, Insurgentes Mixcoac, Benito Juárez, 03920 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Miércoles',
        game: 'Lorcana',
        time: '19:30',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'gamesmart',
    name: 'Gamesmart',
    estado: 'Ciudad de México',
    address: 'Av. Insurgentes Sur 1391 Local, P109, Insurgentes Mixcoac, 03920 Ciudad de México',
    games: ['Lorcana'],
    events: [
      {
        day: 'Jueves',
        game: 'Lorcana',
        time: '18:30',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'wontolla',
    name: 'Wontolla Games',
    estado: 'Ciudad de México',
    address: 'Avenida Francisco del Paso y Troncoso, Segundo Piso 127, Jardín Balbuena, 15900 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Jueves',
        game: 'Lorcana',
        time: '19:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'tlacuache',
    name: 'Con T de Tlacuache',
    estado: 'Estado de México',
    address: 'Av. Vía Adolfo López Mateos 42, San Lucas Tepetlacalco, 54055 Tlalnepantla, Méx.',
    games: ['Lorcana'],
    events: [
      {
        day: 'Jueves',
        game: 'Lorcana',
        time: '16:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'santuario',
    name: 'Santuario',
    estado: 'Ciudad de México',
    address: 'Calz. de Tlalpan 1634-local b, Ermita, Benito Juárez, 03590 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Viernes',
        game: 'Lorcana',
        time: '18:30',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: '2d3',
    name: '2D3',
    estado: 'Ciudad de México',
    address: 'Pl. de La Paja 87, Dr Alfonso Ortiz Tirado, Iztapalapa, 09020 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Viernes',
        game: 'Lorcana',
        time: '18:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'cerebrum-taxquena',
    name: 'Cereburm (Taxqueña)',
    estado: 'Ciudad de México',
    address: 'Av. Paseo de los Jardines 222-local 6-A, Paseos de Taxqueña, Coyoacán, 04250 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Viernes',
        game: 'Lorcana',
        time: '16:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'zombielamb',
    name: 'Zombielamb',
    estado: 'Ciudad de México',
    address: 'C. Lucerna 6, Cuauhtémoc, 06600 Juárez, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Viernes',
        game: 'Lorcana',
        time: '19:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'darkwing',
    name: 'Darkwing Boardgames',
    estado: 'Ciudad de México',
    address: 'Av. Cuauhtémoc 915, Mexico City, Mexico',
    games: ['Lorcana'],
    events: [
      {
        day: 'Viernes',
        game: 'Lorcana',
        time: '18:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'cerebrum-gala',
    name: 'Cerebrum (Gala)',
    estado: 'Ciudad de México',
    address: 'Av. Popocatépetl 415, Sta Cruz Atoyac, Benito Juárez, 03310 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Sábado',
        game: 'Lorcana',
        time: '16:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'mtg-wolf',
    name: 'MTG Wolf (Cafetales)',
    estado: 'Ciudad de México',
    address: 'Cda. Tepetlapa 2083-Local 6, Coapa, Cafetales I, Coyoacán, 04930 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Sábado',
        game: 'Lorcana',
        time: '16:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'dragons-hohle',
    name: 'Dragon´s Höhle Club',
    estado: 'Ciudad de México',
    address: 'Calz. de Tlalpan 1510, Portales Oriente, Benito Juárez, 03570 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Sábado',
        game: 'Lorcana',
        time: '19:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'dark-store-juarez',
    name: 'Dark Store (Juárez)',
    estado: 'Ciudad de México',
    address: 'Av. Juarez 32-3er piso, Colonia Centro, Centro, Cuauhtémoc, 06050 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Sábado',
        game: 'Lorcana',
        time: '17:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'dark-store-roma',
    name: 'Dark Store (Roma)',
    estado: 'Ciudad de México',
    address: 'Monterrey 271, Roma Nte., Cuauhtémoc, 06760 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Domingo',
        game: 'Lorcana',
        time: '15:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  },
  {
    id: 'zuperior',
    name: 'Zuperior Games',
    estado: 'Ciudad de México',
    address: 'Eje Central Lázaro Cárdenas 908, Periodista, Benito Juárez, 03620 Ciudad de México, CDMX',
    games: ['Lorcana'],
    events: [
      {
        day: 'Domingo',
        game: 'Lorcana',
        time: '15:00',
        description: 'Liga Lorcana'
      }
    ],
    contact: {}
  }
];