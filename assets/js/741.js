(self.webpackChunkmywebpack=self.webpackChunkmywebpack||[]).push([[741],{2407:function(e,t,r){"use strict";r.d(t,{z:function(){return o}});var n=r(3959),i=r(3022);function o(e,t,r){t.value=(0,n.i)(e.value,"true"===e.dataset.isYears),r.style.width=(0,i.W)(e)}},3022:function(e,t,r){"use strict";function n(e){return(e.value-e.min)/(e.max-e.min)*100+"%"}r.d(t,{W:function(){return n}})},161:function(e,t,r){"use strict";var n=r(3959),i=r(8849),o=r(2407);document.querySelectorAll(".range").forEach((e=>{const t=e.querySelector('input[type="text"]'),r=e.querySelector('input[type="range"]'),s=e.querySelector(".range__custom-track"),a=e.querySelector(".range__min"),c=e.querySelector(".range__max");"true"===r.dataset.isYears&&(r.min*=12,r.max*=12,r.dataset.startValue*=12),[a,c].forEach((e=>{e.textContent=(0,n.i)(e.textContent)})),r.dataset.startValue&&(r.value=r.dataset.startValue),(0,o.z)(r,t,s),e.querySelectorAll(".range__postfix").forEach((r=>{r.textContent=(0,i.L)(Number(r.dataset.minPostfix?e.querySelector(".range__min").textContent:e.querySelector(".range__max").textContent),t.dataset.pluralizeOne,t.dataset.pluralizeTwo,t.dataset.pluralizeFive,!1)})),["input","change"].forEach((e=>{r.addEventListener(e,(()=>{(0,o.z)(r,t,s)}))})),t.addEventListener("focus",(()=>{t.value=r.value})),["change","blur","keydown"].forEach((e=>{t.addEventListener(e,(e=>{("change"===e.type||"blur"===e.type)&&Number(t.value)<=Number(r.max)&&Number(t.value)>=Number(r.min)&&("change"===e.type&&(r.value=t.value,r.dispatchEvent(new Event("input"))),"blur"===e.type&&(0,o.z)(r,t,s))}))}))}))},5165:function(){document.querySelectorAll(".card-issued__numbers").forEach((e=>{const t=Array.from(e.querySelectorAll("span"))[2];t.textContent=new Intl.NumberFormat("ru-RU").format(Number(t.textContent))}))},7148:function(e,t,r){"use strict";r.d(t,{h:function(){return i}});var n=r(3543);function i(){const e=document.querySelectorAll(".header__main-menu-item-link"),t=window.location.pathname.match(n.V.WINDOW_PATHNAME)[0].replace(/(.*)\.html$/,"$1");if("/"!==t&&"/index"!==t){for(let r=1;r<e.length;r++)if(t===e[r].dataset.pathname){e[r].classList.add("header__main-menu-item-link_this-page");break}}else e[0].classList.add("header__main-menu-item-link_this-page")}},3486:function(e,t,r){"use strict";(0,r(7148).h)()},9419:function(e,t,r){"use strict";var n=r(6608),i=r(4351),o=r(3773);const s=document.getElementById("offer-phone"),a=document.getElementById("offer-button");(0,n.D)(),a.addEventListener("click",(e=>{e.preventDefault(),(0,i.a)(s,a.dataset.regPagePath)})),s.addEventListener("input",(()=>{(0,o.q)(s)}))},5216:function(e,t,r){"use strict";var n=r(8245);function i(e,t){return(e.value/t.value).toLocaleString("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0})}var o=r(4351),s=r(3773);const a=document.getElementById(n.$U.rangeControls.BORROWERS_NAME_ID),c=document.getElementById(n.$U.rangeControls.AVERAGE_LOAN_AMOUNT_NAME_ID),u=document.getElementById(n.$U.RESULT_ID),l=document.getElementById("partner-calc-phone"),d=document.getElementById("partner-calc-button");u.textContent=i(c,a),[a,c].forEach((e=>{e.addEventListener("input",(()=>{u.textContent=i(c,a)}))})),d.addEventListener("click",(e=>{e.preventDefault(),(0,o.a)(l,d.dataset.regPagePath)})),l.addEventListener("input",(()=>{(0,s.q)(l)}))},8245:function(e,t,r){"use strict";r.d(t,{$U:function(){return n},ps:function(){return i}});const n={rangeControls:{BORROWERS_NAME_ID:"range-control-partner-calc-number-of-borrowers",AVERAGE_LOAN_AMOUNT_NAME_ID:"range-control-partner-calc-average-loan-amount"},RESULT_ID:"partner-calc-result"},i={MIN_PASSWORD_LENGTH:6,MAX_SMS_CODE_LENGTH:8}},9652:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});var n=r(8245);const i={CE001:()=>"Некорректный номер телефона",CE002:()=>"Некорректное значение поля",CE003:()=>"Неизвестная ошибка",CE004:()=>"Неверный логин или пароль",CE005:()=>`Пароль не может быть короче ${n.ps.MIN_PASSWORD_LENGTH} символов`,CE006:()=>"Пароли не совпадают",CE007:()=>"Выберите тип пользователя",CE008:()=>"Введите код",CE009:()=>"Некорректный адрес электронной почты",CE010:e=>`Тип файла ${e.name} не соответствует ожидаемым`,CE011:e=>`Размер файла ${e.name} превышает допустимый`,CE012:e=>`Ожидается один файл, а не несколько. Добавлен только ${e.name}`,CE013:()=>"Поле не может быть пустым",CE014:()=>"Выберите одно из значений",CE015:()=>"Сначала выберите форму регистрации"}},3543:function(e,t,r){"use strict";r.d(t,{V:function(){return n}});const n={VALID_PHONE:/^\+?\d{11,13}$/,VALID_EMAIL:/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/i,VALID_PASSPORT_SERIES:/^\d{4}$/,VALID_PASSPORT_NUMBER:/^\d{6}$/,VALID_DATE:/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,WINDOW_PATHNAME:/\/([^\/]+\.html)?$/}},5323:function(e,t,r){"use strict";function n(e){if("checkbox"===e.type||"hidden"===e.type)return null;let t=null;return"radio"!==e.type?e.closest(".form-control")?t=e.closest(".form-control").querySelector(".form-control__error"):e.closest(".form-select")?t=e.closest(".form-select").querySelector(".form-select__error"):e.closest(".form-file-upload")&&(t=e.closest(".form-file-upload").querySelector(".form-file-upload__error")):"radio"===e.type&&(t=e.closest(".form-radio").querySelector(".error")),t}r.d(t,{f:function(){return n}})},3773:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(5323);function i(e){const t=(0,n.f)(e);t&&t.classList.contains("error_fade")&&t.classList.contains("error_block")&&(t.classList.remove("error_fade"),t.classList.remove("error_block"),t.textContent="")}},8950:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var n=r(5323);function i(e,t){const r=(0,n.f)(t);r&&(r.textContent=e,r.classList.add("error_block","error_fade"))}},3959:function(e,t,r){"use strict";r.d(t,{i:function(){return i}});var n=r(8849);function i(e,t){const r=e.toString().replace(/\s/g,"");return t?(0,n.L)(Number(r),"месяц","месяца","месяцев",!0):Number(r).toLocaleString("ru-RU",{style:"decimal"})}},4351:function(e,t,r){"use strict";r.d(t,{a:function(){return c}});var n=r(1198),i=r(8950),o=r(4614),s=r(7836),a=r(9652);function c(e,t){const r=e.closest("form");e.value?(0,n.k)(e)?((0,o.$)(r.method,(0,s.L)([e]),r.action,!1),window.location.href=`${t}&phoneNumber=${encodeURIComponent(e.value.toString().replace(/[^\d]/g,""))}`):(0,i.x)(a.S.CE001(),e):window.location.href=t}},4614:function(e,t,r){"use strict";async function n(e,t,r,n){let i=null;const o={method:e.toUpperCase()};"POST"===o.method&&(o.body=t);try{const e=await fetch(r,o);return n&&(e.redirected&&(window.location.href=e.url),i=await e.json()),i}catch(e){return console.error(e),i}}r.d(t,{$:function(){return n}})},7836:function(e,t,r){"use strict";function n(e){let t;return Array.isArray(e)&&(t=new FormData,e.forEach((e=>{e.setAttribute("readonly",""),t.append(e.name,e.value)}))),Array.isArray(e)||null===e||"object"!=typeof e||(t=new FormData(e)),t}r.d(t,{L:function(){return n}})},6608:function(e,t,r){"use strict";function n(){function e(e){return e.value.replace(/\D/g,"")}function t(t){const r=t.target,n=e(r),i=t.clipboardData||window.clipboardData;if(i){const e=i.getData("Text");/\D/g.test(e)&&(r.value=n)}}function r(t){const r=t.target;let n=e(r);const{selectionStart:i}=r;let o="";if(!n)return r.value="","";if(r.value.length===i){if(["7","8","9"].indexOf(n[0])>-1){"9"===n[0]&&(n=`7${n}`);const e=(n[0],"+7");o=`${e} `,r.value=`${e} `,n.length>1&&(o+=`(${n.substring(1,4)}`),n.length>=5&&(o+=`) ${n.substring(4,7)}`),n.length>=8&&(o+=`-${n.substring(7,9)}`),n.length>=10&&(o+=`-${n.substring(9,11)}`)}else o=`+${n.substring(0,16)}`;r.value=o}else t.data&&/\D/g.test(t.data)&&(r.value=n)}function n(e){const t=e.target.value.replace(/\D/g,"");8===e.keyCode&&1===t.length&&(e.target.value="")}let i=[];i=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||document.querySelectorAll('input[type="tel"]'),i.forEach((e=>{e.addEventListener("keydown",n),e.addEventListener("input",r,!1),e.addEventListener("paste",t,!1)}))}r.d(t,{D:function(){return n}}),n()},4670:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});var n=r(8592);function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class o{constructor(e){i(this,"classSlider",""),i(this,"settingsSlider",{}),i(this,"slider",null),i(this,"customPagination",null),this.classSlider=e.classSlider,this.settingsSlider=e.settingsSlider,this.checkSlider(),this.settingsSlider.destroySize&&this.checkResizeSlider()}checkSlider(){if(window.matchMedia(this.settingsSlider.destroySize).matches&&this.settingsSlider.destroySize){if(this.slider)try{this.destroySlider()}catch(e){console.log(e)}return 1}this.slider||this.initSlider()}checkResizeSlider(){window.addEventListener("resize",(()=>{this.checkSlider()}))}initSlider(){this.slider=new n.Z(this.classSlider,this.settingsSlider)||null}destroySlider(){this.slider.destroy(),this.slider=null,document.querySelectorAll(`${this.classSlider}__slider`)?.forEach((e=>{e.removeAttribute("style")})),document.querySelector(`${this.classSlider}__wrapper`)?.removeAttribute("style")}}const s=[{classSlider:".card-issued-block",settingsSlider:{spaceBetween:16,grabCursor:!0,slidesPerView:"auto",slidesOffsetBefore:70,slidesOffsetAfter:70}}],a=()=>{window.slidersTmpl=s.map((e=>new o(e)))}},1198:function(e,t,r){"use strict";r.d(t,{k:function(){return i}});var n=r(3543);function i(e){return n.V.VALID_PHONE.test(e.value.toString().replace(/[^\d]/g,""))}}}]);