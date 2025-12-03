import { Wrench, ChefHat, Thermometer, Droplets, Zap, ShieldAlert, Snowflake, Timer, Eye, ShoppingBag, Volume2, Recycle, Wind } from 'lucide-react';

export interface Hack {
  id: string;
  title: string;
  category: 'Mecánica' | 'Ingredientes' | 'Limpieza' | 'Experto' | 'Conservación';
  icon: any;
  content: string;
  color: string;
}

export const hacks: Hack[] = [
  // --- EXISTING HACKS ---
  {
    id: 'remove-blades',
    title: 'El Truco de las Aspas (Adiós agujeros)',
    category: 'Mecánica',
    icon: Wrench,
    color: 'bg-blue-100 text-blue-600',
    content: "Es el 'Hack' más famoso. Si odias que el pan salga con dos agujeros grandes abajo: Espera al último amasado (justo antes de empezar el levado final, suele coincidir con el tercer pitido en muchos programas). Abre la tapa, saca la masa un segundo, retira las aspas de los ejes y devuelve la masa acomodándola bien. El pan saldrá casi liso."
  },
  {
    id: 'sticking-bread',
    title: '¿Pan pegado a las aspas?',
    category: 'Limpieza',
    icon: Droplets,
    color: 'bg-amber-100 text-amber-600',
    content: "Si al sacar el pan las aspas se quedan incrustadas dentro y cuesta horrores sacarlas (o arrancan medio pan): Antes de echar los ingredientes, unta los ejes de metal y el agujero de las aspas con un poco de mantequilla o aceite. Esto crea una película que facilita enormemente la extracción posterior."
  },
  {
    id: 'sunk-bread',
    title: 'El Pan se hunde por el centro',
    category: 'Ingredientes',
    icon: ShieldAlert,
    color: 'bg-red-100 text-red-600',
    content: "Si tu pan sube mucho y luego colapsa haciendo un cráter: 1) Demasiada levadura (baja 1-2 gramos). 2) Demasiada agua (quita 10-20ml). 3) Agua demasiado caliente (mata la levadura antes de tiempo). 4) Has abierto la tapa durante el levado (¡Prohibido abrir la tapa a partir de la mitad del programa!)."
  },
  {
    id: 'cleaning-bucket',
    title: 'Cuidado prohibido de la Cubeta',
    category: 'Limpieza',
    icon: ShieldAlert,
    color: 'bg-orange-100 text-orange-600',
    content: "NUNCA sumerjas la cubeta entera en agua. La parte inferior exterior tiene los mecanismos de giro y grasa especial. Si entra agua ahí, se oxidará y la cubeta se gripará o empezará a chirriar. Limpia el interior con agua y jabón suave, pero el exterior solo con un paño húmedo."
  },
  {
    id: 'warm-keeping',
    title: 'Evita el "Mantener Caliente"',
    category: 'Experto',
    icon: Thermometer,
    color: 'bg-purple-100 text-purple-600',
    content: "Aunque la máquina tiene una función de mantener caliente 60 min tras acabar, NO LA USES si buscas corteza crujiente. Ese calor residual genera condensación y humedad, ablandando la corteza. Saca el pan inmediatamente al terminar y déjalo enfriar en una rejilla."
  },
  {
    id: 'flour-strength',
    title: 'La regla de la Fuerza (W)',
    category: 'Ingredientes',
    icon: ChefHat,
    color: 'bg-green-100 text-green-600',
    content: "La Silvercrest amasa bien, pero necesita la harina correcta. Para panes normales (Programa 1, 2, 3) usa SIEMPRE Harina de Fuerza (más de 11-12% de proteína). La harina 'común' o de repostería no tiene suficiente gluten para aguantar un levado tan largo y el pan saldrá denso o hundido."
  },
  {
    id: 'yeast-salt',
    title: 'La Guerra Fría: Levadura vs Sal',
    category: 'Ingredientes',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-600',
    content: "Al poner los ingredientes, nunca dejes que la levadura toque la sal directamente, o la matará. Haz una montaña con la harina: haz un hueco en la cima para la levadura y pon la sal en una esquina del 'valle', lejos del centro. El agua va siempre abajo del todo."
  },
  {
    id: 'crispy-crust',
    title: 'Corteza Extra Crujiente',
    category: 'Experto',
    icon: Thermometer,
    color: 'bg-indigo-100 text-indigo-600',
    content: "Si incluso en tostado 'Oscuro' te parece poco: 10 minutos antes de que acabe el programa, pincela la parte superior del pan con un poco de agua salada o leche. Y si quieres semillas que se peguen, hazlo justo al inicio del horneado (aprox a falta de 50-60 min del final)."
  },

  // --- NEW HACKS (20 added) ---
  {
    id: 'yeast-conversion',
    title: 'Regla de Oro: Levadura Fresca vs Seca',
    category: 'Ingredientes',
    icon: Recycle,
    color: 'bg-teal-100 text-teal-600',
    content: "La proporción es 3 a 1. Si una receta pide 7g de levadura seca (un sobrecito), equivale a unos 20-25g de levadura fresca (un cubito del súper). OJO: La fresca debes desmenuzarla o disolverla en el líquido tibio; la seca va directa."
  },
  {
    id: 'program-15-save',
    title: 'El Salvavidas: Programa 15 (Hornear)',
    category: 'Experto',
    icon: ShieldAlert,
    color: 'bg-rose-100 text-rose-600',
    content: "¿Ha terminado el programa y ves el pan pálido o crudo por dentro? ¡No entres en pánico! No saques el pan. Selecciona el Programa 15 (Hornear) y ponlo 10-20 minutos extra. Este programa solo hornea, sin amasar, perfecto para rematar panes rebeldes."
  },
  {
    id: 'lidl-premixes',
    title: 'Premezclas del Lidl: El Error Común',
    category: 'Ingredientes',
    icon: ShoppingBag,
    color: 'bg-blue-100 text-blue-800',
    content: "Las harinas preparadas del Lidl (Ciabatta, Girasol, Rustico...) ya llevan levadura y sal. NO añadas más. Y muy importante: Aunque ponga 'Ciabatta', NO uses el programa Exprés. Usa siempre el Programa 1 (Normal) o el 3 (Integral) para dar tiempo a esa levadura deshidratada a activarse bien."
  },
  {
    id: 'soft-crust-cloth',
    title: '¿Quieres corteza tierna?',
    category: 'Conservación',
    icon: Wind,
    color: 'bg-gray-100 text-gray-600',
    content: "Si el pan te sale con la corteza muy dura y lo prefieres tipo bimbo: Nada más sacarlo caliente de la cubeta, envuélvelo inmediatamente en un paño de cocina limpio de algodón. El propio vapor que suelta ablandará la corteza mientras se enfría."
  },
  {
    id: 'windowpane-test',
    title: 'La Prueba de la Membrana',
    category: 'Experto',
    icon: Eye,
    color: 'bg-emerald-100 text-emerald-600',
    content: "¿Está bien amasado? Arranca un trocito de masa. Estíralo suavemente con los dedos. Si consigues que se haga una telilla fina casi transparente sin romperse (como un chicle), el gluten está perfecto. Si se rompe enseguida, le falta amasado."
  },
  {
    id: 'rainy-days',
    title: 'Días de Lluvia = Menos Agua',
    category: 'Ingredientes',
    icon: Droplets,
    color: 'bg-sky-100 text-sky-600',
    content: "La harina es higroscópica (absorbe humedad del ambiente). En días muy lluviosos o húmedos, tu harina ya tiene agua dentro. Reduce el líquido de la receta unos 10-20ml o añade una cucharada extra de harina si ves la masa muy pegajosa durante el amasado."
  },
  {
    id: 'vibration-walking',
    title: 'La Máquina que "Camina"',
    category: 'Mecánica',
    icon: Volume2,
    color: 'bg-zinc-100 text-zinc-600',
    content: "Al amasar bolas de masa dura (como pasta o pan denso), la SBB 850 puede vibrar tanto que se mueve por la encimera. Peligro de suicidio. Pon debajo una alfombrilla de ratón vieja o un trapo antideslizante para amortiguar el ruido y evitar que se caiga al suelo."
  },
  {
    id: 'sweet-bread-burn',
    title: 'Panes Dulces = Tostado Claro',
    category: 'Experto',
    icon: Flame,
    color: 'bg-orange-100 text-orange-600',
    content: "El azúcar y la leche se caramelizan y queman mucho más rápido que el agua y harina. Si haces Brioche, Roscón o Pan de Leche, pon SIEMPRE el tostado en 'CLARO' (o Medio máximo). Si pones Oscuro, tendrás una corteza negra y amarga."
  },
  {
    id: 'power-outage',
    title: 'Memoria de Apagón (10 min)',
    category: 'Mecánica',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-600',
    content: "Si se va la luz o desenchufas sin querer, la SBB 850 E1 tiene una memoria de unos 10-15 minutos. Si vuelve la luz rápido, seguirá por donde iba. Si pasa más tiempo, se resetea y tendrás que tirar la masa o intentar salvarla horneándola en el horno convencional."
  },
  {
    id: 'ingredients-beep',
    title: '¿Cuándo echar nueces/chocolate?',
    category: 'Ingredientes',
    icon: Timer,
    color: 'bg-pink-100 text-pink-600',
    content: "Nunca eches tropezones (nueces, pasas, chips de choco) al principio. El amasado largo los triturará y desaparecerán. Espera al PITIDO (suele ser tras el segundo amasado). La máquina pitará 10 veces seguidas. Ese es el momento."
  },
  {
    id: 'freezing-slices',
    title: 'Congelar en Rebanadas',
    category: 'Conservación',
    icon: Snowflake,
    color: 'bg-cyan-100 text-cyan-600',
    content: "El pan casero no tiene conservantes y se pone duro en 2-3 días. El mejor truco: Córtalo todo en rebanadas el primer día (cuando esté frío), mételas en una bolsa zip y al congelador. Saca rebanadas directas a la tostadora y parecerá recién hecho cada mañana."
  },
  {
    id: 'milk-vs-water',
    title: 'Sustituir Agua por Leche',
    category: 'Ingredientes',
    icon: Droplets,
    color: 'bg-indigo-100 text-indigo-600',
    content: "Casi cualquier receta de pan básico mejora si sustituyes la mitad o todo el agua por leche. La grasa de la leche suaviza la miga, la hace más blanca y tierna, y la corteza queda más dorada. Ideal para niños."
  },
  {
    id: 'slashing-dough',
    title: 'El Greñado (Cortes Decorativos)',
    category: 'Experto',
    icon: Wrench,
    color: 'bg-stone-100 text-stone-600',
    content: "Si quieres que el pan abra bonito por arriba: Justo antes de que empiece a hornear (mira los tiempos, suele ser la última hora), abre rápido, humedece la superficie y haz cortes rápidos con una cuchilla de afeitar o cuchillo muy afilado. Cierra rápido para no perder calor."
  },
  {
    id: 'temperature-ingredients',
    title: 'Ingredientes Templados',
    category: 'Ingredientes',
    icon: Thermometer,
    color: 'bg-red-50 text-red-500',
    content: "A la levadura no le gusta el frío de la nevera. Saca los huevos y la mantequilla 30 min antes. Si usas agua/leche tibia (no quemando), el levado será mucho más rápido y efectivo, especialmente en invierno."
  },
  {
    id: 'storage-bag',
    title: 'Tela vs Plástico',
    category: 'Conservación',
    icon: ShoppingBag,
    color: 'bg-lime-100 text-lime-700',
    content: "Si quieres mantener la corteza crujiente: Bolsa de TELA o papel (dura 1-2 días). Si prefieres que se mantenga blando aunque la corteza se ponga chiclosa: Bolsa de PLÁSTICO hermética (dura 3-4 días)."
  },
  {
    id: 'bakery-glaze',
    title: 'Brillo de Panadería',
    category: 'Experto',
    icon: Sparkles,
    color: 'bg-amber-50 text-amber-600',
    content: "Para que el brioche o pan dulce brille: Bate un huevo con una pizca de sal y azúcar. A falta de 15 minutos para terminar el horneado, abre rápido y pincela la parte superior. Cierra. Quedará dorado y brillante profesional."
  },
  {
    id: 'cleaning-coil',
    title: 'Olor a Quemado',
    category: 'Limpieza',
    icon: ShieldAlert,
    color: 'bg-gray-200 text-gray-700',
    content: "A veces caen ingredientes fuera de la cubeta sobre la resistencia inferior. Al calentarse, olerá a humo. Espera a que se enfríe totalmente y limpia la resistencia y el fondo con un paño húmedo (sin jabón corrosivo). Es vital mantener el interior limpio."
  },
  {
    id: 'sourdough-hack',
    title: 'Masa Madre en Máquina',
    category: 'Experto',
    icon: ChefHat,
    color: 'bg-green-50 text-green-700',
    content: "La Silvercrest tiene tiempos de levado cortos para masa madre real. TRUCO: Usa el programa 9 o 10 para amasar. Luego APAGA la máquina. Deja la masa dentro fermentando 4-6 horas (la máquina aísla bien). Cuando haya subido, pon Programa 15 (Hornear) 60 min."
  },
  {
    id: 'rescue-wet-dough',
    title: 'Masa demasiado líquida (El chicle)',
    category: 'Mecánica',
    icon: HelpingHand,
    color: 'bg-blue-50 text-blue-600',
    content: "Si durante el amasado ves que la masa es una papilla que no forma bola: Añade harina cucharada a cucharada mientras se mueve. Espera a que se integre antes de echar más. Debe formarse una bola que se despegue de las paredes pero se pegue un poco al dedo."
  },
  {
    id: 'peek-light',
    title: 'No abras, ¡Ilumina!',
    category: 'Experto',
    icon: Eye,
    color: 'bg-violet-100 text-violet-600',
    content: "Cada vez que abres la tapa durante el horneado o levado, pierdes calor y el pan puede bajarse. Usa una linterna (o la del móvil) pegada al cristal de la ventanilla para ver cómo va sin tener que abrir la tapa."
  }
];

// Helper icon import (Sparkles and HelpingHand were missing in imports above, added them locally here for the content string logic)
import { Sparkles, HelpingHand, Flame } from 'lucide-react';
