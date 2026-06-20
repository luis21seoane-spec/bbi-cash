---
name: deteccion-fraude
description: Assess fraud risk and test for fraud indicators following ISA 240 — fraud triangle, analytical anomaly detection (Benford, unusual journal entries, duplicate payments, ghost vendors), and AML/cash red flags. Use to evaluate fraud risk, investigate suspicious transactions, or screen for irregularities. Output in Spanish by default.
---

# Detección de Fraude

Identify where and how fraud could occur, then test for indicators with professional
skepticism. Feeds `auditoria-financiera`.

> **Importante:** los indicadores **no son prueba** de fraude; señalan dónde investigar.
> Las irregularidades graves y las obligaciones de reporte (p. ej. antilavado/PLD) se
> escalan a profesionales y autoridades competentes según la ley local — usa también
> `legal-comercial`. No acuses; documenta hechos y evidencia.

## Output language
Default to **Spanish** unless the user writes in another language.

## Marco
- **Triángulo del fraude**: incentivo/presión, oportunidad, racionalización.
- **AU-C 240 (AICPA) / PCAOB AS 2401**: responsabilidad del auditor frente al fraude;
  escepticismo profesional; presunción de riesgo en reconocimiento de ingresos y en
  *override* de controles por la gerencia.

## Pruebas analíticas e indicadores
- **Asientos de diario inusuales** (foco clásico de *management override*): montos redondos,
  fin de periodo, fuera de horario, usuarios inusuales, sin descripción, por encima de
  límites de autorización.
- **Ley de Benford**: distribución anómala de primeros dígitos en grandes volúmenes.
- **Pagos duplicados** y **proveedores/empleados fantasma** (mismo banco/dirección,
  altas recientes, sin RUC/ID válido).
- **Manipulación de ingresos**: ventas cerca del cierre, notas de crédito posteriores,
  *channel stuffing*, juegos de **corte**.
- **Gastos**: reembolsos inflados, partidas personales, sin soporte.

## Antilavado / efectivo — EE.UU. (Bank Secrecy Act / FinCEN)
- **CTR (Currency Transaction Report)**: transacciones en efectivo > **US$10,000**.
- **SAR (Suspicious Activity Report)**: actividad sospechosa.
- **Estructuración** (dividir montos para evitar el umbral de US$10k) — prohibida por
  **31 U.S.C. §5324**.
- Volúmenes de efectivo inusuales, KYC/CIP incompleto, terceros sin relación.
- Verifica las obligaciones de **debida diligencia y reporte** aplicables (BSA/FinCEN) y
  apóyate en `legal-comercial` y en un especialista de cumplimiento.

## Procedimiento
1. Evalúa factores de riesgo de fraude (triángulo) por proceso.
2. Selecciona pruebas analíticas/de detalle dirigidas al riesgo.
3. Ejecuta sobre datos reales; aísla anomalías.
4. Investiga cada anomalía buscando explicación y soporte.
5. Documenta hallazgos (hecho + evidencia + impacto) y escala lo que corresponda.

## Pitfalls
- Tratar un indicador como prueba.
- Saltar el escepticismo ("siempre se ha hecho así").
- No probar *journal entries* ni el override de la gerencia.
- Difamar: separa **hecho documentado** de conclusión legal (que no te corresponde emitir).
