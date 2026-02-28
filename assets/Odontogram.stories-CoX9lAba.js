import{b as r}from"./iframe-Czt6bsrN.js";import"./og-odontogram-De7ED45P.js";import"./preload-helper-PPVm8Dsz.js";var o=Object.freeze,i=Object.defineProperty,s=(t,l)=>o(i(t,"raw",{value:o(t.slice())})),n;const g={title:"Dental/OgDontogram",component:"og-dontogram",argTypes:{notation:{control:{type:"select"},options:["FDI","Universal"],description:"The numbering system to use"}}},d={16:{center:"cavity",top:"healthy",right:"healthy",left:"healthy",bottom:"healthy"},11:{center:"filled",top:"healthy",right:"healthy",left:"healthy",bottom:"healthy"},24:{center:"healthy",top:"cavity",right:"healthy",left:"healthy",bottom:"healthy"}},e={args:{notation:"FDI",chartData:{}},render:t=>r(n||(n=s([`
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
<\/script>
    </div>
  `])))},a={args:{notation:"FDI",chartData:d},render:t=>r`
    <og-dontogram 
      .notation=${t.notation} 
      .chartData=${t.chartData}>
    </og-dontogram>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    notation: 'FDI',
    chartData: {}
  },
  render: args => html\`
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
<\/script>
    </div>
  \`
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    notation: 'FDI',
    chartData: mockData
  },
  render: args => html\`
    <og-dontogram 
      .notation=\${args.notation} 
      .chartData=\${args.chartData}>
    </og-dontogram>
  \`
}`,...a.parameters?.docs?.source}}};const p=["Default","WithPreexistingConditions"];export{e as Default,a as WithPreexistingConditions,p as __namedExportsOrder,g as default};
