"use strict";(self.webpackChunkportfolio_project=self.webpackChunkportfolio_project||[]).push([[2080],{2080:(e,t,o)=>{o.d(t,{EmojiDrawer:()=>s});var i=o(4409),n=o(6682);const a='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class s{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[e,t]of this._emojiShapeDict)t instanceof ImageBitmap&&(null===t||void 0===t||t.close(),this._emojiShapeDict.delete(e))}async draw(e){const{drawEmoji:t}=await o.e(9074).then(o.bind(o,9074));t(e)}async init(e){const t=e.actualOptions;if(!n.u.find((e=>(0,i.hn)(e,t.particles.shape.type))))return;const o=[(0,i.Al)(a)],s=n.u.map((e=>t.particles.shape.options[e])).find((e=>!!e));s&&(0,i.wJ)(s,(e=>{e.font&&o.push((0,i.Al)(e.font))})),await Promise.all(o)}particleDestroy(e){delete e.emojiData}async particleInit(e,t){var o;const n=t.shapeData;if(null===n||void 0===n||!n.value)return;const s=(0,i.TA)(n.value,t.randomIndexData),c=null!==(o=n.font)&&void 0!==o?o:a;if(!s)return;const l="".concat(s,"_").concat(c),r=this._emojiShapeDict.get(l);if(r)return void(t.emojiData=r);const p=2*(0,i.W9)(t.size.value);let f;const m=(0,i.W9)(t.size.value);if("undefined"!==typeof OffscreenCanvas){const e=new OffscreenCanvas(p,p),t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*m,"px ").concat(c),t.textBaseline="middle",t.textAlign="center",t.fillText(s,m,m),f=e.transferToImageBitmap()}else{const e=document.createElement("canvas");e.width=p,e.height=p;const t=e.getContext("2d");if(!t)return;t.font="400 ".concat(2*m,"px ").concat(c),t.textBaseline="middle",t.textAlign="center",t.fillText(s,m,m),f=e}this._emojiShapeDict.set(l,f),t.emojiData=f,await Promise.resolve()}}}}]);
//# sourceMappingURL=2080.30f857d1.chunk.js.map