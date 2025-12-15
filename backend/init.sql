-- Inicializa la base de datos y agrega la tabla procesos con datos
CREATE TABLE IF NOT EXISTS procesos (
  id SERIAL PRIMARY KEY,
  actor VARCHAR(200),
  actividad VARCHAR(200),
  descripcion TEXT,
  evidencia TEXT
);

INSERT INTO procesos (actor, actividad, descripcion, evidencia) VALUES
('Camaronera (proveedor)', 'Inspección organoléptica', 'Revisión de textura, color, olor y sabor para validar la calidad del camarón que será comprado por MARANSA S.A.S.', 'Llamada; WhatsApp'),
('Camaronera (proveedor)', 'Envío de muestra', 'Toma y envío de muestra al laboratorio para análisis previo requerido por MARANSA S.A.S.', 'Transporte físico; WhatsApp'),
('Laboratorio externo', 'Análisis de calidad', 'Evaluación organoléptica y sanitaria; informe de aprobación o rechazo del lote solicitado por MARANSA S.A.S.', 'Informe del laboratorio'),
('MARANSA S.A.S.', 'Programación de pesca', 'Define libras requeridas y fecha de cosecha según los resultados del laboratorio externo.', 'WhatsApp; registro interno'),
('Logística', 'Asignación de vehículo', 'Selección de vehículo con vines o tanques de oxígeno para transportar el producto hacia MARANSA S.A.S.', 'Llamada; WhatsApp'),
('Camaronera', 'Pesca y carga', 'Cosecha durante 6–7 horas y carga del camarón en el transporte autorizado de MARANSA S.A.S.', 'Registro de carga'),
('Custodia', 'Traslado y seguridad', 'Acompaña y asegura el transporte del lote hasta la empacadora asignada por MARANSA S.A.S.', 'Registro de custodia'),
('Empacadora', 'Recepción y validación', 'Revisión de peso, calidad y análisis interno antes del proceso final.', 'Informe de recepción'),
('Empacadora', 'Clasificación', 'Clasificación del camarón por tallas y tipo (cola, parenteros, vivo).', 'Reporte de clasificación'),
('MARANSA S.A.S.', 'Liquidación', 'Cálculo del valor total según tallas y precios establecidos entre la empresa y la empacadora.', 'Informe de liquidación'),
('MARANSA S.A.S.', 'Facturación', 'Emisión de factura electrónica por cada lote recibido y validado.', 'Factura electrónica')
ON CONFLICT DO NOTHING;
