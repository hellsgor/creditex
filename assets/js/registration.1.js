!function(){var e={4110:function(){document.querySelectorAll('input[type="password"]').forEach((e=>{const t=e.closest(".form-control").querySelector(".form-control__password-toggle");t.addEventListener("click",(()=>{"password"===e.type?(t.classList.remove("form-control__password-toggle_password"),e.type="text"):(t.classList.add("form-control__password-toggle_password"),e.type="password")}))}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}!function(){"use strict";const e="registration-form",t="registration-user-type",o="registration-inn",n="registration-phone",a="registration-password",l="registration-repeat-password",s="registration-remember-user",c=6;function i(){function e(e){return e.value.replace(/\D/g,"")}function t(t){const r=t.target,o=e(r),n=t.clipboardData||window.clipboardData;if(n){const e=n.getData("Text");/\D/g.test(e)&&(r.value=o)}}function r(t){const r=t.target;let o=e(r);const{selectionStart:n}=r;let a="";if(!o)return r.value="","";if(r.value.length===n){if(["7","8","9"].indexOf(o[0])>-1){"9"===o[0]&&(o=`7${o}`);const e=(o[0],"+7");a=`${e} `,r.value=`${e} `,o.length>1&&(a+=`(${o.substring(1,4)}`),o.length>=5&&(a+=`) ${o.substring(4,7)}`),o.length>=8&&(a+=`-${o.substring(7,9)}`),o.length>=10&&(a+=`-${o.substring(9,11)}`)}else a=`+${o.substring(0,16)}`;r.value=a}else t.data&&/\D/g.test(t.data)&&(r.value=o)}function o(e){const t=e.target.value.replace(/\D/g,"");8===e.keyCode&&1===t.length&&(e.target.value="")}let n=[];n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||document.querySelectorAll('input[type="tel"]'),n.forEach((e=>{e.addEventListener("keydown",o),e.addEventListener("input",r,!1),e.addEventListener("paste",t,!1)}))}function u(e){if("checkbox"===e.type||"hidden"===e.type)return null;let t=null;return"radio"!==e.type?e.closest(".form-control")?t=e.closest(".form-control").querySelector(".form-control__error"):e.closest(".form-select")?t=e.closest(".form-select").querySelector(".form-select__error"):e.closest(".form-file-upload")&&(t=e.closest(".form-file-upload").querySelector(".form-file-upload__error")):"radio"===e.type&&(t=e.closest(".form-radio").querySelector(".error")),t}function d(e,t){const r=u(t);r&&(r.textContent=e,r.classList.add("error_block","error_fade"))}r(4110),i();const f={CE001:()=>"Некорректный номер телефона",CE002:()=>"Некорректное значение поля",CE003:()=>"Неизвестная ошибка",CE004:()=>"Неверный логин или пароль",CE005:()=>"Пароль не может быть короче 6 символов",CE006:()=>"Пароли не совпадают",CE007:()=>"Выберите тип пользователя",CE008:()=>"Введите код",CE009:()=>"Некорректный адрес электронной почты",CE010:e=>`Тип файла ${e.name} не соответствует ожидаемым`,CE011:e=>`Размер файла ${e.name} превышает допустимый`,CE012:e=>`Ожидается один файл, а не несколько. Добавлен только ${e.name}`,CE013:()=>"Поле не может быть пустым",CE014:()=>"Выберите одно из значений"},E={VALID_PHONE:/^\+?\d{11,13}$/,VALID_EMAIL:/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/i,VALID_PASSPORT_SERIES:/^\d{4}$/,VALID_PASSPORT_NUMBER:/^\d{6}$/,VALID_DATE:/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/};function p(e){const t=u(e);t&&t.classList.contains("error_fade")&&t.classList.contains("error_block")&&(t.classList.remove("error_fade"),t.classList.remove("error_block"),t.textContent="")}const m="success";function g(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(Array.isArray(t))t.forEach((t=>{t.removeAttribute("readonly"),e["error-info"].forEach((e=>{e["control-name"]===t.name?d(e["control-name"]===t.name?e["error-text"]:f.CE003(),t):!r||void 0!==e["control-name"]&&"undefined"!==e["control-name"]||d(f.CE004(),r)}))}));else{const o=[];t.querySelectorAll("input").forEach((e=>{o.push(e)})),t.querySelectorAll("select").forEach((e=>{o.push(e)})),g(e,o,r)}}function v(t,r){!function(e){return!(!e.status||e.status!==m)}(t)?g(t,r):window.location.href=`${document.getElementById(e).dataset.locationHref}&signedData=${t.SIGNED_DATA?t.SIGNED_DATA:""}`}const y=function(e){const t=[];return["input","select"].forEach((r=>{e.querySelectorAll(r).forEach((e=>{t.push(e)}))})),t}(document.getElementById(e)),h=document.getElementById(n),_=document.getElementById(e);i(),h.value=new URLSearchParams(window.location.search).get("phoneNumber"),h.dispatchEvent(new Event("input")),y.forEach((e=>{e.id!==s&&e.addEventListener("input",(t=>{e.id===o&&function(e){e.value=e.value.replace(/[^0-9+]/g,"")}(t.target),p(e)}))})),document.getElementById("registration-come-in-button").addEventListener("click",(e=>{e.preventDefault(),function(e){let r=!0;return e.forEach((e=>{e.id===t&&(p(e),""===e.value&&(r=!1,d(f.CE007(),e))),e.id===o&&(p(e),10!==e.value.length&&12!==e.value.length&&(r=!1,d(f.CE002(),e))),e.id===n&&(p(e),function(e){return E.VALID_PHONE.test(e.value.toString().replace(/[^\d]/g,""))}(e)||(r=!1,d(f.CE001(),e))),e.id===a&&(p(e),function(e){return e.value.length>=c}(e)||(r=!1,d(f.CE005(),e))),e.id===l&&(p(e),document.getElementById(a).value!==e.value&&(r=!1,d(f.CE006(),e)))})),r}(y)&&async function(e,t,r,o,n){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;const l=function(e){let t;return Array.isArray(e)&&(t=new FormData,e.forEach((e=>{e.setAttribute("readonly",""),t.append(e.name,e.value)}))),Array.isArray(e)||null===e||"object"!=typeof e||(t=new FormData(e)),t}(e),s=await async function(e,t,r,o){let n=null;const a={method:e.toUpperCase()};"POST"===a.method&&(a.body=t);try{const e=await fetch(r,a);return o&&(e.redirected&&(window.location.href=e.url),n=await e.json()),n}catch(e){return console.error(e),n}}(t,l,r,n);o(s,e,a)}(_,_.method,_.action,v,!0)}))}()}();