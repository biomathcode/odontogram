import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import '../og-odontogram'; // Import your component file
import '../og-tooth';      // Import the sub-component

const meta: Meta = {
  title: 'Dental/OgDontogram',
  component: 'og-dontogram',
  argTypes: {
    notation: {
      control: { type: 'select' },
      options: ['FDI', 'Universal'],
      description: 'The numbering system to use',
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper to generate initial dummy data
const mockData = {
  "16": { center: 'cavity', top: 'healthy', right: 'healthy', left: 'healthy', bottom: 'healthy' },
  "11": { center: 'filled', top: 'healthy', right: 'healthy', left: 'healthy', bottom: 'healthy' },
  "24": { center: 'healthy', top: 'cavity', right: 'healthy', left: 'healthy', bottom: 'healthy' },
};

export const Default: Story = {
  args: {
    notation: 'FDI',
    chartData: {},
  },
  render: (args) => html`
    <div style="padding: 2rem; background: #f4f7f6; min-height: 100vh;">
     <og-dontogram id="myChart"></og-dontogram>

<div style="margin-top: 20px;">
  <label>Exported JSON State:</label><br>
  <textarea id="jsonOutput" style="width: 100%; height: 200px; font-family: monospace;" readonly></textarea>
</div>

<script>
  const chart = document.getElementById('myChart');
  const output = document.getElementById('jsonOutput');

  // Listen for the custom event we defined
  chart.addEventListener('odontogram-change', (e) => {
    const json = JSON.stringify(e.detail.data, null, 2);
    output.value = json;
    console.log("New Odontogram State:", e.detail.data);
  });
</script>
    </div>
  `,
};

export const WithPreexistingConditions: Story = {
  args: {
    notation: 'FDI',
    chartData: mockData,
  },
  render: (args) => html`
    <og-dontogram 
      .notation=${args.notation} 
      .chartData=${args.chartData}>
    </og-dontogram>
  `,
};