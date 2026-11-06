# Empire Dance Center — mockup

Propuesta responsive en HTML, CSS y JavaScript sin dependencias de instalación.

## Visualizar

Abrir `index.html` directamente, o ejecutar `npm start` desde esta carpeta y visitar http://127.0.0.1:4173.

## Publicar en Vercel

Importar el repositorio GitHub en Vercel. La configuración `vercel.json` selecciona un sitio estático sin paso de compilación y sirve la raíz del proyecto. No requiere variables de entorno ni un servidor Node en producción. `server.cjs` se utiliza únicamente en desarrollo local.

El formulario y el portal seguirán funcionando como demostraciones después del despliegue.

## Incluye

Landing, filtros de rutas, selección de interés, formulario de demostración, preguntas desplegables, menú móvil y vista conceptual del futuro portal de familias. No existen servicios de autenticación, envío de datos ni almacenamiento.

El logo es el proporcionado por el cliente. Los textos de la nota adjunta no se incorporaron. Poppins es una aproximación visual provisional, cargada desde Google Fonts; Arial funciona como alternativa sin conexión.

Las rutas y el enfoque editorial son propuestas, no oferta académica confirmada. Las métricas del portal son ficticias. Se omiten testimonios, docentes, ubicación, cuotas y horarios sin verificar. El formulario final requerirá aviso de privacidad, servicio de admisiones y confirmación de disponibilidad.

## Fotografías ilustrativas

No representan a alumnas ni instalaciones de EDC. Sustituir por material oficial autorizado antes de publicación.

- Kajetan Sumila / Unsplash: https://unsplash.com/photos/a-woman-dancing-on-a-stage-Uwdqt9WkGDg
- Knight Duong / Unsplash: https://unsplash.com/photos/woman-in-black-dress-standing-aYTDgUpj74U

## Próxima arquitectura

Landing → API de admisiones → CRM (solicitud, contacto, clase muestra, seguimiento, inscripción).

Portal de familias + panel de administración → autenticación y permisos → API → expedientes, grupos, asistencia, objetivos, evaluaciones, pagos y avisos.

Separar cumplimiento administrativo del avance académico. Definir criterios de evaluación con docentes y restringir expedientes a tutores vinculados. Este mockup no implementa el CRM/ERP.
