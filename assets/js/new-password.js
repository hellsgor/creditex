!function(){var e={4110:function(){document.querySelectorAll('input[type="password"]').forEach((e=>{const t=e.closest(".form-control").querySelector(".form-control__password-toggle");t.addEventListener("click",(()=>{"password"===e.type?(t.classList.remove("form-control__password-toggle_password"),e.type="text"):(t.classList.add("form-control__password-toggle_password"),e.type="password")}))}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}!function(){"use strict";const e="new-password-confirmation-code",t="new-password-password",o="new-password-password-repeat",n=6,s=8;function c(e){if("checkbox"===e.type||"hidden"===e.type)return null;let t=null;return"radio"!==e.type?e.closest(".form-control")?t=e.closest(".form-control").querySelector(".form-control__error"):e.closest(".form-select")?t=e.closest(".form-select").querySelector(".form-select__error"):e.closest(".form-file-upload")&&(t=e.closest(".form-file-upload").querySelector(".form-file-upload__error")):"radio"===e.type&&(t=e.closest(".form-radio").querySelector(".error")),t}function a(e,t){const r=c(t);r&&(r.textContent=e,r.classList.add("error_block","error_fade"))}const l={CE001:()=>"Некорректный номер телефона",CE002:()=>"Некорректное значение поля",CE003:()=>"Неизвестная ошибка",CE004:()=>"Неверный логин или пароль",CE005:()=>"Пароль не может быть короче 6 символов",CE006:()=>"Пароли не совпадают",CE007:()=>"Выберите тип пользователя",CE008:()=>"Введите код",CE009:()=>"Некорректный адрес электронной почты",CE010:e=>`Тип файла ${e.name} не соответствует ожидаемым`,CE011:e=>`Размер файла ${e.name} превышает допустимый`,CE012:e=>`Ожидается один файл, а не несколько. Добавлен только ${e.name}`,CE013:()=>"Поле не может быть пустым",CE014:()=>"Выберите одно из значений"};const u="success";function i(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(Array.isArray(t))t.forEach((t=>{t.removeAttribute("readonly"),e["error-info"].forEach((e=>{e["control-name"]===t.name?a(e["control-name"]===t.name?e["error-text"]:l.CE003(),t):!r||void 0!==e["control-name"]&&"undefined"!==e["control-name"]||a(l.CE004(),r)}))}));else{const o=[];t.querySelectorAll("input").forEach((e=>{o.push(e)})),t.querySelectorAll("select").forEach((e=>{o.push(e)})),i(e,o,r)}}function d(e,t){(function(e){return!(!e.status||e.status!==u)})(e)||i(e,t)}r(4110);const f=document.getElementById("new-password-form"),p=function(e){const t=[];return["input","select"].forEach((r=>{e.querySelectorAll(r).forEach((e=>{t.push(e)}))})),t}(f);p.forEach((t=>{t.addEventListener("input",(t=>{!function(e){const t=c(e);t&&t.classList.contains("error_fade")&&t.classList.contains("error_block")&&(t.classList.remove("error_fade"),t.classList.remove("error_block"),t.textContent="")}(t.target),t.target.id===e&&function(e){e.value=e.value.replace(/[^0-9+]/g,"")}(t.target)}))})),document.getElementById("new-password-change-password-button").addEventListener("click",(r=>{r.preventDefault(),function(r){let c=!0;return r.forEach((r=>{r.id===e&&(r.value.length&&r.value.length<=s||(c=!1,r.value.length?a(l.CE002(),r):a(l.CE008(),r))),r.id===t&&(function(e){return e.value.length>=n}(r)||(c=!1,a(l.CE005(),r))),r.id===o&&r.value!==document.getElementById(t).value&&(c=!1,a(l.CE006(),r))})),c}(p)&&async function(e,t,r,o,n){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;const c=function(e){let t;return Array.isArray(e)&&(t=new FormData,e.forEach((e=>{e.setAttribute("readonly",""),t.append(e.name,e.value)}))),Array.isArray(e)||null===e||"object"!=typeof e||(t=new FormData(e)),t}(e),a=await async function(e,t,r,o){let n=null;const s={method:e.toUpperCase()};"POST"===s.method&&(s.body=t);try{const e=await fetch(r,s);return o&&(e.redirected&&(window.location.href=e.url),n=await e.json()),n}catch(e){return console.error(e),n}}(t,c,r,n);o(a,e,s)}(f,f.method,f.action,d,!0)}))}()}();