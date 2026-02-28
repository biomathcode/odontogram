# 🦷 Og-odontogram


[![npm version](https://img.shields.io/npm/v/odontogram?color=blue\&label=npm)](https://www.npmjs.com/package/odontogram)
[![npm downloads](https://img.shields.io/npm/dm/odontogram?color=green\&label=downloads)](https://www.npmjs.com/package/odontogram)
[![Storybook](https://img.shields.io/badge/Storybook-Demo-orange)](https://biomathcode.github.io/odontogram)

A lightweight, interactive, and highly customizable **Web Component og-odontogram** built with [Lit](https://lit.dev/). Perfect for dental software, patient records, and educational tools.

## ✨ Features

* **Zero Framework Dependency**: Works with React, Vue, Angular, or plain HTML.
* **Multi-Mode Support**: Toggle between `adult` (32 teeth), `baby` (20 primary teeth), and `old` (geriatric) layouts.
* **Multiple Notations**: Display tooth labels in `fdi`, `universal`, or `palmer` notation.
* **Interactive Regions**: Supports 5 surfaces per tooth: Vestibular, Distal, Palatine, Mesial, and Occlusal.
* **Accessible by Keyboard**: Every tooth surface is focusable and can be toggled with `Enter` / `Space`.
* **Screen-Reader Friendly**: Surfaces expose `aria-pressed`, descriptive labels, and live updates.
* **JSON Powered**: Export and rehydrate the entire chart state via a simple JSON object.
* **PNG Export**: Download the current chart view as a PNG with built-in canvas export (no extra dependency).
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

<og-odontogram id="my-chart" mode="adult" notation="fdi"></og-odontogram>

<script>
  const chart = document.getElementById('my-chart');

  // Listen for changes
  chart.addEventListener('odontogram-change', (e) => {
    // FDI-keyed state
    console.log('FDI state:', e.detail.data);

    // Current-notation state (e.g. universal/palmer labels)
    console.log('Notation state:', e.detail.notationData);
  });

  // Download as PNG
  chart.downloadPng('patient-chart.png');
</script>

```

### React / Next.js

```jsx
import 'odontogram';

function App() {
  return (
    <og-odontogram 
      mode="baby" 
      notation="universal"
      onodontogram-change={(e) => console.log(e.detail.data)}
    />
  );
}

```

---

## 🛠 API & Configuration

### Properties

| Property    | Type     | Default   | Description                                     |
| ----------- | -------- | --------- | ----------------------------------------------- |
| `mode`      | `string` | `'adult'` | Patient type: `adult`, `baby`, or `old`.        |
| `notation`  | `string` | `'fdi'`   | Label system: `fdi`, `universal`, or `palmer`.  |
| `chartData` | `object` | `{}`      | Initial state (internally keyed in FDI format). |

### Custom Events

| Event               | Detail                                   | Description                                |
| ------------------- | ---------------------------------------- | ------------------------------------------ |
| `odontogram-change` | `{ data, notationData, mode, notation }` | Fired whenever a tooth surface is toggled. |

### Public Methods

| Method         | Signature                                                       | Description                                         |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------- |
| `getChartData` | `(notation = currentNotation) => Record<string, ToothSurfaces>` | Returns chart data keyed by the requested notation. |
| `toPngDataUrl` | `() => string`                                                  | Returns a PNG data URL for the current chart.       |
| `downloadPng`  | `(filename?: string) => void`                                   | Downloads a PNG file of the current chart.          |

### CSS Variables

Customize the look of the selected regions:

```css
og-odontogram {
  --click-color: #ff6961; /* The color of selected surfaces */
}

```

### Accessibility

* Tab to each tooth surface, then use `Enter` or `Space` to toggle.
* Surfaces expose `aria-pressed` and descriptive labels.
* Live announcements communicate selection changes for assistive technology.

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
