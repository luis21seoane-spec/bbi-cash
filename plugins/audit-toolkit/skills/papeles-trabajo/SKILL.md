---
name: papeles-trabajo
description: Build and review audit working papers and the audit trail following ISA 230 — the documentation that makes an audit defensible, traceable, and reproducible. Use to document audit evidence, structure working papers, create an audit trail, or review whether findings are properly supported. Output in Spanish by default.
---

# Papeles de Trabajo (Audit Trail)

This is the backbone of an audit that is **not questionable**: documentation so complete
and traceable that an independent reviewer reaches the same conclusion from the same
evidence. Used across all `audit-toolkit` skills.

> Regla de oro: si no está documentado, no se hizo. Toda cifra debe poder rastrearse hasta
> su documento fuente.

## Output language
Default to **Spanish** unless the user writes in another language.

## Norma de referencia
**NIA/ISA 230 — Documentación de auditoría**: suficiente para que un auditor experimentado
sin relación previa entienda la naturaleza, oportunidad y alcance de los procedimientos, los
resultados y la evidencia, y las conclusiones y juicios significativos.

## Estructura de cada papel de trabajo
- **Encabezado**: entidad, periodo, área/cuenta, objetivo del procedimiento.
- **Fuente de los datos**: de dónde salió (documento, sistema, confirmación).
- **Procedimiento realizado**: qué se hizo exactamente.
- **Muestra/método**: tamaño, criterio de selección (y por qué es válido).
- **Evidencia obtenida**: adjunta o referenciada.
- **Marcas (*tickmarks*)** y **referencias cruzadas** a otros papeles.
- **Resultados** y **conclusión** clara sobre la aserción.
- **Preparado por / Revisado por / Fechas** (preparador ≠ revisor).

## Audit trail (trazabilidad)
Cadena completa: **estado financiero → mayor → auxiliar → asiento → documento fuente**.
Cualquier saldo debe poder recorrerse en ambos sentidos.

## Indexación y revisión
- Índice/numeración consistente (p. ej. A=caja, B=bancos, C=CxC…).
- Notas de revisión resueltas antes de concluir.
- Política de **retención** y resguardo (acceso controlado, versiones).

## Checklist de defensibilidad
- [ ] Cada hallazgo referencia su evidencia
- [ ] Cada cifra es trazable al documento fuente
- [ ] Método de muestreo documentado y justificado
- [ ] Procedimientos reproducibles por un tercero
- [ ] Preparador y revisor identificados; notas de revisión cerradas
- [ ] Conclusiones coherentes con la evidencia (sin saltos)

## Entrega
Organiza los papeles y, para el informe presentable, usa `report-builder`. Para evidencia
visual (pantallazos de sistemas/portales), apóyate en `agent-browser`.

## Pitfalls
- Conclusiones sin evidencia adjunta → cuestionables.
- Cifras que no se pueden rastrear a su origen.
- Falta de revisión independiente.
- Papeles desordenados o sin referencias cruzadas (no reproducibles).
