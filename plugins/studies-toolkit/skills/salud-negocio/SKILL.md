---
name: salud-negocio
description: Monitor a business's financial health with efficiency ratios, trend charts, and an early-warning system that detects deterioration — margin compression, costs rising faster than revenue, shrinking runway, worsening churn. Use to build a business-health dashboard, compute efficiency ratios, or flag whether a business is "going downhill". Output in Spanish by default.
---

# Salud del Negocio (Business Health & Early Warning)

Answer one question continuously: **¿el negocio está sano o vamos en picada?** Compute
efficiency ratios, chart their trend, and raise alerts when things deteriorate (costs
rising faster than revenue, margins compressing, cash runway shrinking). Use real data
only — never invent figures; if data is missing, ask or label estimates.

## Output language

Default to **Spanish** unless the user writes in another language.

## 1. Datos que necesitas (data model)

To compute health you need a time series (ideally monthly) of:
- **Ingresos** (revenue), and recurring vs one-off if SaaS
- **COGS / costo de ventas**
- **Gastos operativos por categoría** (nómina, marketing, infraestructura, otros)
- **Caja disponible** y burn mensual
- (SaaS) clientes, nuevos, bajas, MRR, expansión/contracción

Without history you can only snapshot; **trends and early warning need ≥3–6 periods**.

## 2. Ratios de eficiencia y salud

| Categoría | Ratio | Fórmula | Lectura |
| :--- | :--- | :--- | :--- |
| Rentabilidad | Margen bruto | (Ingresos − COGS) ÷ Ingresos | SaaS objetivo 70–85% |
| Rentabilidad | Margen operativo | Resultado operativo ÷ Ingresos | >0 y creciente |
| Eficiencia | Ratio de gastos (OpEx) | OpEx ÷ Ingresos | **subiendo = alerta** |
| Eficiencia | Costo por categoría %/ingresos | cada costo ÷ Ingresos | detecta qué costo se dispara |
| Eficiencia | Rotación de activos | Ingresos ÷ Activos | mayor = más eficiente |
| Eficiencia | Ciclo de caja (CCC) | DSO + DIO − DPO | menor es mejor |
| Liquidez | Razón corriente | Activo corr. ÷ Pasivo corr. | ≥1 sano |
| Retorno | ROA / ROE | Beneficio ÷ Activos / Patrimonio | comparar vs sector |
| SaaS | Regla del 40 | crecimiento % + margen % | ≥40 sano |
| SaaS | Burn multiple | burn neto ÷ nuevo ARR | <1 excelente, >2 malo |
| SaaS | CAC payback | CAC ÷ (ARPA × margen) | <12 meses |
| SaaS | NRR | retención neta de ingresos | >100% crece solo |

## 3. Gráficos (tendencia)

Visualiza la evolución, no solo el dato puntual:
- **Líneas**: ingresos vs costos totales en el tiempo (si se cruzan/acercan = peligro).
- **Líneas**: márgenes (bruto/operativo) por mes — pendiente hacia abajo = compresión.
- **Áreas apiladas**: composición de costos (ver qué categoría crece).
- **Barras**: ratio de gastos (OpEx/Ingresos) por mes.
- **Indicador**: runway (meses de caja) con umbral.

Genera imágenes con una librería de gráficos y enseguida embébelas, o entrega los datos
a `report-builder`. Para un panel dentro de la app, usa el stack del proyecto (detecta con
`saas-scaffold`/`ui-components`) y una librería como Recharts/Chart.js.

## 4. Alerta temprana — ¿vamos en picada?

Calcula la **tendencia** (variación % y pendiente sobre los últimos N periodos), no un solo
mes (evita el ruido — usa medias móviles de 3 meses). Clasifica con semáforo:

| Señal | Cómo se detecta | 🟢 | 🟡 | 🔴 |
| :--- | :--- | :--- | :--- | :--- |
| Costos > ingresos | crecimiento costos − crecimiento ingresos | <0 | 0–5 pp | >5 pp |
| Compresión de margen | Δ margen bruto últimos 3m | ≥0 | −1 a −3 pp | < −3 pp |
| Ratio de gastos | tendencia OpEx/Ingresos | bajando | plano alto | subiendo |
| Runway | meses de caja restantes | >12 | 6–12 | <6 |
| Burn acelerando | Δ burn mensual | bajando | plano | subiendo |
| Churn / NRR | tendencia | NRR>100% | estable | empeorando |

Para cada 🔴/🟡: explica **qué** se deteriora, **cuánto**, **desde cuándo** y **qué hacer**
(ej. "los costos de infraestructura subieron de 8% a 14% de ingresos en 3 meses").

## Workflow

1. Reúne/confirma la serie histórica de ingresos, costos y caja.
2. Calcula ratios y su **tendencia** (con medias móviles).
3. Genera los gráficos clave.
4. Corre el semáforo de alerta temprana y prioriza lo rojo.
5. Resume: estado general + 2–3 acciones; pasa a `report-builder` si es un informe, o
   construye el panel en la app con `ui-components` y verifica con `agent-browser`.

## Pitfalls

- Reaccionar a **un solo mes** (ruido): usa tendencias / medias móviles.
- Comparar periodos con definiciones de costo distintas.
- Mirar solo ingresos (vanity) ignorando márgenes y caja.
- Alertar sin contexto: siempre di qué hacer, no solo que algo está mal.
- Inventar datos faltantes — pídelos o márcalos como estimación.
