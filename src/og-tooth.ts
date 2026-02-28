import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Shared Interface for Type Safety
export interface ToothSurfaces {
    vestibular: boolean;
    distal: boolean;
    palatine: boolean;
    mesial: boolean;
    occlusal: boolean;
}

@customElement('og-tooth')
export class OgTooth extends LitElement {
    @property({ type: String }) toothId = '';
    @property({ type: String }) colorClick = '#ff6961';

    @property({ type: Object })
    selections: ToothSurfaces = {
        vestibular: false, distal: false, palatine: false, mesial: false, occlusal: false
    };

    private _toggle(surface: keyof ToothSurfaces, clickFn: string, unclickFn: string) {
        const isSelected = !this.selections[surface];

        // Create new object for Lit reactivity
        this.selections = { ...this.selections, [surface]: isSelected };

        const eventName = isSelected ? clickFn : unclickFn;
        this.dispatchEvent(new CustomEvent(eventName, {
            detail: { toothId: this.toothId, surface, state: isSelected },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
      <div class="tooth-container">
        <span class="label">${this.toothId}</span>
        <div class="tooth-relative">
          <div class="surface top ${this.selections.vestibular ? 'selected' : ''}" 
            @click=${() => this._toggle('vestibular', 'vestibularC', 'vestibularU')}></div>
          
          <div class="surface left ${this.selections.distal ? 'selected' : ''}" 
            @click=${() => this._toggle('distal', 'distalC', 'distalU')}></div>

          <div class="surface bottom ${this.selections.palatine ? 'selected' : ''}" 
            @click=${() => this._toggle('palatine', 'palatineC', 'palatineU')}></div>

          <div class="surface right ${this.selections.mesial ? 'selected' : ''}" 
            @click=${() => this._toggle('mesial', 'mesialC', 'mesialU')}></div>

          <div class="surface center ${this.selections.occlusal ? 'selected' : ''}" 
            @click=${() => this._toggle('occlusal', 'occlusalC', 'occlusalU')}></div>
        </div>
      </div>
    `;
    }

    static styles = css`
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
  `;
}