import{f as m,u as y,i as g,a as v,b as f}from"./iframe-Czt6bsrN.js";const b=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};const $={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:m},_=(t=$,e,o)=>{const{kind:a,metadata:s}=o;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(o.name,t),a==="accessor"){const{name:r}=o;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,u,t,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,t,l),l}}}if(a==="setter"){const{name:r}=o;return function(l){const u=this[r];e.call(this,l),this.requestUpdate(r,u,t,!0,l)}}throw Error("Unsupported decorator location: "+a)};function d(t){return(e,o)=>typeof o=="object"?_(t,e,o):((a,s,i)=>{const r=s.hasOwnProperty(i);return s.constructor.createProperty(i,a),r?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,o)}function w(t){return d({...t,state:!0,attribute:!1})}var S=Object.defineProperty,x=Object.getOwnPropertyDescriptor,p=(t,e,o,a)=>{for(var s=a>1?void 0:a?x(e,o):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(s=(a?r(e,o,s):r(s))||s);return a&&s&&S(e,o,s),s};let c=class extends v{constructor(){super(...arguments),this.toothId="",this.colorClick="#ff6961",this.selections={vestibular:!1,distal:!1,palatine:!1,mesial:!1,occlusal:!1}}_toggle(t,e,o){const a=!this.selections[t];this.selections={...this.selections,[t]:a};const s=a?e:o;this.dispatchEvent(new CustomEvent(s,{detail:{toothId:this.toothId,surface:t,state:a},bubbles:!0,composed:!0}))}render(){return f`
      <div class="tooth-container">
        <span class="label">${this.toothId}</span>
        <div class="tooth-relative">
          <div class="surface top ${this.selections.vestibular?"selected":""}" 
            @click=${()=>this._toggle("vestibular","vestibularC","vestibularU")}></div>
          
          <div class="surface left ${this.selections.distal?"selected":""}" 
            @click=${()=>this._toggle("distal","distalC","distalU")}></div>

          <div class="surface bottom ${this.selections.palatine?"selected":""}" 
            @click=${()=>this._toggle("palatine","palatineC","palatineU")}></div>

          <div class="surface right ${this.selections.mesial?"selected":""}" 
            @click=${()=>this._toggle("mesial","mesialC","mesialU")}></div>

          <div class="surface center ${this.selections.occlusal?"selected":""}" 
            @click=${()=>this._toggle("occlusal","occlusalC","occlusalU")}></div>
        </div>
      </div>
    `}};c.styles=g`
    .tooth-container { display: flex; flex-direction: column; align-items: center; width: 50px; }
    .label { font-size: 12px; margin-bottom: 5px; font-weight: bold; color: #333; }
    .tooth-relative { position: relative; width: 44px; height: 44px; background: #eee; }
    .surface {
      position: absolute; width: 20px; height: 20px; outline: 2px solid #000;
      background-color: #fff; cursor: pointer; box-sizing: border-box; transition: background-color 0.2s;
    }
    .selected { background-color: var(--click-color, #ff6961) !important; }
    .top    { top: 0; left: 0; border-top-left-radius: 100%; }
    .left   { bottom: 0; left: 0; border-bottom-left-radius: 100%; }
    .bottom { bottom: 0; right: 0; border-bottom-right-radius: 100%; }
    .right  { top: 0; right: 0; border-top-right-radius: 100%; }
    .center { top: 25%; right: 25%; border-radius: 50%; z-index: 2; }
  `;p([d({type:String})],c.prototype,"toothId",2);p([d({type:String})],c.prototype,"colorClick",2);p([d({type:Object})],c.prototype,"selections",2);c=p([b("og-tooth")],c);var C=Object.defineProperty,O=Object.getOwnPropertyDescriptor,h=(t,e,o,a)=>{for(var s=a>1?void 0:a?O(e,o):e,i=t.length-1,r;i>=0;i--)(r=t[i])&&(s=(a?r(e,o,s):r(s))||s);return a&&s&&C(e,o,s),s};let n=class extends v{constructor(){super(...arguments),this.mode="adult",this.chartData={},this.teethState={},this.layouts={adult:{upperRight:[18,17,16,15,14,13,12,11],upperLeft:[21,22,23,24,25,26,27,28],lowerRight:[48,47,46,45,44,43,42,41],lowerLeft:[31,32,33,34,35,36,37,38]},baby:{upperRight:[55,54,53,52,51],upperLeft:[61,62,63,64,65],lowerRight:[85,84,83,82,81],lowerLeft:[71,72,73,74,75]},old:{upperRight:[17,16,15,14,13,12,11],upperLeft:[21,22,23,24,25,26,27],lowerRight:[47,46,45,44,43,42,41],lowerLeft:[31,32,33,34,35,36,37]}}}willUpdate(t){t.has("chartData")&&(this.teethState={...this.chartData})}_updateState(t,e,o){const a=t.toString(),s={...this.teethState};s[a]||(s[a]={vestibular:!1,distal:!1,palatine:!1,mesial:!1,occlusal:!1}),s[a]={...s[a],[e]:o},this.teethState=s,this.dispatchEvent(new CustomEvent("odontogram-change",{detail:{data:this.teethState,mode:this.mode},bubbles:!0,composed:!0}))}renderTooth(t){const e=this.teethState[t.toString()]||{vestibular:!1,distal:!1,palatine:!1,mesial:!1,occlusal:!1};return f`
      <og-tooth 
        .toothId=${t.toString()} 
        .selections=${e}
        @vestibularC=${()=>this._updateState(t,"vestibular",!0)}
        @vestibularU=${()=>this._updateState(t,"vestibular",!1)}
        @distalC=${()=>this._updateState(t,"distal",!0)}
        @distalU=${()=>this._updateState(t,"distal",!1)}
        @palatineC=${()=>this._updateState(t,"palatine",!0)}
        @palatineU=${()=>this._updateState(t,"palatine",!1)}
        @mesialC=${()=>this._updateState(t,"mesial",!0)}
        @mesialU=${()=>this._updateState(t,"mesial",!1)}
        @occlusalC=${()=>this._updateState(t,"occlusal",!0)}
        @occlusalU=${()=>this._updateState(t,"occlusal",!1)}
      ></og-tooth>
    `}render(){const t=this.layouts[this.mode]||this.layouts.adult;return f`
      <div class="odontogram-wrapper mode-${this.mode}">
        <div class="arch">
          <div class="quadrant">${t.upperRight.map(e=>this.renderTooth(e))}</div>
          <div class="quadrant">${t.upperLeft.map(e=>this.renderTooth(e))}</div>
        </div>
        <div class="arch">
          <div class="quadrant">${t.lowerRight.map(e=>this.renderTooth(e))}</div>
          <div class="quadrant">${t.lowerLeft.map(e=>this.renderTooth(e))}</div>
        </div>
      </div>
    `}};n.styles=g`
    :host { display: block; padding: 20px; }
    .odontogram-wrapper { display: flex; flex-direction: column; gap: 40px; align-items: center; }
    .arch { display: flex; gap: 40px; }
    .quadrant { display: flex; gap: 4px; }
    
    /* You can add specific colors or spacing per mode if you want */
    .mode-baby { gap: 20px; }
    .mode-baby og-tooth { transform: scale(0.9); }
  `;h([d({type:String})],n.prototype,"mode",2);h([d({type:Object})],n.prototype,"chartData",2);h([w()],n.prototype,"teethState",2);n=h([b("og-dontogram")],n);
