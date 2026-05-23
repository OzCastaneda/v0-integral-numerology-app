# Arquitectura Tecnica - Numerologia Integral

Este documento describe la arquitectura tecnica de la aplicacion de Numerologia Integral.

## Indice

1. [Vision General](#vision-general)
2. [Stack Tecnologico](#stack-tecnologico)
3. [Arquitectura de Componentes](#arquitectura-de-componentes)
4. [Flujo de Datos](#flujo-de-datos)
5. [Sistema de Calculos](#sistema-de-calculos)
6. [Sistema de Interpretaciones](#sistema-de-interpretaciones)
7. [Generacion de PDF](#generacion-de-pdf)
8. [Estilos y Tema](#estilos-y-tema)

---

## Vision General

La aplicacion sigue una arquitectura de **cliente-primero** con Next.js App Router, donde la mayoria de los calculos se realizan en el cliente para una experiencia instantanea. Los datos estaticos de interpretaciones se cargan desde modulos TypeScript optimizados.

```
┌─────────────────────────────────────────────────────────────┐
│                      CLIENTE (Browser)                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  Formulario │──│  Calculos   │──│  Resultados │         │
│  │   (Form)    │  │   (lib/)    │  │   (View)    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│         │                │                │                  │
│         ▼                ▼                ▼                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Estado Local (useState)                 │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      SERVIDOR (API)                          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │  /api/generate- │  │    Supabase     │                   │
│  │      pdf        │  │   (opcional)    │                   │
│  └─────────────────┘  └─────────────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Stack Tecnologico

### Frontend
| Tecnologia | Version | Proposito |
|------------|---------|-----------|
| Next.js | 14.2 | Framework React con App Router |
| React | 18.x | Biblioteca UI |
| TypeScript | 5.x | Tipado estatico |
| Tailwind CSS | 4.x | Estilos utilitarios |
| shadcn/ui | latest | Componentes UI |
| Radix UI | latest | Primitivos accesibles |

### Librerias Adicionales
| Libreria | Proposito |
|----------|-----------|
| jsPDF | Generacion de reportes PDF |
| Lucide React | Sistema de iconos |
| Recharts | Graficos y visualizaciones |
| date-fns | Manipulacion de fechas |
| zod | Validacion de esquemas |
| react-hook-form | Manejo de formularios |

### Backend (Opcional)
| Tecnologia | Proposito |
|------------|-----------|
| Supabase | Base de datos y autenticacion |
| Vercel | Hosting y serverless functions |

---

## Arquitectura de Componentes

### Jerarquia de Componentes

```
app/layout.tsx
├── ThemeProvider
│   └── Navigation
│       └── app/page.tsx (Home)
│           ├── NumerologyForm
│           │   └── Form inputs (shadcn/ui)
│           └── NumerologyResults
│               ├── Tabs (Resumen, Analisis, Ciclos)
│               ├── NumberCard (x6)
│               └── PDF Download Button
│
├── app/tarot/page.tsx
│   └── MAJOR_ARCANA cards (x22)
│
├── app/cabala/page.tsx
│   └── Sephiroth & Hebrew Letters info
│
├── app/pitagorica/page.tsx
│   └── Pythagorean system explanation
│
└── app/astrologia/page.tsx
    └── ZODIAC_KABBALAH cards (x12)
```

### Componentes Principales

#### `NumerologyForm`
```typescript
interface NumerologyFormProps {
  onSubmit: (data: UserData) => void
  isLoading: boolean
}

interface UserData {
  fullName: string
  birthDate: string
}
```

Responsabilidades:
- Captura nombre completo y fecha de nacimiento
- Validacion de entrada
- Feedback visual de carga

#### `NumerologyResults`
```typescript
interface NumerologyResultsProps {
  results: NumerologyResult
  userData: UserData
  onNewReading: () => void
}

interface NumerologyResult {
  destiny: number
  soul: number
  personality: number
  expression: number
  luck: number
  karma: number
  personalYear: number
}
```

Responsabilidades:
- Visualizacion de todos los numeros calculados
- Tabs para diferentes vistas (Resumen, Analisis, Ciclos)
- Integracion con interpretaciones contextuales
- Boton para generar PDF

#### `NumberCard`
```typescript
interface NumberCardProps {
  title: string
  number: number
  description: string
  type: string
  category?: NumerologyCategory
}
```

Responsabilidades:
- Muestra un numero individual con su significado
- Integra interpretaciones contextuales del PDF
- Muestra fortalezas, debilidades, aprendizajes karmicos

---

## Flujo de Datos

### 1. Entrada de Usuario
```
Usuario ingresa nombre + fecha
         │
         ▼
┌─────────────────────┐
│   NumerologyForm    │
│  - Validacion       │
│  - Estado loading   │
└─────────────────────┘
         │
         ▼
    handleFormSubmit()
```

### 2. Calculos
```
calculateNumerology(fullName, birthDate)
         │
         ├── calculateDestiny(birthDate)
         ├── calculateSoul(fullName)
         ├── calculatePersonality(fullName)
         ├── calculateExpression(fullName)
         ├── calculateLuck(destiny, expression)
         ├── calculateKarma(fullName)
         └── calculatePersonalYear(birthDate)
         │
         ▼
    NumerologyResult
```

### 3. Interpretaciones
```
NumerologyResult
         │
         ▼
┌─────────────────────────────────────┐
│  Para cada numero:                   │
│  1. NUMBER_MEANINGS[n]              │ ← Significados base
│  2. getContextualInterpretation(n)  │ ← Interpretaciones PDF
└─────────────────────────────────────┘
         │
         ▼
    Vista completa con fortalezas,
    debilidades, karma, carreras, etc.
```

---

## Sistema de Calculos

### Archivo: `lib/numerology-calculations.ts`

#### Tabla de Valores
```typescript
export const LETTER_VALUES = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
}
```

#### Reduccion Numerica
```typescript
export function reduceNumber(num: number): number {
  while (num > 9 && !MASTER_NUMBERS.includes(num)) {
    num = num.toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0)
  }
  return num
}
```

#### Numeros Maestros
Los numeros 11, 22, 33, 44 no se reducen y mantienen su valor especial.

---

## Sistema de Interpretaciones

### Archivo: `lib/numerology-constants.ts`
Contiene los significados base para cada numero (1-9, 11, 22, 33):
- Titulo y descripcion
- Palabras clave
- Color y elemento
- Letra hebrea y Sefirot
- Significado espiritual
- Tikun (correccion)
- Leccion de vida
- Numeros compuestos

### Archivo: `lib/numerology-interpretations.ts`
Contiene interpretaciones contextuales segun la categoria:

```typescript
type NumerologyCategory = 
  | "destino" 
  | "motivacion" 
  | "karma" 
  | "personalidad" 
  | "nombre" 
  | "dia"

interface ContextualInterpretation {
  numero: number
  categoria: NumerologyCategory
  significado: string
  fortalezas: string[]
  debilidades: string[]
  aprendizajesKarmicos: string[]
  energiaEspiritual: string
  compatibilidades: string[]
  carrera: string[]
  relaciones: string
  desafioVida: string
  tendenciasOcultas?: string
}
```

### Funcion Principal
```typescript
export function getContextualInterpretation(
  number: number, 
  category: NumerologyCategory
): ContextualInterpretation | null
```

---

## Generacion de PDF

### Archivo: `lib/pdf-generator.ts`

Utiliza **jsPDF** para generar reportes descargables.

### Estructura del PDF
1. **Portada**
   - Titulo: "Analisis Numerologico Integral"
   - Nombre del usuario
   - Fecha de nacimiento

2. **Resumen de Numeros**
   - Tabla con todos los numeros calculados
   - Significado breve de cada uno

3. **Analisis Detallado**
   - Interpretacion completa de cada numero
   - Fortalezas y debilidades
   - Correspondencias cabalisticas

4. **Correspondencias**
   - Letras hebreas
   - Sefirot
   - Elementos

### API Endpoint
```typescript
// app/api/generate-pdf/route.ts
export async function POST(request: Request) {
  const { results, userData } = await request.json()
  const pdfBlob = generateNumerologyPDF(results, userData)
  return new Response(pdfBlob, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="numerologia.pdf"'
    }
  })
}
```

---

## Estilos y Tema

### Sistema de Colores
```css
/* globals.css - Design Tokens */
--background: oklch(0.13 0.02 280);
--foreground: oklch(0.95 0.01 280);
--primary: oklch(0.75 0.15 85);      /* Dorado */
--accent: oklch(0.55 0.2 280);       /* Purpura */
--card: oklch(0.18 0.02 280);
--muted: oklch(0.35 0.02 280);
```

### Tema Mistico
La aplicacion usa un tema oscuro con acentos dorados y purpuras, evocando misticismo y espiritualidad:

- **Fondo**: Negro/azul muy oscuro
- **Texto**: Blanco/gris claro
- **Acentos**: Dorado (primary) y purpura (accent)
- **Efectos**: Gradientes, blur, sombras suaves

### Componentes Decorativos
- `MysticalBackground`: Fondo con particulas animadas
- `FloatingSymbols`: Simbolos sagrados flotantes
- `MetatronsCube`: Cubo de Metatron SVG animado
- `SacredStar`: Estrella de David SVG
- `MysticalOrb`: Orbe brillante decorativo

---

## Extensibilidad

### Agregar Nuevo Numero Maestro
1. Agregar a `MASTER_NUMBERS` en `numerology-constants.ts`
2. Agregar significado en `NUMBER_MEANINGS`
3. Agregar interpretaciones en `numerology-interpretations.ts`

### Agregar Nueva Categoria de Interpretacion
1. Extender tipo `NumerologyCategory`
2. Agregar datos en `CONTEXTUAL_INTERPRETATIONS`
3. Actualizar componentes de visualizacion

### Agregar Nuevo Arcano
1. Agregar objeto en `MAJOR_ARCANA` (tarot/page.tsx)
2. Incluir todas las correspondencias requeridas

---

## Testing

### Validacion de Calculos
```typescript
// Ejemplo de test
describe('reduceNumber', () => {
  it('reduces 29 to 11 (master number)', () => {
    expect(reduceNumber(29)).toBe(11)
  })
  
  it('reduces 28 to 1', () => {
    expect(reduceNumber(28)).toBe(1)
  })
})
```

### Validacion de Interpretaciones
```typescript
describe('getContextualInterpretation', () => {
  it('returns correct interpretation for destiny 7', () => {
    const result = getContextualInterpretation(7, 'destino')
    expect(result?.fortalezas).toContain('Sabiduria profunda')
  })
})
```

---

## Performance

### Optimizaciones Implementadas
1. **Calculos en cliente**: Sin latencia de red
2. **Datos estaticos**: Interpretaciones cargadas desde modulos
3. **Lazy loading**: Paginas cargadas bajo demanda
4. **Componentes optimizados**: Uso de React.memo donde aplica

### Metricas Objetivo
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

---

## Seguridad

### Consideraciones
- No se almacenan datos sensibles del usuario (sin base de datos por defecto)
- Validacion de entrada con Zod
- Sanitizacion de nombres antes del calculo
- HTTPS obligatorio en produccion

---

*Documentacion generada para Numerologia Integral App v1.0*
