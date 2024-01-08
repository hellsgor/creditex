!function(){"use strict";function e(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;function t(e){return e.value.replace(/\D/g,"")}function r(e){const r=e.target,o=t(r),n=e.clipboardData||window.clipboardData;if(n){const e=n.getData("Text");/\D/g.test(e)&&(r.value=o)}}function o(e){const r=e.target;let o=t(r);const{selectionStart:n}=r;let l="";if(!o)return r.value="","";if(r.value.length===n){if(["7","8","9"].indexOf(o[0])>-1){"9"===o[0]&&(o=`7${o}`);const e=(o[0],"+7");l=`${e} `,r.value=`${e} `,o.length>1&&(l+=`(${o.substring(1,4)}`),o.length>=5&&(l+=`) ${o.substring(4,7)}`),o.length>=8&&(l+=`-${o.substring(7,9)}`),o.length>=10&&(l+=`-${o.substring(9,11)}`)}else l=`+${o.substring(0,16)}`;r.value=l}else e.data&&/\D/g.test(e.data)&&(r.value=o)}function n(e){const t=e.target.value.replace(/\D/g,"");8===e.keyCode&&1===t.length&&(e.target.value="")}let l=[];l=e||document.querySelectorAll('input[type="tel"]'),l.forEach((e=>{e.addEventListener("keydown",n),e.addEventListener("input",o,!1),e.addEventListener("paste",r,!1)}))}e();function t(e){if("checkbox"===e.type||"hidden"===e.type)return null;let t=null;return"radio"!==e.type?e.closest(".form-control")?t=e.closest(".form-control").querySelector(".form-control__error"):e.closest(".form-select")?t=e.closest(".form-select").querySelector(".form-select__error"):e.closest(".form-file-upload")&&(t=e.closest(".form-file-upload").querySelector(".form-file-upload__error")):"radio"===e.type&&(t=e.closest(".form-radio").querySelector(".error")),t}function r(e){let t;return Array.isArray(e)&&(t=new FormData,e.forEach((e=>{e.setAttribute("readonly",""),t.append(e.name,e.value)}))),Array.isArray(e)||null===e||"object"!=typeof e||(t=new FormData(e)),t}async function o(e,t,r,o){let n=null;const l={method:e};"POST"===e&&(l.body=t);try{const e=await fetch(r,l);return o&&(e.redirected&&(window.location.href=e.url),n=await e.json()),n}catch(e){return console.error(e),n}}function n(e,r){const o=t(r);o&&(o.textContent=e,o.classList.add("error_block","error_fade"))}const l={VALID_PHONE:/^\+?\d{11,13}$/,VALID_EMAIL:/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/i,VALID_PASSPORT_SERIES:/^\d{4}$/,VALID_PASSPORT_NUMBER:/^\d{6}$/,VALID_DATE:/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/};function a(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(Array.isArray(t))t.forEach((t=>{t.removeAttribute("readonly"),e["error-info"].forEach((e=>{e["control-name"]===t.name?n(e["control-name"]===t.name?e["error-text"]:"Неизвестная ошибка",t):!r||void 0!==e["control-name"]&&"undefined"!==e["control-name"]||n("Неверный логин или пароль",r)}))}));else{const o=[];t.querySelectorAll("input").forEach((e=>{o.push(e)})),t.querySelectorAll("select").forEach((e=>{o.push(e)})),a(e,o,r)}}function s(e,t){(function(e){return!(!e.status||"success"!==e.status)})(e)||a(e,t)}const c=document.getElementById("restore-password-request-form"),u=document.getElementById("restore-password-phone-number");e(),u.addEventListener("input",(()=>{!function(e){const r=t(e);r&&r.classList.contains("error_fade")&&r.classList.contains("error_block")&&(r.classList.remove("error_fade"),r.classList.remove("error_block"),r.textContent="")}(u)})),document.getElementById("restore-password-request-forward-button").addEventListener("click",(e=>{var t;e.preventDefault(),t=u,l.VALID_PHONE.test(t.value.toString().replace(/[^\d]/g,""))?async function(e,t,n,l,a){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;const c=r(e),u=await o(t,c,n,a);l(u,e,s)}(c,c.method,c.action,s,!0):n("Некорректный номер телефона",u)}))}();