# 🦷 Og-odontogram

A lightweight, interactive, and highly customizable **Web Component Ogdontogram** built with [Lit](https://lit.dev/). Perfect for dental software, patient records, and educational tools.

## ✨ Features

* **Zero Framework Dependency**: Works with React, Vue, Angular, or plain HTML.
* **Multi-Mode Support**: Toggle between `adult` (32 teeth), `baby` (20 primary teeth), and `old` (geriatric) layouts.
* **Interactive Regions**: Supports 5 surfaces per tooth: Vestibular, Distal, Palatine, Mesial, and Occlusal.
* **JSON Powered**: Export and rehydrate the entire chart state via a simple JSON object.
* **CSS Theming**: Customize selection colors using CSS variables.
* **Open-WC Compliant**: Shipped as unoptimized ESM for maximum bundler compatibility.

---

## 📦 Installation

Install via NPM:

```bash
npm install odontogram

```

---

## 🚀 Quick Start

### Plain HTML / Vanilla JS

```html
<script type="module">
  import 'odontogram';
</script>

<og-odontogram id="my-chart" mode="adult"></og-odontogram>

<script>
  const chart = document.getElementById('my-chart');

  // Listen for changes
  chart.addEventListener('oodontogram-change', (e) => {
    console.log('New State:', e.detail.data);
  });
</script>

```

### React / Next.js

```jsx
import 'oodontogram';

function App() {
  return (
    <og-odontogram 
      mode="baby" 
      onoodontogram-change={(e) => console.log(e.detail.data)}
    />
  );
}

```

---

## 🛠 API & Configuration

### Properties

| Property    | Type     | Default   | Description                              |
| ----------- | -------- | --------- | ---------------------------------------- |
| `mode`      | `string` | `'adult'` | Patient type: `adult`, `baby`, or `old`. |
| `chartData` | `object` | `{}`      | Initial state to pre-fill the chart.     |

### Custom Events

| Event                | Detail                      | Description                                |
| -------------------- | --------------------------- | ------------------------------------------ |
| `oodontogram-change` | `{ data: {}, mode: string}` | Fired whenever a tooth surface is toggled. |

### CSS Variables

Customize the look of the selected regions:

```css
og-odontogram {
  --click-color: #ff6961; /* The color of selected surfaces */
}

```

---

## 📊 Data Structure

The component exports a clean JSON structure representing the "history" or "state" of the teeth.

```json
{
  "16": {
    "vestibular": true,
    "distal": false,
    "palatine": false,
    "mesial": true,
    "occlusal": true
  }
}

```

---

## 🎨 Storybook (Development & Demo)

We use Storybook to showcase all modes and test interactivity. You can see the "Adult", "Pediatric", and "Senior" layouts in isolation.

To run Storybook locally:

1. Clone the repo.
2. `npm install`
3. `npm run storybook`

---

## 🏗 Developing

If you want to contribute or build from source:

* **Build for Production**: `npm run build` (uses `tsdown` to generate `.mjs` and `.d.mts`).
* **Test**: `npm run test` (uses Vitest + Playwright for browser testing).
* **Lint**: `npm run lint`.

## 📄 License

MIT © [Biomathcode](https://github.com/biomathcode)

---

**Would you like me to help you set up a GitHub Action to automatically publish this to NPM whenever you create a new release?**