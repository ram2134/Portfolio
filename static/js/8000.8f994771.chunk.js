"use strict";(self.webpackChunkportfolio_project=self.webpackChunkportfolio_project||[]).push([[8e3],{8e3:(t,c,i)=>{i.d(c,{clickAttract:()=>s,hoverAttract:()=>u});var e=i(4409);const n=1,o=1,a=0;function r(t,c,i,a,r){const s=t.actualOptions.interactivity.modes.attract;if(!s)return;const u=t.particles.quadTree.query(a,r);for(const l of u){const{dx:t,dy:a,distance:r}=(0,e.vr)(l.position,c),u=s.speed*s.factor,p=(0,e.qE)((0,e.il)(s.easing)(o-r/i)*u,n,s.maxSpeed),f=e.Mi.create(r?t/r*p:u,r?a/r*p:u);l.position.subFrom(f)}}function s(t,c){t.attract||(t.attract={particles:[]});const{attract:i}=t;if(i.finish||(i.count||(i.count=0),i.count++,i.count===t.particles.count&&(i.finish=!0)),i.clicking){const i=t.interactivity.mouse.clickPosition,n=t.retina.attractModeDistance;if(!n||n<a||!i)return;r(t,i,n,new e.jl(i.x,i.y,n),(t=>c(t)))}else!1===i.clicking&&(i.particles=[])}function u(t,c){const i=t.interactivity.mouse.position,n=t.retina.attractModeDistance;!n||n<a||!i||r(t,i,n,new e.jl(i.x,i.y,n),(t=>c(t)))}}}]);
//# sourceMappingURL=8000.8f994771.chunk.js.map