---
name: conciliaciones
description: Perform and review reconciliations and substantive checks — bank, accounts receivable/payable, intercompany, inventory, payroll, and cash — detecting and classifying discrepancies. Use to reconcile accounts, find differences between records and reality, or verify completeness/accuracy/cutoff. Output in Spanish by default.
---

# Conciliaciones

Confirm that what the records say matches reality, and explain every difference. This is
core substantive evidence for `auditoria-financiera`.

> Trabaja con datos/documentos reales (extractos, mayores, facturas). Cada diferencia debe
> quedar **clasificada y soportada**; no la "cuadres" forzando ajustes sin evidencia.

## Output language
Default to **Spanish** unless the user writes in another language.

## Tipos de conciliación
- **Bancaria**: saldo libros vs extracto; partidas en tránsito, cheques no cobrados,
  comisiones, abonos no registrados.
- **Cuentas por cobrar / pagar**: mayor vs auxiliares vs confirmaciones de terceros.
- **Intercompañía**: saldos recíprocos deben netear a cero.
- **Inventario**: kardex vs conteo físico (toma de inventario).
- **Nómina**: registros vs pagos vs planillas de seguridad social/impuestos.
- **Efectivo/caja** (clave en negocios de efectivo): arqueo de caja, depósitos en tránsito,
  *three-way match* (orden–recepción–factura) en compras.

## Procedimiento
1. Reúne las dos fuentes (registro interno y fuente independiente).
2. Empareja partida por partida.
3. **Aísla las diferencias** y clasifícalas: *temporal* (corte), *error de registro*,
   *partida no soportada* (posible irregularidad).
4. Investiga y soporta cada diferencia con documento.
5. Propón ajustes solo con evidencia; documenta lo no resuelto como hallazgo.

## Aserciones que cubre
Integridad (todo registrado), existencia (lo registrado existe), exactitud (montos),
**corte** (en el periodo correcto), valuación.

## Señales de alerta (red flags)
- Partidas conciliatorias **antiguas** sin resolver.
- Ajustes manuales recurrentes para "cuadrar".
- Números redondos sospechosos; depósitos/retiros inusuales.
- Diferencias que crecen mes a mes.

## Pitfalls
- "Cuadrar" con un ajuste sin soporte → oculta errores/fraude.
- Ignorar partidas en tránsito legítimas vs partidas sin explicación.
- No usar una **fuente independiente** (confirmaciones, extractos), solo registros internos.
