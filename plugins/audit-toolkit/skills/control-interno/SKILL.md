---
name: control-interno
description: Evaluate and test internal controls using the COSO framework — control environment, risk assessment, control activities, information/communication, and monitoring. Use to assess internal control, find control deficiencies, check segregation of duties, or test control effectiveness. Output in Spanish by default.
---

# Control Interno (COSO)

Assess whether the entity's controls actually prevent or detect errors and fraud, and
document deficiencies in a defensible way. Feeds the risk assessment in
`auditoria-financiera`. US context: **COSO 2013** is the framework, and for SEC issuers
this supports **ICFR / Sarbanes-Oxley (SOX) §404** and the auditor's work under
**AU-C 315/940** (private) or **PCAOB AS 2201** (integrated audit of ICFR).

> Toda evaluación se basa en evidencia (walkthroughs, muestras, documentos). No afirmes que
> un control "funciona" sin haberlo probado y documentado.

## Output language
Default to **Spanish** unless the user writes in another language.

## Marco COSO 2013 — 5 componentes / 17 principios
1. **Entorno de control** — integridad, estructura, responsabilidad, competencia.
2. **Evaluación de riesgos** — objetivos claros, identificación y análisis de riesgos,
   riesgo de fraude, cambios.
3. **Actividades de control** — autorizaciones, **segregación de funciones**,
   conciliaciones, controles sobre TI (ITGC), controles físicos.
4. **Información y comunicación** — información de calidad, interna y externa.
5. **Supervisión (monitoring)** — evaluaciones continuas y separadas, comunicación de
   deficiencias.

## Procedimiento
1. **Entiende el proceso** (compras, ventas, nómina, tesorería…) con un *walkthrough*:
   sigue una transacción de principio a fin.
2. **Identifica los controles clave** en cada riesgo de cada aserción.
3. **Evalúa el diseño**: ¿el control, si opera, mitiga el riesgo?
4. **Prueba la efectividad operativa**: muestra de ejecuciones; verifica evidencia de que
   se realizó (firmas, logs, conciliaciones).
5. **Clasifica deficiencias**:
   - *Deficiencia* — control falta o no opera.
   - *Deficiencia significativa* — merece atención de los responsables de gobierno.
   - *Debilidad material (material weakness)* — posibilidad razonable de que una
     incorrección material no sea prevenida o detectada a tiempo (terminología SOX/PCAOB).

## Entregable: matriz de control
| Proceso | Riesgo | Aserción | Control clave | Diseño | Prueba | Resultado | Deficiencia | Remediación |

Foco especial en **segregación de funciones** (quien autoriza ≠ quien ejecuta ≠ quien
registra ≠ quien custodia) y en controles de **tesorería/efectivo**.

## Pitfalls
- Confiar en un control sin probar su operación.
- Ignorar los controles generales de TI (accesos, cambios, respaldos).
- No distinguir deficiencia simple de debilidad material.
- Walkthrough de una sola transacción tomado como prueba de efectividad (eso es diseño, no
  efectividad).
