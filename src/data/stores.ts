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
  logo?: string;
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
    },
    logo: 'https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/474475371_122184721478113103_8608722897917153997_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEupct1gD3Y1hzbN7IoFRsbMEviYOfd960wS-Jg5933rdDCviWNYQbj7IU0FGvgvKZuI2TvtkxeqI2zT2J3Q6Aw&_nc_ohc=W9S7Yen886YQ7kNvgGhsicI&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&_nc_gid=AVMz3Den3K-PhprZX0Brq8-&oh=00_AYDJZhZliFdwwqn426cjraZiDZnjmTXYthMu7Qop2Cfung&oe=679F4F31'
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
    contact: {},
    logo: 'https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/432952339_940478957866481_6768195959565155123_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHLkC8zuknvDubkmbTVkxvPLviHtF84kTAu-Ie0XziRMNdRM883ZUw-0q4jGABykshdSz-lgOh-DOixg5l_t7RO&_nc_ohc=lUX6oE0s3hMQ7kNvgElXbTy&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&_nc_gid=ALEaDtHp-t6uU0AWlABRGd3&oh=00_AYBjOxl3svcwpjUqZNftbPS4AjJMviiQly45lgQ5hfg4bQ&oe=679F62A4'
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
    contact: {},
    logo: 'https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/396342215_837303495071982_8307565035294411587_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGcAhTS8SVThVueB56Qqfkg1Wte_AINbVfVa178Ag1tV85ewGeNCVgIx0YCOMKu4BSUelD5utynqVsn_LmPSnAV&_nc_ohc=GczRj61DgBgQ7kNvgE20F4k&_nc_zt=23&_nc_ht=scontent.fmex10-3.fna&_nc_gid=Ayqmd3xLafJsk-JPI3PCqDV&oh=00_AYCA6fJw3V8gRoEK8J8o6ZBRfI4xiACM9IlHSml_mBDdiA&oe=679F752F'
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
    contact: {},
    logo: 'https://scontent.fmex10-4.fna.fbcdn.net/v/t39.30808-6/473389472_1021255150043582_2795605253649346253_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHTexkVTKPCte1h0DcdtjBcBgsRqSVbFcUGCxGpJVsVxaqkpiEc2znnzMVCzdFf0F5qJstC1QMjCUav2M3Ujrx2&_nc_ohc=O11aQzXhilEQ7kNvgENXhlL&_nc_zt=23&_nc_ht=scontent.fmex10-4.fna&_nc_gid=AecK9bbtIYpyPO8a4acRhBl&oh=00_AYBhyhYgpWb5ua86XnX2qVWuAWX-ECeaFxo0GX-ueefVNg&oe=679F5ED3'
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
    contact: {},
    logo: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t39.30808-6/471274506_122211561932068821_1281969800673802663_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFNtNTmOSrFnVcYf3BilgDoLU3ME3_VXz8tTcwTf9VfPxKBkYofjcrYVkR3m-eRlzGTdb25FXXpGKBARX42fX68&_nc_ohc=nTz9c96xpbMQ7kNvgFkm3hm&_nc_zt=23&_nc_ht=scontent.fmex10-2.fna&_nc_gid=Anv2vRCnFkoaEvsfE_X3Yyg&oh=00_AYB1GgKWsSJwdBTxBNvBcT4UQ7e6mjoWtw6uAFGKs0tIYg&oe=679F7936'
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
    contact: {},
    logo: 'https://scontent.fmex10-4.fna.fbcdn.net/v/t39.30808-6/313166746_543794137751883_2567280044591324065_n.png?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeELJhcG3aUdrVcP0TOd1PlNVhxS3jC-T0dWHFLeML5PRwVSwLycgeZ5AV1HL4U7RLHcj6q4_7Pj8TCi08t7Mgat&_nc_ohc=kCD2KE4IXLAQ7kNvgE0oHqS&_nc_zt=23&_nc_ht=scontent.fmex10-4.fna&_nc_gid=A63oOZUOjt9sUg0TWfGHkIL&oh=00_AYBsfbUF87uxwSbn_Nrn0WTqLYbs_cPS2RlA9cwBR8Br1g&oe=679F4C74'
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
    contact: {},
    logo: 'https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/327777751_5602935776485618_2194893777901411500_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGcwrOo1EAfOdi-vAoeujf04Yz-NOdXLpzhjP4051cunBnwHJVHWfaC-NkmD4f7xejSPHNB9Xl9xh_cI02GByP5&_nc_ohc=GnI9pqM9LHcQ7kNvgFBj4te&_nc_zt=23&_nc_ht=scontent.fmex10-3.fna&_nc_gid=AiSHxFtUqMCJabNdtcCkHPi&oh=00_AYD8r-y9GRetJf3wUdGuQYWR1l83Kbr5jDmvuX5N8kA7AA&oe=679F5EAA'
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
    contact: {},
    logo: 'https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/435659703_8224686910880569_4878538758497733950_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHdEqwR4tuHgBPgUmy9DxmsoUJ87u_4KeShQnzu7_gp5Ktez3Q3SWKZNynVfMSUfEW-eRveMUdcElntMtOzWOV1&_nc_ohc=CosC1cl160cQ7kNvgHN3U-e&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&_nc_gid=Ar3SACJyIsSf9MccIaTn8h1&oh=00_AYA7FQ5oteR-_PsOGUKngaM6vGrWp6-GhEELwEZaJ8yxSg&oe=679F6FAB'
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
    contact: {},
    logo: 'https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/352221586_292008299834579_7416866223947686757_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQIdrSVeeTCtKC30wQCWUDVNNiEKjczE9U02IQqNzMT-nZws8jWph58A8OCvnmTNZyQOYnQMB0DO2R7xVeol2L&_nc_ohc=TUpdoi7b7XAQ7kNvgHEUAAk&_nc_zt=23&_nc_ht=scontent.fmex10-3.fna&_nc_gid=AqQS5XGORMrxlRB2ILQZR-V&oh=00_AYDSlaYP6yy5jGkY20e8D9WjVr9hrsPh7JR-sURNM8ldLQ&oe=679F5EA1'
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
    contact: {},
    logo: 'https://apps-bucket.nyc3.digitaloceanspaces.com/under-construction_attachment/live/1712588379.png'
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
    contact: {},
    logo: 'https://scontent.fmex10-4.fna.fbcdn.net/v/t39.30808-6/434838902_872245351580731_805597282397442157_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWuYHWAwJY8xNrIeflsJY1RVZ4Jz1v_jNFVngnPW_-M39_a65chtXoP_oGOd876ClyORwgpO5xz-BMKP9-mCOH&_nc_ohc=azblOA5xSo0Q7kNvgGYGKtw&_nc_zt=23&_nc_ht=scontent.fmex10-4.fna&_nc_gid=AADFWLb3w1HeYDCBeqpS-cF&oh=00_AYB6jUVHwSEUcpcp7X-E2hxanYsusckzr8dHoQuGqeZHpg&oe=679F7952'
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
    contact: {},
    logo: 'https://scontent.fmex10-5.fna.fbcdn.net/v/t39.30808-6/474011409_590871947255486_8022273252971465680_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHM1cwsPd5dy_PQXUFEA6EB2ss0rdDBXqLayzSt0MFeosuy74gypLD47us5P0CMjcZvkigpkji3vpu7eHCsegRc&_nc_ohc=FpN-gZPhcK8Q7kNvgHmgKWR&_nc_zt=23&_nc_ht=scontent.fmex10-5.fna&_nc_gid=Aq1m531mqp0om6lJZKpcNHf&oh=00_AYC-TiDK1YV07A8YzcQ_lL6SqRvVpDVcbNMsbqhIw9topg&oe=679F5179'
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
    contact: {},
    logo: 'https://scontent.fmex10-5.fna.fbcdn.net/v/t39.30808-6/472708849_573324078790497_7971431871746675067_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGCIA9UxC6R_zfao2agkDu7qVqcJ7q5222pWpwnurnbbRxsyAGqxQb7UPI_-UouBipy9CrRkEy2A7ZpXqn1QaW5&_nc_ohc=wICVoIibr6YQ7kNvgFTNBol&_nc_zt=23&_nc_ht=scontent.fmex10-5.fna&_nc_gid=ALFrBTHI209SdWL_bZqiVlf&oh=00_AYBnwQrLw_Q4zTGSPLB4ZwcrkIHQoyHejqKW1AOQ_qA3OQ&oe=679F5257'
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
    contact: {},
    logo: 'https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/420093312_285644397852936_1328758123489834485_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkMX-E-yRp2p9p-e2ZyrX4qc8MQ2oi9DepzwxDaiL0Nxt2rnepx-9jKDqczqTrVKIEff2xIVj-_8Vytg05JTRC&_nc_ohc=jFKr69ROZGsQ7kNvgGNrM9l&_nc_zt=23&_nc_ht=scontent.fmex10-3.fna&_nc_gid=AySQsKz8pTAeiRwg54timve&oh=00_AYAo-8WPq59wO7f-uS8EN_27wzRLVGaPVYUa1oYFLyNg_A&oe=679F70C8'
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
    contact: {},
    logo: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t39.30808-6/338396995_1246756219296052_7028618476522028919_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHPu7O3Ccu7FqY0o1LhX13d2CcyWuVDuynYJzJa5UO7KSU1PnZsZ8y4vFa3_TVVFViMcJCEN0l92cxSLXCO-im6&_nc_ohc=cwdjXkibngcQ7kNvgE5iB08&_nc_zt=23&_nc_ht=scontent.fmex10-2.fna&_nc_gid=AZpB07JSnd6_gkgi8erzPt_&oh=00_AYAhcKFj8gDKzZkbrYnMQLUu33H4K3VXy2ma8BciJBGb6Q&oe=679F6B1E'
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
    contact: {},
    logo: 'https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/358408438_10159708647491482_1045746355464195248_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGONGnIBu1DvQeCszi2lvAI1JwMjOqMjp7UnAyM6oyOnmTnnIiHGFzuGzEKo7Yf3alFc2Cv1Zcx3zeBebqHtVLV&_nc_ohc=8BNg0TwG4dcQ7kNvgFIKj4W&_nc_zt=23&_nc_ht=scontent.fmex10-3.fna&_nc_gid=A_9zgtHT4GLTHmHNMoPjphu&oh=00_AYCqNVLmjUdS4ArD8JffoJm6WYlaKhjKJ3EWzRw2AGOiaQ&oe=679F7B51'
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
    contact: {},
    logo: 'https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/430178854_10211416908695778_210850384840476715_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG2-K_AewnAJqSKOxbYG4JA_JBzCJWd8Sz8kHMIlZ3xLA3irErlUooe8bBJhfFDVKWNVazIalnB61mCd5gd-FSB&_nc_ohc=5QSJpqn_wwkQ7kNvgEWvZZU&_nc_zt=23&_nc_ht=scontent.fmex10-3.fna&_nc_gid=A0hKft1tZJ_6E7hNa0n7WCC&oh=00_AYD1uxhpcoVvWbEyt-CHyx-xDmehMxL2xFKb51R7vzQz1g&oe=679F695D'
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
    contact: {},
    logo: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t39.30808-6/338396995_1246756219296052_7028618476522028919_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHPu7O3Ccu7FqY0o1LhX13d2CcyWuVDuynYJzJa5UO7KSU1PnZsZ8y4vFa3_TVVFViMcJCEN0l92cxSLXCO-im6&_nc_ohc=cwdjXkibngcQ7kNvgE5iB08&_nc_zt=23&_nc_ht=scontent.fmex10-2.fna&_nc_gid=AZpB07JSnd6_gkgi8erzPt_&oh=00_AYAhcKFj8gDKzZkbrYnMQLUu33H4K3VXy2ma8BciJBGb6Q&oe=679F6B1E'
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
    contact: {},
    logo: 'https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/326280764_1517011178792142_2951519820966794360_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFEe4UgdMgCto_wea3c_uNLDI91lRUIRV8Mj3WVFQhFX9JN7nZGoPTgH9sjqcSVUZunvyTT-35latVi5YHW8qtJ&_nc_ohc=1jXGFSb3GJkQ7kNvgHrqIuM&_nc_zt=23&_nc_ht=scontent.fmex10-3.fna&_nc_gid=Ami6Jw-MG7cCqexjNrvkIwA&oh=00_AYBx5Wa0mrR78RHQD_1CV_8A4qvTKEe-jVnhtMLwu8nZ3w&oe=679F4E55'
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
    contact: {},
    logo: 'https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/401393740_729246232560584_7736148143618713651_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENWm9XJh284A1zv5qn8XpCr0srpC0eYCyvSyukLR5gLMW9CQXgtEMMi32Qd2pmCqqU_eqIuNyHtDl_CQOR4Nw-&_nc_ohc=nQzy1Sz4wbUQ7kNvgEcK3Qa&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&_nc_gid=AbvicwnBeqBRhVxIXNQdlZ-&oh=00_AYBeP86yDKXexfwhQI4Ji60sdcYuCsiCWe731SSxrTDvRw&oe=679F54FB'
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
    contact: {},
    logo: 'https://scontent.fmex10-4.fna.fbcdn.net/v/t39.30808-6/305449725_764287324910837_4741913209087339633_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHB76D5px4Tt6pr9_fhobQHmifRqrkfAI6aJ9GquR8AjhV6SGQd7-_RIIa0OtdDzZmIWAIAjsVx3i-BmqDOWDsA&_nc_ohc=73Z52RzVn20Q7kNvgE06J4W&_nc_zt=23&_nc_ht=scontent.fmex10-4.fna&_nc_gid=AQmRUolbiUNa2pmH8-BRTxN&oh=00_AYCHZwHkt1TB6spwtz-pLE9UjC64Dfo2iVHL2eS1dHGV_w&oe=679F6F0B'
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
    contact: {},
    logo: 'https://scontent.fmex10-1.fna.fbcdn.net/v/t39.30808-6/242709198_102735428842524_5845874208697135751_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEWoJcEoHJsv84QZt9RSic3fbeuSq8bvpF9t65Krxu-kV-ASc2fmE6SJVK8Q7GXfgkhvDqhKTUniHqr977j0_92&_nc_ohc=oPo-Vi0hGk0Q7kNvgGzfsw_&_nc_zt=23&_nc_ht=scontent.fmex10-1.fna&_nc_gid=AgeE8-U_JHh1kleD9aKIgc8&oh=00_AYBQkAa54NE5dcW6TV_B7GRvbhWf8uVOwjrJ3wekVbPG0g&oe=679F775D'
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
    contact: {},
    logo: 'https://scontent.fmex10-5.fna.fbcdn.net/v/t39.30808-6/459319399_423202630776991_1400741021749953440_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExPIEJwEYgCTqcUcz_sJbZMpO7z2KDezQyk7vPYoN7NNPfSdVouPNEP8OhNc94tzrDHNNmc-dQdw73mTpzQuUi&_nc_ohc=TKa09bBOpbYQ7kNvgH8paU8&_nc_zt=23&_nc_ht=scontent.fmex10-5.fna&_nc_gid=A83kQpIIAznzIFu_iEULsD5&oh=00_AYAmlvrgDrgfx7oa3pSJ-dHPXIKSKETjnwfYTKvJV4yxZw&oe=679F8078'
  }
];