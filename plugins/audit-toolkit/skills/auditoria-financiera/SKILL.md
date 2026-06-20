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
Confirma antes de empezar:
- **Marco contable**: NIIF/IFRS, US GAAP, o PCGA/normativa local del país.
- **Normas de auditoría**: NIA/ISA (IAASB), PCAOB/AICPA, o normativa local.
- **Jurisdicción y país**, tipo de entidad, **periodo** auditado y moneda.
- **Objetivo**: dictamen interno, due diligence, cumplimiento, fraude, etc.

## Proceso de auditoría (alineado a NIA/ISA)
1. **Planificación y conocimiento de la entidad** (ISA 300/315): negocio, sector, sistemas.
2. **Materialidad** (ISA 320): fija materialidad global y de ejecución; **documenta la base**
   (% sobre ingresos/activos/resultado) y el porqué.
3. **Evaluación de riesgos**: riesgo de incorrección material = inherente × control, por
   **aserción**: existencia, integridad, exactitud/valuación, derechos y obligaciones,
   corte, clasificación, presentación.
4. **Control interno** (→ `control-interno`): entiende y, si procede, prueba controles.
5. **Respuesta/pruebas**: analíticas + pruebas de detalle (sustantivas) según el riesgo.
6. **Muestreo** (ISA 530): estadístico o por juicio; **documenta método y tamaño** y por qué
   es representativo.
7. **Evidencia** (ISA 500): suficiente y apropiada; registra en `papeles-trabajo`.
8. **Evaluación de incorrecciones** (ISA 450): acumula errores y compáralos con materialidad.
9. **Conclusiones y hallazgos**: cada hallazgo con referencia a su evidencia; carta a la
   gerencia con recomendaciones; informe final con `report-builder`.

## Checklist de "no cuestionable" (defensibilidad)
- [ ] Marco contable y normas de auditoría citados explícitamente
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
