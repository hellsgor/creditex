!function(){var t={165:function(){document.querySelectorAll(".card-issued__numbers").forEach((t=>{const e=Array.from(t.querySelectorAll("span"))[2];e.textContent=new Intl.NumberFormat("ru-RU").format(Number(e.textContent))}))}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}!function(){"use strict";function t(t,e,n,a,o){const r=t%100;let l;if(r>=11&&r<=19)l=a;else switch(t%10){case 1:l=e;break;case 2:case 3:case 4:l=n;break;default:l=a}return o?`${t} ${l}`:l}function e(e,n){return n?t(Number(e),"месяц","месяца","месяцев",!0):Number(e).toLocaleString("ru-RU",{style:"decimal"})}function a(t,n,a){n.value=e(t.value,"true"===t.dataset.isYears),a.style.width=function(t){return(t.value-t.min)/(t.max-t.min)*100+"%"}(t)}document.querySelectorAll('input[type="tel"]').forEach((t=>{!function(){function t(t){return t.value.replace(/\D/g,"")}function e(e){const n=e.target,a=t(n),o=e.clipboardData||window.clipboardData;if(o){const t=o.getData("Text");/\D/g.test(t)&&(n.value=a)}}function n(e){const n=e.target;let a=t(n);const{selectionStart:o}=n;let r="";if(!a)return n.value="","";if(n.value.length===o){if(["7","8","9"].indexOf(a[0])>-1){"9"===a[0]&&(a=`7${a}`);const t=(a[0],"+7");r=`${t} `,n.value=`${t} `,a.length>1&&(r+=`(${a.substring(1,4)}`),a.length>=5&&(r+=`) ${a.substring(4,7)}`),a.length>=8&&(r+=`-${a.substring(7,9)}`),a.length>=10&&(r+=`-${a.substring(9,11)}`)}else r=`+${a.substring(0,16)}`;n.value=r}else e.data&&/\D/g.test(e.data)&&(n.value=a)}function a(t){const e=t.target.value.replace(/\D/g,"");8===t.keyCode&&1===e.length&&(t.target.value="")}document.querySelectorAll('input[type="tel"]').forEach((t=>{t.addEventListener("keydown",a),t.addEventListener("input",n,!1),t.addEventListener("paste",e,!1)}))}()})),n(165),document.querySelectorAll(".range").forEach((n=>{const o=n.querySelector('input[type="text"]'),r=n.querySelector('input[type="range"]'),l=n.querySelector(".range__custom-track"),u=n.querySelector(".range__min"),c=n.querySelector(".range__max");"true"===r.dataset.isYears&&(r.min*=12,r.max*=12,r.dataset.startValue*=12),[u,c].forEach((t=>{t.textContent=e(t.textContent)})),r.dataset.startValue&&(r.value=r.dataset.startValue),a(r,o,l),n.querySelectorAll(".range__postfix").forEach((e=>{e.textContent=t(Number(e.dataset.minPostfix?n.querySelector(".range__min").textContent:n.querySelector(".range__max").textContent),o.dataset.pluralizeOne,o.dataset.pluralizeTwo,o.dataset.pluralizeFive,!1)})),["input","change"].forEach((t=>{r.addEventListener(t,(()=>{a(r,o,l)}))}))}));const o="range-control-calculator-amount",r="range-control-calculator-payment",l="range-control-calculator-term";function u(t,e){const n=.0075,a=e,o=n*1.0075**a/(1.0075**a-1),r=[];let l=t,u=0;for(let e=1;e<=a;e++){const a=l*n,c=o*t-a;l-=c;const s=c+a;r.push({month:e,mainDebt:`${(c/s*100).toFixed(2)}%`,percents:`${(a/s*100).toFixed(2)}%`,paymentAmount:s.toFixed(2),principalPayment:c.toFixed(2),interestPayment:a.toFixed(2)}),u+=s}return{loanAmount:t,loanTerm:e,totalLoanWithInterest:u.toFixed(2),payments:r}}let c=!1;function s(t,e){console.log(e),0!==t.childElementCount&&(t.innerHTML=""),e.payments.forEach((e=>{const n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");n.classList.add("calculator__payment-column"),a.classList.add("calculator__main-debt"),a.style.height=`${e.mainDebt}`,o.classList.add("calculator__percent-column"),o.style.height=`${e.percents}`,n.append(o),n.append(a),t.append(n)}))}const i=document.getElementById("calculator-graph"),m={amountControl:document.getElementById(o),paymentControl:document.getElementById(r),termControl:document.getElementById(l)};s(i,function(t,e,n){const a=u(t.value,n.value);return e.value=Number(a.payments[0].paymentAmount),e.dispatchEvent(new Event("change")),a}(m.amountControl,m.paymentControl,m.termControl)),[m.amountControl,m.paymentControl,m.termControl].forEach((t=>{t&&(t.addEventListener("input",(t=>{!function(t,e){let n={};switch(n=u(e.amountControl.value,e.termControl.value),t.target.name){case o:e.paymentControl.value=u(e.amountControl.value,e.termControl.value).payments[0].paymentAmount,e.paymentControl.dispatchEvent(new Event("input"));break;case r:!function(t,e,n,a){if(c)return;c=!0;const o=Number(u(e.value,n.value).loanTerm);n.max>=o&&n.min<=o?(n.value=Math.ceil(e.value/t),n.dispatchEvent(new Event("input"))):(o>n.max||o<n.min)&&(e.value=n.value*t,e.dispatchEvent(new Event("input"))),c=!1}(t.target.value,e.amountControl,e.termControl);break;default:e.paymentControl.value=u(e.amountControl.value,e.termControl.value).payments[0].paymentAmount,e.paymentControl.dispatchEvent(new Event("input"))}}(t,m)})),t.addEventListener("change",(()=>{s(i,u(Number(m.amountControl.value),Number(m.termControl.value)))})))}))}()}();