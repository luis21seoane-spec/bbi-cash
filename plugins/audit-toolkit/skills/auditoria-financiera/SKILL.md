---
name: auditoria-financiera
description: Conduct a rigorous, standards-based financial audit/review — planning, materiality, risk assessment, sampling, substantive testing, and evidence-backed findings, all traceable and defensible. Use to audit or pre-audit financial statements, prepare for a statutory audit, or review accounts for accuracy and compliance. Output in Spanish by default.
---

# Auditoría Financiera

Produce an audit that is **defensible and not questionable**: every conclusion traces to
documented evidence, follows recognized standards, and is reproducible. This is the master
skill — it coordinates `control-interno`, `conciliaciones`, `deteccion-fraude`, and
`papeles-trabajo`.

> **Alcance y límite (decláralo siempre):** esto es una revisión de auditoría rigurosa
> basada en evidencia, útil como **auditoría interna / pre-auditoría / preparación**. **No
> sustituye ni emite la opinión de auditoría legal** que solo un auditor/contador
> colegiado o firma habilitada puede firmar. No inventes cifras: toda conclusión nace de
> evidencia provista; si falta evidencia, márcalo como limitación de alcance.

## Output language
Default to **Spanish** unless the user writes in another language.

## Primero: define el marco (sin esto la auditoría es cuestionable)
Marco por defecto: **EE.UU.** Confirma antes de empezar:
- **Marco contable**: **US GAAP (FASB ASC)**.
- **Normas de auditoría**: **AICPA — SAS / secciones AU-C** (entidades privadas) o
  **PCAOB — Auditing Standards (AS)** (emisores SEC / empresas cotizadas).
- **Tipo de entidad** (privada vs SEC registrant), **periodo** auditado y moneda (USD).
- **Objetivo**: revisión interna, due diligence, cumplimiento, fraude, preparación de
  auditoría externa, etc.

## Proceso de auditoría (alineado a AICPA AU-C / PCAOB AS)
1. **Planificación y conocimiento de la entidad** (AU-C 300/315; PCAOB AS 2101/2110):
   negocio, sector, sistemas.
2. **Materialidad** (AU-C 320; PCAOB AS 2105): fija materialidad global y de ejecución;
   **documenta la base** (% sobre ingresos/activos/resultado) y el porqué.
3. **Evaluación de riesgos** (AU-C 315; AS 2110): riesgo de incorrección material =
   inherente × control, por **aserción**: existencia, integridad, exactitud/valuación,
   derechos y obligaciones, corte, clasificación, presentación.
4. **Control interno** (→ `control-interno`): entiende y, si procede, prueba controles
   (obligatorio para ICFR/SOX en emisores).
5. **Respuesta/pruebas** (AU-C 330; AS 2301): analíticas + pruebas de detalle (sustantivas)
   según el riesgo.
6. **Muestreo** (AU-C 530; AS 2315): estadístico o por juicio; **documenta método y tamaño**
   y por qué es representativo.
7. **Evidencia** (AU-C 500; AS 1105): suficiente y apropiada; registra en `papeles-trabajo`.
8. **Evaluación de incorrecciones** (AU-C 450; AS 2810): acumula errores y compáralos con
   materialidad.
9. **Conclusiones y hallazgos**: cada hallazgo con referencia a su evidencia; carta a la
   gerencia con recomendaciones; informe final con `report-builder`.

## Checklist de "no cuestionable" (defensibilidad)
- [ ] US GAAP y normas AICPA/PCAOB citadas explícitamente
- [ ] Materialidad fijada y justificada por escrito
- [ ] Riesgos evaluados por aserción
- [ ] Muestreo con método y tamaño documentados
- [ ] **Cada cifra/conclusión trazable a su evidencia** (audit trail)
- [ ] Incorrecciones acumuladas y evaluadas vs materialidad
- [ ] Independencia/objetividad declarada; alcance y limitaciones explícitos
- [ ] Papeles de trabajo revisados (preparador ≠ revisor)

## Pitfalls
- Concluir sin evidencia trazable → cuestionable.
- No fijar materialidad → no se sabe qué errores importan.
- Muestras no justificadas o sesgadas.
- Mezclar marcos contables o periodos.
- Presentar la revisión como "dictamen legal" cuando no lo es.
