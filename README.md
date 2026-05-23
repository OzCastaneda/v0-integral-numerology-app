# Numerologia Integral - App de Numerologia, Cabala y Tarot

Una aplicacion web completa de numerologia que integra las ensenanzas de la **Numerologia Pitagorica**, la **Cabala Hermetica** y el **Tarot** para ofrecer interpretaciones profundas y contextuales basadas en el nombre y fecha de nacimiento del usuario.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/oswaldo-castanedas-projects/v0-integral-numerology-app)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/NSairRhcq3J)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss)

## Caracteristicas Principales

### Calculadora Numerologica
- **Numero de Destino**: Calculado a partir de la fecha de nacimiento
- **Numero del Alma**: Derivado de las vocales del nombre completo
- **Numero de Personalidad**: Calculado con las consonantes del nombre
- **Numero de Expresion**: Suma total de todas las letras del nombre
- **Numero de Suerte**: Combinacion del destino y la expresion
- **Ano Personal**: Ciclo energetico del ano actual

### Interpretaciones Contextuales
Cada numero se interpreta de manera diferente segun su categoria:
- **Destino**: Mision de vida y proposito general
- **Motivacion/Alma**: Deseos internos y aspiraciones profundas
- **Personalidad**: Como te perciben los demas
- **Karma**: Lecciones karmicas y desafios
- **Nombre/Expresion**: Talentos y habilidades naturales

### Sistema de Numeros Maestros
Soporte completo para numeros maestros: **11**, **22**, **33** y **44**

### Correspondencias Avanzadas
- **Letras Hebreas**: Cada numero vinculado a su letra correspondiente
- **Sefirot**: Conexion con el Arbol de la Vida
- **Elementos**: Fuego, Agua, Aire, Tierra
- **Tikun**: Correccion espiritual asociada

### Seccion de Tarot
Los 22 Arcanos Mayores con:
- Correspondencias numerologicas
- Conexiones cabalisticas (letras hebreas)
- Correspondencias astrologicas
- Correspondencias corporales
- Bloqueos y problemas asociados
- Problemas de salud
- Palabras clave
- Mensaje espiritual

### Secciones Educativas
- **Numerologia Pitagorica**: Historia y fundamentos
- **Cabala Hermetica**: Arbol de la Vida y Sefirot
- **Astrologia Cabalistica**: Los 12 signos desde la perspectiva cabalistica

## Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| **Next.js 14** | Framework React con App Router |
| **TypeScript** | Tipado estatico |
| **Tailwind CSS 4** | Estilos y diseno responsivo |
| **shadcn/ui** | Componentes UI accesibles |
| **Radix UI** | Primitivos de componentes |
| **Supabase** | Backend y autenticacion (opcional) |
| **jsPDF** | Generacion de reportes PDF |
| **Lucide React** | Iconos |
| **Recharts** | Graficos y visualizaciones |

## Estructura del Proyecto

```
v0-integral-numerology-app/
├── app/
│   ├── page.tsx                 # Pagina principal - Calculadora
│   ├── layout.tsx               # Layout raiz con metadata
│   ├── astrologia/
│   │   └── page.tsx             # Astrologia Cabalistica
│   ├── cabala/
│   │   └── page.tsx             # Cabala Hermetica
│   ├── pitagorica/
│   │   └── page.tsx             # Numerologia Pitagorica
│   ├── tarot/
│   │   └── page.tsx             # Arcanos Mayores del Tarot
│   └── api/
│       └── generate-pdf/
│           └── route.ts         # API para generar PDF
├── components/
│   ├── ui/                      # Componentes shadcn/ui
│   ├── numerology-form.tsx      # Formulario de entrada
│   ├── numerology-results.tsx   # Visualizacion de resultados
│   ├── navigation.tsx           # Navegacion principal
│   ├── mystical-header.tsx      # Header con efectos misticos
│   ├── mystical-footer.tsx      # Footer de la app
│   ├── mystical-background.tsx  # Fondo animado
│   ├── mystical-orb.tsx         # Orbe decorativo animado
│   ├── floating-symbols.tsx     # Simbolos flotantes
│   ├── sacred-symbols.tsx       # Simbolos sagrados (Metatron, etc)
│   └── theme-provider.tsx       # Proveedor de tema dark/light
├── lib/
│   ├── numerology-calculations.ts    # Funciones de calculo
│   ├── numerology-constants.ts       # Significados de numeros 1-9, maestros
│   ├── numerology-interpretations.ts # Interpretaciones contextuales
│   ├── numerology-extended.ts        # Datos extendidos
│   ├── astrology-kabbalah.ts         # Correspondencias zodiacales
│   ├── pdf-generator.ts              # Generador de reportes PDF
│   ├── getNumberIcon.tsx             # Iconos por numero
│   ├── utils.ts                      # Utilidades (cn, etc)
│   └── supabase/
│       ├── client.ts                 # Cliente Supabase (browser)
│       └── server.ts                 # Cliente Supabase (server)
└── docs/
    └── ARCHITECTURE.md               # Documentacion tecnica
```

## Instalacion

### Prerrequisitos
- Node.js 18+
- pnpm (recomendado) o npm

### Pasos de Instalacion

1. **Clonar el repositorio**
```bash
git clone https://github.com/OzCastaneda/v0-integral-numerology-app.git
cd v0-integral-numerology-app
```

2. **Instalar dependencias**
```bash
pnpm install
```

3. **Configurar variables de entorno** (opcional para Supabase)
```bash
cp .env.example .env.local
```

Editar `.env.local` con tus credenciales de Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=tu-url-de-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

4. **Ejecutar en modo desarrollo**
```bash
pnpm dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## Uso de la Aplicacion

### Calculo Numerologico
1. Ingresa tu **nombre completo** (como aparece en tu acta de nacimiento)
2. Selecciona tu **fecha de nacimiento**
3. Haz clic en **"Calcular Mi Numerologia"**
4. Explora los resultados en las pestanas: **Resumen**, **Analisis** y **Ciclos**

### Pestanas de Resultados

#### Resumen
Vista general de todos tus numeros principales con:
- Numero y titulo
- Descripcion breve
- Palabras clave
- Elemento y color asociado

#### Analisis
Interpretacion profunda de cada numero con:
- Significado contextual segun la categoria
- Fortalezas y debilidades
- Aprendizajes karmicos
- Desafio de vida
- Carreras afines
- Compatibilidades numericas
- Correspondencias cabalisticas (letra hebrea, sefirot, tikun)

#### Ciclos
Informacion sobre tu ano personal y ciclos temporales.

### Generacion de PDF
Desde la seccion de resultados, puedes generar un **reporte PDF completo** con toda tu informacion numerologica.

## Sistema de Calculo

### Tabla de Valores Pitagoricos
```
A=1  B=2  C=3  D=4  E=5  F=6  G=7  H=8  I=9
J=1  K=2  L=3  M=4  N=5  O=6  P=7  Q=8  R=9
S=1  T=2  U=3  V=4  W=5  X=6  Y=7  Z=8
```

### Formulas de Calculo

| Numero | Formula |
|--------|---------|
| **Destino** | Suma de dia + mes + ano de nacimiento, reducido |
| **Alma** | Suma de vocales (A, E, I, O, U) del nombre |
| **Personalidad** | Suma de consonantes del nombre |
| **Expresion** | Suma de todas las letras del nombre |
| **Suerte** | Destino + Expresion, reducido |
| **Ano Personal** | Ano actual + mes + dia de nacimiento |

### Reduccion Numerica
Todos los numeros se reducen a un digito (1-9) **excepto** los numeros maestros: **11**, **22**, **33**, **44**.

## Fuentes y Referencias

Esta aplicacion esta basada en las ensenanzas de:

- **Montserrat Celard** - "Tratado Integral de Numerologia: Esencia, Destino y Simbolismo Letrado"
- **Rav Philip S. Berg** - Cabala y Astrologia segun el Centro de Cabala
- **Tradicion Pitagorica** - Sistema numerologico clasico
- **Tarot de Marsella** - Correspondencias de los Arcanos Mayores

## API Endpoints

### POST `/api/generate-pdf`
Genera un reporte PDF con los resultados numerologicos.

**Request Body:**
```json
{
  "results": {
    "destiny": 7,
    "soul": 3,
    "personality": 4,
    "expression": 7,
    "luck": 5,
    "karma": 4,
    "personalYear": 9
  },
  "userData": {
    "fullName": "Juan Perez",
    "birthDate": "1990-05-15"
  }
}
```

**Response:** Archivo PDF descargable

## Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Deployment

Tu proyecto esta desplegado en:

**[https://vercel.com/oswaldo-castanedas-projects/v0-integral-numerology-app](https://vercel.com/oswaldo-castanedas-projects/v0-integral-numerology-app)**

Continua construyendo tu app en:

**[https://v0.app/chat/projects/NSairRhcq3J](https://v0.app/chat/projects/NSairRhcq3J)**

## Licencia

Este proyecto esta bajo la Licencia MIT. Ver el archivo `LICENSE` para mas detalles.

---

Hecho con amor y numeros sagrados
