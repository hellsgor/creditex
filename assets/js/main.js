!function(){var e={5165:function(){document.querySelectorAll(".card-issued__numbers").forEach((e=>{const t=Array.from(e.querySelectorAll("span"))[2];t.textContent=new Intl.NumberFormat("ru-RU").format(Number(t.textContent))}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}!function(){"use strict";function e(){function e(e){return e.value.replace(/\D/g,"")}function t(t){const r=t.target,n=e(r),o=t.clipboardData||window.clipboardData;if(o){const e=o.getData("Text");/\D/g.test(e)&&(r.value=n)}}function r(t){const r=t.target;let n=e(r);const{selectionStart:o}=r;let a="";if(!n)return r.value="","";if(r.value.length===o){if(["7","8","9"].indexOf(n[0])>-1){"9"===n[0]&&(n=`7${n}`);const e=(n[0],"+7");a=`${e} `,r.value=`${e} `,n.length>1&&(a+=`(${n.substring(1,4)}`),n.length>=5&&(a+=`) ${n.substring(4,7)}`),n.length>=8&&(a+=`-${n.substring(7,9)}`),n.length>=10&&(a+=`-${n.substring(9,11)}`)}else a=`+${n.substring(0,16)}`;r.value=a}else t.data&&/\D/g.test(t.data)&&(r.value=n)}function n(e){const t=e.target.value.replace(/\D/g,"");8===e.keyCode&&1===t.length&&(e.target.value="")}let o=[];o=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||document.querySelectorAll('input[type="tel"]'),o.forEach((e=>{e.addEventListener("keydown",n),e.addEventListener("input",r,!1),e.addEventListener("paste",t,!1)}))}!function(){const e=document.querySelectorAll(".header__main-menu-item-link");if("/"!==window.location.pathname){for(let t=1;t<=e.length;t++)if(window.location.pathname.includes(e[t].dataset.pathname)){e[t].classList.add("header__main-menu-item-link_this-page");break}}else e[0].classList.add("header__main-menu-item-link_this-page")}(),r(5165),e();const t={VALID_PHONE:/^\+?\d{11,13}$/,VALID_EMAIL:/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/i,VALID_PASSPORT_SERIES:/^\d{4}$/,VALID_PASSPORT_NUMBER:/^\d{6}$/,VALID_DATE:/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/};function n(e){if("checkbox"===e.type||"hidden"===e.type)return null;let t=null;return"radio"!==e.type?e.closest(".form-control")?t=e.closest(".form-control").querySelector(".form-control__error"):e.closest(".form-select")?t=e.closest(".form-select").querySelector(".form-select__error"):e.closest(".form-file-upload")&&(t=e.closest(".form-file-upload").querySelector(".form-file-upload__error")):"radio"===e.type&&(t=e.closest(".form-radio").querySelector(".error")),t}const o=document.getElementById("offer-phone"),a=document.getElementById("offer-button");e(),a.addEventListener("click",(e=>{e.preventDefault(),function(e,r){const o=e.closest("form");var a;e.value?(a=e,t.VALID_PHONE.test(a.value.toString().replace(/[^\d]/g,""))?(async function(e,t,r,n){let o=null;const a={method:e.toUpperCase()};"POST"===a.method&&(a.body=t);try{return await fetch(r,a),o}catch(e){return console.error(e),o}}(o.method,function(e){let t;return Array.isArray(e)&&(t=new FormData,e.forEach((e=>{e.setAttribute("readonly",""),t.append(e.name,e.value)}))),Array.isArray(e)||null===e||"object"!=typeof e||(t=new FormData(e)),t}([e]),o.action),window.location.href=`${r}?phoneNumber=${encodeURIComponent(e.value.toString().replace(/[^\d]/g,""))}`):function(e,t){const r=n(t);r&&(r.textContent=e,r.classList.add("error_block","error_fade"))}("Некорректный номер телефона",e)):window.location.href=r}(o,a.dataset.regPagePath)})),o.addEventListener("input",(()=>{!function(e){const t=n(e);t&&t.classList.contains("error_fade")&&t.classList.contains("error_block")&&(t.classList.remove("error_fade"),t.classList.remove("error_block"),t.textContent="")}(o)}))}()}();