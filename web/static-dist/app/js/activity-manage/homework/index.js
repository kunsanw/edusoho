!function(l){function t(t){for(var e,n,o=t[0],i=t[1],r=t[2],a=0,s=[];a<o.length;a++)n=o[a],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&s.push(u[n][0]),u[n]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(l[e]=i[e]);for(h&&h(t);s.length;)s.shift()();return c.push.apply(c,r||[]),d()}function d(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var r=n[i];0!==u[r]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var n={},u={33:0},c=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=l,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],o=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var h=o;c.push([748,0]),d()}({17:function(t,e){t.exports=jQuery},292:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(t){var e=!1,n="",o=$("#task-create-content-iframe").contents().find(".js-subjective-remask");t.find("tbody tr").each(function(){var t=$(this).data("type");console.log(t),"essay"==t&&(e=!0)}),console.log(e),e||0==t.find("tbody tr").length?o.html(""):(console.log(o),n="homework"==o.data("type")?Translator.trans("activity.homework_manage.objective_question_hint"):Translator.trans("activity.homework_manage.pass_objective_question_hint"),o.html(n).removeClass("hidden"))}},748:function(t,e,n){"use strict";n.r(e);var o=n(139),i=n(0),r=n.n(i),a=n(1),s=n.n(a),l=n(4),d=n(292),u=function(){function n(t,e){r()(this,n),this.$form=t,this.$modal=e,this.initEvent()}return s()(n,[{key:"initEvent",value:function(){var e=this;this.$form.on("click",'[data-role="item-delete-btn"]',function(t){return e.deleteQuestion(t)}),this.$form.on("click",'[data-role="replace-item"]',function(t){return e.replaceQuestion(t)}),this.$form.on("click",'[data-role="preview-btn"]',function(t){return e.previewQuestion(t)}),this.$form.on("click",'[data-role="batch-delete-btn"]',function(t){return e.batchDelete(t)}),this.initSortList()}},{key:"initSortList",value:function(){var r,i=this,t=this.$form.find("tbody"),e=t.hasClass("js-homework-table")?"":"<td></td>",n='<tr class="question-placehoder js-placehoder"><td></td><td></td><td></td><td></td><td></td><td></td><td></td>'.concat(e,"</tr>");t.sortable({containerPath:"> tr",containerSelector:"tbody",itemSelector:"tr.is-question",placeholder:n,exclude:".notMoveHandle",onDragStart:function(t,e,n){t.hasClass("have-sub-questions")||$(".js-have-sub").removeClass("is-question");var o=t.offset(),i=e.rootGroup.pointer;r={left:i.left-o.left,top:i.top-o.top},n(t,e)},onDrag:function(t,e){var n=t.height();t.css({left:e.left-r.left,top:e.top-r.top}),$(".js-placehoder").css({height:n})},onDrop:function(t,e,n){var o;n(t,e),t.hasClass("have-sub-questions")?(o=t.parents("tbody")).find("tr.is-question").each(function(){var t=$(this);o.find("[data-parent-id="+t.data("id")+"]").detach().insertAfter(t)}):$(".js-have-sub").addClass("is-question"),i.refreshSeqs()}})}},{key:"replaceQuestion",value:function(t){var e=this,n=$(t.currentTarget),o=[],i=this.$form.find("tbody:visible");i.find('[name="questionIds[]"]').each(function(){o.push($(this).val())}),this.$modal.data("manager",this).modal(),$.get(n.data("url"),{excludeIds:o.join(","),type:i.data("type")},function(t){e.$modal.html(t)})}},{key:"deleteQuestion",value:function(t){t.stopPropagation();var e=$(t.currentTarget),n=e.closest("tr").data("id"),o=e.closest("tbody");o.find('[data-parent-id="'+n+'"]').remove(),e.closest("tr").remove(),Object(d.a)(this.$form),o.trigger("lengthChange"),this.refreshSeqs()}},{key:"batchDelete",value:function(){var t;0==this.$form.find('[data-role="batch-item"]:checked').length&&((t=this.$form.find(".js-help-redmine"))?(t.text(Translator.trans("activity.testpaper_manage.question_required_error_hint")).show(),setTimeout(function(){t.slideUp()},3e3)):Object(l.a)("danger",Translator.trans("activity.testpaper_manage.question_required_error_hint")));var o=this;this.$form.find('[data-role="batch-item"]:checked').each(function(t,e){var n=$(this).val();"material"==$(this).closest("tr").data("type")&&o.$form.find('[data-parent-id="'+n+'"]').remove(),$(this).closest("tr").remove()}),this.refreshSeqs(),Object(d.a)(this.$form)}},{key:"previewQuestion",value:function(t){t.preventDefault(),window.open($(t.currentTarget).data("url"),"_blank","directories=0,height=580,width=820,scrollbars=1,toolbar=0,status=0,menubar=0,location=0")}},{key:"refreshSeqs",value:function(){var e=1;this.$form.find("tbody tr").each(function(){var t=$(this);t.hasClass("have-sub-questions")||(t.find("td.seq").html(e),e++)}),this.$form.find('[name="questionLength"]').val(0<e-1?e-1:null)}}]),n}(),c=function(){function e(t){r()(this,e),this.$homeworkModal=$("#modal",window.parent.document),this.$questionPickedModal=$("#attachment-modal",window.parent.document),this.$element=t,this.$step2_form=this.$element.find("#step2-form"),this.$step3_form=this.$element.find("#step3-form"),this.validator2=null,this.init()}return s()(e,[{key:"init",value:function(){this.initEvent(),this.setValidateRule(),this.inItStep2form()}},{key:"initEvent",value:function(){var e=this;this.$element.on("click",'[data-role="pick-item"]',function(t){return e.showPickQuestion(t)}),this.$questionPickedModal.on("shown.bs.modal",function(){e.$homeworkModal.hide()}),this.$questionPickedModal.on("hidden.bs.modal",function(){e.$homeworkModal.show(),e.$questionPickedModal.html(""),e.validator2&&e.validator2.form()})}},{key:"initCkeditor",value:function(t){var e=CKEDITOR.replace("homework-about-field",{toolbar:"Task",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#homework-about-field").data("imageUploadUrl")});e.on("change",function(){$("#homework-about-field").val(e.getData())}),e.on("blur",function(){t.form()})}},{key:"showPickQuestion",value:function(t){var e=this;t.preventDefault();var n=$(t.currentTarget),o=[];$("#question-table-tbody").find('[name="questionIds[]"]').each(function(){o.push($(this).val())}),this.$questionPickedModal.modal().data("manager",this),$.get(n.data("url"),{excludeIds:o.join(",")},function(t){e.$questionPickedModal.html(t)})}},{key:"inItStep2form",value:function(){var t=this.$step2_form.validate({onkeyup:!1,rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},description:{required:!0},content:"required",questionLength:{required:!0}},messages:{description:Translator.trans("activity.homework_manage.question_homework_hint"),questionLength:Translator.trans("activity.homework_manage.question_required_error_hint")}});this.validator2=t,this.initCkeditor(t),this.$step2_form.data("validator",t)}},{key:"setValidateRule",value:function(){$.validator.addMethod("arithmeticFloat",function(t,e){return this.optional(e)||/^[0-9]+(\.[0-9]?)?$/.test(t)},$.validator.format(Translator.trans("activity.homework_manage.arithmetic_float_error_hint"))),$.validator.addMethod("positiveInteger",function(t,e){return this.optional(e)||/^[1-9]\d*$/.test(t)},$.validator.format(Translator.trans("activity.homework_manage.positive_integer_error_hint"))),$.validator.addMethod("DateAndTime",function(t,e){return this.optional(e)||/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29) ([0-1]{1}[0-9]{1})|(2[0-4]{1}):[0-5]{1}[0-9]{1}$/.test(t)},$.validator.format(Translator.trans("activity.homework_manage.date_and_time_error_hint:mm")))}}]),e}(),h=$("#step2-form");new c($("#iframe-content")),new o.a(h),new u(h,$("#attachment-modal",window.parent.document))}});