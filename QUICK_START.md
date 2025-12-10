# 🚀 Quick Start Guide - ContaExpert Cluj

## Pornește site-ul în 3 pași simpli:

### 1️⃣ Deschide terminal în folderul proiectului
```bash
cd "/Users/roxanalaudatu/Desktop/Claude code site-uri si app-uri/contaexpert-cluj"
```

### 2️⃣ Instalează dependențele (doar prima dată)
```bash
npm install
```

### 3️⃣ Pornește serverul
```bash
npm run dev
```

**Site-ul va fi disponibil la:** http://localhost:5173/

---

## 📝 Personalizări Importante

### 🔗 Link-uri Calendly
Caută și înlocuiește în următoarele fișiere:

**src/components/Hero.jsx:**
- Link formular contact

**src/components/RoxanaBanner.jsx:**
- Link "Programează o Discuție Gratuită"

**src/components/RoxanaBannerFinal.jsx:**
- Link mare Calendly

**src/components/Contact.jsx:**
- Link buton "Alege o oră convenabilă"

Înlocuiește:
```javascript
href="https://calendly.com/laudatu-roxana/30min"
```

### 📞 Date de Contact
**src/components/Contact.jsx** și **src/components/Footer.jsx:**
- Telefon: `0740 XXX XXX` → numărul real
- Email: `contact@contaexpert.ro` → email-ul real
- Adresă: `Str. Exemplu nr. 10` → adresa reală

### 🏢 Date Legale (Footer)
**src/components/Footer.jsx:**
```javascript
CUI: XXXXXXXX → CUI real
Nr. Reg. Com.: J12/XXX/XXXX → număr real
```

---

## 🎨 Modificări Design

### Culori
Editează **tailwind.config.js** pentru a schimba culorile:
```javascript
colors: {
  primary: {
    DEFAULT: '#1E3A5F',  // Navy profund
    light: '#2D5F8B',    // Albastru corporate
  },
  accent: '#D4A853',     // Auriu premium
}
```

### Texte
Toate textele sunt în fișierele componente din **src/components/**.
Caută și modifică textele direct în fișierele `.jsx`.

---

## 📧 Formular de Contact

Formularul din **src/components/Contact.jsx** afișează un alert la submit.

Pentru a-l conecta la un backend:
1. Creează un endpoint API
2. Modifică funcția `handleSubmit` din Contact.jsx
3. Înlocuiește `alert()` cu fetch/axios call

---

## 🌐 Deploy

### Vercel (Recomandat - Gratuit)
```bash
npm install -g vercel
npm run build
vercel
```

### Netlify
```bash
npm run build
# Upload folderul 'dist' pe netlify.com
```

---

## 📱 Testare Responsive

Deschide site-ul și testează:
- Desktop: redimensionează fereastra browser-ului
- Mobile: folosește DevTools (F12) → Toggle Device Toolbar
- Sau vizitează de pe telefon folosind IP-ul din terminal

---

## ✅ Checklist Înainte de Launch

- [ ] Am înlocuit toate link-urile Calendly
- [ ] Am actualizat telefon, email și adresă
- [ ] Am completat datele legale (CUI, Reg. Com.)
- [ ] Am testat formularul de contact
- [ ] Am verificat pe mobil
- [ ] Am făcut build de producție (`npm run build`)
- [ ] Site-ul se încarcă rapid (< 3 secunde)

---

## 🆘 Probleme Comune

### Serverul nu pornește?
```bash
# Șterge node_modules și reinstalează
rm -rf node_modules
npm install
npm run dev
```

### Erori la build?
```bash
# Verifică că toate fișierele au fost salvate
# Rulează din nou:
npm run build
```

### Formularul nu funcționează?
- Verifică consolă browser (F12) pentru erori
- Asigură-te că toate câmpurile required sunt completate
- Verifică checkbox-ul GDPR

---

## 📞 Contact Dezvoltator

**Roxana Laudatu**
- 📅 Calendly: https://calendly.com/laudatu-roxana/30min
- 📧 Email: laudatu-roxana@example.com

---

**Mult succes cu site-ul! 🎉**
