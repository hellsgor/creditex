!function(){"use strict";function e(){function e(e){return e.value.replace(/\D/g,"")}function t(t){const a=t.target,n=e(a),r=t.clipboardData||window.clipboardData;if(r){const e=r.getData("Text");/\D/g.test(e)&&(a.value=n)}}function a(t){const a=t.target;let n=e(a);const{selectionStart:r}=a;let u="";if(!n)return a.value="","";if(a.value.length===r){if(["7","8","9"].indexOf(n[0])>-1){"9"===n[0]&&(n=`7${n}`);const e=(n[0],"+7");u=`${e} `,a.value=`${e} `,n.length>1&&(u+=`(${n.substring(1,4)}`),n.length>=5&&(u+=`) ${n.substring(4,7)}`),n.length>=8&&(u+=`-${n.substring(7,9)}`),n.length>=10&&(u+=`-${n.substring(9,11)}`)}else u=`+${n.substring(0,16)}`;a.value=u}else t.data&&/\D/g.test(t.data)&&(a.value=n)}function n(e){const t=e.target.value.replace(/\D/g,"");8===e.keyCode&&1===t.length&&(e.target.value="")}document.querySelectorAll('input[type="tel"]').forEach((e=>{e.addEventListener("keydown",n),e.addEventListener("input",a,!1),e.addEventListener("paste",t,!1)}))}function t(e,t,a,n,r){const u=e%100;let l;if(u>=11&&u<=19)l=n;else switch(e%10){case 1:l=t;break;case 2:case 3:case 4:l=a;break;default:l=n}return r?`${e} ${l}`:l}function a(e,a){const n=e.toString().replace(/\s/g,"");return a?t(Number(n),"месяц","месяца","месяцев",!0):Number(n).toLocaleString("ru-RU",{style:"decimal"})}function n(e,t,n){t.value=a(e.value,"true"===e.dataset.isYears),n.style.width=function(e){return(e.value-e.min)/(e.max-e.min)*100+"%"}(e)}e(),document.querySelectorAll(".range").forEach((e=>{const r=e.querySelector('input[type="text"]'),u=e.querySelector('input[type="range"]'),l=e.querySelector(".range__custom-track"),s=e.querySelector(".range__min"),o=e.querySelector(".range__max");"true"===u.dataset.isYears&&(u.min*=12,u.max*=12,u.dataset.startValue*=12),[s,o].forEach((e=>{e.textContent=a(e.textContent)})),u.dataset.startValue&&(u.value=u.dataset.startValue),n(u,r,l),e.querySelectorAll(".range__postfix").forEach((a=>{a.textContent=t(Number(a.dataset.minPostfix?e.querySelector(".range__min").textContent:e.querySelector(".range__max").textContent),r.dataset.pluralizeOne,r.dataset.pluralizeTwo,r.dataset.pluralizeFive,!1)})),["input","change"].forEach((e=>{u.addEventListener(e,(()=>{n(u,r,l)}))}))})),document.querySelectorAll('input[type="tel"]').forEach((t=>{e()}))}();