# KloudXP — Cloud Infrastructure Website

Sitio web corporativo de **KloudXP** ([kloudxp.com](https://kloudxp.com)), reconstruido desde cero con una arquitectura moderna, serverless y de alto rendimiento utilizando **Astro**, **Tailwind CSS** y el ecosistema **Cloudflare (Pages, Workers, D1, Turnstile)**.

---

## 🚀 Stack Tecnológico

* **Frontend:** [Astro 5](https://astro.build/) (Static Site Generation + Server-Rendered Edge Endpoints)
* **Diseño & Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Alojamiento & Edge:** [Cloudflare Pages](https://pages.cloudflare.com/) / [Workers with Assets](https://developers.cloudflare.com/workers/)
* **Seguridad Antibot:** [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)
* **Base de Datos (Opcional):** [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite en el Edge)
* **Alianzas Tecnológicas:** Partner Oficial **Proxmox VE / PBS** e Infraestructura en Centros de Datos **Tier III / IV**.
* **Presencia Regional:** Operaciones locales en **Guadalajara, México** (+52-33-2233-4400) y **Bogotá, Colombia** (+57-3134716622).

---

## 📁 Estructura del Proyecto

```text
├── public/
│   ├── images/
│   │   ├── partners/          # Logo Proxmox Official Partner
│   │   └── clients/           # Logos Grupo Kino, Hartec, Triskelion, ASV, Blen, etc.
│   └── favicon.png            # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.astro       # Menú sticky con selector ES/EN y teléfonos MX/CO
│   │   ├── Footer.astro       # Footer corporativo con enlaces legales, sedes MX/CO y SLA
│   │   ├── Hero.astro         # Hero section con monitor de nodos en tiempo real
│   │   ├── ServiceCard.astro  # Tarjeta de servicios con ficha técnica
│   │   ├── RegionalPresence.astro # Módulo de presencia local en México y Colombia
│   │   ├── ClientLogos.astro  # Carrusel/grid de clientes destacados
│   │   ├── Testimonials.astro # Testimonios de directores de TI y operaciones
│   │   └── ContactForm.astro  # Formulario con protección Cloudflare Turnstile
│   ├── layouts/
│   │   └── Layout.astro       # Layout base con metadatos SEO y hreflang
│   ├── i18n/
│   │   └── ui.ts              # Diccionario bilingüe (Español / Inglés)
│   ├── pages/
│   │   ├── index.astro        # Inicio (Español)
│   │   ├── servicios.astro    # Servicios detallados
│   │   ├── nosotros.astro     # ¿Quiénes somos? y Metodología 4 pasos
│   │   ├── precios.astro      # Guía de planificación de costos y estimador
│   │   ├── sla.astro          # Niveles de Servicio SLA (99.9% - 99.99%)
│   │   ├── contacto.astro     # Formulario de contacto y oficinas en Zapopan
│   │   ├── privacidad.astro   # Aviso de privacidad (LFPDPPP / GDPR)
│   │   ├── terminos.astro     # Términos y condiciones
│   │   ├── abuso.astro        # Formulario de reporte de abusos de red
│   │   ├── api/
│   │   │   └── contact.ts     # Edge API Worker (valida Turnstile y guarda en D1)
│   │   └── en/                # Rutas completas en idioma Inglés
│   └── styles/
│       └── global.css         # Estilos globales y Tailwind CSS
├── astro.config.mjs           # Adaptador Cloudflare y configuración i18n
├── package.json
└── README.md
```

---

## 💻 Desarrollo Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

4. **Previsualizar con Cloudflare Wrangler local:**
   ```bash
   npm run preview
   ```

---

## 🔗 Conectar a tu GitHub

Para subir este proyecto a tu cuenta de GitHub y activar el control de versiones:

1. Crea un nuevo repositorio vacío en [GitHub.com/new](https://github.com/new) (ej. `kloudxp-website`).
2. Conecta tu repositorio local con el remoto:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/kloudxp-website.git
   git branch -M main
   git push -u origin main
   ```

---

## ☁️ Despliegue en Cloudflare Pages

1. Inicia sesión en el [Dashboard de Cloudflare](https://dash.cloudflare.com/).
2. Ve a **Workers & Pages** > **Create application** > pestaña **Pages** > **Connect to Git**.
3. Selecciona tu repositorio de GitHub `kloudxp-website`.
4. En **Build settings**:
   * **Framework preset:** `Astro`
   * **Build command:** `npm run build`
   * **Build output directory:** `dist/client`
5. Haz clic en **Save and Deploy**.
6. En cada `git push` a la rama `main`, Cloudflare Pages compilará y desplegará la web en toda su red global en menos de 1 minuto.

### Variables de Entorno en Cloudflare (Opcional):
* `TURNSTILE_SECRET_KEY`: Llave secreta del widget antibot Turnstile.
* `DB`: Binding de base de datos D1 para almacenar automáticamente los formularios en el Edge.
