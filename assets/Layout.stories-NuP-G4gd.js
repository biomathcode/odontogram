import{b as i}from"./iframe-Czt6bsrN.js";import"./og-odontogram-De7ED45P.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Odontogram/Main",component:"og-dontogram",argTypes:{mode:{control:"select",options:["adult","baby","old"],description:"Select the patient type"},selectionColor:{control:"color"}}},e=r=>{const l=d=>{const s=document.getElementById("story-json-output");s&&(s.value=JSON.stringify(d.detail.data,null,2))};return i`
    <style>
      .story-container { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
      textarea { width: 100%; max-width: 600px; height: 150px; font-family: monospace; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
      h3 { margin-bottom: 0.5rem; color: #333; }
    </style>

    <div class="story-container" style="--click-color: ${r.selectionColor||"#ff6961"}">
      <og-dontogram 
        .mode=${r.mode} 
        .chartData=${r.chartData||{}}
        @odontogram-change=${l}>
      </og-dontogram>

      <div>
        <h3>Exported Patient Data (External)</h3>
        <textarea id="story-json-output" readonly placeholder="Click a tooth to generate JSON..."></textarea>
      </div>
    </div>
  `},t=e.bind({});t.args={mode:"adult"};const a=e.bind({});a.args={mode:"baby"};const n=e.bind({});n.args={mode:"old"};const o=e.bind({});o.args={mode:"adult",chartData:{11:{vestibular:!1,distal:!1,palatine:!1,mesial:!1,occlusal:!0},46:{vestibular:!0,distal:!0,palatine:!1,mesial:!1,occlusal:!1}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: any) => {
  // We handle the event here to update the external textarea in the story
  const handleUpdate = (e: CustomEvent) => {
    const area = document.getElementById('story-json-output') as HTMLTextAreaElement;
    if (area) {
      area.value = JSON.stringify(e.detail.data, null, 2);
    }
  };
  return html\`
    <style>
      .story-container { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
      textarea { width: 100%; max-width: 600px; height: 150px; font-family: monospace; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
      h3 { margin-bottom: 0.5rem; color: #333; }
    </style>

    <div class="story-container" style="--click-color: \${args.selectionColor || '#ff6961'}">
      <og-dontogram 
        .mode=\${args.mode} 
        .chartData=\${args.chartData || {}}
        @odontogram-change=\${handleUpdate}>
      </og-dontogram>

      <div>
        <h3>Exported Patient Data (External)</h3>
        <textarea id="story-json-output" readonly placeholder="Click a tooth to generate JSON..."></textarea>
      </div>
    </div>
  \`;
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: any) => {
  // We handle the event here to update the external textarea in the story
  const handleUpdate = (e: CustomEvent) => {
    const area = document.getElementById('story-json-output') as HTMLTextAreaElement;
    if (area) {
      area.value = JSON.stringify(e.detail.data, null, 2);
    }
  };
  return html\`
    <style>
      .story-container { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
      textarea { width: 100%; max-width: 600px; height: 150px; font-family: monospace; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
      h3 { margin-bottom: 0.5rem; color: #333; }
    </style>

    <div class="story-container" style="--click-color: \${args.selectionColor || '#ff6961'}">
      <og-dontogram 
        .mode=\${args.mode} 
        .chartData=\${args.chartData || {}}
        @odontogram-change=\${handleUpdate}>
      </og-dontogram>

      <div>
        <h3>Exported Patient Data (External)</h3>
        <textarea id="story-json-output" readonly placeholder="Click a tooth to generate JSON..."></textarea>
      </div>
    </div>
  \`;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: any) => {
  // We handle the event here to update the external textarea in the story
  const handleUpdate = (e: CustomEvent) => {
    const area = document.getElementById('story-json-output') as HTMLTextAreaElement;
    if (area) {
      area.value = JSON.stringify(e.detail.data, null, 2);
    }
  };
  return html\`
    <style>
      .story-container { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
      textarea { width: 100%; max-width: 600px; height: 150px; font-family: monospace; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
      h3 { margin-bottom: 0.5rem; color: #333; }
    </style>

    <div class="story-container" style="--click-color: \${args.selectionColor || '#ff6961'}">
      <og-dontogram 
        .mode=\${args.mode} 
        .chartData=\${args.chartData || {}}
        @odontogram-change=\${handleUpdate}>
      </og-dontogram>

      <div>
        <h3>Exported Patient Data (External)</h3>
        <textarea id="story-json-output" readonly placeholder="Click a tooth to generate JSON..."></textarea>
      </div>
    </div>
  \`;
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: any) => {
  // We handle the event here to update the external textarea in the story
  const handleUpdate = (e: CustomEvent) => {
    const area = document.getElementById('story-json-output') as HTMLTextAreaElement;
    if (area) {
      area.value = JSON.stringify(e.detail.data, null, 2);
    }
  };
  return html\`
    <style>
      .story-container { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
      textarea { width: 100%; max-width: 600px; height: 150px; font-family: monospace; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
      h3 { margin-bottom: 0.5rem; color: #333; }
    </style>

    <div class="story-container" style="--click-color: \${args.selectionColor || '#ff6961'}">
      <og-dontogram 
        .mode=\${args.mode} 
        .chartData=\${args.chartData || {}}
        @odontogram-change=\${handleUpdate}>
      </og-dontogram>

      <div>
        <h3>Exported Patient Data (External)</h3>
        <textarea id="story-json-output" readonly placeholder="Click a tooth to generate JSON..."></textarea>
      </div>
    </div>
  \`;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: any) => {
  // We handle the event here to update the external textarea in the story
  const handleUpdate = (e: CustomEvent) => {
    const area = document.getElementById('story-json-output') as HTMLTextAreaElement;
    if (area) {
      area.value = JSON.stringify(e.detail.data, null, 2);
    }
  };
  return html\`
    <style>
      .story-container { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
      textarea { width: 100%; max-width: 600px; height: 150px; font-family: monospace; padding: 10px; border-radius: 8px; border: 1px solid #ccc; }
      h3 { margin-bottom: 0.5rem; color: #333; }
    </style>

    <div class="story-container" style="--click-color: \${args.selectionColor || '#ff6961'}">
      <og-dontogram 
        .mode=\${args.mode} 
        .chartData=\${args.chartData || {}}
        @odontogram-change=\${handleUpdate}>
      </og-dontogram>

      <div>
        <h3>Exported Patient Data (External)</h3>
        <textarea id="story-json-output" readonly placeholder="Click a tooth to generate JSON..."></textarea>
      </div>
    </div>
  \`;
}`,...o.parameters?.docs?.source}}};const h=["Template","Adult","Pediatric","Senior","PreFilled"];export{t as Adult,a as Pediatric,o as PreFilled,n as Senior,e as Template,h as __namedExportsOrder,g as default};
