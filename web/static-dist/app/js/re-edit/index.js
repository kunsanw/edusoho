!function(c){function e(e){for(var t,a,n=e[0],o=e[1],r=e[2],l=0,i=[];l<n.length;l++)a=n[l],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&i.push(u[a][0]),u[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(s&&s(e);i.length;)i.shift()();return p.push.apply(p,r||[]),d()}function d(){for(var e,t=0;t<p.length;t++){for(var a=p[t],n=!0,o=1;o<a.length;o++){var r=a[o];0!==u[r]&&(n=!1)}n&&(p.splice(t--,1),e=l(l.s=a[0]))}return e}var a={},u={269:0},p=[];function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=c,l.c=a,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=n;p.push([742,0]),d()}({742:function(e,t,a){"use strict";a.r(t);var n,o=a(20),r=a.n(o),l=a(18),i=a.n(l),c={data:function(){return{subject:{fileName:$("[name=filename]").val(),items:JSON.parse($("[name=items]").val())},showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},bank_id:$("[name=bankId]").val(),category:JSON.parse($("[name=categoryTree]").val()),importType:$("[name=type]").val(),showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),uploadSDKInitData:{sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:$("[name=upload_init_url]").val(),finishUrl:$("[name=upload_finish_url]").val(),accept:JSON.parse($("[name=upload_accept]").val()),fileSingleSizeLimit:$("[name=upload_size_limit]").val(),locale:document.documentElement.lang},fileId:0,redirect:!0}},created:function(){var e=this;$(window).on("beforeunload",function(){if(e.redirect)return Translator.trans("admin.block.not_saved_data_hint")})},methods:{getImportData:function(e){this.redirect=!1,$.ajax({url:$("[name=saveUrl]").val(),contentType:"application/json;charset=utf-8",type:"post",data:i()(e),beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){e.goto&&(window.location.href=e.goto)})},deleteAttachmentCallback:function(){var e=this;return new r.a(function(t){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e)})})},deleteAttachment:function(e,t){t&&(this.fileId=e)},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,a=this;return new r.a(function(t){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){console.log(app),console.log(e),e.data.playServer=app.cloudPlayServer,e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,t(e),a.fileId=0})})},downloadAttachmentCallback:function(){var e=this,a=this;return new r.a(function(t){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),a.fileId=0})})}}},d=a(91),u=Object(d.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[a("item-import",{attrs:{subject:e.subject,showCKEditorData:e.showCKEditorData,bank_id:e.bank_id,category:e.category,importType:e.importType,showAttachment:e.showAttachment,cdnHost:e.cdnHost,uploadSDKInitData:e.uploadSDKInitData,deleteAttachmentCallback:e.deleteAttachmentCallback,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment,getImportData:e.getImportData,deleteAttachment:e.deleteAttachment}})],1)},[],!1,null,null,null).exports;Vue.config.productionTip=!1,"en"==app.lang&&(n=local.default,itemBank.default.install(Vue,{locale:n})),new Vue({render:function(e){return e(u)}}).$mount("#app")}});