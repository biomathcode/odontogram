import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ToothSurfaces } from './og-tooth';
import './og-tooth';

export type PatientMode = 'adult' | 'baby' | 'old';

@customElement('og-odontogram')
export class OgOdontogram extends LitElement {
    @property({ type: String }) mode: PatientMode = 'adult';
    @property({ type: Object }) chartData: Record<string, ToothSurfaces> = {};
    @state() private teethState: Record<string, ToothSurfaces> = {};

    // FDI Tooth Layouts
    private layouts = {
        adult: {
            upperRight: [18, 17, 16, 15, 14, 13, 12, 11],
            upperLeft: [21, 22, 23, 24, 25, 26, 27, 28],
            lowerRight: [48, 47, 46, 45, 44, 43, 42, 41],
            lowerLeft: [31, 32, 33, 34, 35, 36, 37, 38]
        },
        baby: {
            upperRight: [55, 54, 53, 52, 51],
            upperLeft: [61, 62, 63, 64, 65],
            lowerRight: [85, 84, 83, 82, 81],
            lowerLeft: [71, 72, 73, 74, 75]
        },
        old: {
            // Typically adult layout, but maybe we exclude wisdom teeth (18, 28, 38, 48)
            upperRight: [17, 16, 15, 14, 13, 12, 11],
            upperLeft: [21, 22, 23, 24, 25, 26, 27],
            lowerRight: [47, 46, 45, 44, 43, 42, 41],
            lowerLeft: [31, 32, 33, 34, 35, 36, 37]
        }
    };

    willUpdate(changedProperties: Map<string, any>) {
        if (changedProperties.has('chartData')) {
            this.teethState = { ...this.chartData };
        }
    }

    private _updateState(id: number, region: keyof ToothSurfaces, value: boolean) {
        const toothId = id.toString();
        const newState = { ...this.teethState };
        if (!newState[toothId]) {
            newState[toothId] = { vestibular: false, distal: false, palatine: false, mesial: false, occlusal: false };
        }
        newState[toothId] = { ...newState[toothId], [region]: value };
        this.teethState = newState;

        this.dispatchEvent(new CustomEvent('odontogram-change', {
            detail: { data: this.teethState, mode: this.mode },
            bubbles: true,
            composed: true
        }));
    }

    renderTooth(id: number) {
        const state = this.teethState[id.toString()] || {
            vestibular: false, distal: false, palatine: false, mesial: false, occlusal: false
        };

        return html`
      <og-tooth 
        .toothId=${id.toString()} 
        .selections=${state}
        @vestibularC=${() => this._updateState(id, 'vestibular', true)}
        @vestibularU=${() => this._updateState(id, 'vestibular', false)}
        @distalC=${() => this._updateState(id, 'distal', true)}
        @distalU=${() => this._updateState(id, 'distal', false)}
        @palatineC=${() => this._updateState(id, 'palatine', true)}
        @palatineU=${() => this._updateState(id, 'palatine', false)}
        @mesialC=${() => this._updateState(id, 'mesial', true)}
        @mesialU=${() => this._updateState(id, 'mesial', false)}
        @occlusalC=${() => this._updateState(id, 'occlusal', true)}
        @occlusalU=${() => this._updateState(id, 'occlusal', false)}
      ></og-tooth>
    `;
    }

    render() {
        const layout = this.layouts[this.mode] || this.layouts.adult;

        return html`
      <div class="odontogram-wrapper mode-${this.mode}">
        <div class="arch">
          <div class="quadrant">${layout.upperRight.map(id => this.renderTooth(id))}</div>
          <div class="quadrant">${layout.upperLeft.map(id => this.renderTooth(id))}</div>
        </div>
        <div class="arch">
          <div class="quadrant">${layout.lowerRight.map(id => this.renderTooth(id))}</div>
          <div class="quadrant">${layout.lowerLeft.map(id => this.renderTooth(id))}</div>
        </div>
      </div>
    `;
    }

    static styles = css`
    :host { display: block; padding: 20px; }
    .odontogram-wrapper { display: flex; flex-direction: column; gap: 40px; align-items: center; }
    .arch { display: flex; gap: 40px; }
    .quadrant { display: flex; gap: 4px; }
    
    /* You can add specific colors or spacing per mode if you want */
    .mode-baby { gap: 20px; }
    .mode-baby og-tooth { transform: scale(0.9); }
  `;
}