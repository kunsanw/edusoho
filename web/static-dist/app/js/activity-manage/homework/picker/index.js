!function(c){function t(t){for(var e,n,i=t[0],o=t[1],r=t[2],a=0,s=[];a<i.length;a++)n=i[a],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&s.push(l[n][0]),l[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(c[e]=o[e]);for(h&&h(t);s.length;)s.shift()();return d.push.apply(d,r||[]),u()}function u(){for(var t,e=0;e<d.length;e++){for(var n=d[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==l[r]&&(i=!1)}i&&(d.splice(e--,1),t=a(a.s=n[0]))}return t}var n={},l={34:0},d=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=c,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var h=i;d.push([764,0]),u()}({259:function(t,e,n){"use strict";var i=n(0),o=n.n(i),r=n(1),a=n.n(r),s=function(){function n(t,e){o()(this,n),this.select1=t,this.select2=e,this._initEvent()}return a()(n,[{key:"_initEvent",value:function(){var e=this;this.select1.on("change",function(t){return e._selectChange(t)})}},{key:"_selectChange",value:function(){var t=this.select1.data("url"),e=this.select1.val(),i=this;i.select2.text(""),0!=e?$.post(t,{courseId:e},function(t){var n;""!=t?(n='<option value="0">'+Translator.trans("site.choose_hint")+"</option>",$.each(t,function(t,e){n+='<option value="'+e.id+'">'+e.title+"</option>"}),i.select2.append(n),i.select2.show()):i.select2.hide()}):this.select2.hide()}}]),n}();e.a=s},292:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=function(t){var e=!1,n="",i=$("#task-create-content-iframe").contents().find(".js-subjective-remask");t.find("tbody tr").each(function(){var t=$(this).data("type");console.log(t),"essay"==t&&(e=!0)}),console.log(e),e||0==t.find("tbody tr").length?i.html(""):(console.log(i),n="homework"==i.data("type")?Translator.trans("activity.homework_manage.objective_question_hint"):Translator.trans("activity.homework_manage.pass_objective_question_hint"),i.html(n).removeClass("hidden"))}},764:function(t,e,n){"use strict";n.r(e);var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(1),c=n.n(s),u=n(292),l=function(){function n(t,e){a()(this,n),this.$questionPickerBody=t,this.$questionPickerModal=this.$questionPickerBody.closest(".modal"),this.$questionAppendForm=e,this._initEvent()}return c()(n,[{key:"_initEvent",value:function(){var e=this;this.$questionPickerBody.find('[data-role="search-btn"]').on("click",function(t){return e.searchQuestion(t)}),this.$questionPickerBody.find('[data-role="picked-item"]').on("click",function(t){return e.pickItem(t)}),this.$questionPickerBody.find('[data-role="preview-btn"]').on("click",function(t){return e.questionPreview(t)}),this.$questionPickerBody.find(".pagination a").on("click",function(t){return e.pagination(t)}),$('[data-role="batch-select-save"]',window.parent.document).on("click",function(t){return e.batchSelectSave(t)})}},{key:"pagination",value:function(t){var e=this,n=$(t.currentTarget);return $.get(n.attr("href"),function(t){e.$questionPickerModal.html(t)}),!1}},{key:"searchQuestion",value:function(t){var e=this;t.preventDefault();var n=$(t.currentTarget).closest("form");$.get(n.attr("action"),n.serialize(),function(t){e.$questionPickerModal.html(t)})}},{key:"pickItem",value:function(t){var e=$(t.currentTarget),n=r()(e.data("replace")),i=e.data("questionId"),o=[];o.push(i),e.attr("disabled",!0),this.pickItemPost(e.data("url"),o,n)}},{key:"pickItemPost",value:function(t,e,n){var i=this,o=2<arguments.length&&void 0!==n?n:null;$.post(t,{questionIds:e},function(t){var e;o?(i.$questionAppendForm.find('tr[data-id="'+o+'"]').replaceWith(t),i.$questionAppendForm.find('tr[data-parent-id="'+o+'"]').remove()):((e=i.$questionAppendForm.find("tbody:visible")).length<=0&&(e=i.$questionAppendForm.find("tbody")),e.append(t).removeClass("hide"),e.trigger("lengthChange")),i._refreshSeqs(),Object(u.a)(i.$questionAppendForm),i.$questionPickerModal.modal("hide"),$(".js-close-modal").trigger("click")})}},{key:"questionPreview",value:function(t){window.open($(t.currentTarget).data("url"),"_blank","directories=0,height=580,width=820,scrollbars=1,toolbar=0,status=0,menubar=0,location=0")}},{key:"batchSelectSave",value:function(t){var e=$(t.currentTarget),i=[],n=e.data("url");0!=this.$questionPickerBody.find('[data-role="batch-item"]:checked').length?(this.$questionPickerBody.find('[data-role="batch-item"]:checked').each(function(t,e){var n=$(this).data("questionId");i.push(n)}),e.attr("disabled",!0),this.pickItemPost(n,i,null)):$(".js-choice-notice",window.parent.document).show()}},{key:"_refreshSeqs",value:function(){var i=1;this.$questionAppendForm.find("tbody tr").each(function(t,e){var n=$(e);n.hasClass("have-sub-questions")||(n.find("td.seq").html(i),i++)}),this.$questionAppendForm.find('[name="questionLength"]').val(0<i-1?i-1:null)}}]),n}(),d=n(139),h=n(259),f=$("#question-picker-body",window.parent.document);new l(f,$("#task-create-content-iframe").contents().find("#step2-form")),new d.a(f),new h.a($('[name="courseId"]',window.parent.document),$('[name="lessonId"]',window.parent.document))}});