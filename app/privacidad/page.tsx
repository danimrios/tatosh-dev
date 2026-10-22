import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | Tatosh-Dev",
  description:
    "Cómo Tatosh-Dev trata los datos de las cuentas de Google, Meta, Pinterest y YouTube conectadas a sus servicios de automatización.",
};

const UPDATED = "21 de octubre de 2026";
const CONTACT_EMAIL = "danielmartinmrios@gmail.com";
const CONTACT_WHATSAPP = "https://wa.me/5491136125857";

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-[#0D1B2A] dark:text-white">
      <h1 className="mb-2 text-3xl font-bold">Política de privacidad</h1>
      <p className="mb-10 text-sm opacity-70">Última actualización: {UPDATED}</p>

      <section className="space-y-4 leading-relaxed">
        <p>
          Esta política explica cómo <strong>Tatosh-Dev</strong> (en adelante, &quot;nosotros&quot;)
          trata la información de las cuentas que nuestros clientes conectan a los servicios de
          automatización que desarrollamos y mantenemos, incluida la aplicación &quot;Tatosh
          Automatización&quot;.
        </p>

        <h2 className="pt-4 text-xl font-semibold">1. Qué datos usamos</h2>
        <p>Con la autorización expresa del titular de cada cuenta, accedemos únicamente a:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Google Drive:</strong> los archivos (imágenes y videos) que el cliente indica para publicar.</li>
          <li><strong>Google Sheets:</strong> la planilla donde el cliente programa sus publicaciones (archivo, texto, redes y fecha).</li>
          <li><strong>YouTube:</strong> permiso para subir videos al canal del cliente.</li>
          <li><strong>Instagram, Facebook y Threads (Meta):</strong> permiso para publicar en las cuentas y páginas del cliente.</li>
          <li><strong>Pinterest:</strong> permiso para crear pines en los tableros del cliente.</li>
        </ul>

        <h2 className="pt-4 text-xl font-semibold">2. Para qué los usamos</h2>
        <p>
          Usamos estos datos con un único fin: publicar automáticamente el contenido que el propio
          cliente programa, en las redes y fechas que él elige, y registrar el resultado de cada
          publicación. No usamos los datos para publicidad, perfiles ni ningún otro fin.
        </p>

        <h2 className="pt-4 text-xl font-semibold">3. Qué no hacemos</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>No vendemos, alquilamos ni compartimos datos con terceros.</li>
          <li>No leemos ni usamos archivos o publicaciones que el cliente no haya programado.</li>
          <li>No usamos los datos para entrenar modelos de inteligencia artificial.</li>
        </ul>

        <h2 className="pt-4 text-xl font-semibold">4. Datos de Google</h2>
        <p>
          El uso y la transferencia de información recibida de las APIs de Google cumple con la{" "}
          <a className="underline" href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">
            Política de datos de usuario de los servicios de API de Google
          </a>
          , incluidos los requisitos de Uso Limitado.
        </p>

        <h2 className="pt-4 text-xl font-semibold">5. Dónde se guardan</h2>
        <p>
          Los permisos de acceso (tokens) se guardan cifrados en un servidor privado administrado
          por Tatosh-Dev. Los archivos permanecen en el Google Drive del cliente; no guardamos
          copias permanentes.
        </p>

        <h2 className="pt-4 text-xl font-semibold">6. Cómo revocar el acceso o pedir la eliminación</h2>
        <p>
          El cliente puede revocar el acceso en cualquier momento desde la configuración de
          seguridad de cada cuenta (Google, Meta o Pinterest), o pedirnos que eliminemos sus datos
          y permisos escribiendo a los contactos de abajo. Respondemos dentro de los 10 días
          hábiles.
        </p>

        <h2 className="pt-4 text-xl font-semibold">7. Contacto</h2>
        <p>
          Email: <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />
          WhatsApp:{" "}
          <a className="underline" href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer">
            +54 9 11 3612-5857
          </a>
        </p>
      </section>
    </main>
  );
}
