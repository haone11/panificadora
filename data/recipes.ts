import { Recipe, RecipeCategory } from '../types';

// Helper to keep code clean since images are hidden in UI
const NO_IMG = ''; 

export const recipes: Recipe[] = [
  // ==========================================
  // RECETAS OFICIALES DEL MANUAL (source: 'manual')
  // ==========================================

  // --- PROGRAMA 1: NORMAL ---
  {
    id: 'p1-basic-white',
    title: 'Pan Blanco (Básico)',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua o Leche' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '540 g', name: 'Harina de fuerza (tipo 550)' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '2 cdta', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Esta es la receta base del manual. Ideal para empezar.',
      'Añade líquidos y mantequilla.',
      'Añade harina, sal y azúcar.',
      'Levadura al final.',
      'Programa 1.'
    ]
  },
  {
    id: 'p1-rustic',
    title: 'Pan Rústico',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '1.5 cda', name: 'Mantequilla' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Azúcar' },
      { amount: '360 g', name: 'Harina de trigo de fuerza' },
      { amount: '180 g', name: 'Harina de centeno' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Añade el agua y la mantequilla.',
      'Añade las harinas (trigo y centeno), la sal y el azúcar.',
      'Haz el hueco para la levadura.',
      'Programa 1.'
    ]
  },
  {
    id: 'p1-sunflower',
    title: 'Pan de Semillas de Girasol',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Leche templada' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '540 g', name: 'Harina de fuerza (tipo 550)' },
      { amount: '5 cda', name: 'Semillas de girasol' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '0.5 cdta', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Añade la leche templada y la mantequilla en la cubeta.',
      'Añade la harina, sal y azúcar.',
      'Haz un hueco para la levadura.',
      'Programa 1, 1000g, Tostado Medio.',
      'Añade las semillas de girasol tras el primer pitido.'
    ]
  },
  {
    id: 'p1-potato',
    title: 'Pan de Patata',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua o leche' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '1', name: 'Huevo' },
      { amount: '150 g', name: 'Patatas cocidas machacadas' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Azúcar' },
      { amount: '630 g', name: 'Harina de fuerza' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Cuece las patatas y machácalas. Deja enfriar.',
      'Añade líquidos, huevo, puré, sal y azúcar.',
      'Cubre con harina y levadura.',
      'Programa 1.'
    ]
  },
  {
    id: 'p1-herb',
    title: 'Pan de Hierbas Provenzales',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '0.5 cdta', name: 'Azúcar' },
      { amount: '2 cda', name: 'Hierbas provenzales (al gusto)' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Ingredientes líquidos abajo, secos arriba.',
      'Programa 1.',
      'Si quieres las hierbas muy enteras, añádelas al pitido. Si las quieres integradas en la masa, ponlas con la harina.'
    ]
  },
  {
    id: 'p1-pizza-bread',
    title: 'Pan de Pizza',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '1 cda', name: 'Aceite de oliva' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Orégano seco' },
      { amount: '2 cda', name: 'Queso parmesano rallado' },
      { amount: '50 g', name: 'Salami picado fino' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Líquidos y aceite primero.',
      'Añade harina, sal, orégano y parmesano.',
      'Añade levadura.',
      'Añade el salami picado cuando suene el pitido.'
    ]
  },
  {
    id: 'p1-beer',
    title: 'Pan de Cerveza',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '200 ml', name: 'Agua' },
      { amount: '200 ml', name: 'Cerveza (rubia o negra)' },
      { amount: '540 g', name: 'Harina de trigo' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Mezcla el agua y la cerveza (que no esté muy fría).',
      'Añade harina, sal y azúcar.',
      'Añade levadura.',
      'Programa 1.'
    ]
  },
  {
    id: 'p1-corn',
    title: 'Pan de Maíz',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '1 cda', name: 'Mantequilla' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '3 cda', name: 'Sémola de maíz (Polenta)' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '0.5 cdta', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Todo a la cubeta en orden (líquidos, sólidos, levadura).', 'Programa 1.']
  },
  {
    id: 'p1-paprika',
    title: 'Pan de Pimentón y Nueces',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '2 cdta', name: 'Pimentón (dulce o picante)' },
      { amount: '100 g', name: 'Nueces picadas' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Líquidos primero.',
      'Harina, sal y pimentón.',
      'Levadura.',
      'Nueces al pitido.',
      'Programa 1.'
    ]
  },
  {
    id: 'p1-pumpkin-seed',
    title: 'Pan de Semillas de Calabaza',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '540 g', name: 'Harina fuerza' },
      { amount: '5 cda', name: 'Semillas de calabaza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Semillas al pitido. Programa 1.']
  },
  
  // --- PROGRAMA 2: ESPONJOSO (FRANCÉS) ---
  {
    id: 'p2-classic-white',
    title: 'Pan Blanco Clásico (Tipo Francés)',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 2,
    programName: 'Esponjoso',
    time: '3:50 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '375 ml', name: 'Agua' },
      { amount: '1 cda', name: 'Aceite' },
      { amount: '525 g', name: 'Harina de trigo' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Orden habitual. Programa 2 da una miga más aireada y corteza crujiente.']
  },
  {
    id: 'p2-toast',
    title: 'Pan Tostado (Para Sándwich)',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 2,
    programName: 'Esponjoso',
    time: '3:50 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Leche' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '2 cda', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['El manual recomienda Programa 2 para conseguir esa textura de miga fina ideal para sándwich.']
  },
  {
    id: 'p2-honey',
    title: 'Pan de Miel',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 2,
    programName: 'Esponjoso',
    time: '3:50 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '325 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Miel' },
      { amount: '2.5 cda', name: 'Aceite de oliva' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Disuelve la miel en el agua antes de añadirla. Programa 2.']
  },
  {
    id: 'p2-buttermilk',
    title: 'Pan de Suero de Leche',
    category: RecipeCategory.CLASSIC,
    source: 'manual',
    program: 2,
    programName: 'Esponjoso',
    time: '3:50 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Suero de leche (Buttermilk)' },
      { amount: '2.5 cda', name: 'Mantequilla' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '2 cda', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Si no tienes suero, usa leche con unas gotas de limón. Programa 2.']
  },

  // --- PROGRAMA 3: INTEGRAL ---
  {
    id: 'p3-wholewheat',
    title: 'Pan Integral Clásico',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'manual',
    program: 3,
    programName: 'Integral',
    time: '3:40 h',
    browning: 'Oscuro',
    weight: '1250g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '450 ml', name: 'Agua' },
      { amount: '25 g', name: 'Mantequilla' },
      { amount: '600 g', name: 'Harina integral de trigo' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Miel' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Programa 3. Requiere más precalentamiento.']
  },
  {
    id: 'p3-rye',
    title: 'Pan de Centeno',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'manual',
    program: 3,
    programName: 'Integral',
    time: '3:40 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '300 g', name: 'Harina integral de trigo' },
      { amount: '240 g', name: 'Harina de centeno' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '0.5 cda', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['El centeno es pesado, por eso se mezcla con trigo. Programa 3.']
  },
  {
    id: 'p3-seven-seeds',
    title: 'Pan de 7 Semillas',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'manual',
    program: 3,
    programName: 'Integral',
    time: '3:40 h',
    browning: 'Medio',
    weight: '1250g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '450 ml', name: 'Agua' },
      { amount: '3 cda', name: 'Mantequilla' },
      { amount: '550 g', name: 'Harina integral' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '2.5 cda', name: 'Azúcar' },
      { amount: '100 g', name: 'Mezcla de semillas (lino, sésamo, amapola, girasol, calabaza...)' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Añade las semillas al pitido. Programa 3.']
  },
  {
    id: 'p3-spelt',
    title: 'Pan de Espelta',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'manual',
    program: 3,
    programName: 'Integral',
    time: '3:40 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '540 g', name: 'Harina de espelta integral' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['La espelta se comporta similar al trigo. Programa 3.']
  },
  {
    id: 'p3-buckwheat',
    title: 'Pan de Trigo Sarraceno',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'manual',
    program: 3,
    programName: 'Integral',
    time: '3:40 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '400 g', name: 'Harina de trigo de fuerza' },
      { amount: '140 g', name: 'Harina de trigo sarraceno' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Mezcla harinas para mejor consistencia. Programa 3.']
  },

  // --- PROGRAMA 4: DULCE ---
  {
    id: 'p4-milk-bread',
    title: 'Pan de Leche (Básico)',
    category: RecipeCategory.SWEET,
    source: 'manual',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Leche' },
      { amount: '1.5 cda', name: 'Mantequilla' },
      { amount: '2', name: 'Huevos' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '4 cda', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['La receta básica de pan dulce del manual.']
  },
  {
    id: 'p4-raisin',
    title: 'Pan de Pasas',
    category: RecipeCategory.SWEET,
    source: 'manual',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Leche' },
      { amount: '2', name: 'Huevos' },
      { amount: '40 g', name: 'Mantequilla' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '4 cda', name: 'Azúcar' },
      { amount: '80 g', name: 'Pasas' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Añade las pasas al pitido. Programa 4.']
  },
  {
    id: 'p4-chocolate',
    title: 'Pan de Chocolate',
    category: RecipeCategory.SWEET,
    source: 'manual',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '400 ml', name: 'Leche' },
      { amount: '100 g', name: 'Requesón' },
      { amount: '600 g', name: 'Harina de trigo' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '2 cda', name: 'Cacao en polvo' },
      { amount: '100 g', name: 'Chocolate con leche picado' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Mezcla el cacao con la harina. Chocolate troceado al pitido. Programa 4.']
  },
  {
    id: 'p4-nuts',
    title: 'Pan de Frutos Secos',
    category: RecipeCategory.SWEET,
    source: 'manual',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Leche' },
      { amount: '1', name: 'Huevo' },
      { amount: '40 g', name: 'Mantequilla' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '3 cda', name: 'Azúcar' },
      { amount: '100 g', name: 'Nueces/Almendras picadas' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Frutos secos al pitido. Programa 4.']
  },
  {
    id: 'p4-christmas',
    title: 'Pan de Navidad (Stollen)',
    category: RecipeCategory.CHRISTMAS,
    source: 'manual',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '250 ml', name: 'Leche' },
      { amount: '1', name: 'Huevo' },
      { amount: '100 g', name: 'Mantequilla' },
      { amount: '500 g', name: 'Harina' },
      { amount: '2 cda', name: 'Azúcar' },
      { amount: '1 pizca', name: 'Sal' },
      { amount: '100 g', name: 'Fruta confitada/pasas' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Fruta confitada al pitido. Programa 4.']
  },
  {
    id: 'p4-brioche',
    title: 'Brioche Clásico',
    category: RecipeCategory.SWEET,
    source: 'manual',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '150 ml', name: 'Leche' },
      { amount: '3', name: 'Huevos' },
      { amount: '150 g', name: 'Mantequilla' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '6 g', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Programa 4.']
  },

  // --- PROGRAMA 5: LOW CARB ---
  {
    id: 'p5-lowcarb-egg',
    title: 'Pan Low Carb de Huevo',
    category: RecipeCategory.LOW_CARB,
    source: 'manual',
    program: 5,
    programName: 'Low Carb',
    time: '2:39 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '3', name: 'Huevos' },
      { amount: '100 g', name: 'Mantequilla derretida' },
      { amount: '200 g', name: 'Harina de almendra' },
      { amount: '200 g', name: 'Gluten de trigo' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Mezcla bien los huevos. Programa 5.']
  },
  {
    id: 'p5-lowcarb-quark',
    title: 'Pan Low Carb de Requesón',
    category: RecipeCategory.LOW_CARB,
    source: 'manual',
    program: 5,
    programName: 'Low Carb',
    time: '2:39 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '3', name: 'Huevos' },
      { amount: '250 g', name: 'Requesón (Quark) bajo en grasa' },
      { amount: '100 g', name: 'Almendra molida' },
      { amount: '100 g', name: 'Semillas de lino molidas' },
      { amount: '50 g', name: 'Salvado' },
      { amount: '1 sobre', name: 'Polvo de hornear (Royal)' }
    ],
    steps: ['OJO: Esta receta usa polvo de hornear en vez de levadura de panadero. Programa 5.']
  },

  // --- PROGRAMA 6: SIN GLUTEN ---
  {
    id: 'p6-gf-potato',
    title: 'Pan Sin Gluten de Patata',
    category: RecipeCategory.GLUTEN_FREE,
    source: 'manual',
    program: 6,
    programName: 'Sin Gluten',
    time: '3:15 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '400 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '400 g', name: 'Mezcla harina Sin Gluten' },
      { amount: '150 g', name: 'Patata cocida y machacada' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 paquete', name: 'Levadura seca Sin Gluten' }
    ],
    steps: ['Ayuda con espátula los primeros minutos. Programa 6.']
  },
  {
    id: 'p6-gf-yogurt',
    title: 'Pan Sin Gluten de Yogur',
    category: RecipeCategory.GLUTEN_FREE,
    source: 'manual',
    program: 6,
    programName: 'Sin Gluten',
    time: '3:15 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '150 g', name: 'Yogur natural' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '500 g', name: 'Harina Sin Gluten' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 paquete', name: 'Levadura seca Sin Gluten' }
    ],
    steps: ['Mezcla agua y yogur primero. Programa 6.']
  },
  {
    id: 'p6-gf-seeds',
    title: 'Pan Sin Gluten de Semillas',
    category: RecipeCategory.GLUTEN_FREE,
    source: 'manual',
    program: 6,
    programName: 'Sin Gluten',
    time: '3:15 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '450 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '500 g', name: 'Harina Sin Gluten' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '50 g', name: 'Semillas variadas' },
      { amount: '1 paquete', name: 'Levadura seca Sin Gluten' }
    ],
    steps: ['Programa 6.']
  },

  // --- PROGRAMA 7: EXPRÉS ---
  {
    id: 'p7-express-white',
    title: 'Pan Blanco Exprés',
    category: RecipeCategory.EXPRESS,
    source: 'manual',
    program: 7,
    programName: 'Exprés',
    time: '1:15 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '360 ml', name: 'Agua caliente (40-50°C)' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '630 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '2 paquetes', name: 'Levadura seca (Doble)' }
    ],
    steps: ['El agua DEBE estar caliente y usar DOBLE levadura. Programa 7.']
  },
  {
    id: 'p7-express-almond',
    title: 'Pan de Almendra Rápido',
    category: RecipeCategory.EXPRESS,
    source: 'manual',
    program: 7,
    programName: 'Exprés',
    time: '1:15 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '360 ml', name: 'Agua caliente (40-50°C)' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '530 g', name: 'Harina de fuerza' },
      { amount: '100 g', name: 'Almendra molida' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '2 paquetes', name: 'Levadura seca (Doble)' }
    ],
    steps: ['Agua caliente y doble levadura esencial. Programa 7.']
  },

  // --- PROGRAMA 8: PASTEL ---
  {
    id: 'p8-lemon',
    title: 'Bizcocho de Limón',
    category: RecipeCategory.CAKE,
    source: 'manual',
    program: 8,
    programName: 'Pastel',
    time: '1:30 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '4', name: 'Huevos' },
      { amount: '150 g', name: 'Mantequilla blanda' },
      { amount: '180 g', name: 'Azúcar' },
      { amount: '300 g', name: 'Harina repostería' },
      { amount: '1', name: 'Ralladura de limón' },
      { amount: '1 sobre', name: 'Levadura Química (Royal)' }
    ],
    steps: ['Mejor batir huevos y azúcar fuera un poco antes. Programa 8.']
  },
  {
    id: 'p8-marble',
    title: 'Bizcocho Mármol',
    category: RecipeCategory.CAKE,
    source: 'manual',
    program: 8,
    programName: 'Pastel',
    time: '1:30 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '4', name: 'Huevos' },
      { amount: '150 g', name: 'Mantequilla' },
      { amount: '180 g', name: 'Azúcar' },
      { amount: '300 g', name: 'Harina' },
      { amount: '1 sobre', name: 'Levadura Química' },
      { amount: '2 cda', name: 'Cacao (para mitad masa)' }
    ],
    steps: ['Pon la masa blanca, luego la de cacao encima y remueve un poco con un tenedor. Programa 8.']
  },

  // --- PROGRAMA 9: AMASAR (MASA DE GALLETAS/PASTAS) ---
  {
    id: 'p9-tea-cookies',
    title: 'Masa de Pastas de Té (Galletas)',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 9,
    programName: 'Amasar',
    time: '0:15 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '1', name: 'Huevo' },
      { amount: '200 g', name: 'Mantequilla (fría en trocitos)' },
      { amount: '200 g', name: 'Azúcar' },
      { amount: '400 g', name: 'Harina de repostería' },
      { amount: '1 pizca', name: 'Sal' }
    ],
    steps: [
      'Programa 9 (Amasar) solo para mezclar los ingredientes.',
      'Saca la masa, envuélvela en film y refrigera 1h.',
      'Extiende, corta con moldes y hornea en horno convencional a 180°C durante 10-15 min.'
    ]
  },

  // --- PROGRAMA 10: MASA (YEAST DOUGH) ---
  {
    id: 'p10-rolls',
    title: 'Masa de Panecillos',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 10,
    programName: 'Masa',
    time: '1:40 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Azúcar' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Programa 10 (Masa). Al terminar, sacar, formar bollos y hornear en horno normal a 200°C unos 20 min.']
  },
  {
    id: 'p10-pretzels',
    title: 'Masa de Pretzels',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 10,
    programName: 'Masa',
    time: '1:40 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '250 ml', name: 'Agua tibia' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '0.5 cdta', name: 'Azúcar' },
      { amount: '500 g', name: 'Harina' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Programa 10. Luego formar pretzels, bañar en agua con bicarbonato y hornear.']
  },

  // --- PROGRAMA 11: MASA PARA PASTA (VARIEDADES) ---
  {
    id: 'p11-pasta-egg',
    title: 'Masa de Pasta al Huevo',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 11,
    programName: 'Masa para Pasta',
    time: '0:15 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '5', name: 'Huevos' },
      { amount: '2 cda', name: 'Agua' },
      { amount: '250 g', name: 'Harina de trigo suave (tipo 405)' },
      { amount: '250 g', name: 'Sémola de trigo duro' }
    ],
    steps: ['Programa 11. Envuelve en film 30 min antes de procesar.']
  },
  {
    id: 'p11-pasta-tomato',
    title: 'Masa de Pasta Roja (Tomate)',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 11,
    programName: 'Masa para Pasta',
    time: '0:15 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '5', name: 'Huevos' },
      { amount: '2 cda', name: 'Agua' },
      { amount: '100 g', name: 'Concentrado de tomate' },
      { amount: '400 g', name: 'Harina de sémola o trigo' }
    ],
    steps: ['Programa 11. Ideal para lasaña o tallarines.']
  },
  {
    id: 'p11-pasta-spinach',
    title: 'Masa de Pasta Verde (Espinacas)',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 11,
    programName: 'Masa para Pasta',
    time: '0:15 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '5', name: 'Huevos' },
      { amount: '2 cda', name: 'Agua' },
      { amount: '100 g', name: 'Espinacas cocidas, MUY escurridas y picadas' },
      { amount: '400 g', name: 'Harina de sémola o trigo' }
    ],
    steps: ['Asegúrate de escurrir muy bien las espinacas para no aguar la masa. Programa 11.']
  },

  // --- PROGRAMA 12: MASA DE PIZZA ---
  {
    id: 'p12-pizza',
    title: 'Masa de Pizza Italiana',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 12,
    programName: 'Masa de Pizza',
    time: '0:45 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '170 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite oliva' },
      { amount: '300 g', name: 'Harina de fuerza' },
      { amount: '0.5 cdta', name: 'Sal' },
      { amount: '0.5 paquete', name: 'Levadura seca' }
    ],
    steps: ['Programa 12 (45 min). Sacar, estirar y hornear en horno.']
  },
  {
    id: 'p12-focaccia',
    title: 'Masa de Focaccia',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 12,
    programName: 'Masa de Pizza',
    time: '0:45 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '4 cda', name: 'Aceite de oliva' },
      { amount: '500 g', name: 'Harina' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Programa 12. Luego poner en bandeja, hacer huecos con dedos y aceite, y hornear.']
  },
  {
    id: 'p12-pizza-wholewheat',
    title: 'Masa de Pizza Integral',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 12,
    programName: 'Masa de Pizza',
    time: '0:45 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua tibia' },
      { amount: '2 cda', name: 'Aceite de oliva' },
      { amount: '500 g', name: 'Harina integral de trigo' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Orégano (opcional)' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Programa 12. Al terminar, estirar fina y hornear con tus ingredientes favoritos.']
  },
  {
    id: 'p12-pizza-fluffy',
    title: 'Masa de Pizza Esponjosa (Estilo Americano)',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 12,
    programName: 'Masa de Pizza',
    time: '0:45 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '280 ml', name: 'Agua' },
      { amount: '3 cda', name: 'Aceite' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Azúcar' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Programa 12. Para que quede más esponjosa, una vez estirada en el molde, déjala reposar 20 min tapada antes de poner los ingredientes y hornear.']
  },
  {
    id: 'p12-pizza-semolina',
    title: 'Masa de Pizza Crujiente (con Sémola)',
    category: RecipeCategory.DOUGH,
    source: 'manual',
    program: 12,
    programName: 'Masa de Pizza',
    time: '0:45 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite de oliva virgen extra' },
      { amount: '400 g', name: 'Harina de trigo' },
      { amount: '100 g', name: 'Sémola de trigo duro' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '0.5 paquete', name: 'Levadura seca' }
    ],
    steps: ['La sémola aporta un toque muy crujiente. Programa 12.']
  },

  // --- PROGRAMA 13: YOGUR ---
  {
    id: 'p13-yogurt',
    title: 'Yogur Natural',
    category: RecipeCategory.YOGURT,
    source: 'manual',
    program: 13,
    programName: 'Yogur',
    time: '8:00 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '1 litro', name: 'Leche entera' },
      { amount: '150 g', name: 'Yogur natural (fermento)' }
    ],
    steps: ['Quita las aspas. Mezcla leche y yogur. Programa 13.']
  },
  {
    id: 'p13-fruit-yogurt',
    title: 'Yogur de Frutas',
    category: RecipeCategory.YOGURT,
    source: 'manual',
    program: 13,
    programName: 'Yogur',
    time: '8:00 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '1 litro', name: 'Leche' },
      { amount: '150 g', name: 'Yogur natural' },
      { amount: '3 cda', name: 'Mermelada de fruta' }
    ],
    steps: ['Mezcla leche y yogur. Añade mermelada al final o al servir. Programa 13.']
  },

  // --- PROGRAMA 14: MERMELADA ---
  {
    id: 'p14-strawberry',
    title: 'Mermelada de Fresa',
    category: RecipeCategory.JAM,
    source: 'manual',
    program: 14,
    programName: 'Mermelada',
    time: '1:20 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '500 g', name: 'Fresas lavadas y troceadas' },
      { amount: '250 g', name: 'Azúcar gelificante 2:1' },
      { amount: '1 cda', name: 'Zumo limón' }
    ],
    steps: ['Quita aspas. Todo a la cubeta. Programa 14.']
  },
  {
    id: 'p14-orange',
    title: 'Mermelada de Naranja',
    category: RecipeCategory.JAM,
    source: 'manual',
    program: 14,
    programName: 'Mermelada',
    time: '1:20 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '500 g', name: 'Naranjas peladas y troceadas' },
      { amount: '250 g', name: 'Azúcar gelificante 2:1' },
      { amount: '1 cda', name: 'Zumo limón' }
    ],
    steps: ['Programa 14.']
  },
  {
    id: 'p14-berry',
    title: 'Mermelada de Frutos del Bosque',
    category: RecipeCategory.JAM,
    source: 'manual',
    program: 14,
    programName: 'Mermelada',
    time: '1:20 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '500 g', name: 'Frutos del bosque congelados (descongelar antes)' },
      { amount: '250 g', name: 'Azúcar gelificante' },
      { amount: '1 cda', name: 'Zumo limón' }
    ],
    steps: ['Programa 14.']
  },


  // ==========================================
  // RECETAS ONLINE / COMUNIDAD (source: 'online')
  // ==========================================

  // --- PANETTONE & NAVIDAD (Programas Dulces / Masas) ---
  {
    id: 'online-panettone',
    title: 'Panettone Clásico (Web)',
    category: RecipeCategory.CHRISTMAS,
    source: 'online',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '120 ml', name: 'Leche tibia' },
      { amount: '3', name: 'Huevos' },
      { amount: '2', name: 'Yemas de huevo' },
      { amount: '120 g', name: 'Mantequilla blanda' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '100 g', name: 'Azúcar' },
      { amount: '1 pizca', name: 'Sal' },
      { amount: '1 sobre', name: 'Levadura seca panadero' },
      { amount: '100 g', name: 'Pasas y Frutas confitadas' },
      { amount: '1 cdta', name: 'Agua de Azahar' }
    ],
    steps: [
      'Receta reina de la comunidad. Programa 4 (Dulce).',
      'Añade las frutas y pasas cuando suene el pitido.',
      'Si quieres que suba más, usa el programa 10 (Masa), deja levar fuera en molde alto y hornea en horno convencional.'
    ]
  },
  {
    id: 'online-roscon',
    title: 'Roscón de Reyes (Masa)',
    category: RecipeCategory.CHRISTMAS,
    source: 'online',
    program: 10,
    programName: 'Masa',
    time: '1:40 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '130 ml', name: 'Leche infusionada (cítricos/canela)' },
      { amount: '2', name: 'Huevos' },
      { amount: '80 g', name: 'Mantequilla' },
      { amount: '20 ml', name: 'Agua de Azahar' },
      { amount: '1 cdta', name: 'Ron (opcional)' },
      { amount: '450 g', name: 'Harina de fuerza' },
      { amount: '100 g', name: 'Azúcar' },
      { amount: '1 sobre', name: 'Levadura seca' },
      { amount: 'Pizca', name: 'Sal' }
    ],
    steps: [
      'Programa 10 para amasar y primer levado.',
      'Saca la masa, dale forma de roscón en bandeja de horno.',
      'Deja levar 1 hora más hasta doblar.',
      'Pinta con huevo, decora y hornea a 180°C unos 20 min.'
    ]
  },
  {
    id: 'online-chocottone',
    title: 'Chocottone (Panettone con Chocolate)',
    category: RecipeCategory.CHRISTMAS,
    source: 'online',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '120 ml', name: 'Leche' },
      { amount: '3', name: 'Huevos' },
      { amount: '120 g', name: 'Mantequilla' },
      { amount: '100 g', name: 'Azúcar' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 sobre', name: 'Levadura seca' },
      { amount: '150 g', name: 'Pepitas de chocolate' },
      { amount: '1 cdta', name: 'Esencia de vainilla' }
    ],
    steps: ['Igual que el Panettone, pero con pepitas de chocolate al pitido. Programa 4.']
  },

  // --- PANES CLÁSICOS DE LA COMUNIDAD ---
  {
    id: 'online-tomato-oregano',
    title: 'Pan de Tomate y Orégano',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite de oliva' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '50 g', name: 'Tomates secos picados' },
      { amount: '1 cda', name: 'Orégano seco' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: [
      'Hidrata los tomates secos antes. Añádelos bien secos al pitido.'
    ]
  },
  {
    id: 'online-garlic-bread',
    title: 'Pan de Ajo y Perejil',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite de oliva' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Azúcar' },
      { amount: '3 dientes', name: 'Ajo picado (o ajo en polvo)' },
      { amount: '2 cda', name: 'Perejil picado' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['Programa 1. Ideal para acompañar comidas.']
  },
  {
    id: 'online-oat-honey',
    title: 'Pan de Avena y Miel',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Leche o agua' },
      { amount: '2 cda', name: 'Miel' },
      { amount: '2 cda', name: 'Mantequilla' },
      { amount: '450 g', name: 'Harina de fuerza' },
      { amount: '100 g', name: 'Copos de avena suaves' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Disuelve la miel. Copos junto con la harina. Programa 1.']
  },
  {
    id: 'online-dark-beer',
    title: 'Pan de Cerveza Negra y Bacon',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '330 ml', name: 'Cerveza Negra (1 lata)' },
      { amount: '1 cda', name: 'Mantequilla' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Azúcar moreno' },
      { amount: '550 g', name: 'Harina de fuerza' },
      { amount: '75 g', name: 'Bacon frito en taquitos' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['Bacon al pitido. Programa 1. Sabor intenso.']
  },
  {
    id: 'online-roquefort-walnuts',
    title: 'Pan de Roquefort y Nueces',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '320 ml', name: 'Agua' },
      { amount: '1 cda', name: 'Aceite' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Azúcar' },
      { amount: '80 g', name: 'Queso Azul/Roquefort' },
      { amount: '50 g', name: 'Nueces picadas' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['Queso y nueces al pitido. Programa 1.']
  },
  {
    id: 'online-cheese-mustard',
    title: 'Pan de Queso y Mostaza',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '1 cda', name: 'Mantequilla' },
      { amount: '1.5 cda', name: 'Mostaza antigua' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Azúcar' },
      { amount: '80 g', name: 'Queso rallado' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Queso al pitido. Programa 1.']
  },

  // --- MASAS DE PIZZA FAMOSAS ---
  {
    id: 'online-pizza-telepizza',
    title: 'Masa de Pizza "Tipo Telepizza"',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 12,
    programName: 'Masa de Pizza',
    time: '0:45 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '200 ml', name: 'Leche tibia' },
      { amount: '50 ml', name: 'Aceite' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '400 g', name: 'Harina de fuerza' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['El secreto es la leche. Programa 12. Salen 2 bases medianas.']
  },
  {
    id: 'online-pizza-hut',
    title: 'Masa de Pizza "Tipo Pizza Hut" (Pan)',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 12,
    programName: 'Masa de Pizza',
    time: '0:45 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '250 ml', name: 'Agua tibia' },
      { amount: '30 g', name: 'Leche en polvo' },
      { amount: '1/2 cdta', name: 'Sal' },
      { amount: '450 g', name: 'Harina de fuerza' },
      { amount: '20 g', name: 'Azúcar' },
      { amount: '40 ml', name: 'Aceite' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['La leche en polvo es clave. Programa 12. Hornear en molde aceitado.']
  },

  // --- BOLLERÍA Y OTRAS MASAS ---
  {
    id: 'online-burger-buns',
    title: 'Pan de Hamburguesa (Buns)',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 10,
    programName: 'Masa',
    time: '1:40 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '275 ml', name: 'Leche tibia' },
      { amount: '1', name: 'Huevo (batido)' },
      { amount: '60 g', name: 'Mantequilla derretida' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '30 g', name: 'Azúcar' },
      { amount: '1 sobre', name: 'Levadura seca de panadero' }
    ],
    steps: ['Programa 10. Forma bolas, deja levar 40 min, pinta con huevo y hornea.']
  },
  {
    id: 'online-croissants',
    title: 'Masa de Croissants',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 10,
    programName: 'Masa',
    time: '1:40 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '260 ml', name: 'Agua fría' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '60 g', name: 'Azúcar' },
      { amount: '10 g', name: 'Sal' },
      { amount: '1 sobre', name: 'Levadura seca' },
      { amount: '250 g', name: 'Mantequilla (para hojaldrar fuera)' }
    ],
    steps: [
      'Programa 10. Solo amasar y primer levado.',
      'El hojaldrado con la mantequilla se hace a mano estirando y doblando.'
    ]
  },
  {
    id: 'online-donuts',
    title: 'Masa de Donuts Clásicos',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 10,
    programName: 'Masa',
    time: '1:40 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '200 ml', name: 'Leche' },
      { amount: '1', name: 'Huevo' },
      { amount: '40 g', name: 'Mantequilla' },
      { amount: '400 g', name: 'Harina de fuerza' },
      { amount: '60 g', name: 'Azúcar' },
      { amount: '1 pizca', name: 'Sal' },
      { amount: '1 sobre', name: 'Levadura seca' },
      { amount: '1 cdta', name: 'Cardamomo (opcional)' }
    ],
    steps: ['Programa 10. Estirar, cortar, levar y freír/hornear.']
  },
  {
    id: 'online-churros',
    title: 'Masa de Churros (Porras)',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 9,
    programName: 'Amasar',
    time: '0:15 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '400 ml', name: 'Agua tibia' },
      { amount: '400 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Levadura seca' },
      { amount: '1 pizca', name: 'Bicarbonato' }
    ],
    steps: ['Programa 9. Dejar reposar 10 min y freír en aceite muy caliente.']
  },
  {
    id: 'online-ciabatta',
    title: 'Masa de Chapata (Ciabatta)',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 10,
    programName: 'Masa',
    time: '1:40 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '3 cda', name: 'Aceite oliva' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['Masa muy hidratada. Programa 10. Manejar con harina y hornear.']
  },
  {
    id: 'online-empanada',
    title: 'Masa de Empanada Gallega',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 9,
    programName: 'Amasar',
    time: '0:15 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '200 ml', name: 'Aceite del sofrito + agua' },
      { amount: '50 ml', name: 'Vino blanco' },
      { amount: '500 g', name: 'Harina de trigo' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 sobre', name: 'Levadura seca (opcional para esponjosa)' }
    ],
    steps: ['Programa 9 (15 min). Dejar reposar 30 min y estirar.']
  },

  // --- DULCES Y BIZCOCHOS EXTRA ---
  {
    id: 'online-yogurt-cake-123',
    title: 'Bizcocho de Yogur (Medida del Vaso)',
    category: RecipeCategory.CAKE,
    source: 'online',
    program: 8,
    programName: 'Pastel',
    time: '1:30 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '1', name: 'Yogur natural o limón' },
      { amount: '3', name: 'Huevos' },
      { amount: '1 vaso', name: 'Aceite de girasol' },
      { amount: '2 vasos', name: 'Azúcar' },
      { amount: '3 vasos', name: 'Harina de repostería' },
      { amount: '1 sobre', name: 'Levadura Química (Royal)' },
      { amount: '1 pizca', name: 'Sal' }
    ],
    steps: ['Mezcla todo. Programa 8. Un clásico infalible.']
  },
  {
    id: 'online-orange-cake',
    title: 'Bizcocho de Naranja Jugoso',
    category: RecipeCategory.CAKE,
    source: 'online',
    program: 8,
    programName: 'Pastel',
    time: '1:30 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '4', name: 'Huevos' },
      { amount: '150 g', name: 'Mantequilla derretida' },
      { amount: '200 g', name: 'Azúcar' },
      { amount: '100 ml', name: 'Zumo de naranja' },
      { amount: '1', name: 'Ralladura de naranja' },
      { amount: '350 g', name: 'Harina de repostería' },
      { amount: '1 sobre', name: 'Levadura Química' }
    ],
    steps: ['Bate huevos y azúcar antes. Programa 8.']
  },
  {
    id: 'online-torrijas-bread',
    title: 'Pan para Torrijas (Especial)',
    category: RecipeCategory.SWEET,
    source: 'online',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Leche' },
      { amount: '1', name: 'Huevo' },
      { amount: '50 g', name: 'Azúcar' },
      { amount: '1 pizca', name: 'Sal' },
      { amount: '25 g', name: 'Mantequilla' },
      { amount: '600 g', name: 'Harina de fuerza' },
      { amount: '1 sobre', name: 'Levadura seca' },
      { amount: '1 cdta', name: 'Canela' }
    ],
    steps: ['Pan denso ideal para empapar. Programa 4.']
  },
  {
    id: 'online-portuguese-brioche',
    title: 'Brioche Portugués',
    category: RecipeCategory.SWEET,
    source: 'online',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '100 ml', name: 'Leche' },
      { amount: '3', name: 'Huevos' },
      { amount: '100 g', name: 'Mantequilla' },
      { amount: '90 g', name: 'Azúcar' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 sobre', name: 'Levadura seca' },
      { amount: '1 chorrito', name: 'Agua de Azahar' }
    ],
    steps: ['Muy aromático. Programa 4.']
  },
  {
    id: 'online-magdalenas',
    title: 'Magdalenas (Masa)',
    category: RecipeCategory.CAKE,
    source: 'online',
    program: 9,
    programName: 'Amasar',
    time: '0:15 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '4', name: 'Huevos' },
      { amount: '250 g', name: 'Azúcar' },
      { amount: '250 ml', name: 'Aceite girasol' },
      { amount: '100 ml', name: 'Leche' },
      { amount: '350 g', name: 'Harina' },
      { amount: '1 sobre', name: 'Levadura Química' },
      { amount: '1', name: 'Ralladura limón' }
    ],
    steps: [
      'Programa 9 solo para mezclar la masa.',
      'Dejar reposar en nevera 1h, llenar moldes y hornear a 220°C.'
    ]
  },

  // --- OTROS FAVORITOS ---
  {
    id: 'online-super-fluffy-mold',
    title: 'Pan de Molde "Super Esponjoso"',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 2,
    programName: 'Esponjoso',
    time: '3:50 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '120 ml', name: 'Leche' },
      { amount: '120 ml', name: 'Agua' },
      { amount: '2', name: 'Huevos L' },
      { amount: '50 g', name: 'Mantequilla blanda' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '30 g', name: 'Azúcar' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['Tipo "Bimbo". Programa 2, tostado claro.']
  },
  {
    id: 'online-pan-viena',
    title: 'Pan de Viena',
    category: RecipeCategory.SWEET,
    source: 'online',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '250 ml', name: 'Leche tibia' },
      { amount: '1', name: 'Huevo' },
      { amount: '50 g', name: 'Mantequilla' },
      { amount: '50 g', name: 'Azúcar' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['Ideal meriendas. Programa 4.']
  },
  {
    id: 'online-integral-honey-nuts',
    title: 'Integral con Miel y Nueces',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'online',
    program: 3,
    programName: 'Integral',
    time: '3:40 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '3 cda', name: 'Miel' },
      { amount: '2 cda', name: 'Aceite o Mantequilla' },
      { amount: '500 g', name: 'Harina Integral' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '100 g', name: 'Nueces' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['Nueces al pitido. Programa 3.']
  },
  {
    id: 'online-baguette',
    title: 'Masa de Baguettes',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 10,
    programName: 'Masa',
    time: '1:40 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '10 g', name: 'Sal' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: [
      'Programa 10.',
      'Formar barras, dejar levar tapadas y hornear con vapor (bandeja con agua en el fondo del horno).'
    ]
  },
  {
    id: 'online-monkey-bread',
    title: 'Monkey Bread (Dulce de Bolitas)',
    category: RecipeCategory.SWEET,
    source: 'online',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '250 ml', name: 'Leche' },
      { amount: '50 g', name: 'Mantequilla' },
      { amount: '1', name: 'Huevo' },
      { amount: '500 g', name: 'Harina' },
      { amount: '50 g', name: 'Azúcar' },
      { amount: '1 sobre', name: 'Levadura' },
      { amount: 'Extra', name: 'Canela y Azúcar para rebozar' }
    ],
    steps: [
      'Se puede hacer todo en Programa 4, o sacar tras amasado, formar bolitas, rebozar en canela/azúcar, volver a meter y hornear.'
    ]
  },
  {
    id: 'online-reganas',
    title: 'Masa de Regañás (Picos)',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 11,
    programName: 'Masa para Pasta',
    time: '0:15 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '150 ml', name: 'Agua' },
      { amount: '50 ml', name: 'Aceite de oliva' },
      { amount: '350 g', name: 'Harina' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Sésamo (opcional)' },
      { amount: '1 cdta', name: 'Levadura seca' }
    ],
    steps: [
      'Programa 11 o 9 (Amasar).',
      'Estirar muy fino, cortar y hornear hasta que estén crujientes.'
    ]
  },
  
  // --- NUEVAS RECETAS EXTRA DE GUSTOSO PALADAR ---
  {
    id: 'online-arroz-con-leche',
    title: 'Arroz con Leche (Hack Mermelada)',
    category: RecipeCategory.SWEET,
    source: 'online',
    program: 14,
    programName: 'Mermelada',
    time: '1:20 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '1 litro', name: 'Leche entera' },
      { amount: '150 g', name: 'Arroz redondo' },
      { amount: '100 g', name: 'Azúcar' },
      { amount: '1 rama', name: 'Canela' },
      { amount: 'Piel', name: 'Limón' }
    ],
    steps: [
      'TRUCO FAMOSO: El programa mermelada calienta y remueve.',
      'Pon todo en la cubeta (sin aspas no removerá, así que déjalas puestas).',
      'Cuando termine, retira canela y limón y deja enfriar.',
      'Espesa al enfriar.'
    ]
  },
  {
    id: 'online-bechamel-croquetas',
    title: 'Masa de Croquetas (Hack Mermelada)',
    category: RecipeCategory.DOUGH,
    source: 'online',
    program: 14,
    programName: 'Mermelada',
    time: '1:20 h',
    imageId: NO_IMG,
    ingredients: [
      { amount: '1 litro', name: 'Leche' },
      { amount: '100 g', name: 'Mantequilla' },
      { amount: '100 g', name: 'Harina' },
      { amount: '150 g', name: 'Jamón/Pollo picado' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 pizca', name: 'Nuez moscada' }
    ],
    steps: [
      'Calienta la mantequilla un poco, añade harina y remueve (o haz el roux fuera).',
      'Echa todo a la cubeta. El programa Mermelada removerá y cocerá la bechamel sin que tengas que estar moviendo.',
      'Perfecto para masas de croquetas.'
    ]
  },
  {
    id: 'online-carrot-cake',
    title: 'Bizcocho de Zanahoria',
    category: RecipeCategory.CAKE,
    source: 'online',
    program: 8,
    programName: 'Pastel',
    time: '1:30 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '3', name: 'Huevos' },
      { amount: '150 g', name: 'Azúcar moreno' },
      { amount: '100 ml', name: 'Aceite' },
      { amount: '200 g', name: 'Zanahoria rallada' },
      { amount: '200 g', name: 'Harina' },
      { amount: '50 g', name: 'Nueces picadas' },
      { amount: '1 sobre', name: 'Levadura Química' },
      { amount: '1 cdta', name: 'Canela' }
    ],
    steps: ['Mezcla los líquidos con el azúcar, luego sólidos. Programa 8.']
  },
  {
    id: 'online-banana-bread',
    title: 'Banana Bread (Pan de Plátano)',
    category: RecipeCategory.CAKE,
    source: 'online',
    program: 8,
    programName: 'Pastel',
    time: '1:30 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '3', name: 'Plátanos maduros machacados' },
      { amount: '2', name: 'Huevos' },
      { amount: '100 g', name: 'Mantequilla derretida' },
      { amount: '150 g', name: 'Azúcar' },
      { amount: '250 g', name: 'Harina' },
      { amount: '1 cdta', name: 'Bicarbonato/Levadura química' },
      { amount: '1 pizca', name: 'Sal' },
      { amount: '50 g', name: 'Nueces (opcional)' }
    ],
    steps: ['Programa 8. Ideal para aprovechar plátanos pochos.']
  },
  {
    id: 'online-condensed-milk-bread',
    title: 'Pan de Leche Condensada',
    category: RecipeCategory.SWEET,
    source: 'online',
    program: 4,
    programName: 'Dulce',
    time: '2:55 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '180 ml', name: 'Agua tibia' },
      { amount: '180 g', name: 'Leche condensada' },
      { amount: '1', name: 'Huevo' },
      { amount: '30 g', name: 'Mantequilla' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 pizca', name: 'Sal' },
      { amount: '1 sobre', name: 'Levadura seca' }
    ],
    steps: ['Súper tierno y dulce. Programa 4.']
  },
  {
    id: 'online-onion-bread',
    title: 'Pan de Cebolla Frita',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '540 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 cdta', name: 'Azúcar' },
      { amount: '50 g', name: 'Cebolla frita crujiente (de bote)' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Añade la cebolla frita al pitido para que no se deshaga del todo.']
  },
  {
    id: 'online-olive-oregano',
    title: 'Pan de Aceitunas Negras',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '320 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite oliva' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '100 g', name: 'Aceitunas negras sin hueso' },
      { amount: '1 cda', name: 'Orégano' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Aceitunas escurridas y troceadas al pitido. Programa 1.']
  },
  {
    id: 'online-integral-seeds-100',
    title: 'Pan 100% Integral con Semillas',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'online',
    program: 3,
    programName: 'Integral',
    time: '3:40 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '400 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '600 g', name: 'Harina Integral de Trigo' },
      { amount: '1.5 cdta', name: 'Sal' },
      { amount: '1 cda', name: 'Miel (ayuda a la levadura)' },
      { amount: '50 g', name: 'Semillas variadas' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Usa Programa 3 que tiene más tiempo de levado para la harina integral.']
  },
  {
    id: 'online-spelt-honey',
    title: 'Pan de Espelta 100% y Miel',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'online',
    program: 3,
    programName: 'Integral',
    time: '3:40 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '350 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Aceite' },
      { amount: '500 g', name: 'Harina de Espelta Integral' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '2 cda', name: 'Miel' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['La espelta es más delicada, el programa Integral (3) va bien.']
  },
  {
    id: 'online-molde-integral-tierno',
    title: 'Pan de Molde Integral Tierno',
    category: RecipeCategory.WHOLE_WHEAT,
    source: 'online',
    program: 2,
    programName: 'Esponjoso',
    time: '3:50 h',
    browning: 'Claro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Leche tibia' },
      { amount: '50 g', name: 'Mantequilla' },
      { amount: '250 g', name: 'Harina de Fuerza' },
      { amount: '250 g', name: 'Harina Integral' },
      { amount: '20 g', name: 'Azúcar moreno' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Mezcla harinas para que quede tierno como el de bolsa pero más sano. Programa 2.']
  },
  {
    id: 'online-sobrasada-honey',
    title: 'Pan de Sobrasada y Miel',
    category: RecipeCategory.CLASSIC,
    source: 'online',
    program: 1,
    programName: 'Normal',
    time: '3:00 h',
    browning: 'Oscuro',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '300 ml', name: 'Agua' },
      { amount: '2 cda', name: 'Miel' },
      { amount: '1 cda', name: 'Aceite' },
      { amount: '500 g', name: 'Harina de fuerza' },
      { amount: '1 cdta', name: 'Sal' },
      { amount: '100 g', name: 'Sobrasada (trocitos)' },
      { amount: '1 paquete', name: 'Levadura seca' }
    ],
    steps: ['Sobrasada al pitido. El contraste dulce-salado es espectacular.']
  },
  {
    id: 'online-chocolate-walnut-cake',
    title: 'Bizcocho de Chocolate y Nueces',
    category: RecipeCategory.CAKE,
    source: 'online',
    program: 8,
    programName: 'Pastel',
    time: '1:30 h',
    browning: 'Medio',
    weight: '1000g',
    imageId: NO_IMG,
    ingredients: [
      { amount: '3', name: 'Huevos' },
      { amount: '1 yogur', name: 'Yogur natural' },
      { amount: '2 medidas yogur', name: 'Azúcar' },
      { amount: '1 medida yogur', name: 'Aceite' },
      { amount: '2 medidas yogur', name: 'Harina' },
      { amount: '1 medida yogur', name: 'Cacao en polvo' },
      { amount: '1 puñado', name: 'Nueces' },
      { amount: '1 sobre', name: 'Levadura Química' }
    ],
    steps: ['La medida es el vasito de yogur. Programa 8.']
  }
];