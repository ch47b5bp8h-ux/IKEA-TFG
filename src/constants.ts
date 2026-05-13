import { 
  Home, 
  Users, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  UserMinus, 
  RefreshCcw, 
  Sunset, 
  Baby, 
  UserPlus, 
  Globe, 
  Store 
} from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface Situation {
  id: string;
  title: string;
  description: string;
  icon: any;
  recommendations: Product[];
}

export const SITUATIONS: Situation[] = [
  {
    id: 'primer-piso',
    title: 'Primer piso solo',
    description: 'Todo lo esencial para empezar tu independencia con estilo y orden.',
    icon: Home,
    recommendations: [
      { id: 'pp-1', name: 'MALM Estructura de cama 90x200', price: 129, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-2', name: 'ÅBYGDA Colchón firme 90x200', price: 99, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-3', name: 'BILLY Librería blanca', price: 59, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594620302200-9a7622d4a13c?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-4', name: 'KALLAX Estantería 2x2', price: 39, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-5', name: 'LACK Mesa de centro 90x55', price: 20, category: 'Salón', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-6', name: 'POÄNG Sillón, chapa abedul', price: 89, category: 'Salón', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-7', name: 'FRIHETEN Sofá cama 3 plazas', price: 449, category: 'Salón', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-8', name: 'MICKE Escritorio 73x50', price: 69, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-9', name: 'LAMPAN Lámpara de pie', price: 20, category: 'Iluminación', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400' },
      { id: 'pp-10', name: 'FISKBO Marco de fotos (x3)', price: 9, category: 'Decoración', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'convivir-pareja',
    title: 'Me voy a vivir con mi pareja',
    description: 'Soluciones para dos que hacen la vida diaria más fácil y armoniosa.',
    icon: Users,
    recommendations: [
      { id: 'cp-1', name: 'MALM Estructura de cama 160x200', price: 229, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1505693419148-403bb22b9f11?auto=format&fit=crop&q=80&w=400' },
      { id: 'cp-2', name: 'HASVÅG Colchón firme 160x200', price: 179, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=400' },
      { id: 'cp-3', name: 'KIVIK Sofá 3 plazas, beige', price: 549, category: 'Salón', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400' },
      { id: 'cp-4', name: 'EKEDALEN Mesa extensible roble', price: 199, category: 'Comedor', image: 'https://images.unsplash.com/photo-1577140917170-28565298c0f3?auto=format&fit=crop&q=80&w=400' },
      { id: 'cp-5', name: 'EKEDALEN Silla tapizada x4', price: 220, category: 'Comedor', image: 'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&q=80&w=400' },
      { id: 'cp-6', name: 'PAX Armario 150x58x201', price: 310, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400' },
      { id: 'cp-7', name: 'HEMNES Cómoda 8 cajones', price: 229, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=400' },
      { id: 'cp-8', name: 'SYMFONISK Lámpara altavoz WiFi', price: 179, category: 'Tecnología', image: 'https://images.unsplash.com/photo-1620677368261-2675da73087b?auto=format&fit=crop&q=80&w=400' },
      { id: 'cp-9', name: 'SANELA Funda de cojín x2', price: 30, category: 'Decoración', image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'estudiante',
    title: 'Estudiante en otra ciudad',
    description: 'Espacios pequeños, grandes ideas para estudiar y descansar.',
    icon: GraduationCap,
    recommendations: [
      { id: 'es-1', name: 'MALM Estructura de cama 90x200', price: 129, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1505693419148-403bb22b9f11?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-2', name: 'MALFORS Colchón firme 90x200', price: 79, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1544126592-807daf215a32?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-3', name: 'MICKE Escritorio 73x50', price: 69, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-4', name: 'ALEX Cajonera con ruedas', price: 99, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1598048145816-3683709f7a77?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-5', name: 'KALLAX Estantería 2x2', price: 39, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-6', name: 'FLINTAN Silla escritorio', price: 99, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-7', name: 'LACK Mesa de centro 55x55', price: 15, category: 'Salón', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-8', name: 'SKÅDIS Tablero organización', price: 20, category: 'Organización', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-9', name: 'TERTIAL Flexo escritorio', price: 15, category: 'Iluminación', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb246?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'teletrabajo',
    title: 'Teletrabajo desde casa',
    description: 'Ergonomía y diseño para que tu oficina en casa sea productiva.',
    icon: Briefcase,
    recommendations: [
      { id: 'th-1', name: 'BEKANT Escritorio regulable', price: 449, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=400' },
      { id: 'th-2', name: 'MARKUS Silla ergonómica', price: 229, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=400' },
      { id: 'th-3', name: 'KALLAX Estantería 4x2', price: 69, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'th-4', name: 'ALEX Cajonera bajo escritorio', price: 99, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1598048145816-3683709f7a77?auto=format&fit=crop&q=80&w=400' },
      { id: 'th-5', name: 'SKÅDIS Tablero perforado + accs', price: 35, category: 'Organización', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400' },
      { id: 'th-6', name: 'NYMÅNE Lámpara escritorio USB', price: 49, category: 'Iluminación', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb246?auto=format&fit=crop&q=80&w=400' },
      { id: 'th-7', name: 'EILIF Panel separador', price: 39, category: 'Oficina', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' },
      { id: 'th-8', name: 'ELLOVEN Soporte monitor 34"', price: 199, category: 'Oficina', image: 'https://images.unsplash.com/photo-1527443195645-11ea35554b21?auto=format&fit=crop&q=80&w=400' },
      { id: 'th-9', name: 'STOPPELS Alfombrilla silla', price: 35, category: 'Oficina', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'nueva-ciudad',
    title: 'Nueva ciudad, nuevo trabajo',
    description: 'Empieza con buen pie en tu nuevo hogar con básicos funcionales.',
    icon: MapPin,
    recommendations: [
      { id: 'nc-1', name: 'MALM Estructura de cama 140x200', price: 169, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400' },
      { id: 'nc-2', name: 'ÅBYGDA Colchón firme 140x200', price: 149, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&q=80&w=400' },
      { id: 'nc-3', name: 'KALLAX Estantería 4x4', price: 99, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'nc-4', name: 'FRIHETEN Sofá cama visitas', price: 449, category: 'Salón', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'nc-5', name: 'HEMNES Mesita de noche', price: 89, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=400' },
      { id: 'nc-6', name: 'MICKE Escritorio 73x50', price: 69, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400' },
      { id: 'nc-7', name: 'FLINTAN Silla giratoria', price: 99, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=400' },
      { id: 'nc-8', name: 'FEJKA Planta artificial x2', price: 14, category: 'Decoración', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400' },
      { id: 'nc-9', name: 'BRÅKIG Funda nórdica', price: 29, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'empezar-cero',
    title: 'Me separo y empiezo de cero',
    description: 'Nuevos comienzos con soluciones que se adaptan a tu nueva libertad.',
    icon: UserMinus,
    recommendations: [
      { id: 'sz-1', name: 'MALM Estructura de cama 140x200', price: 169, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1505693419148-403bb22b9f11?auto=format&fit=crop&q=80&w=400' },
      { id: 'sz-2', name: 'HASVÅG Colchón firme 140x200', price: 149, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=400' },
      { id: 'sz-3', name: 'PAX Armario 100x58x201', price: 175, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400' },
      { id: 'sz-4', name: 'HEMNES Cómoda 6 cajones', price: 179, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=400' },
      { id: 'sz-5', name: 'KIVIK Sofá 2 plazas, beige', price: 399, category: 'Salón', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400' },
      { id: 'sz-6', name: 'BILLY Librería blanca', price: 59, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594620302200-9a7622d4a13c?auto=format&fit=crop&q=80&w=400' },
      { id: 'sz-7', name: 'POÄNG Sillón relajante', price: 89, category: 'Salón', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' },
      { id: 'sz-8', name: 'SYMFONISK Lámpara altavoz', price: 179, category: 'Tecnología', image: 'https://images.unsplash.com/photo-1620677368261-2675da73087b?auto=format&fit=crop&q=80&w=400' },
      { id: 'sz-9', name: 'ÄPPLARÖ Mesa extensible', price: 179, category: 'Exterior/Interior', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'reorganizo-casa',
    title: 'Mis hijos se van y reorganizo',
    description: 'Recupera tus espacios y dales un nuevo propósito de bienestar.',
    icon: RefreshCcw,
    recommendations: [
      { id: 'oz-1', name: 'HEMNES Escritorio 120x47', price: 229, category: 'Estudio', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400' },
      { id: 'oz-2', name: 'MARKUS Silla ergonómica, gris', price: 229, category: 'Oficina', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=400' },
      { id: 'oz-3', name: 'KALLAX Estantería 4x4', price: 99, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'oz-4', name: 'LANDSKRONA Sillón chaise longue', price: 649, category: 'Confort', image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80&w=400' },
      { id: 'oz-5', name: 'BILLY Vitrina alta', price: 129, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594620302200-9a7622d4a13c?auto=format&fit=crop&q=80&w=400' },
      { id: 'oz-6', name: 'SÖDERHAMN Sofá 3 plazas', price: 699, category: 'Salón', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=400' },
      { id: 'oz-7', name: 'HEMNES Cómoda 8 cajones', price: 229, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=400' },
      { id: 'oz-8', name: 'FEJKA Planta artificial x3', price: 21, category: 'Decoración', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400' },
      { id: 'oz-9', name: 'STOCKHOLM Alfombra beis', price: 399, category: 'Decoración', image: 'https://images.unsplash.com/photo-1534889156217-d34a09b4b4a3?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'jubilo',
    title: 'Me jubilo y rediseño',
    description: 'Es tu momento. Crea un refugio de confort para disfrutar el tiempo.',
    icon: Sunset,
    recommendations: [
      { id: 'jr-1', name: 'LANDSKRONA Sillón negro', price: 549, category: 'Confort', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' },
      { id: 'jr-2', name: 'POÄNG Mecedora chapa abedul', price: 109, category: 'Confort', image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80&w=400' },
      { id: 'jr-3', name: 'HEMNES Estantería TV blanco', price: 229, category: 'Salón', image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80&w=400' },
      { id: 'jr-4', name: 'SÄLLSKAP Lámpara arco', price: 89, category: 'Iluminación', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400' },
      { id: 'jr-5', name: 'SÖDERHAMN Sofá azul oscuro', price: 699, category: 'Salón', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=400' },
      { id: 'jr-6', name: 'MOPPE Minicajonera madera', price: 35, category: 'Hobby', image: 'https://images.unsplash.com/photo-1582035249491-f92576067083?auto=format&fit=crop&q=80&w=400' },
      { id: 'jr-7', name: 'STOCKHOLM Alfombra beis', price: 399, category: 'Decoración', image: 'https://images.unsplash.com/photo-1534889156217-d34a09b4b4a3?auto=format&fit=crop&q=80&w=400' },
      { id: 'jr-8', name: 'KUNGSBLOMMA Funda nórdica', price: 29, category: 'Textiles', image: 'https://images.unsplash.com/photo-1620330204733-4089851722e0?auto=format&fit=crop&q=80&w=400' },
      { id: 'jr-9', name: 'FEJKA Planta artificial x4', price: 28, category: 'Decoración', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'bebe',
    title: 'Tenemos un bebé',
    description: 'Seguridad y ternura para el miembro más pequeño de la familia.',
    icon: Baby,
    recommendations: [
      { id: 'ba-1', name: 'SUNDVIK Cuna/cama infantil', price: 119, category: 'Infantil', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400' },
      { id: 'ba-2', name: 'LENAST Colchón cuna', price: 59, category: 'Descanso', image: 'https://images.unsplash.com/photo-1620330204733-4089851722e0?auto=format&fit=crop&q=80&w=400' },
      { id: 'ba-3', name: 'SNIGLAR Cambiador haya', price: 49, category: 'Infantil', image: 'https://images.unsplash.com/photo-1632759162402-0e9e4293f064?auto=format&fit=crop&q=80&w=400' },
      { id: 'ba-4', name: 'KALLAX Estantería 2x4', price: 59, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'ba-5', name: 'POÄNG Sillón lactancia', price: 89, category: 'Confort', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400' },
      { id: 'ba-6', name: 'INGENUITET Hamaca balanceo', price: 89, category: 'Bebé', image: 'https://images.unsplash.com/photo-1544126592-807daf215a32?auto=format&fit=crop&q=80&w=400' },
      { id: 'ba-7', name: 'ANTILOP Trona con bandeja', price: 22, category: 'Alimentación', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=400' },
      { id: 'ba-8', name: 'STUVA Almacenaje infantil', price: 119, category: 'Organización', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400' },
      { id: 'ba-9', name: 'SMÅGÖRA Edredón cuna', price: 19, category: 'Textiles', image: 'https://images.unsplash.com/photo-1620332204733-4089851722e0?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'compartir-piso',
    title: 'Comparto piso por primera vez',
    description: 'Maximiza tu propio espacio con soluciones inteligentes y compactas.',
    icon: UserPlus,
    recommendations: [
      { id: 'sk-1', name: 'MALM Negro-marrón 90x200', price: 129, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1505693419148-403bb22b9f11?auto=format&fit=crop&q=80&w=400' },
      { id: 'sk-2', name: 'MALFORS Colchón firme 90x200', price: 79, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1544126592-807daf215a32?auto=format&fit=crop&q=80&w=400' },
      { id: 'sk-3', name: 'PAX Armario 100x58x201', price: 175, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400' },
      { id: 'sk-4', name: 'KALLAX Estantería 2x2', price: 39, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'sk-5', name: 'MICKE Escritorio blanco', price: 69, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400' },
      { id: 'sk-6', name: 'FLINTAN Silla giratoria gris', price: 99, category: 'Trabajo', image: 'https://images.unsplash.com/photo-1505793614006-2f638971f114?auto=format&fit=crop&q=80&w=400' },
      { id: 'sk-7', name: 'RASKOG Carrito auxiliar negro', price: 35, category: 'Organización', image: 'https://images.unsplash.com/photo-1591085686350-798c0f9faf7c?auto=format&fit=crop&q=80&w=400' },
      { id: 'sk-8', name: 'SKUBB Organizador armario', price: 10, category: 'Organización', image: 'https://images.unsplash.com/photo-1583942856240-3a6477533880?auto=format&fit=crop&q=80&w=400' },
      { id: 'sk-9', name: 'TERTIAL Flexo gris oscuro', price: 15, category: 'Iluminación', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb246?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'vuelvo-espana',
    title: 'Vuelvo a España',
    description: 'Bienvenido a casa. Te ayudamos a aterrizar y amueblar tu regreso.',
    icon: Globe,
    recommendations: [
      { id: 'es-re-1', name: 'MALM Estructura de cama 140x200', price: 169, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1505693419148-403bb22b9f11?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-re-2', name: 'ÅBYGDA Colchón firme 140x200', price: 149, category: 'Dormitorio', image: 'https://images.unsplash.com/photo-1544126592-807daf215a32?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-re-3', name: 'HEMNES Armario 3 puertas', price: 349, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-re-4', name: 'KALLAX Estantería 4x4', price: 99, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-re-5', name: 'KIVIK Sofá 3 plazas', price: 549, category: 'Salón', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-re-6', name: 'EKEDALEN Mesa extensible', price: 199, category: 'Comedor', image: 'https://images.unsplash.com/photo-1577140917170-28565298c0f3?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-re-7', name: 'EKEDALEN Silla x4', price: 220, category: 'Comedor', image: 'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-re-8', name: 'FEJKA Plantas artificiales x4', price: 28, category: 'Decoración', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400' },
      { id: 'es-re-9', name: 'STOCKHOLM Alfombra beis', price: 279, category: 'Decoración', image: 'https://images.unsplash.com/photo-1534889156217-d34a09b4b4a3?auto=format&fit=crop&q=80&w=400' }
    ]
  },
  {
    id: 'primer-negocio',
    title: 'Abro mi negocio o estudio',
    description: 'Funcionalidad profesional para que tu proyecto brille desde el día uno.',
    icon: Store,
    recommendations: [
      { id: 'bn-1', name: 'BEKANT Mesa reunión 140x140', price: 279, category: 'Oficina', image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=400' },
      { id: 'bn-2', name: 'MARKUS Silla ergonómica', price: 229, category: 'Oficina', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=400' },
      { id: 'bn-3', name: 'VILMAR Silla de visitas x4', price: 180, category: 'Oficina', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=400' },
      { id: 'bn-4', name: 'KALLAX Estantería 4x4', price: 99, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400' },
      { id: 'bn-5', name: 'ALEX Cajonera con cerradura', price: 99, category: 'Almacenaje', image: 'https://images.unsplash.com/photo-1598048145816-3683709f7a77?auto=format&fit=crop&q=80&w=400' },
      { id: 'bn-6', name: 'SKÅDIS Tablero perforado + accs', price: 35, category: 'Organización', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400' },
      { id: 'bn-7', name: 'NYMÅNE Lámpara de escritorio', price: 49, category: 'Iluminación', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb246?auto=format&fit=crop&q=80&w=400' },
      { id: 'bn-8', name: 'SYMFONISK Altavoz WiFi enmarcado', price: 169, category: 'Tecnología', image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&q=80&w=400' },
      { id: 'bn-9', name: 'EILIF Panel separador gris', price: 39, category: 'Oficina', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' }
    ]
  },
];
