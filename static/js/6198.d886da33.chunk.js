"use strict";(self.webpackChunkportfolio_project=self.webpackChunkportfolio_project||[]).push([[6198],{6198:(t,i,o)=>{o.d(i,{Grabber:()=>a});var n=o(4409),e=o(5582);function r(t,i,o,e,r){t.canvas.draw((t=>{var a;const s=i.getPosition();!function(t,i,o,e,r,a){(0,n.V6)(t,o,e),t.strokeStyle=(0,n.xx)(r,a),t.lineWidth=i,t.stroke()}(t,null!==(a=i.retina.linksWidth)&&void 0!==a?a:0,s,r,o,e)}))}class a extends n.sJ{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.grab;i&&(t.retina.grabModeDistance=i.distance*t.retina.pixelRatio)}async interact(){const t=this.container,i=t.actualOptions.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==n.Rb)return;const o=t.interactivity.mouse.position;if(!o)return;const e=t.retina.grabModeDistance;if(!e||e<0)return;const a=t.particles.quadTree.queryCircle(o,e,(t=>this.isEnabled(t)));for(const l of a){var s,c;const a=l.getPosition(),d=(0,n.Yf)(a,o);if(d>e)continue;const v=i.modes.grab.links,u=v.opacity,b=u-d*u/e;if(b<=0)continue;const p=null!==(s=v.color)&&void 0!==s?s:null===(c=l.options.links)||void 0===c?void 0:c.color;if(!t.particles.grabLineColor&&p){const o=i.modes.grab.links;t.particles.grabLineColor=(0,n.PG)(p,o.blink,o.consent)}const f=(0,n._h)(l,void 0,t.particles.grabLineColor);f&&r(t,l,f,b,o)}await Promise.resolve()}isEnabled(t){var i;const o=this.container,e=o.interactivity.mouse,r=(null!==(i=null===t||void 0===t?void 0:t.interactivity)&&void 0!==i?i:o.actualOptions.interactivity).events;return r.onHover.enable&&!!e.position&&(0,n.hn)("grab",r.onHover.mode)}loadModeOptions(t){t.grab||(t.grab=new e.f);for(var i=arguments.length,o=new Array(i>1?i-1:0),n=1;n<i;n++)o[n-1]=arguments[n];for(const e of o)t.grab.load(null===e||void 0===e?void 0:e.grab)}reset(){}}}}]);
//# sourceMappingURL=6198.d886da33.chunk.js.map