# ContaExpert Cluj - Website Premium

Website one-page premium și profesionist pentru firmă de contabilitate din Cluj-Napoca.

## 🎨 Caracteristici

- **Design Premium**: Interfață elegantă și profesionistă cu paletă de culori corporate
- **Animații Fluide**: Folosește Framer Motion pentru animații profesioniste și subtile
- **Responsive**: Perfect optimizat pentru toate dispozitivele (mobile, tablet, desktop)
- **SEO Optimizat**: Meta tags complete, structured data, și semantic HTML
- **Performance**: Lazy loading, optimizări CSS/JS, Google Fonts cu display=swap
- **Accessibility**: ARIA labels, contrast WCAG AA, keyboard navigation

## 🚀 Tehnologii

- **React 18** - Framework JavaScript modern
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animații profesioniste
- **Vite** - Build tool ultra-rapid

## 📦 Instalare

### Pasul 1: Clonează sau downloadează proiectul

```bash
cd contaexpert-cluj
```

### Pasul 2: Instalează dependențele

```bash
npm install
```

### Pasul 3: Pornește serverul de development

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:5173`

## 🏗️ Build pentru Producție

Pentru a crea o versiune optimizată pentru producție:

```bash
npm run build
```

Fișierele vor fi generate în folderul `dist/`.

Pentru a previzualiza build-ul de producție:

```bash
npm run preview
```

## 📂 Structura Proiectului

```
contaexpert-cluj/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header sticky cu navigare
│   │   ├── Hero.jsx            # Secțiunea hero cu CTA
│   │   ├── Problems.jsx        # Problemele antreprenorilor
│   │   ├── Services.jsx        # Servicii de contabilitate
│   │   ├── WhyUs.jsx          # Diferențiatori (De ce noi)
│   │   ├── About.jsx          # Despre firmă
│   │   ├── Process.jsx        # Procesul în 4 pași
│   │   ├── Testimonials.jsx   # Testimoniale clienți
│   │   ├── RoxanaBanner.jsx   # Banner Roxana (mijloc)
│   │   ├── FAQ.jsx            # Întrebări frecvente
│   │   ├── Contact.jsx        # Formular contact
│   │   ├── RoxanaBannerFinal.jsx  # Banner Roxana (final)
│   │   └── Footer.jsx         # Footer complet
│   ├── App.jsx                # Componenta principală
│   ├── main.jsx              # Entry point React
│   └── index.css             # Stiluri globale + Tailwind
├── index.html                 # HTML principal
├── tailwind.config.js        # Configurare Tailwind
├── vite.config.js           # Configurare Vite
└── package.json             # Dependențe și scripturi
```

## 🎨 Paletă de Culori

- **Fundal Principal**: `#FAFBFC` - alb sofisticat
- **Fundal Secundar**: `#F1F5F9` - gri deschis
- **Primary**: `#1E3A5F` - navy profund (încredere, stabilitate)
- **Secondary**: `#2D5F8B` - albastru corporate
- **Accent**: `#D4A853` - auriu discret (premium, succes)
- **Text Principal**: `#1A2B3C` - gri-navy închis
- **Text Secundar**: `#64748B` - gri mediu
- **Success**: `#059669` - verde pentru confirmări

## ✏️ Personalizare

### Modificarea Textelor

Toate textele sunt hardcoded în componente și pot fi modificate direct în fișierele `.jsx` din `src/components/`.

### Modificarea Culorilor

Editează `tailwind.config.js` pentru a schimba paleta de culori:

```javascript
colors: {
  primary: {
    DEFAULT: '#1E3A5F',  // Schimbă aici
    light: '#2D5F8B',
  },
  accent: '#D4A853',
  // ...
}
```

### Adăugarea Link-urilor Calendly

În componentele `Hero.jsx`, `Contact.jsx`, `RoxanaBanner.jsx` și `RoxanaBannerFinal.jsx`, caută link-urile Calendly și înlocuiește-le cu cele reale:

```javascript
href="https://calendly.com/laudatu-roxana/30min"  // Schimbă cu link-ul real
```

### Formular de Contact

Formularul din `Contact.jsx` este configurat să afișeze un alert la submit. Pentru a-l conecta la un backend real:

1. Creează un endpoint API (ex: `/api/contact`)
2. În funcția `handleSubmit`, înlocuiește `alert()` cu un fetch/axios call
3. Adaugă gestionarea erorilor și confirmărilor

## 📱 Responsive Design

Site-ul este complet responsive:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO

Site-ul include:
- Meta tags complete în `index.html`
- Structured data (LocalBusiness schema)
- Semantic HTML
- Alt texts pentru imagini
- Proper heading hierarchy

## 🚀 Deploy

Proiectul poate fi deployed pe:

### Vercel (Recomandat)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploadează folderul 'dist' pe Netlify
```

### GitHub Pages
```bash
npm run build
# Configurează GitHub Pages să servească din folderul 'dist'
```

## 📝 Licență

Acest proiect este creat de **Roxana Laudatu** pentru ContaExpert Cluj.

## 🤝 Contact

Pentru întrebări sau modificări:
- **Email**: laudatu-roxana@example.com
- **Calendly**: https://calendly.com/laudatu-roxana/30min

---

Dezvoltat cu ❤️ de Roxana Laudatu | Web Designer & Developer
