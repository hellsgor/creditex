(self.webpackChunkmywebpack=self.webpackChunkmywebpack||[]).push([[842],{2407:function(t,e,n){"use strict";n.d(e,{z:function(){return a}});var r=n(3959),o=n(3022);function a(t,e,n){e.value=(0,r.i)(t.value,"true"===t.dataset.isYears),n.style.width=(0,o.W)(t)}},3022:function(t,e,n){"use strict";function r(t){return(t.value-t.min)/(t.max-t.min)*100+"%"}n.d(e,{W:function(){return r}})},161:function(t,e,n){"use strict";var r=n(3959),o=n(8849),a=n(2407);document.querySelectorAll(".range").forEach((t=>{const e=t.querySelector('input[type="text"]'),n=t.querySelector('input[type="range"]'),c=t.querySelector(".range__custom-track"),u=t.querySelector(".range__min"),l=t.querySelector(".range__max");"true"===n.dataset.isYears&&(n.min*=12,n.max*=12,n.dataset.startValue*=12),[u,l].forEach((t=>{t.textContent=(0,r.i)(t.textContent)})),n.dataset.startValue&&(n.value=n.dataset.startValue),(0,a.z)(n,e,c),t.querySelectorAll(".range__postfix").forEach((n=>{n.textContent=(0,o.L)(Number(n.dataset.minPostfix?t.querySelector(".range__min").textContent:t.querySelector(".range__max").textContent),e.dataset.pluralizeOne,e.dataset.pluralizeTwo,e.dataset.pluralizeFive,!1)})),["input","change"].forEach((t=>{n.addEventListener(t,(()=>{(0,a.z)(n,e,c)}))})),e.addEventListener("focus",(()=>{e.value=n.value})),["change","blur","keydown"].forEach((t=>{e.addEventListener(t,(t=>{("change"===t.type||"blur"===t.type)&&Number(e.value)<=Number(n.max)&&Number(e.value)>=Number(n.min)&&("change"===t.type&&(n.value=e.value,n.dispatchEvent(new Event("input"))),"blur"===t.type&&(0,a.z)(n,e,c))}))}))}))},9985:function(t,e,n){"use strict";var r=n(8245),o=n(3959),a=n(8849);function c(t,e,n){const c=function(t,e){const n=r.wu.ANNUAL_INTEREST_RATE/100/12,o=e,a=n*(1+n)**o/((1+n)**o-1),c=[];let u=t,l=0;for(let e=1;e<=o;e++){const r=u*n,o=a*t-r;u-=o;const s=o+r;c.push({month:e,mainDebt:`${(o/s*100).toFixed(2)}%`,percents:`${(r/s*100).toFixed(2)}%`,paymentAmount:s.toFixed(2),principalPayment:o.toFixed(2),interestPayment:r.toFixed(2)}),l+=s}return{loanAmount:t,loanTerm:e,totalLoanWithInterest:l.toFixed(2),payments:c}}(t.value,n.value);return e.value=`${(0,o.i)(Math.round(c.payments[0].paymentAmount))} ${(0,a.L)(Math.round(c.payments[0].paymentAmount),"рубль","рубля","рублей",!1)}`,c}function u(t,e){0!==t.childElementCount&&(t.innerHTML=""),e.payments.forEach((e=>{const n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div");n.classList.add("calculator__payment-column"),r.classList.add("calculator__main-debt"),r.style.height=`${e.mainDebt}`,o.classList.add("calculator__percent-column"),o.style.height=`${e.percents}`,n.append(o),n.append(r),t.append(n)}))}const l=document.getElementById(r.wu.GRAPH_BLOCK_ID),s={amountControl:document.getElementById(r.wu.rangeControls.AMOUNT_NAME_ID),paymentControl:document.getElementById(r.wu.rangeControls.PAYMENT_NAME_ID),termControl:document.getElementById(r.wu.rangeControls.TERM_NAME_ID)},i={amountTextControl:document.getElementById(r.wu.rangeTextControls.AMOUNT_TEXT_NAME_ID),termTextControl:document.getElementById(r.wu.rangeTextControls.TERM_TEXT_NAME_ID)};u(l,c(s.amountControl,s.paymentControl,s.termControl)),[i.amountTextControl,i.termTextControl].forEach((t=>{t&&["focus","blur"].forEach((e=>{t.addEventListener(e,(t=>{"focus"===t.type&&(s.paymentControl.value=""),"blur"===t.type&&c(s.amountControl,s.paymentControl,s.termControl)}))}))})),[i.amountTextControl,i.termTextControl].forEach((t=>{t.addEventListener("change",(()=>{c(s.amountControl,s.paymentControl,s.termControl)}))})),[s.amountControl,s.termControl].forEach((t=>{t&&t.addEventListener("input",(()=>{u(l,c(s.amountControl,s.paymentControl,s.termControl))}))}))},5165:function(){document.querySelectorAll(".card-issued__numbers").forEach((t=>{const e=Array.from(t.querySelectorAll("span"))[2];e.textContent=new Intl.NumberFormat("ru-RU").format(Number(e.textContent))}))},7148:function(t,e,n){"use strict";function r(){const t=document.querySelectorAll(".header__main-menu-item-link");if("/"!==window.location.pathname){for(let e=1;e<=t.length;e++)if(window.location.pathname.includes(t[e].dataset.pathname)){t[e].classList.add("header__main-menu-item-link_this-page");break}}else t[0].classList.add("header__main-menu-item-link_this-page")}n.d(e,{h:function(){return r}})},3486:function(t,e,n){"use strict";(0,n(7148).h)()},9419:function(t,e,n){"use strict";var r=n(6608),o=n(4351),a=n(3773);const c=document.getElementById("offer-phone"),u=document.getElementById("offer-button");(0,r.D)(),u.addEventListener("click",(t=>{t.preventDefault(),(0,o.a)(c,u.dataset.regPagePath)})),c.addEventListener("input",(()=>{(0,a.q)(c)}))},5138:function(){"use strict";document.querySelectorAll(".block-with-tabs").forEach((t=>function(t){const e=t.querySelectorAll(".tab"),n=t.querySelector(".block-with-tabs__tabs-inner"),r=t.querySelectorAll(".tab__content");!function(t,n,r,o){function a(t){for(let n=t;n<r.length;n++)e[n].classList.remove("tab_active","tab_hidden-after"),r[n].classList.add("tab__content_hide")}a(1),n.addEventListener("click",(n=>{const{target:o}=n;if(o&&o.classList.contains("tab"))for(let n=0;n<t.length;n++)if(o===t[n]){a(0),r[c=n].classList.contains("tab__content_hide")&&(r[c].classList.remove("tab__content_hide"),e[c].classList.add("tab_active"),c>0&&e[c-1].classList.add("tab_hidden-after"));break}var c}))}(e,n,r)}(t)))},8245:function(t,e,n){"use strict";n.d(e,{ps:function(){return o},wu:function(){return r}});const r={ANNUAL_INTEREST_RATE:9,rangeControls:{AMOUNT_NAME_ID:"range-control-calculator-amount",PAYMENT_NAME_ID:"form-control-calculator-payment",TERM_NAME_ID:"range-control-calculator-term"},rangeTextControls:{AMOUNT_TEXT_NAME_ID:"range-control-text-calculator-amount",TERM_TEXT_NAME_ID:"range-control-text-calculator-term"},GRAPH_BLOCK_ID:"calculator-graph"},o={MIN_PASSWORD_LENGTH:6,MAX_SMS_CODE_LENGTH:8}},9652:function(t,e,n){"use strict";n.d(e,{S:function(){return o}});var r=n(8245);const o={CE001:()=>"Некорректный номер телефона",CE002:()=>"Некорректное значение поля",CE003:()=>"Неизвестная ошибка",CE004:()=>"Неверный логин или пароль",CE005:()=>`Пароль не может быть короче ${r.ps.MIN_PASSWORD_LENGTH} символов`,CE006:()=>"Пароли не совпадают",CE007:()=>"Выберите тип пользователя",CE008:()=>"Введите код",CE009:()=>"Некорректный адрес электронной почты",CE010:t=>`Тип файла ${t.name} не соответствует ожидаемым`,CE011:t=>`Размер файла ${t.name} превышает допустимый`,CE012:t=>`Ожидается один файл, а не несколько. Добавлен только ${t.name}`,CE013:()=>"Поле не может быть пустым",CE014:()=>"Выберите одно из значений",CE015:()=>"Сначала выберите форму регистрации"}},3543:function(t,e,n){"use strict";n.d(e,{V:function(){return r}});const r={VALID_PHONE:/^\+?\d{11,13}$/,VALID_EMAIL:/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+/i,VALID_PASSPORT_SERIES:/^\d{4}$/,VALID_PASSPORT_NUMBER:/^\d{6}$/,VALID_DATE:/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/}},5323:function(t,e,n){"use strict";function r(t){if("checkbox"===t.type||"hidden"===t.type)return null;let e=null;return"radio"!==t.type?t.closest(".form-control")?e=t.closest(".form-control").querySelector(".form-control__error"):t.closest(".form-select")?e=t.closest(".form-select").querySelector(".form-select__error"):t.closest(".form-file-upload")&&(e=t.closest(".form-file-upload").querySelector(".form-file-upload__error")):"radio"===t.type&&(e=t.closest(".form-radio").querySelector(".error")),e}n.d(e,{f:function(){return r}})},3773:function(t,e,n){"use strict";n.d(e,{q:function(){return o}});var r=n(5323);function o(t){const e=(0,r.f)(t);e&&e.classList.contains("error_fade")&&e.classList.contains("error_block")&&(e.classList.remove("error_fade"),e.classList.remove("error_block"),e.textContent="")}},8950:function(t,e,n){"use strict";n.d(e,{x:function(){return o}});var r=n(5323);function o(t,e){const n=(0,r.f)(e);n&&(n.textContent=t,n.classList.add("error_block","error_fade"))}},3959:function(t,e,n){"use strict";n.d(e,{i:function(){return o}});var r=n(8849);function o(t,e){const n=t.toString().replace(/\s/g,"");return e?(0,r.L)(Number(n),"месяц","месяца","месяцев",!0):Number(n).toLocaleString("ru-RU",{style:"decimal"})}},4351:function(t,e,n){"use strict";n.d(e,{a:function(){return l}});var r=n(1198),o=n(8950),a=n(4614),c=n(7836),u=n(9652);function l(t,e){const n=t.closest("form");t.value?(0,r.k)(t)?((0,a.$)(n.method,(0,c.L)([t]),n.action,!1),window.location.href=`${e}?phoneNumber=${encodeURIComponent(t.value.toString().replace(/[^\d]/g,""))}`):(0,o.x)(u.S.CE001(),t):window.location.href=e}},4614:function(t,e,n){"use strict";async function r(t,e,n,r){let o=null;const a={method:t.toUpperCase()};"POST"===a.method&&(a.body=e);try{const t=await fetch(n,a);return r&&(t.redirected&&(window.location.href=t.url),o=await t.json()),o}catch(t){return console.error(t),o}}n.d(e,{$:function(){return r}})},7836:function(t,e,n){"use strict";function r(t){let e;return Array.isArray(t)&&(e=new FormData,t.forEach((t=>{t.setAttribute("readonly",""),e.append(t.name,t.value)}))),Array.isArray(t)||null===t||"object"!=typeof t||(e=new FormData(t)),e}n.d(e,{L:function(){return r}})},6608:function(t,e,n){"use strict";function r(){function t(t){return t.value.replace(/\D/g,"")}function e(e){const n=e.target,r=t(n),o=e.clipboardData||window.clipboardData;if(o){const t=o.getData("Text");/\D/g.test(t)&&(n.value=r)}}function n(e){const n=e.target;let r=t(n);const{selectionStart:o}=n;let a="";if(!r)return n.value="","";if(n.value.length===o){if(["7","8","9"].indexOf(r[0])>-1){"9"===r[0]&&(r=`7${r}`);const t=(r[0],"+7");a=`${t} `,n.value=`${t} `,r.length>1&&(a+=`(${r.substring(1,4)}`),r.length>=5&&(a+=`) ${r.substring(4,7)}`),r.length>=8&&(a+=`-${r.substring(7,9)}`),r.length>=10&&(a+=`-${r.substring(9,11)}`)}else a=`+${r.substring(0,16)}`;n.value=a}else e.data&&/\D/g.test(e.data)&&(n.value=r)}function r(t){const e=t.target.value.replace(/\D/g,"");8===t.keyCode&&1===e.length&&(t.target.value="")}let o=[];o=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||document.querySelectorAll('input[type="tel"]'),o.forEach((t=>{t.addEventListener("keydown",r),t.addEventListener("input",n,!1),t.addEventListener("paste",e,!1)}))}n.d(e,{D:function(){return r}}),r()},1198:function(t,e,n){"use strict";n.d(e,{k:function(){return o}});var r=n(3543);function o(t){return r.V.VALID_PHONE.test(t.value.toString().replace(/[^\d]/g,""))}}}]);