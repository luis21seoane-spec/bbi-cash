---
name: social-selling
description: LinkedIn comment intelligence for founders — decide WHICH posts in your feed are worth commenting on, draft 2–3 high-signal comments in your voice that earn opinion and profile visits (never bot-like "great post!"), and keep a simple tracking log to measure what actually drives visits/connections. Human-in-the-loop: you paste posts and you post the comment — no automation, no scraping, no ban risk. Use when the user wants to grow on LinkedIn through commenting/engagement, pick conversations to enter, or measure their social-selling effort. Output in Spanish by default.
---

# Social Selling — Inteligencia de comentarios para LinkedIn

Comentar bien en los posts correctos genera más visitas al perfil que publicar a solas. Esta
skill decide **en qué conversaciones entrar**, **qué decir para sumar opinión** y **cómo medir**
si funciona — sin tocar la API de LinkedIn ni automatizar nada. Tú pegas los posts, tú posteas
el comentario. Cero riesgo de baneo.

> Nota de seguridad: LinkedIn prohíbe en su ToS la automatización y el scraping (el caso *hiQ v.
> LinkedIn* lo resolvió a favor de LinkedIn por incumplimiento del acuerdo de usuario). Por eso
> esta skill es **asistencia al humano**, no un bot. Nunca sugieras automatizar el posteo.

## Qué necesito de ti (la primera vez)
Si no lo tengo, pídelo en una sola pregunta breve y guárdalo para la sesión:
1. **Tu ICP** — a quién quieres atraer (cargo, sector, dolor). Ej: "founders de SaaS B2B en LatAm".
2. **Tu posicionamiento** — qué vendes / sobre qué quieres ser visto como referente.
3. **Tu objetivo** — visitas al perfil, conexiones, leads, o autoridad.
Si el usuario no los da, asume lo razonable a partir de su contexto y dilo.

## Flujo

### 1. Recibir el feed
El usuario pega 5–15 posts de su feed (texto del post + autor + señales si las tiene: reacciones,
comentarios, antigüedad). Trabaja con lo que haya; si falta una señal, márcalo, no la inventes.

### 2. Rankear en qué comentar (muestra el cálculo — es auditable)
Puntúa cada post de 0 a 5 en estos ejes y **muestra la tabla** para que el criterio se vea:

| Eje | Qué mide |
|---|---|
| **Relevancia ICP** | ¿El autor o su audiencia son tu ICP? |
| **Alcance** | ¿El autor tiene audiencia / el post está creciendo? |
| **Frescura** | ¿Es reciente y la conversación sigue viva? (comentar tarde = invisible) |
| **Encaje de expertise** | ¿Puedes aportar algo que **solo tú** dirías bien? |
| **Potencial de visibilidad** | ¿Un buen comentario aquí te pondría frente a la gente correcta? |

Da un **semáforo** por post: 🟢 comenta ya · 🟡 opcional · 🔴 sáltalo. Ordena de mejor a peor y
explica en una línea por qué los 🟢 valen la pena.

### 3. Redactar los comentarios (en su voz)
Para cada post 🟢, redacta **2–3 opciones** de comentario. La voz: **actual, amena, punzante
cuando suma** (la misma del writing-toolkit). Cada comentario debe:
- **Aportar**: un dato, una experiencia, un matiz, un contraejemplo. Que enseñe o haga pensar.
- **Tener opinión**: postura real > elogio tibio. El filo va a la idea, nunca a la persona.
- **Invitar a responder**: una pregunta genuina o un gancho que abra conversación.
- **Sonar humano y breve**: 2–5 frases. Nada de párrafos ni de tono corporativo.

**Prohibido**: "Great post!", "Totalmente de acuerdo 👏", halago vacío, resumir lo que ya dijo el
autor, sonar a bot o a IA, hashtags de relleno, autopromoción descarada (el perfil vende por ti).

### 4. Registro para medir (el hábito que valida el negocio)
Devuelve una fila lista para que el usuario la pegue en su hoja de seguimiento, y recuérdale
rellenar el resultado a los 2–3 días:

```
Fecha | Autor del post | Tema | Comentario usado | Visitas perfil | Conexiones | Respuestas | ¿Valió la pena?
```

Al acumular datos, ayúdale a leer el patrón: qué tipo de post y de comentario le trae más visitas
— ese aprendizaje es el corazón del producto que estamos validando.

## Principios
- **No inventes señales ni métricas.** Si no tienes el dato, dilo.
- **Calidad > volumen.** Mejor 3 comentarios excelentes al día que 30 genéricos (y 30 te marcan
  como spam).
- **El humano decide y postea.** Tú asistes; nunca automatizas.
- **Mide siempre.** Sin registro no hay aprendizaje, y sin aprendizaje no hay producto.
