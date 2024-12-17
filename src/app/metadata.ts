// Primero definimos las interfaces
interface Distrito {
  nombre: string;
  cp: string;
  servicios: string[];
}

interface Localidad {
  nombre: string;
  servicios: string[];
  codigoPostal: string;
  area: 'Horta Nord' | 'Horta Sud' | 'Valencia Ciudad' | 'Metropolitana';
  metaDescripcion: string;
  distanciaSede: string;
  tiempoRespuesta: string;
  caracteristicas?: string[];
  distritos?: Distrito[];
}

interface ServicioTecnico {
  nombre: string;
  caracteristicas?: string[];
  sistemas?: string[];
  servicios?: string[];
  tipos?: string[];
  materiales?: string[];
  automatismos?: string[];
  tejidos?: string[];
  marcas: string[];
}

interface CategoriaServicio {
  categoria: string;
  servicios: ServicioTecnico[];
}

// Luego exportamos el objeto siteMetadata
export const siteMetadata = {
  // Información básica de la empresa
  empresa: {
    nombre: 'Cerluxe',
    nombreCompleto: 'Cerluxe - Carpintería Metálica y Cerrajería',
    slogan: 'Expertos en soluciones metálicas desde 2013',
    cif: 'B-XXXXXXXX',
    fundacion: '2013',
  },

  // SEO principal expandido con servicios específicos
  title: 'Cerluxe - Carpintería Metálica, Cerrajería, Toldos y Persianas en Valencia | Servicio 24h',
  description: 'Especialistas en carpintería metálica, cerrajería 24h, toldos, persianas y estructuras en Valencia. Instalación y reparación de puertas, ventanas, cerramientos. Servicio de urgencias. Presupuesto sin compromiso.',
  
  // Keywords expandidas por servicio
  keywords: [
    // Cerrajería (expandido)
    'cerrajero 24 horas valencia',
    'cerrajero urgencias valencia',
    'cerrajero económico valencia',
    'cerrajero rafelbunyol',
    'apertura de puertas valencia',
    'cambio de cerraduras',
    'cerraduras de seguridad',
    'cerraduras antibumping',
    'bombillos de seguridad',
    'cerraduras electrónicas',
    'cerrajería automóvil',
    'apertura de cajas fuertes',
    'instalación de cerraduras',
    'copias de llaves de seguridad',
    'amaestramiento de llaves',
    'reparación de cerraduras',
    'cerrajero barato',
    'cerrajero profesional',
    
    // Toldos (nuevo)
    'toldos valencia',
    'instalación de toldos',
    'toldos para terrazas',
    'toldos para áticos',
    'toldos motorizados',
    'toldos eléctricos',
    'toldos con sensor de viento',
    'toldos extensibles',
    'toldos cofre',
    'toldos punto recto',
    'toldos correderos',
    'toldos verticales',
    'toldos para comercios',
    'toldos para restaurantes',
    'mantenimiento de toldos',
    'reparación de toldos',
    'toldos impermeables',
    'toldos microperforados',
    
    // Persianas (nuevo)
    'persianas valencia',
    'instalación de persianas',
    'reparación de persianas',
    'persianas aluminio',
    'persianas pvc',
    'persianas enrollables',
    'persianas motorizadas',
    'persianas de seguridad',
    'persianas comerciales',
    'persianas industriales',
    'motor para persianas',
    'cinta de persiana',
    'cambio de persianas',
    'arreglo de persianas',
    'persianas automáticas',
    'persianas con aislamiento',
    'mantenimiento de persianas',
    'persianas orientables',

    // ... mantener keywords anteriores ...
  ],

  // Localidades expandidas con más detalle
  localidades: [
    // Sede Principal
    {
      nombre: 'rafelbunyol',
      servicios: [
        'Carpintería metálica',
        'Cerrajería 24h',
        'Toldos y persianas',
        'Puertas automáticas',
        'Estructuras metálicas'
      ],
      codigoPostal: '46138',
      area: 'Horta Nord',
      caracteristicas: [
        'Sede central',
        'Taller propio',
        'Servicio urgente 24h'
      ],
      metaDescripcion: 'Servicios profesionales de carpintería metálica y cerrajería en Rafelbunyol. Sede central con taller propio.',
      distanciaSede: '0 km',
      tiempoRespuesta: '15 minutos'
    },

    // Valencia Ciudad
    {
      nombre: 'valencia',
      servicios: [
        'Carpintería metálica',
        'Cerrajería 24h',
        'Toldos y persianas',
        'Estructuras metálicas'
      ],
      codigoPostal: '46001-46025',
      area: 'Valencia Ciudad',
      distritos: [
        {
          nombre: 'ciutat-vella',
          cp: '46001-46003',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'leixample',
          cp: '46004-46005',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'extramurs',
          cp: '46007-46008',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'campanar',
          cp: '46015',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'la-saidia',
          cp: '46009',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'el-pla-del-real',
          cp: '46010',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'olivereta',
          cp: '46018',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'patraix',
          cp: '46017',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'jesus',
          cp: '46017',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'quatre-carreres',
          cp: '46013',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'poblats-maritims',
          cp: '46011',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'camins-al-grau',
          cp: '46023',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'algiros',
          cp: '46022',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'benimaclet',
          cp: '46020',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'rascanya',
          cp: '46025',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'benicalap',
          cp: '46025',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'pobles-del-nord',
          cp: '46024',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        },
        {
          nombre: 'pobles-de-loest',
          cp: '46014',
          servicios: ['Cerrajería 24h', 'Toldos y persianas']
        },
        {
          nombre: 'pobles-del-sud',
          cp: '46012',
          servicios: ['Cerrajería 24h', 'Carpintería metálica']
        }
      ],
      metaDescripcion: 'Servicio integral de cerrajería y carpintería metálica en Valencia ciudad y todos sus distritos.',
      distanciaSede: '15 km',
      tiempoRespuesta: '30 minutos'
    },

    // L'Horta Nord
    {
      nombre: 'el-puig',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46540',
      area: 'Horta Nord',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en El Puig.',
      distanciaSede: '8 km',
      tiempoRespuesta: '20 minutos'
    },
    {
      nombre: 'la-pobla-de-farnals',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46137',
      area: 'Horta Nord',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en La Pobla de Farnals.',
      distanciaSede: '5 km',
      tiempoRespuesta: '15 minutos'
    },
    {
      nombre: 'massamagrell',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46130',
      area: 'Horta Nord',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en Massamagrell.',
      distanciaSede: '3 km',
      tiempoRespuesta: '15 minutos'
    },
    {
      nombre: 'museros',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46136',
      area: 'Horta Nord',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en Museros.',
      distanciaSede: '4 km',
      tiempoRespuesta: '15 minutos'
    },

    // L'Horta Sud
    {
      nombre: 'torrent',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46900',
      area: 'Horta Sud',
      metaDescripcion: 'Servicios profesionales de cerrajería y carpintería metálica en Torrent.',
      distanciaSede: '25 km',
      tiempoRespuesta: '35 minutos'
    },
    {
      nombre: 'paiporta',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46200',
      area: 'Horta Sud',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en Paiporta.',
      distanciaSede: '20 km',
      tiempoRespuesta: '30 minutos'
    },
    {
      nombre: 'picanya',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46210',
      area: 'Horta Sud',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en Picanya.',
      distanciaSede: '22 km',
      tiempoRespuesta: '30 minutos'
    },

    // Área Metropolitana
    {
      nombre: 'paterna',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46980',
      area: 'Metropolitana',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en Paterna.',
      distanciaSede: '20 km',
      tiempoRespuesta: '30 minutos'
    },
    {
      nombre: 'burjassot',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46100',
      area: 'Metropolitana',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en Burjassot.',
      distanciaSede: '18 km',
      tiempoRespuesta: '25 minutos'
    },
    {
      nombre: 'mislata',
      servicios: ['Carpintería metálica', 'Cerrajería 24h', 'Toldos y persianas'],
      codigoPostal: '46920',
      area: 'Metropolitana',
      metaDescripcion: 'Servicios de cerrajería y carpintería metálica en Mislata.',
      distanciaSede: '15 km',
      tiempoRespuesta: '25 minutos'
    }
  ] as Localidad[],

  // Servicios técnicos actualizados
  serviciosTecnicos: [
    {
      categoria: 'Carpintería Metálica',
      servicios: [
        {
          nombre: 'Ventanas de Aluminio',
          caracteristicas: [
            'RPT (Rotura de Puente Térmico)',
            'Doble acristalamiento',
            'Triple acristalamiento',
            'Control solar',
            'Aislamiento acústico'
          ],
          sistemas: [
            'Corredera',
            'Abatible',
            'Oscilobatiente',
            'Elevable',
            'Plegable'
          ],
          marcas: [
            'Cortizo',
            'Schüco',
            'Reynaers',
            'ALUMAFEL',
            'EXLABESA'
          ]
        },
        // ... más servicios detallados
      ]
    },
    {
      categoria: 'Cerrajería',
      servicios: [
        {
          nombre: 'Cerrajería de Seguridad',
          servicios: [
            'Apertura de puertas',
            'Cambio de bombines',
            'Instalación de cerraduras de seguridad',
            'Cerraduras antibumping',
            'Cerraduras electrónicas'
          ],
          tipos: [
            'Urgencias 24h',
            'Residencial',
            'Comercial',
            'Industrial'
          ],
          marcas: [
            'TESA',
            'CISA',
            'EZCURRA',
            'MOTTURA',
            'ISEO',
            'KABA',
            'DOM'
          ]
        },
        {
          nombre: 'Cerrajería Automóvil',
          servicios: [
            'Apertura de vehículos',
            'Copia de llaves de coche',
            'Reparación de mandos',
            'Extracción de llaves rotas'
          ]
        }
      ]
    },
    {
      categoria: 'Toldos',
      servicios: [
        {
          nombre: 'Toldos Residenciales',
          tipos: [
            'Toldos extensibles',
            'Toldos cofre',
            'Toldos punto recto',
            'Toldos verticales',
            'Toldos correderos'
          ],
          caracteristicas: [
            'Motorización Somfy',
            'Sensores de viento',
            'Sensores de sol',
            'Control remoto',
            'Integración domótica'
          ],
          tejidos: [
            'Acrílico',
            'Microperforado',
            'Impermeable',
            'Screen',
            'PVC'
          ],
          marcas: [
            'Llaza',
            'Markilux',
            'Somfy',
            'Sauleda',
            'Dickson'
          ]
        }
      ]
    },
    {
      categoria: 'Persianas',
      servicios: [
        {
          nombre: 'Persianas Residenciales',
          tipos: [
            'Enrollables',
            'Compactos',
            'Orientables',
            'Seguridad'
          ],
          materiales: [
            'Aluminio térmico',
            'PVC',
            'Aluminio extrusionado',
            'Acero'
          ],
          automatismos: [
            'Motores tubulares',
            'Control remoto',
            'Domótica',
            'Sensores'
          ],
          marcas: [
            'Somfy',
            'Nice',
            'Motorline',
            'Cherubini'
          ]
        }
      ]
    }
  ] as CategoriaServicio[],

  // Certificaciones y normativas
  certificaciones: [
    {
      nombre: 'ISO 9001:2015',
      descripcion: 'Sistema de gestión de calidad',
      validez: '2024'
    },
    {
      nombre: 'Certificado de Calidad en Soldadura',
      tipo: 'EN ISO 9606-1',
      alcance: 'Soldadura TIG, MIG/MAG'
    },
    {
      nombre: 'Marcado CE',
      productos: [
        'Ventanas y puertas',
        'Estructuras metálicas',
        'Cerramientos'
      ]
    }
  ],

  // Garantías específicas
  garantias: {
    instalacion: {
      duracion: '2 años',
      cobertura: [
        'Defectos de instalación',
        'Ajustes y calibración',
        'Mano de obra'
      ]
    },
    materiales: {
      duracion: '5 años',
      cobertura: [
        'Defectos de fabricación',
        'Corrosión',
        'Deformaciones'
      ]
    },
    acabados: {
      duracion: '10 años',
      tipos: [
        'Lacados',
        'Anodizados',
        'Galvanizados'
      ]
    }
  },

  // Información técnica
  especificacionesTecnicas: {
    normativas: [
      'CTE (Código Técnico de la Edificación)',
      'UNE-EN 14351-1 (Ventanas y puertas)',
      'UNE-EN 13241 (Puertas industriales)',
      'UNE-EN 1090 (Estructuras metálicas)'
    ],
    ensayos: [
      'Permeabilidad al aire',
      'Estanqueidad al agua',
      'Resistencia al viento',
      'Aislamiento acústico',
      'Transmitancia térmica'
    ]
  },

  // Información adicional de empresa
  recursosHumanos: {
    personal: {
      tecnicos: 5,
      instaladores: 8,
      cerrajeros: 3,
      administracion: 2
    },
    formacionContinua: true,
    prevencionRiesgos: 'Certificación OSHAS 18001'
  },

  maquinaria: {
    fabricacion: [
      'Centro de mecanizado CNC',
      'Tronzadora de doble cabezal',
      'Plegadora',
      'Soldadura TIG/MIG',
      'Cortadora láser'
    ],
    vehiculos: [
      'Furgonetas equipadas',
      'Camión grúa',
      'Plataforma elevadora'
    ]
  },

  // Horarios detallados
  horarios: {
    cerrajeria: {
      normal: '08:00-20:00',
      urgencias: '24h/365 días'
    },
    instalaciones: {
      lunes_viernes: '08:00-19:00',
      sabados: 'Cita previa'
    },
    tiemposRespuesta: {
      urgencias: '30 minutos',
      presupuestos: '24-48 horas',
      instalaciones: '7-15 días'
    }
  },

  // Servicios de urgencia (nuevo)
  serviciosUrgencia: {
    telefono24h: '+34624321060',
    tiempoRespuesta: '30 minutos',
    zonaCobertura: 'Valencia y área metropolitana',
    servicios: [
      'Apertura de puertas',
      'Cerraduras bloqueadas',
      'Persianas atascadas',
      'Cierres de seguridad',
      'Puertas de garaje'
    ]
  }
};