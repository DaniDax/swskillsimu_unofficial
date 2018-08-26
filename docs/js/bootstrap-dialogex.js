function Bootstrap4ModalDialogManager(){this.modals=[];this.callbacks=[]}Bootstrap4ModalDialogManager.prototype.Unregister=function(a){a=this.modals.indexOf(a);-1!==a&&(this.modals.splice(a,1),0===this.modals.length&&this.callbacks.forEach(function(a,c,d){a(!1)}))};Bootstrap4ModalDialogManager.prototype.Register=function(a){-1===this.modals.indexOf(a)&&(0===this.modals.length&&this.callbacks.forEach(function(a,c,d){a(!0)}),this.modals.push(a))};
Bootstrap4ModalDialogManager.prototype.CloseForegroundDialog=function(){0!==this.modals.length&&this.modals[this.modals.length-1].Hide()};Bootstrap4ModalDialogManager.prototype.CloseAllDialogs=function(){0!==this.modals.length&&this.modals.forEach(function(a,b,c){a.Hide()})};Bootstrap4ModalDialogManager.prototype.OnModalChanged=function(a){"function"===typeof a&&this.callbacks.push(a)};var DialogManager=new Bootstrap4ModalDialogManager;
function Bootstrap4ModalDialog(a,b,c,d){if(!b)throw"Dialog without content is surely something to be seen!??";this.objState={};this.parent=a;var g=typeof b;this.dialogContent="string"===g?$("<div>").addClass("modal-body").text(b):"function"===g?$("<div>").addClass("modal-body").append(b(this)):$("<div>").addClass("modal-body").append(b);this.callbacks=[];var e=this;if(d)if(b=typeof d,"number"===b)switch(d){case Bootstrap4ModalDialog.ButtonsOK:this.dialogButtons=$("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({type:"button",
"modal-IsDefault":"true"}).text("OK").click(function(a){e.result=1}));break;case Bootstrap4ModalDialog.ButtonsClose:this.dialogButtons=$("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({type:"button","modal-IsDefault":"true"}).text("Close").click(function(a){e.result=1}));break;case Bootstrap4ModalDialog.ButtonsYesNo:this.dialogButtons=$("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({type:"button","modal-IsDefault":"true"}).text("Yes").click(function(a){e.result=
1}),[$("<button>").addClass("btn btn-secondary").attr({type:"button","modal-IsCancel":"true","data-dismiss":"modal"}).text("No")]);break;case Bootstrap4ModalDialog.ButtonsYesNoDanger:this.dialogButtons=$("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-danger").attr({type:"button","modal-IsDefault":"true"}).text("Yes").click(function(a){e.result=1}),[$("<button>").addClass("btn btn-primary").attr({type:"button","modal-IsCancel":"true","data-dismiss":"modal"}).text("No")])}else{if("object"===
b&&d.length&&0<d.length){this.dialogButtons=$("<div>").addClass("modal-footer");var f;d.forEach(function(a,b,c){f=$("<button>").attr("type","button");a.cssClass&&f.addClass(a.cssClass);a.label&&f.text(a.label);"function"===typeof a.action?f.click(function(b){b.stopPropagation();a.action(e)}):f.click(function(a){a.stopPropagation()});this.append(f)},this.dialogButtons)}}else this.dialogButtons=$("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({type:"button",
"modal-IsDefault":"true"}).text("OK").click(function(a){e.result=1}));c||(c="Dialog");this.dialogHeader=$("<div>").addClass("modal-header").append($("<h5>").addClass("modal-title").text(c),[$("<button>").addClass("close").attr({role:"button","aria-label":"Close","data-dismiss":"modal"}).append($("<span>").attr("aria-hidden","true").html("&times;"))]);this.dialog=$("<div>").addClass("modal fade").attr({tabindex:"-1",role:"dialog","aria-labelledby":"ModalLabel","aria-hidden":"true","data-backdrop":"false"}).append($("<div>").addClass("modal-dialog modal-dialog-centered").attr("role",
"document").append($("<div>").addClass("modal-content bg-dark").append(this.dialogHeader,[this.dialogContent,this.dialogButtons]).click(function(a){if(a.target){var b=$(a.target);b.is("button")||b.is("a")||b.hasClass("clickable")||a.stopPropagation()}else a.stopPropagation()}).draggable({handle:".modal-header",containment:a})))}Bootstrap4ModalDialog.prototype.SetData=function(a,b){this.objState[a]=b};Bootstrap4ModalDialog.prototype.GetData=function(a){return this.objState[a]};
Bootstrap4ModalDialog.prototype.Show=function(a){var b=this;a?a.append(this.dialog):this.parent.append(this.dialog);this.dialog.on("hidden.bs.modal",function(a){window.DialogManager.Unregister(b);b.TriggerCallback();b.Dispose()});this.dialog.on("show.bs.modal",function(a){window.DialogManager.Register(b)});this.dialog.modal()};Bootstrap4ModalDialog.prototype.RegisterCallback=function(a){"function"===typeof a&&this.callbacks.push(a)};
Bootstrap4ModalDialog.prototype.TriggerCallback=function(){0!==this.callbacks.length&&this.callbacks.forEach(function(a,b,c){a(this,this.result)},this)};Bootstrap4ModalDialog.prototype.Hide=function(){this.dialog.modal("hide")};Bootstrap4ModalDialog.prototype.Dispose=function(){this.dialog.modal("dispose");this.dialog.empty();this.dialog.detach()};Bootstrap4ModalDialog.ButtonsOK=0;Bootstrap4ModalDialog.ButtonsClose=1;Bootstrap4ModalDialog.ButtonsYesNo=2;Bootstrap4ModalDialog.ButtonsYesNoDanger=3;