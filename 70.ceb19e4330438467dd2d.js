(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"7o9V":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("EM62"),a=function(){function e(e){switch(this.currentLib=e,this.currentLib){case"core":this.library="@fundamental-ngx/core";break;case"platform":this.library="@fundamental-ngx/platform"}}return e.\u0275fac=function(t){return new(t||e)(i.Lb("CURRENT_LIB"))},e.\u0275cmp=i.Fb({type:e,selectors:[["import"]],inputs:{module:"module"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(e,t){1&e&&(i.Rb(0,"code"),i.Rb(1,"span",0),i.Oc(2,"import"),i.Qb(),i.Oc(3),i.Rb(4,"span",0),i.Oc(5,"from "),i.Qb(),i.Rb(6,"span",1),i.Oc(7),i.Qb(),i.Oc(8,"; "),i.Qb()),2&e&&(i.Ab(3),i.Qc(" { ",t.module," } "),i.Ab(4),i.Qc("'",t.library,"'"))},encapsulation:2}),e}()},"P+xO":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("EM62"),a=["*"],c=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["header"]],ngContentSelectors:a,decls:2,vars:0,consts:[[1,"header"]],template:function(e,t){1&e&&(i.nc(),i.Rb(0,"h1",0),i.mc(1),i.Qb())},styles:[".header[_ngcontent-%COMP%] {\n                margin-top: 2rem;\n                font-size: 2.2rem;\n            }"]}),e}()},bYPJ:function(e,t,n){"use strict";n.r(t),n.d(t,"PlatformSwitchDocsModule",(function(){return W}));var i={};n.r(i),n.d(i,"default",(function(){return w}));var a={};n.r(a),n.d(a,"default",(function(){return g}));var c={};n.r(c),n.d(c,"default",(function(){return v}));var o={};n.r(o),n.d(o,"default",(function(){return y}));var r={};n.r(r),n.d(r,"default",(function(){return C}));var s={};n.r(s),n.d(s,"default",(function(){return L}));var l={};n.r(l),n.d(l,"default",(function(){return x}));var m={};n.r(m),n.d(m,"default",(function(){return F}));var f={};n.r(f),n.d(f,"default",(function(){return S}));var d=n("sEIs"),p=n("63W6"),b=n("eCHz"),u=n("qOWU"),h=n("CRIm"),w='<fdp-form-group [multiLayout]="true">\n    <fdp-form-field id="default-switch" label="Default Switch" zone="zLeft" rank="1">\n        <fdp-switch\n            name="default-switch"\n            ariaLabel="Default Switch"\n            ariaLabelledby="switch-disabled-label">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="default-compact-switch" label="Default Compact Switch" zone="zLeft" rank="1">\n        <fdp-switch\n            name="default-compact-switch"\n            ariaLabel="Default Compact Switch"\n            ariaLabelledby="switch-disabled-label"\n            contentDensity="compact">\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n',g='<fdp-form-group [multiLayout]="true" [formGroup]="customForm">\n    <fdp-form-field id="switch-disabled" label="Default disabled Switch" zone="zLeft" rank="1">\n        <fdp-switch\n            name="switch-disabled"\n            ariaLabel="Switch disabled"\n            ariaLabelledby="switch-disabled-label"\n            contentDensity="cozy"\n            [semantic]="false"\n            [disabled]="true">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="form-switch-disabled" label="Form Default disabled Switch" zone="zLeft" rank="1">\n        <fdp-switch\n            name="form-switch-disabled"\n            ariaLabel="Form Switch disabled"\n            ariaLabelledby="form-switch-disabled-label"\n            formControlName="fieldDisable">\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n',v="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'fdp-disabled-switch-example',\n    templateUrl: './disabled-switch-example.component.html'\n})\nexport class DisabledSwitchExampleComponent {\n    customForm = new FormGroup({\n        fieldDisable: new FormControl({ value: true, disabled: true })\n    });\n}\n",y='<fdp-form-group [multiLayout]="true">\n    <fdp-form-field id="semantic-switch" label="Default Semantic Switch" zone="zLeft" rank="1">\n        <fdp-switch\n            name="semantic-switch"\n            ariaLabel="Semantic Switch"\n            ariaLabelledby="semantic-switch-label"\n            [semantic]="true"\n            (switchChange)="onSwitchChange($event)">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="semantic-switch-compact" label="Default Semantic Compact Switch" zone="zLeft" rank="1">\n        <fdp-switch\n            name="semantic-switch-compact"\n            ariaLabel="Semantic Switch Compact"\n            ariaLabelledby="semantic-switch-compact-label"\n            contentDensity="compact"\n            [semantic]="true"\n            [(ngModel)]="switched"\n            (switchChange)="onSwitchChange($event)">\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n',C="import { Component } from '@angular/core';\n\nimport { SwitchChangeEvent } from '@fundamental-ngx/platform';\n\n@Component({\n    selector: 'fdp-semantic-switch-example',\n    templateUrl: 'semantic-switch-example.component.html'\n})\nexport class SemanticSwitchExampleComponent {\n    switched = true;\n\n    onSwitchChange(value: SwitchChangeEvent): void {\n    }\n}\n",L='<fdp-form-group [multiLayout]="true" [formGroup]="customForm">\n    <fdp-form-field id="switch1" label="Form Switch 1" zone="zLeft" rank="4">\n        <fdp-switch\n            name="switch-1"\n            ariaLabel="switch-label"\n            ariaLabelledby="switch-label"\n            contentDensity="cozy"\n            [semantic]="false"\n            formControlName="switch1">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="switch2" label="Form Switch 2" zone="zLeft" rank="4">\n        <fdp-switch\n            name="switch-2"\n            ariaLabel="Switch"\n            ariaLabelledby="switch-label"\n            contentDensity="compact"\n            [semantic]="true"\n            formControlName="switch2">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="switch3" label="Form Switch 3" zone="zLeft" rank="4">\n        <fdp-switch\n            name="switch-3"\n            ariaLabel="Switch"\n            ariaLabelledby="switch-label"\n            contentDensity="compact"\n            [semantic]="false"\n            formControlName="switch3">\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n\n<div style="padding-left: 2rem;">form value: {{ customForm.getRawValue() | json }}</div>\n',x="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'fdp-switch-forms-example',\n    templateUrl: './switch-forms-example.component.html'\n})\nexport class SwitchFormsExampleComponent {\n    customForm = new FormGroup({\n        switch1: new FormControl(false),\n        switch2: new FormControl(true),\n        switch3: new FormControl(false)\n    });\n}\n",F='<fdp-form-group [multiLayout]="true" [formGroup]="customForm">\n    <fdp-form-field id="switch-config" label="Switch with Config" zone="zLeft" rank="4">\n        <fdp-switch\n            name="switch-config"\n            formControlName="switch"\n        ></fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n\n<div style="padding-left: 2rem;">form value: {{ customForm.getRawValue() | json }}</div>\n',S="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\nimport { SwitchConfig } from '@fundamental-ngx/platform';\n\nexport const switchConfigFactory = SwitchConfig.createProviderFactory({\n    contentDensity: 'compact'\n});\n\nexport const customSwitchConfigProvider = {\n    provide: SwitchConfig,\n    useFactory: switchConfigFactory\n};\n\n@Component({\n    selector: 'fdp-switch-config-example',\n    templateUrl: './switch-config-example.component.html',\n    providers: [customSwitchConfigProvider]\n})\nexport class SwitchConfigExampleComponent {\n    customForm = new FormGroup({\n        switch: new FormControl(false)\n    });\n}\n",R=n("EM62"),Q=n("9Cr2"),z=n("Zn6N"),M=n("dB5E"),k=n("+lTP"),O=n("twBq"),D=n("+KKb"),A=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=R.Fb({type:e,selectors:[["fdp-switch-sizes-example"]],decls:5,vars:1,consts:[[3,"multiLayout"],["id","default-switch","label","Default Switch","zone","zLeft","rank","1"],["name","default-switch","ariaLabel","Default Switch","ariaLabelledby","switch-disabled-label"],["id","default-compact-switch","label","Default Compact Switch","zone","zLeft","rank","1"],["name","default-compact-switch","ariaLabel","Default Compact Switch","ariaLabelledby","switch-disabled-label","contentDensity","compact"]],template:function(e,t){1&e&&(R.Rb(0,"fdp-form-group",0),R.Rb(1,"fdp-form-field",1),R.Mb(2,"fdp-switch",2),R.Qb(),R.Rb(3,"fdp-form-field",3),R.Mb(4,"fdp-switch",4),R.Qb(),R.Qb()),2&e&&R.oc("multiLayout",!0)},directives:[k.a,O.a,D.a],encapsulation:2}),e}(),N=n("gJWE"),P=n("ekBi"),E=n("nIj0"),G=function(){function e(){this.customForm=new E.k({fieldDisable:new E.h({value:!0,disabled:!0})})}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=R.Fb({type:e,selectors:[["fdp-disabled-switch-example"]],decls:5,vars:4,consts:[[3,"multiLayout","formGroup"],["id","switch-disabled","label","Default disabled Switch","zone","zLeft","rank","1"],["name","switch-disabled","ariaLabel","Switch disabled","ariaLabelledby","switch-disabled-label","contentDensity","cozy",3,"semantic","disabled"],["id","form-switch-disabled","label","Form Default disabled Switch","zone","zLeft","rank","1"],["name","form-switch-disabled","ariaLabel","Form Switch disabled","ariaLabelledby","form-switch-disabled-label","formControlName","fieldDisable"]],template:function(e,t){1&e&&(R.Rb(0,"fdp-form-group",0),R.Rb(1,"fdp-form-field",1),R.Mb(2,"fdp-switch",2),R.Qb(),R.Rb(3,"fdp-form-field",3),R.Mb(4,"fdp-switch",4),R.Qb(),R.Qb()),2&e&&(R.oc("multiLayout",!0)("formGroup",t.customForm),R.Ab(2),R.oc("semantic",!1)("disabled",!0))},directives:[k.a,E.u,E.l,O.a,D.a,E.t,E.j],encapsulation:2}),e}(),I=function(){function e(){this.switched=!0}return e.prototype.onSwitchChange=function(e){},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=R.Fb({type:e,selectors:[["fdp-semantic-switch-example"]],decls:5,vars:4,consts:[[3,"multiLayout"],["id","semantic-switch","label","Default Semantic Switch","zone","zLeft","rank","1"],["name","semantic-switch","ariaLabel","Semantic Switch","ariaLabelledby","semantic-switch-label",3,"semantic","switchChange"],["id","semantic-switch-compact","label","Default Semantic Compact Switch","zone","zLeft","rank","1"],["name","semantic-switch-compact","ariaLabel","Semantic Switch Compact","ariaLabelledby","semantic-switch-compact-label","contentDensity","compact",3,"semantic","ngModel","ngModelChange","switchChange"]],template:function(e,t){1&e&&(R.Rb(0,"fdp-form-group",0),R.Rb(1,"fdp-form-field",1),R.Rb(2,"fdp-switch",2),R.dc("switchChange",(function(e){return t.onSwitchChange(e)})),R.Qb(),R.Qb(),R.Rb(3,"fdp-form-field",3),R.Rb(4,"fdp-switch",4),R.dc("ngModelChange",(function(e){return t.switched=e}))("switchChange",(function(e){return t.onSwitchChange(e)})),R.Qb(),R.Qb(),R.Qb()),2&e&&(R.oc("multiLayout",!0),R.Ab(2),R.oc("semantic",!0),R.Ab(2),R.oc("semantic",!0)("ngModel",t.switched))},directives:[k.a,O.a,D.a,E.t,E.w],encapsulation:2}),e}(),j=n("2kYt"),_=function(){function e(){this.customForm=new E.k({switch1:new E.h(!1),switch2:new E.h(!0),switch3:new E.h(!1)})}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=R.Fb({type:e,selectors:[["fdp-switch-forms-example"]],decls:10,vars:8,consts:[[3,"multiLayout","formGroup"],["id","switch1","label","Form Switch 1","zone","zLeft","rank","4"],["name","switch-1","ariaLabel","switch-label","ariaLabelledby","switch-label","contentDensity","cozy","formControlName","switch1",3,"semantic"],["id","switch2","label","Form Switch 2","zone","zLeft","rank","4"],["name","switch-2","ariaLabel","Switch","ariaLabelledby","switch-label","contentDensity","compact","formControlName","switch2",3,"semantic"],["id","switch3","label","Form Switch 3","zone","zLeft","rank","4"],["name","switch-3","ariaLabel","Switch","ariaLabelledby","switch-label","contentDensity","compact","formControlName","switch3",3,"semantic"],[2,"padding-left","2rem"]],template:function(e,t){1&e&&(R.Rb(0,"fdp-form-group",0),R.Rb(1,"fdp-form-field",1),R.Mb(2,"fdp-switch",2),R.Qb(),R.Rb(3,"fdp-form-field",3),R.Mb(4,"fdp-switch",4),R.Qb(),R.Rb(5,"fdp-form-field",5),R.Mb(6,"fdp-switch",6),R.Qb(),R.Qb(),R.Rb(7,"div",7),R.Oc(8),R.ic(9,"json"),R.Qb()),2&e&&(R.oc("multiLayout",!0)("formGroup",t.customForm),R.Ab(2),R.oc("semantic",!1),R.Ab(2),R.oc("semantic",!0),R.Ab(2),R.oc("semantic",!1),R.Ab(2),R.Qc("form value: ",R.jc(9,6,t.customForm.getRawValue()),""))},directives:[k.a,E.u,E.l,O.a,D.a,E.t,E.j],pipes:[j.l],encapsulation:2}),e}(),T=p.x.createProviderFactory({contentDensity:"compact"}),J={provide:p.x,useFactory:T},V=function(){function e(){this.customForm=new E.k({switch:new E.h(!1)})}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=R.Fb({type:e,selectors:[["fdp-switch-config-example"]],features:[R.zb([J])],decls:6,vars:5,consts:[[3,"multiLayout","formGroup"],["id","switch-config","label","Switch with Config","zone","zLeft","rank","4"],["name","switch-config","formControlName","switch"],[2,"padding-left","2rem"]],template:function(e,t){1&e&&(R.Rb(0,"fdp-form-group",0),R.Rb(1,"fdp-form-field",1),R.Mb(2,"fdp-switch",2),R.Qb(),R.Qb(),R.Rb(3,"div",3),R.Oc(4),R.ic(5,"json"),R.Qb()),2&e&&(R.oc("multiLayout",!0)("formGroup",t.customForm),R.Ab(4),R.Qc("form value: ",R.jc(5,3,t.customForm.getRawValue()),""))},directives:[k.a,E.u,E.l,O.a,D.a,E.t,E.j],pipes:[j.l],encapsulation:2}),e}(),U=function(){function e(){this.switchSize=[{language:"html",code:i,fileName:"switch-sizes-example"}],this.switchDisable=[{language:"html",code:a,fileName:"disabled-switch-example"},{language:"typescript",code:c,fileName:"disabled-switch-example"}],this.switchSemantic=[{language:"html",code:o,fileName:"semantic-switch-example"},{language:"typescript",code:r,fileName:"switch-sizes-example"}],this.switchFormExample=[{language:"html",code:s,fileName:"switch-example-disabled-state"},{language:"typescript",code:l,fileName:"switch-sizes-example"}],this.switchConfig=[{language:"html",code:m,fileName:"switch-config-example"},{language:"typescript",code:f,fileName:"switch-config-example"}]}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=R.Fb({type:e,selectors:[["app-switch"]],decls:43,vars:5,consts:[["id","sizes","componentName","switch"],[3,"exampleFiles"],["id","disabled","componentName","switch"],["id","semanticCompact","componentName","switch"],["id","withReactiveForm","componentName","switch"],["id","panelConfig","componentName","panel"]],template:function(e,t){1&e&&(R.Rb(0,"fd-docs-section-title",0),R.Oc(1,"Default switch with variations"),R.Qb(),R.Mb(2,"description"),R.Rb(3,"component-example"),R.Mb(4,"fdp-switch-sizes-example"),R.Qb(),R.Mb(5,"code-example",1),R.Mb(6,"separator"),R.Rb(7,"fd-docs-section-title",2),R.Oc(8,"Disabled State"),R.Qb(),R.Rb(9,"description"),R.Oc(10,"Switch can be in the disabled state, which prevents the user from interacting with it."),R.Qb(),R.Rb(11,"component-example"),R.Mb(12,"fdp-disabled-switch-example"),R.Qb(),R.Mb(13,"code-example",1),R.Mb(14,"separator"),R.Rb(15,"fd-docs-section-title",3),R.Oc(16,"Semantic and Compact Mode"),R.Qb(),R.Rb(17,"description"),R.Oc(18," It is possible to add semantic mode by passing "),R.Rb(19,"code"),R.Oc(20,'[semantic]="true"'),R.Qb(),R.Oc(21," and compact mode by passing "),R.Rb(22,"code"),R.Oc(23,'[compact]="true"'),R.Qb(),R.Oc(24," to switch component.\n"),R.Qb(),R.Rb(25,"component-example"),R.Mb(26,"fdp-semantic-switch-example"),R.Qb(),R.Mb(27,"code-example",1),R.Mb(28,"separator"),R.Rb(29,"fd-docs-section-title",4),R.Oc(30,"Switch used within FormFieldControl\n"),R.Qb(),R.Rb(31,"description"),R.Oc(32,"It is possible to use the fdp-switch component within Angular Reactive Forms"),R.Qb(),R.Rb(33,"component-example"),R.Mb(34,"fdp-switch-forms-example"),R.Qb(),R.Mb(35,"code-example",1),R.Rb(36,"fd-docs-section-title",5),R.Oc(37,"Switch Config"),R.Qb(),R.Rb(38,"description"),R.Oc(39,"Use Switch Config to override default options"),R.Qb(),R.Rb(40,"component-example"),R.Mb(41,"fdp-switch-config-example"),R.Qb(),R.Mb(42,"code-example",1)),2&e&&(R.Ab(5),R.oc("exampleFiles",t.switchSize),R.Ab(8),R.oc("exampleFiles",t.switchDisable),R.Ab(14),R.oc("exampleFiles",t.switchSemantic),R.Ab(8),R.oc("exampleFiles",t.switchFormExample),R.Ab(7),R.oc("exampleFiles",t.switchConfig))},directives:[Q.a,z.a,M.a,A,N.a,P.a,G,I,_,V],encapsulation:2}),e}(),B=n("P+xO"),H=n("7o9V"),$=n("h8DJ"),q=[{path:"",component:function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=R.Fb({type:e,selectors:[["fdp-switch-header"]],decls:15,vars:1,consts:[[3,"routerLink"],["module","SwitchModule"]],template:function(e,t){1&e&&(R.Rb(0,"header"),R.Oc(1,"Switch"),R.Qb(),R.Rb(2,"description"),R.Rb(3,"p"),R.Oc(4,"This is an extension of the Switch component present in "),R.Rb(5,"a",0),R.Oc(6,"fundamental-ngx/core"),R.Qb(),R.Oc(7,"."),R.Qb(),R.Rb(8,"h3"),R.Oc(9,"Platform specific enhancements:"),R.Qb(),R.Rb(10,"p"),R.Oc(11,"The Platform Switch component implement the FormFieldControl interface, thus can be used within the FormField component."),R.Qb(),R.Qb(),R.Mb(12,"import",1),R.Mb(13,"fd-header-tabs"),R.Mb(14,"router-outlet")),2&e&&(R.Ab(5),R.oc("routerLink","/core/switch"))},directives:[B.a,z.a,d.d,H.a,$.a,d.f],encapsulation:2}),e}(),children:[{path:"",component:U},{path:"api",component:b.a,data:{content:u.a.switch}}]}],W=function(){function e(){}return e.\u0275mod=R.Jb({type:e}),e.\u0275inj=R.Ib({factory:function(t){return new(t||e)},imports:[[d.e.forChild(q),h.a,p.u,p.b],d.e]}),e}()},eCHz:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var i=n("0krV"),a=(n("LTOS"),n("EM62")),c=n("sEIs"),o=n("2kYt"),r=n("4C0c"),s=n("0b/r"),l=n("LyOV"),m=n("pmyj"),f=n("CE3v"),d=n("zege"),p=["menu"];function b(e,t){if(1&e&&(a.Rb(0,"button",8),a.Oc(1),a.Qb()),2&e){var n=a.hc(),i=a.zc(6);a.oc("fdMenu",!0)("fdMenuTrigger",i),a.Ab(1),a.Qc(" Select a file (",n.files.length,") ")}}var u=function(e){return{"is-selected":e}};function h(e,t){if(1&e){var n=a.Sb();a.Rb(0,"li",9),a.dc("click",(function(){a.Cc(n);var e=t.$implicit;return a.hc().getFile(e)})),a.Rb(1,"div",10),a.Rb(2,"span",11),a.Oc(3),a.Qb(),a.Qb(),a.Qb()}if(2&e){var i=t.$implicit,c=a.hc();a.oc("ngClass",a.sc(2,u,i===c.activeFile)),a.Ab(3),a.Pc(i)}}var w=function(){function e(e,t){this.route=e,this.apiService=t}return e.prototype.ngOnInit=function(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"},e.prototype.getFile=function(e){var t=this;this.apiService.getComponentHtml(e).subscribe((function(n){t.result=n,t.activeFile=e,t.menu.close()}),(function(t){console.warn("Did not find file "+e+".\nError: "+t)}))},e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a),a.Lb(i.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["fd-api"]],viewQuery:function(e,t){var n;1&e&&a.Tc(p,!0),2&e&&a.yc(n=a.ec())&&(t.menu=n.first)},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"ngClass","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"ngClass","click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(e,t){1&e&&(a.Rb(0,"div",0),a.Rb(1,"h2",1),a.Oc(2),a.Qb(),a.Mb(3,"span",2),a.Mc(4,b,2,3,"button",3),a.Rb(5,"fd-menu",4,5),a.Mc(7,h,4,4,"li",6),a.Qb(),a.Qb(),a.Mb(8,"div",7)),2&e&&(a.Ab(2),a.Pc(t.activeFile),a.Ab(2),a.oc("ngIf",t.files.length>1),a.Ab(1),a.oc("fillControlMode",null),a.Ab(2),a.oc("ngForOf",t.files),a.Ab(1),a.oc("innerHTML",t.result,a.Dc))},directives:[o.u,r.a,o.t,s.a,l.a,m.a,o.r,f.a,d.a],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),e}()},h8DJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n("EM62"),a=n("Rb7q"),c=n("Nyd4"),o=n("sEIs"),r=n("34dh"),s=n("JSov"),l=n("ekBi"),m=function(){return{exact:!0}},f=function(){function e(){}return e.prototype.ngOnInit=function(){},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["fd-header-tabs"]],decls:12,vars:6,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLinkActive","",3,"routerLinkActiveOptions","active","routerLink"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLinkActive","",3,"active","routerLink"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(e,t){if(1&e&&(i.Rb(0,"ul",0),i.Rb(1,"li",1),i.Rb(2,"a",2,3),i.Rb(4,"span",4),i.Oc(5,"Examples"),i.Qb(),i.Qb(),i.Qb(),i.Rb(6,"li",1),i.Rb(7,"a",5,6),i.Rb(9,"span",4),i.Oc(10,"API"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Mb(11,"separator",7)),2&e){var n=i.zc(3),a=i.zc(8);i.Ab(2),i.oc("routerLinkActiveOptions",i.rc(5,m))("active",n.isActive)("routerLink","./"),i.Ab(5),i.oc("active",a.isActive)("routerLink","./api")}},directives:[a.a,c.a,o.d,r.a,o.c,s.j,l.a],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),e}()}}]);