(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6dU7":function(t,e,i){"use strict";i.r(e);var c=i("ofXK"),s=i("tyNb"),o=i("3Pt+"),a=i("0IaG"),r=i("fXoL"),n=i("kmnG"),l=i("qFsG"),d=i("bTqV"),u=i("0Lhs");function b(t,e){1&t&&(r.bc(0,"p",12),r.Oc(1,"*Please fill all the fields"),r.ac())}let m=(()=>{class t{constructor(t,e,i){this.data=t,this.dialogRef=e,this.fb=i}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(t){this.itemForm=this.fb.group({name:[t.name||"",o.t.required],code:[t.code||"",o.t.required]})}submit(){this.itemForm.value.name=this.itemForm.value.name.trim(),this.itemForm.value.code=this.itemForm.value.code.trim(),this.itemForm.value.code.length>0&&this.itemForm.value.name.length>0?this.dialogRef.close(this.itemForm.value):this.validationErrors=!0}}return t.\u0275fac=function(e){return new(e||t)(r.Vb(a.a),r.Vb(a.f),r.Vb(o.c))},t.\u0275cmp=r.Pb({type:t,selectors:[["app-state-popup"]],decls:18,vars:7,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-1"],[1,"full-width","p-b-10"],["matInput","","name","username","formControlName","name","placeholder","State"],["matInput","","name","username","formControlName","code","placeholder","State Code"],["class","error-msg",4,"ngIf"],["fxFlex","100",1,"mt-1"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[1,"error-msg"]],template:function(t,e){1&t&&(r.bc(0,"h1",0),r.Oc(1),r.ac(),r.bc(2,"form",1),r.jc("ngSubmit",(function(t){return e.submit()})),r.bc(3,"div",2),r.bc(4,"div",3),r.bc(5,"mat-form-field",4),r.Wb(6,"input",5),r.ac(),r.ac(),r.bc(7,"div",3),r.bc(8,"mat-form-field",4),r.Wb(9,"input",6),r.ac(),r.ac(),r.Mc(10,b,2,0,"p",7),r.bc(11,"div",8),r.bc(12,"button",9),r.Oc(13),r.oc(14,"translate"),r.ac(),r.Wb(15,"span",10),r.bc(16,"button",11),r.jc("click",(function(t){return e.dialogRef.close(!1)})),r.Oc(17,"Cancel"),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Gb(1),r.Pc(e.data.title),r.Gb(1),r.sc("formGroup",e.itemForm),r.Gb(8),r.sc("ngIf",e.validationErrors),r.Gb(2),r.sc("disabled",e.itemForm.invalid),r.Gb(1),r.Pc(r.pc(14,5,"SAVE")))},directives:[a.g,o.u,o.o,o.h,n.b,l.b,o.b,o.n,o.f,c.l,d.b],pipes:[u.c],styles:[".p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.error-msg[_ngcontent-%COMP%]{color:red}"]}),t})();var h=i("3sEA"),p=i("z6cu"),g=i("AytR"),f=i("tk/3"),v=i("dNgK");let w=(()=>{class t{constructor(t,e,i){this.http=t,this.loader=e,this.snack=i,this.apiUrl=g.a.apiURL}getStates(){return this.http.get(this.apiUrl+"location/state/list")}getstate(t){return this.http.get(this.apiUrl+"location/state/details/"+t)}deleteState(t){return this.http.get(this.apiUrl+"location/state/delete/"+t)}addState(t){return this.http.post(this.apiUrl+"location/state/add",t)}updateState(t,e){return this.http.post(this.apiUrl+"location/state/update/"+t,e)}getDistricts(){return this.http.get(this.apiUrl+"location/district/list")}deleteDistrict(t){return this.http.get(this.apiUrl+"location/district/delete/"+t)}addDistrict(t){return this.http.post(this.apiUrl+"location/district/add",t)}updateDistrict(t,e){return this.http.post(this.apiUrl+"location/district/update/"+t,e)}getDistrict(t){return this.http.get(this.apiUrl+"location/district/details/"+t)}getRegions(){return this.http.get(this.apiUrl+"location/region/list")}deleteRegion(t){return this.http.get(this.apiUrl+"location/region/delete/"+t)}addRegion(t){return this.http.post(this.apiUrl+"location/region/add",t)}updateRegion(t,e){return this.http.post(this.apiUrl+"location/region/update/"+t,e)}getRegion(t){return this.http.get(this.apiUrl+"location/region/details/"+t)}errorHandler(t){let e="";return e=t.error instanceof ErrorEvent?t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,Object(p.a)(e)}}return t.\u0275fac=function(e){return new(e||t)(r.fc(f.c),r.fc(h.a),r.fc(v.a))},t.\u0275prov=r.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=i("3kSh"),S=i("quSY"),G=i("Wp6s"),O=i("lDzL"),F=i("1jcm"),D=i("NFeN");function k(t,e){if(1&t&&r.Oc(0),2&t){const t=e.row;r.Qc(" ",null==t?null:t.name," ")}}function y(t,e){if(1&t&&r.Oc(0),2&t){const t=e.row;r.Qc(" ",null==t?null:t.code," ")}}function A(t,e){if(1&t){const t=r.cc();r.bc(0,"mat-slide-toggle",9),r.jc("change",(function(i){r.Fc(t);const c=e.row;return r.nc().stateToggle(c,i)})),r.ac()}if(2&t){const t=e.row;r.sc("checked","active"===(null==t?null:t.status))}}function M(t,e){if(1&t){const t=r.cc();r.bc(0,"button",10),r.jc("click",(function(i){r.Fc(t);const c=e.row;return r.nc().openPopUp(c)})),r.bc(1,"mat-icon"),r.Oc(2,"edit"),r.ac(),r.ac(),r.bc(3,"button",11),r.jc("click",(function(i){r.Fc(t);const c=e.row;return r.nc().deleteItem(c)})),r.bc(4,"mat-icon"),r.Oc(5,"delete"),r.ac(),r.ac()}}let P=(()=>{class t{constructor(t,e,i,c,s){this.dialog=t,this.snack=e,this.locationApiService=i,this.confirmServive=c,this.loader=s,this.states=[],this.statesArray=[],this.subscripition=new S.a}ngOnInit(){this.loader.open(),this.getStates()}getStates(){this.subscripition.add(this.locationApiService.getStates().subscribe(t=>{this.states=[...t.result],this.loader.close()},t=>{this.loader.close()}))}openPopUp(t={},e){this.dialog.open(m,{width:"520px",disableClose:!0,data:{title:e?"Add New State":"Update state",payload:t}}).afterClosed().subscribe(i=>{i&&(this.loader.open(),this.subscripition.add(e?this.locationApiService.addState(i).subscribe(t=>{this.loader.close(),"success"===t.status&&(this.states.push(t.result),this.states=[...this.states],this.snack.open("State Added!","OK",{duration:4e3}))},t=>{this.loader.close()}):this.locationApiService.updateState(t._id,i).subscribe(e=>{this.loader.close(),"success"===e.status&&(this.getState(t._id,"update"),this.snack.open("State Updated!","OK",{duration:4e3}))},t=>{this.loader.close()})))})}getState(t,e){this.subscripition.add(this.locationApiService.getstate(t).subscribe(t=>{"update"===e&&this.states.forEach((e,i)=>{e._id===t.result._id&&(this.states[i]=t.result,this.states=[...this.states])})},t=>{this.loader.close()}))}deleteItem(t){this.subscripition.add(this.confirmServive.confirm({message:`Delete ${t.name}?`}).subscribe(e=>{e&&(this.loader.open(),this.states.forEach((e,i)=>{e._id===t._id&&this.states.splice(i,1)}),this.states=[...this.states],this.locationApiService.deleteState(t._id).subscribe(t=>{this.loader.close(),"success"===t.status&&this.snack.open("State deleted!","OK",{duration:4e3})},t=>{this.loader.close()}))}))}stateToggle(t,e){}ngOnDestroy(){this.subscripition.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Vb(a.b),r.Vb(v.a),r.Vb(w),r.Vb(x.a),r.Vb(h.a))},t.\u0275cmp=r.Pb({type:t,selectors:[["app-state"]],decls:16,vars:16,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-05",3,"click"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","limit","rowHeight"],["name","State",3,"flexGrow"],["ngx-datatable-cell-template",""],["name","State Code",3,"flexGrow"],["name","Active",3,"flexGrow"],["name","Actions",3,"flexGrow"],[3,"checked","change"],["mat-icon-button","","mat-sm-button","","color","primary",1,"mr-1",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(r.bc(0,"div",0),r.bc(1,"button",1),r.jc("click",(function(t){return e.openPopUp({},!0)})),r.Oc(2),r.oc(3,"translate"),r.oc(4,"translate"),r.ac(),r.ac(),r.bc(5,"mat-card",2),r.bc(6,"mat-card-content",2),r.bc(7,"ngx-datatable",3),r.bc(8,"ngx-datatable-column",4),r.Mc(9,k,1,1,"ng-template",5),r.ac(),r.bc(10,"ngx-datatable-column",6),r.Mc(11,y,1,1,"ng-template",5),r.ac(),r.bc(12,"ngx-datatable-column",7),r.Mc(13,A,1,1,"ng-template",5),r.ac(),r.bc(14,"ngx-datatable-column",8),r.Mc(15,M,6,0,"ng-template",5),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Gb(2),r.Rc("",r.pc(3,12,"ADD")," ",r.pc(4,14,"State"),""),r.Gb(5),r.sc("rows",e.states)("columnMode","force")("headerHeight",50)("footerHeight",50)("limit",10)("rowHeight",50),r.Gb(1),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1))},directives:[d.b,G.a,G.b,O.d,O.b,O.a,F.a,D.a],pipes:[u.c],styles:[""]}),t})();var R=i("d3UM"),_=i("FKr1");function C(t,e){if(1&t&&(r.bc(0,"mat-option",14),r.Oc(1),r.ac()),2&t){const t=e.$implicit;r.sc("value",t._id),r.Gb(1),r.Pc(t.name)}}function U(t,e){1&t&&(r.bc(0,"p",15),r.Oc(1,"*Please fill all the fields"),r.ac())}let I=(()=>{class t{constructor(t,e,i,c,s){this.data=t,this.locationApiService=e,this.dialogRef=i,this.fb=c,this.loader=s,this.subscripition=new S.a,this.states=[]}ngOnInit(){this.loader.open(),this.getStates(),this.buildItemForm(this.data.payload)}getStates(){this.subscripition.add(this.locationApiService.getStates().subscribe(t=>{this.states=t.result,this.loader.close()},t=>{this.loader.close()}))}buildItemForm(t){var e,i;this.itemForm=this.fb.group({state:[(null===(i=null===(e=t)||void 0===e?void 0:e.state)||void 0===i?void 0:i._id)||null,o.t.required],name:[t.name||null,o.t.required],code:[t.code||null,o.t.required]})}submit(){this.itemForm.value.name=this.itemForm.value.name.trim(),this.itemForm.value.code=this.itemForm.value.code.trim(),this.itemForm.value.code.length>0&&this.itemForm.value.name.length>0?this.dialogRef.close(this.itemForm.value):this.validationErrors=!0}ngOnDestroy(){this.loader.close(),this.subscripition.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Vb(a.a),r.Vb(w),r.Vb(a.f),r.Vb(o.c),r.Vb(h.a))},t.\u0275cmp=r.Pb({type:t,selectors:[["app-district-popup"]],decls:22,vars:8,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-1"],[1,"full-width","p-b-10"],["placeholder","Select State","name","state","formControlName","state",1,"full-width","state-box"],["ngDefaultControl","",3,"value",4,"ngFor","ngForOf"],["matInput","","name","username","formControlName","name","placeholder","District"],["matInput","","name","username","formControlName","code","placeholder","District Code"],["class","error-msg",4,"ngIf"],["fxFlex","100",1,"mt-1"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],["ngDefaultControl","",3,"value"],[1,"error-msg"]],template:function(t,e){1&t&&(r.bc(0,"h1",0),r.Oc(1),r.ac(),r.bc(2,"form",1),r.jc("ngSubmit",(function(t){return e.submit()})),r.bc(3,"div",2),r.bc(4,"div",3),r.bc(5,"mat-form-field",4),r.bc(6,"mat-select",5),r.Mc(7,C,2,2,"mat-option",6),r.ac(),r.ac(),r.ac(),r.bc(8,"div",3),r.bc(9,"mat-form-field",4),r.Wb(10,"input",7),r.ac(),r.ac(),r.bc(11,"div",3),r.bc(12,"mat-form-field",4),r.Wb(13,"input",8),r.ac(),r.ac(),r.Mc(14,U,2,0,"p",9),r.bc(15,"div",10),r.bc(16,"button",11),r.Oc(17),r.oc(18,"translate"),r.ac(),r.Wb(19,"span",12),r.bc(20,"button",13),r.jc("click",(function(t){return e.dialogRef.close(!1)})),r.Oc(21,"Cancel"),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Gb(1),r.Pc(e.data.title),r.Gb(1),r.sc("formGroup",e.itemForm),r.Gb(5),r.sc("ngForOf",e.states),r.Gb(7),r.sc("ngIf",e.validationErrors),r.Gb(2),r.sc("disabled",e.itemForm.invalid),r.Gb(1),r.Pc(r.pc(18,6,"SAVE")))},directives:[a.g,o.u,o.o,o.h,n.b,R.a,o.n,o.f,c.k,l.b,o.b,c.l,d.b,_.p],pipes:[u.c],styles:[".state-box[_ngcontent-%COMP%]{width:120px}.p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.error-msg[_ngcontent-%COMP%]{color:red}"]}),t})();function V(t,e){if(1&t&&r.Oc(0),2&t){const t=e.row;r.Qc(" ",null==t?null:t.name," ")}}function H(t,e){if(1&t&&r.Oc(0),2&t){const t=e.row;r.Qc(" ",null==t?null:t.code," ")}}function j(t,e){if(1&t&&r.Oc(0),2&t){const t=e.row;r.Qc(" ",null==t?null:t.state.name," ")}}function E(t,e){if(1&t){const t=r.cc();r.bc(0,"mat-slide-toggle",10),r.jc("change",(function(i){r.Fc(t);const c=e.row;return r.nc().stateToggle(c,i)})),r.ac()}if(2&t){const t=e.row;r.sc("checked","active"===(null==t?null:t.status))}}function N(t,e){if(1&t){const t=r.cc();r.bc(0,"button",11),r.jc("click",(function(i){r.Fc(t);const c=e.row;return r.nc().openPopUp(c)})),r.bc(1,"mat-icon"),r.Oc(2,"edit"),r.ac(),r.ac(),r.bc(3,"button",12),r.jc("click",(function(i){r.Fc(t);const c=e.row;return r.nc().deleteItem(c)})),r.bc(4,"mat-icon"),r.Oc(5,"delete"),r.ac(),r.ac()}}let T=(()=>{class t{constructor(t,e,i,c,s){this.dialog=t,this.snack=e,this.locationApiService=i,this.loader=c,this.confirmService=s,this.districts=[],this.subscripition=new S.a}ngOnInit(){this.loader.open(),this.getStates()}getStates(){this.subscripition.add(this.locationApiService.getDistricts().subscribe(t=>{this.districts=[...t.result],this.loader.close()},t=>{this.loader.close()}))}closeLoader(){this.loader.close()}openPopUp(t={},e){this.dialog.open(I,{width:"520px",disableClose:!0,data:{title:e?"Add New District":"Update District",payload:t}}).afterClosed().subscribe(i=>{i&&(this.loader.open(),this.subscripition.add(e?this.locationApiService.addDistrict(i).subscribe(t=>{this.loader.close(),"success"===t.status&&(this.getDistrict(t.result._id,"add"),this.snack.open("District Added!","OK",{duration:4e3}))},t=>{this.loader.close()}):this.locationApiService.updateDistrict(t._id,i).subscribe(t=>{this.loader.close(),"success"===t.status&&(this.getDistrict(t.result._id,"update"),this.snack.open("District Updated!","OK",{duration:4e3}))},t=>{this.loader.close()})))})}getDistrict(t,e){this.subscripition.add(this.locationApiService.getDistrict(t).subscribe(t=>{"add"===e?(this.districts.push(t.result),this.districts=[...this.districts]):this.districts.forEach((e,i)=>{e._id===t.result._id&&(this.districts[i]=t.result,this.districts=[...this.districts])})},t=>{this.loader.close()}))}deleteItem(t){this.subscripition.add(this.confirmService.confirm({message:`Delete ${t.name}?`}).subscribe(e=>{e&&(this.loader.open(),this.districts.forEach((e,i)=>{e._id===t._id&&this.districts.splice(i,1)}),this.districts=[...this.districts],this.locationApiService.deleteDistrict(t._id).subscribe(t=>{this.loader.close(),"success"===t.status&&this.snack.open("District deleted!","OK",{duration:4e3})}))},t=>{this.loader.close()}))}stateToggle(t,e){}ngOnDestroy(){this.subscripition.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Vb(a.b),r.Vb(v.a),r.Vb(w),r.Vb(h.a),r.Vb(x.a))},t.\u0275cmp=r.Pb({type:t,selectors:[["app-district"]],decls:18,vars:18,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-05",3,"click"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","limit","rowHeight"],["name","District",3,"flexGrow"],["ngx-datatable-cell-template",""],["name","District Code",3,"flexGrow"],["name","State",3,"flexGrow"],["name","Active",3,"flexGrow"],["name","Actions",3,"flexGrow"],[3,"checked","change"],["mat-icon-button","","mat-sm-button","","color","primary",1,"mr-1",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(r.bc(0,"div",0),r.bc(1,"button",1),r.jc("click",(function(t){return e.openPopUp({},!0)})),r.Oc(2),r.oc(3,"translate"),r.oc(4,"translate"),r.ac(),r.ac(),r.bc(5,"mat-card",2),r.bc(6,"mat-card-content",2),r.bc(7,"ngx-datatable",3),r.bc(8,"ngx-datatable-column",4),r.Mc(9,V,1,1,"ng-template",5),r.ac(),r.bc(10,"ngx-datatable-column",6),r.Mc(11,H,1,1,"ng-template",5),r.ac(),r.bc(12,"ngx-datatable-column",7),r.Mc(13,j,1,1,"ng-template",5),r.ac(),r.bc(14,"ngx-datatable-column",8),r.Mc(15,E,1,1,"ng-template",5),r.ac(),r.bc(16,"ngx-datatable-column",9),r.Mc(17,N,6,0,"ng-template",5),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Gb(2),r.Rc("",r.pc(3,14,"ADD")," ",r.pc(4,16,"District"),""),r.Gb(5),r.sc("rows",e.districts)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("limit",10)("rowHeight",50),r.Gb(1),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1))},directives:[d.b,G.a,G.b,O.d,O.b,O.a,F.a,D.a],pipes:[u.c],styles:[""]}),t})();function K(t,e){if(1&t&&(r.bc(0,"mat-option",14),r.Oc(1),r.ac()),2&t){const t=e.$implicit;r.sc("value",t._id),r.Gb(1),r.Pc(t.name)}}function q(t,e){if(1&t&&(r.bc(0,"mat-option",14),r.Oc(1),r.ac()),2&t){const t=e.$implicit;r.sc("value",t._id),r.Gb(1),r.Pc(t.name)}}function L(t,e){1&t&&(r.bc(0,"p",15),r.Oc(1,"*Please fill all the fields"),r.ac())}let W=(()=>{class t{constructor(t,e,i,c,s){this.data=t,this.dialogRef=e,this.fb=i,this.locationApiService=c,this.loader=s,this.subscripition=new S.a,this.states=[],this.Districts=[]}ngOnInit(){this.loader.open(),this.getStates(),this.getDistricts(),this.buildItemForm(this.data.payload)}getStates(){this.subscripition.add(this.locationApiService.getStates().subscribe(t=>{this.states=t.result},t=>{this.loader.close()}))}getDistricts(){this.subscripition.add(this.locationApiService.getDistricts().subscribe(t=>{this.Districts=t.result,this.loader.close()},t=>{this.loader.close()}))}buildItemForm(t){var e,i,c,s;this.itemForm=this.fb.group({name:[t.name||null,o.t.required],state:[(null===(i=null===(e=t)||void 0===e?void 0:e.state)||void 0===i?void 0:i._id)||null,o.t.required],district:[(null===(s=null===(c=t)||void 0===c?void 0:c.district)||void 0===s?void 0:s._id)||null,o.t.required]})}submit(){this.itemForm.value.name=this.itemForm.value.name.trim(),this.itemForm.value.name.length>0?this.dialogRef.close(this.itemForm.value):this.validationErrors=!0}ngOnDestroy(){this.loader.close(),this.subscripition.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Vb(a.a),r.Vb(a.f),r.Vb(o.c),r.Vb(w),r.Vb(h.a))},t.\u0275cmp=r.Pb({type:t,selectors:[["app-region-popup"]],decls:22,vars:9,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-1"],[1,"full-width","p-b-10"],["placeholder","Select State","name","state","formControlName","state",1,"full-width","state-box"],["ngDefaultControl","",3,"value",4,"ngFor","ngForOf"],["placeholder","Select District","name","state","formControlName","district",1,"full-width","state-box"],["matInput","","name","region","formControlName","name","placeholder","Region"],["class","error-msg",4,"ngIf"],["fxFlex","100",1,"mt-1"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],["ngDefaultControl","",3,"value"],[1,"error-msg"]],template:function(t,e){1&t&&(r.bc(0,"h1",0),r.Oc(1),r.ac(),r.bc(2,"form",1),r.jc("ngSubmit",(function(t){return e.submit()})),r.bc(3,"div",2),r.bc(4,"div",3),r.bc(5,"mat-form-field",4),r.bc(6,"mat-select",5),r.Mc(7,K,2,2,"mat-option",6),r.ac(),r.ac(),r.bc(8,"mat-form-field",4),r.bc(9,"mat-select",7),r.Mc(10,q,2,2,"mat-option",6),r.ac(),r.ac(),r.ac(),r.bc(11,"div",3),r.bc(12,"mat-form-field",4),r.Wb(13,"input",8),r.ac(),r.ac(),r.Mc(14,L,2,0,"p",9),r.bc(15,"div",10),r.bc(16,"button",11),r.Oc(17),r.oc(18,"translate"),r.ac(),r.Wb(19,"span",12),r.bc(20,"button",13),r.jc("click",(function(t){return e.dialogRef.close(!1)})),r.Oc(21,"Cancel"),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Gb(1),r.Pc(e.data.title),r.Gb(1),r.sc("formGroup",e.itemForm),r.Gb(5),r.sc("ngForOf",e.states),r.Gb(3),r.sc("ngForOf",e.Districts),r.Gb(4),r.sc("ngIf",e.validationErrors),r.Gb(2),r.sc("disabled",e.itemForm.invalid),r.Gb(1),r.Pc(r.pc(18,7,"SAVE")))},directives:[a.g,o.u,o.o,o.h,n.b,R.a,o.n,o.f,c.k,l.b,o.b,c.l,d.b,_.p],pipes:[u.c],styles:[".p-b-10[_ngcontent-%COMP%]{padding-bottom:10px}.error-msg[_ngcontent-%COMP%]{color:red}"]}),t})();function Q(t,e){if(1&t&&r.Oc(0),2&t){const t=e.row;r.Qc(" ",null==t?null:t.name," ")}}function $(t,e){if(1&t&&r.Oc(0),2&t){const t=e.row;r.Qc(" ",null==t?null:t.state.name," ")}}function z(t,e){if(1&t&&r.Oc(0),2&t){const t=e.row;r.Qc(" ",null==t?null:t.district.name," ")}}function J(t,e){if(1&t){const t=r.cc();r.bc(0,"mat-slide-toggle",10),r.jc("change",(function(i){r.Fc(t);const c=e.row;return r.nc().stateToggle(c,i)})),r.ac()}if(2&t){const t=e.row;r.sc("checked","active"===(null==t?null:t.status))}}function X(t,e){if(1&t){const t=r.cc();r.bc(0,"button",11),r.jc("click",(function(i){r.Fc(t);const c=e.row;return r.nc().openPopUp(c)})),r.bc(1,"mat-icon"),r.Oc(2,"edit"),r.ac(),r.ac(),r.bc(3,"button",12),r.jc("click",(function(i){r.Fc(t);const c=e.row;return r.nc().deleteItem(c)})),r.bc(4,"mat-icon"),r.Oc(5,"delete"),r.ac(),r.ac()}}let Y=(()=>{class t{constructor(t,e,i,c,s){this.dialog=t,this.snack=e,this.locationApiService=i,this.confirmService=c,this.loader=s,this.subscripition=new S.a,this.regions=[]}ngOnInit(){this.loader.open(),this.getStates()}getStates(){this.subscripition.add(this.locationApiService.getRegions().subscribe(t=>{this.regions=[...t.result],this.loader.close()},t=>{this.loader.close()}))}openPopUp(t={},e){this.dialog.open(W,{width:"520px",disableClose:!0,data:{title:e?"Add New Region":"Update Region",payload:t}}).afterClosed().subscribe(i=>{i&&(this.loader.open(),this.subscripition.add(e?this.locationApiService.addRegion(i).subscribe(t=>{this.loader.close(),"success"===t.status&&(this.getRegion(t.result._id,"add"),this.snack.open("Region Added!","OK",{duration:4e3}))},t=>{this.loader.close()}):this.locationApiService.updateRegion(t._id,i).subscribe(t=>{this.loader.close(),"success"===t.status&&(this.getRegion(t.result._id,"update"),this.snack.open("Region Updated!","OK",{duration:4e3}))},t=>{this.loader.close()})))})}getRegion(t,e){this.subscripition.add(this.locationApiService.getRegion(t).subscribe(t=>{"add"===e?(this.regions.push(t.result),this.regions=[...this.regions]):this.regions.forEach((e,i)=>{e._id===t.result._id&&(this.regions[i]=t.result,this.regions=[...this.regions])})},t=>{this.loader.close()}))}deleteItem(t){this.confirmService.confirm({message:`Delete ${t.name}?`}).subscribe(e=>{e&&(this.loader.open(),this.regions.forEach((e,i)=>{e._id===t._id&&this.regions.splice(i,1)}),this.regions=[...this.regions],this.subscripition.add(this.locationApiService.deleteRegion(t._id).subscribe(t=>{this.loader.close(),"success"===t.status&&this.snack.open("Region deleted!","OK",{duration:4e3})},t=>{this.loader.close()})))})}stateToggle(t,e){}ngOnDestroy(){this.subscripition.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Vb(a.b),r.Vb(v.a),r.Vb(w),r.Vb(x.a),r.Vb(h.a))},t.\u0275cmp=r.Pb({type:t,selectors:[["app-region"]],decls:18,vars:18,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-05",3,"click"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","limit","rowHeight"],["name","Region",3,"flexGrow"],["ngx-datatable-cell-template",""],["name","State",3,"flexGrow"],["name","District",3,"flexGrow"],["name","Active",3,"flexGrow"],["name","Actions",3,"flexGrow"],[3,"checked","change"],["mat-icon-button","","mat-sm-button","","color","primary",1,"mr-1",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(r.bc(0,"div",0),r.bc(1,"button",1),r.jc("click",(function(t){return e.openPopUp({},!0)})),r.Oc(2),r.oc(3,"translate"),r.oc(4,"translate"),r.ac(),r.ac(),r.bc(5,"mat-card",2),r.bc(6,"mat-card-content",2),r.bc(7,"ngx-datatable",3),r.bc(8,"ngx-datatable-column",4),r.Mc(9,Q,1,1,"ng-template",5),r.ac(),r.bc(10,"ngx-datatable-column",6),r.Mc(11,$,1,1,"ng-template",5),r.ac(),r.bc(12,"ngx-datatable-column",7),r.Mc(13,z,1,1,"ng-template",5),r.ac(),r.bc(14,"ngx-datatable-column",8),r.Mc(15,J,1,1,"ng-template",5),r.ac(),r.bc(16,"ngx-datatable-column",9),r.Mc(17,X,6,0,"ng-template",5),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Gb(2),r.Rc("",r.pc(3,14,"ADD")," ",r.pc(4,16,"Region"),""),r.Gb(5),r.sc("rows",e.regions)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("limit",10)("rowHeight",50),r.Gb(1),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1),r.Gb(2),r.sc("flexGrow",1))},directives:[d.b,G.a,G.b,O.d,O.b,O.a,F.a,D.a],pipes:[u.c],styles:[""]}),t})();var B=i("hOig");const Z=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Pb({type:t,selectors:[["app-dashboard"]],decls:1,vars:0,template:function(t,e){1&t&&r.Wb(0,"app-admin-layout")},directives:[B.a],styles:[""]}),t})(),children:[{path:"",redirectTo:"state"},{path:"state",component:P},{path:"district",component:T},{path:"region",component:Y},{path:"**",redirectTo:""}]}];let tt=(()=>{class t{}return t.\u0275mod=r.Tb({type:t}),t.\u0275inj=r.Sb({factory:function(e){return new(e||t)},imports:[[s.k.forChild(Z)],s.k]}),t})();var et=i("zMWy"),it=i("PCNd");i.d(e,"DashboardModule",(function(){return ct}));let ct=(()=>{class t{}return t.\u0275mod=r.Tb({type:t}),t.\u0275inj=r.Sb({factory:function(e){return new(e||t)},imports:[[c.c,tt,it.a,et.a,u.b,O.e]]}),t})()}}]);