!function(u){function e(e){for(var t,n,i=e[0],a=e[1],r=e[2],s=0,o=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&o.push(l[n][0]),l[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(f&&f(e);o.length;)o.shift()();return d.push.apply(d,r||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var n=d[t],i=!0,a=1;a<n.length;a++){var r=n[a];0!==l[r]&&(i=!1)}i&&(d.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},l={285:0},d=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=u,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var f=i;d.push([771,0]),c()}({10:function(e,t){e.exports=jQuery},105:function(e,t,n){"use strict";var i=n(13),a=n.n(i),r=n(6),s=n.n(r),o=n(0),u=n.n(o),c=n(1),l=n.n(c),d=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}(),f=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}(),h=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[],n=$("[name="+e+"]").val();return t.push(n),t}},{key:"getAttachment",value:function(e){var t=[],n=$("[name="+e+"]").parent().find('[data-role="fileId"]').val();return""!=n&&t.push(n),t}}]),e}(),v=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]").each(function(){t.push($(this).val())}),t}}]),e}(),p=function(){function e(){u()(this,e)}return l()(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}(),g=function(){function t(e){u()(this,t),this.type=e}return l()(t,null,[{key:"getTypeBuilder",value:function(e){var t=null;switch(e){case"choice":t=new d;break;case"determine":t=new f;break;case"essay":t=new h;break;case"fill":t=new v;break;case"single_choice":case"uncertain_choice":t=new p;break;default:t=null}return t}}]),t}(),m=n(76),y=n(53),b=n(5),k=function(){function t(e){u()(this,t),this.$container=e,this.answers={},this.usedTime=0<e.find(".js-used-time").length?s()(e.find(".js-used-time").val()):0,this.$form=e.find("form"),this._initEvent(),this._initUsedTimer(),this._isCopy(),this._alwaysSave()}return l()(t,[{key:"_initEvent",value:function(){var t=this;this.$container.on("focusin","textarea",function(e){return t._showEssayInputEditor(e)}),this.$container.on("click",'[data-role="test-suspend"],[data-role="paper-submit"]',function(e){return t._btnSubmit(e)}),this.$container.on("click",".js-testpaper-question-list li",function(e){return t._choiceList(e)}),this.$container.on("click","*[data-anchor]",function(e){return t._quick2Question(e)}),this.$container.find(".js-testpaper-question-label").on("click","input",function(e){return t._choiceLable(e)}),this.$container.on("click",".js-marking",function(e){return t._markingToggle(e)}),this.$container.on("click",".js-favorite",function(e){return t._favoriteToggle(e)}),this.$container.on("click",".js-analysis",function(e){return t._analysisToggle(e)}),this.$container.on("blur",'[data-type="fill"]',function(e){return t.fillChange(e)})}},{key:"_isCopy",value:function(){this.$container.find(".js-testpaper-body").data("copy")&&new m.a}},{key:"fillChange",value:function(e){var t=$(e.currentTarget);this._renderBtnIndex(t.attr("name"),!!t.val())}},{key:"_markingToggle",value:function(e){var t=$(e.currentTarget).addClass("hidden");t.siblings(".js-marking.hidden").removeClass("hidden");var n=t.closest(".js-testpaper-question").attr("id");$('[data-anchor="#'.concat(n,'"]')).find(".js-marking-card").toggleClass("hidden")}},{key:"_favoriteToggle",value:function(e){var t=$(e.currentTarget),n=t.data("targetType"),i=t.data("targetId");$.post(t.data("url"),{targetType:n,targetId:i},function(e){t.addClass("hidden").siblings(".js-favorite.hidden").data("url",e.url),t.addClass("hidden").siblings(".js-favorite.hidden").removeClass("hidden")}).error(function(e){Object(b.a)("error",e.error.message)})}},{key:"_analysisToggle",value:function(e){var t=$(e.currentTarget);t.addClass("hidden"),t.siblings(".js-analysis.hidden").removeClass("hidden"),t.closest(".js-testpaper-question").find(".js-testpaper-question-analysis").slideToggle()}},{key:"_initUsedTimer",value:function(){var e=this;this.$usedTimer=window.setInterval(function(){e.usedTime+=1},1e3)}},{key:"_choiceLable",value:function(e){var t=$(e.currentTarget),n=t.closest(".js-testpaper-question-label");this.changeInput(n,t)}},{key:"_choiceList",value:function(e){var t=$(e.currentTarget),n=t.index(),i=t.closest(".js-testpaper-question").find(".js-testpaper-question-label"),a=i.find("label").eq(n).find("input");a.prop("checked",!a.prop("checked")).change(),this.changeInput(i,a)}},{key:"changeInput",value:function(e,t){var n=0;e.find("label").each(function(e,t){$(t).find("input").prop("checked")?($(t).addClass("active"),n++):$(t).removeClass("active")});var i=t.attr("name");this._renderBtnIndex(i,0<n)}},{key:"_renderBtnIndex",value:function(e,t,n){var i=!(1<arguments.length&&void 0!==t)||t,a=2<arguments.length&&void 0!==n&&n,r=$('[data-anchor="#question'.concat(e,'"]'));i?r.addClass("done"):r.removeClass("done"),a?r.addClass("doing").siblings(".doing").removeClass("doing"):r.removeClass("doing")}},{key:"_showEssayInputEditor",value:function(e){var t=this,n=$(e.currentTarget);if(n.hasClass("essay-input-short")){e.preventDefault(),e.stopPropagation(),$(this).blur();var i=n.siblings(".essay-input-long"),a=i.siblings(".essay-input-btn");n.hide(),i.show(),a.show();var r=CKEDITOR.replace(i.attr("id"),{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:i.data("imageUploadUrl")});r.on("blur",function(){r.updateElement(),setTimeout(function(){i.val(r.getData()),i.change(),i.val()?t._renderBtnIndex(i.attr("name"),!0):t._renderBtnIndex(i.attr("name"),!1)},1)}),r.on("instanceReady",function(){this.focus(),a.one("click",function(){n.val($(r.getData()).text()),r.destroy(),i.hide(),a.hide(),n.show()})}),r.on("key",function(){r.updateElement(),setTimeout(function(){i.val(r.getData()),i.change()},1)}),r.on("insertHtml",function(){r.updateElement(),setTimeout(function(){i.val(r.getData()),i.change()},1)})}}},{key:"_quick2Question",value:function(e){var t=$(e.currentTarget);window.location.hash=t.data("anchor")}},{key:"_suspendSubmit",value:function(e){var t=this._getAnswers(),n=this._getAttachments();$.post(e,{data:t,usedTime:this.usedTime,attachments:n}).done(function(){}).error(function(e){Object(b.a)("error",e.error.message)})}},{key:"_btnSubmit",value:function(e){var t=$(e.currentTarget);t.button("loading"),clearInterval(this.saveTimer),this._submitTest(t.data("url"),t.data("goto"))}},{key:"_submitTest",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:"",i=this._getAnswers(),a=new y.a,r=this._getAttachments();$.post(e,{data:i,usedTime:this.usedTime,attachments:r}).done(function(e){e.result&&a.emit("finish",{data:""}),""!=n||""!=e.goto?window.location.href=n:""!=e.goto?window.location.href=e.goto:""!=e.message&&Object(b.a)("error",e.message)}).error(function(e){Object(b.a)("error",e.error.message)})}},{key:"_getAnswers",value:function(){var i={};return $("*[data-type]").each(function(){var e=$(this).attr("name"),t=$(this).data("type"),n=g.getTypeBuilder(t).getAnswer(e);i[e]=n}),a()(i)}},{key:"_getAttachments",value:function(){var n={};return $('[data-type="essay"]').each(function(){var e=$(this).attr("name"),t=g.getTypeBuilder("essay").getAttachment(e);n[e]=t}),n}},{key:"_alwaysSave",value:function(){if(0<$('input[name="testSuspend"]').length){var t=this,n=$('input[name="testSuspend"]').data("url");this.saveTimer=setInterval(function(){t._suspendSubmit(n);var e=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds();Object(b.a)("success",e+Translator.trans("testpaper.widget.save_success_hint"))},18e4)}}}]),t}();t.a=k},28:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return u});n(110);var i=n(11),r=function(){var e=$(".js-panel-card");e.perfectScrollbar(),e.perfectScrollbar("update")},a=function(){if(console.log("ok"),!Object(i.f)()){var t=$(".js-testpaper-card");if(!(t.length<=0)){var n=t.offset().top;$(window).scroll(function(){var e=$(window).scrollTop();n<=e?t.addClass("affix"):t.removeClass("affix")})}}},s=function(){$(".js-btn-index").click(function(e){var t=$(e.currentTarget);$(".js-testpaper-heading").length<=0&&t.addClass("doing").siblings(".doing").removeClass("doing")})},o=function(){$("#showWrong").change(function(e){var a=$(e.currentTarget);$(".js-answer-notwrong").each(function(e,t){var n=$($(t).data("anchor")),i=n.closest(".js-testpaper-question-block");a.prop("checked")?(n.hide(),i.find(".js-testpaper-question:visible").length<=0&&i.hide()):(n.show(),i.show())}),r()})},u=function(){var t=$(".js-testpaper-watermark");0<t.length&&$.get(t.data("watermark-url"),function(e){t.each(function(){$(this).WaterMark({yPosition:"center",style:{"font-size":10},opacity:.6,contents:e})})})}},53:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n(20),s=n.n(i),a=n(0),r=n.n(a),o=n(1),u=n.n(o),c=n(14),l=n.n(c),d=(n(130),n(131),function(){function e(){r()(this,e),this.eventMap={receives:{}},this._registerIframeEvents()}return u()(e,[{key:"_registerIframeEvents",value:function(){return l.a.instanceId("activity"),l.a.fedx.addFilter([{channel:"activity-events",topic:"#",direction:"out"},{channel:"task-events",topic:"#",direction:"in"}]),l.a.fedx.signalReady(),this._registerReceiveTaskParentEvents(),this}},{key:"_registerReceiveTaskParentEvents",value:function(){var a=this;l.a.subscribe({channel:"task-events",topic:"#",callback:function(e){var t=e.event,n=e.data,i=a.eventMap.receives[t];void 0!==i&&i.forEach(function(e){return e(n)})}})}},{key:"emit",value:function(a,r){return new s.a(function(t,n){var e={event:a,data:r};l.a.publish({channel:"activity-events",topic:"#",data:e});var i=l.a.channel("task-events").subscribe("#",function(e){e.error?n(e.error):t(e),i.unsubscribe()})})}},{key:"receive",value:function(e,t){this.eventMap.receives[e]=this.eventMap.receives[e]||[],this.eventMap.receives[e].push(t)}}]),e}())},76:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:$("html");a()(this,e),t.attr("unselectable","on").css("user-select","none").on("selectstart",!1)}},771:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),r=n(0),s=n.n(r),o=n(1),u=n.n(o),c=n(7),l=n.n(c),d=n(4),f=n.n(d),h=n(8),v=n.n(h),p=n(105),g=n(28);function m(i){return function(){var e,t=f()(i);if(function(){if("undefined"==typeof Reflect||!a.a)return;if(a.a.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(a()(Date,[],function(){})),1}catch(e){return}}()){var n=f()(this).constructor;e=a()(t,arguments,n)}else e=t.apply(this,arguments);return l()(this,e)}}var y=function(e){v()(i,e);var n=m(i);function i(e){var t;return s()(this,i),(t=n.call(this,e)).$timePauseDialog=t.$container.find("#time-pause-dialog"),t.$timer=e.find(".js-testpaper-timer"),t._init(),t}return u()(i,[{key:"_init",value:function(){var t=this;Object(g.a)(),Object(g.b)(),Object(g.d)(),Object(g.e)(),Object(g.c)(),this._initTimer(),this.$container.on("click",".js-btn-pause",function(e){return t._clickBtnPause(e)}),this.$container.on("click",".js-btn-resume",function(e){return t._clickBtnReume(e)})}},{key:"_initTimer",value:function(){var e=this;this.$timer&&this.$timer.timer({countdown:!0,duration:this.$timer.data("time"),format:"%H:%M:%S",callback:function(){e.$container.find("#time-finish-dialog").modal("show"),clearInterval(e.$usedTimer),0==$('input[name="preview"]').length&&e._submitTest(e.$container.find('[data-role="paper-submit"]').data("url"))},repeat:!0,start:function(){e.usedTime=0}})}},{key:"_clickBtnPause",value:function(e){$(e.currentTarget).toggleClass("active").hasClass("active")?(this.$timer.timer("pause"),clearInterval(this.$usedTimer),this.$timePauseDialog.modal("show")):(this.$timer.timer("resume"),this._initUsedTimer(),this.$timePauseDialog.modal("hide"))}},{key:"_clickBtnReume",value:function(){this.$timer.timer("resume"),this._initUsedTimer(),this.$container.find(".js-btn-pause").removeClass("active"),this.$timePauseDialog.modal("hide")}}]),i}(p.a),b=n(50);$("#facein-init-modal").length<1&&new y($(".js-task-testpaper-body")),new b.a($(".js-task-testpaper-body"))}});