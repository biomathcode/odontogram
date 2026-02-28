import { html } from 'lit';
import '../og-odontogram';

export default {
  title: 'Odontogram/Main',
  component: 'og-odontogram',
  argTypes: {
    mode: {
      control: 'select',
      options: ['adult', 'baby', 'old'],
      description: 'Select the patient type'
    },
    selectionColor: { control: 'color' }
  }
};

export const Template = (args: any) => {
  // We handle the event here to update the external textarea in the story
  const handleUpdate = (e: CustomEvent) => {
    const area = document.getElementById('story-json-output') as HTMLTextAreaElement;
    if (area) {
      area.value = JSON.stringify(e.detail.data, null, 2);
    }
  };

  return html`
    <style>
      .story-container { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
      textarea { width: 100%; max-width: 600px; height: 150px; font-family: monospace; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
      h3 { margin-bottom: 0.5rem; color: #333; }
    </style>

    <div class="story-container" style="--click-color: ${args.selectionColor || '#ff6961'}">
      <og-odontogram 
        .mode=${args.mode} 
        .chartData=${args.chartData || {}}
        @odontogram-change=${handleUpdate}>
      </og-odontogram>

      <div>
        <h3>Exported Patient Data (External)</h3>
        <textarea id="story-json-output" readonly placeholder="Click a tooth to generate JSON..."></textarea>
      </div>
    </div>
  `;
};

export const Adult = Template.bind({});
(Adult as any).args = { mode: 'adult' };

export const Pediatric = Template.bind({});
(Pediatric as any).args = { mode: 'baby' };

export const Senior = Template.bind({});
(Senior as any).args = { mode: 'old' };

export const PreFilled = Template.bind({});
(PreFilled as any).args = {
  mode: 'adult',
  chartData: {
    "11": { vestibular: false, distal: false, palatine: false, mesial: false, occlusal: true },
    "46": { vestibular: true, distal: true, palatine: false, mesial: false, occlusal: false }
  }
};