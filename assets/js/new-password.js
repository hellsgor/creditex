!function(){var e={4110:function(){document.querySelectorAll('input[type="password"]').forEach((e=>{const r=e.closest(".form-control").querySelector(".form-control__password-toggle");r.addEventListener("click",(()=>{"password"===e.type?(r.classList.remove("form-control__password-toggle_password"),e.type="text"):(r.classList.add("form-control__password-toggle_password"),e.type="password")}))}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var s=r[o]={exports:{}};return e[o](s,s.exports,t),s.exports}!function(){"use strict";const e="new-password-confirmation-code",r="new-password-password",o="new-password-password-repeat";function n(e){if("checkbox"===e.type||"hidden"===e.type)return null;let r=null;return"radio"!==e.type?e.closest(".form-control")?r=e.closest(".form-control").querySelector(".form-control__error"):e.closest(".form-select")?r=e.closest(".form-select").querySelector(".form-select__error"):e.closest(".form-file-upload")&&(r=e.closest(".form-file-upload").querySelector(".form-file-upload__error")):"radio"===e.type&&(r=e.closest(".form-radio").querySelector(".error")),r}function s(e,r){const t=n(r);t&&(t.textContent=e,t.classList.add("error_block","error_fade"))}function c(e){let r;return Array.isArray(e)&&(r=new FormData,e.forEach((e=>{e.setAttribute("readonly",""),r.append(e.name,e.value)}))),Array.isArray(e)||null===e||"object"!=typeof e||(r=new FormData(e)),r}async function l(e,r,t,o){let n=null;const s={method:e};"POST"===e&&(s.body=r);try{const e=await fetch(t,s);return o&&(e.redirected&&(window.location.href=e.url),n=await e.json()),n}catch(e){return console.error(e),n}}function a(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(Array.isArray(r))r.forEach((r=>{r.removeAttribute("readonly"),e["error-info"].forEach((e=>{e["control-name"]===r.name?s(e["control-name"]===r.name?e["error-text"]:"Неизвестная ошибка",r):!t||void 0!==e["control-name"]&&"undefined"!==e["control-name"]||s("Неверный логин или пароль",t)}))}));else{const o=[];r.querySelectorAll("input").forEach((e=>{o.push(e)})),r.querySelectorAll("select").forEach((e=>{o.push(e)})),a(e,o,t)}}function u(e,r){(function(e){return!(!e.status||"success"!==e.status)})(e)||a(e,r)}t(4110);const i=document.getElementById("new-password-form"),d=function(e){const r=[];return["input","select"].forEach((t=>{e.querySelectorAll(t).forEach((e=>{r.push(e)}))})),r}(i);d.forEach((r=>{r.addEventListener("input",(r=>{!function(e){const r=n(e);r&&r.classList.contains("error_fade")&&r.classList.contains("error_block")&&(r.classList.remove("error_fade"),r.classList.remove("error_block"),r.textContent="")}(r.target),r.target.id===e&&function(e){e.value=e.value.replace(/[^0-9+]/g,"")}(r.target)}))})),document.getElementById("new-password-change-password-button").addEventListener("click",(t=>{t.preventDefault(),function(t){let n=!0;return t.forEach((t=>{t.id===e&&(t.value.length&&t.value.length<=8||(n=!1,t.value.length?s("Некорректное значение поля",t):s("Введите код",t))),t.id===r&&(function(e){return e.value.length>=6}(t)||(n=!1,s("Пароль не может быть короче 6 символов",t))),t.id===o&&t.value!==document.getElementById(r).value&&(n=!1,s("Пароли не совпадают",t))})),n}(d)&&async function(e,r,t,o,n){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;const a=c(e),u=await l(r,a,t,n);o(u,e,s)}(i,i.method,i.action,u,!0)}))}()}();