(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"7o9V":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("EM62"),o=function(){function t(t){switch(this.currentLib=t,this.currentLib){case"core":this.library="@fundamental-ngx/core";break;case"platform":this.library="@fundamental-ngx/platform"}}return t.\u0275fac=function(n){return new(n||t)(i.Lb("CURRENT_LIB"))},t.\u0275cmp=i.Fb({type:t,selectors:[["import"]],inputs:{module:"module"},decls:9,vars:2,consts:[[2,"color","rgb(0, 0, 136)"],[2,"color","rgb(0, 136, 0)"]],template:function(t,n){1&t&&(i.Rb(0,"code"),i.Rb(1,"span",0),i.Oc(2,"import"),i.Qb(),i.Oc(3),i.Rb(4,"span",0),i.Oc(5,"from "),i.Qb(),i.Rb(6,"span",1),i.Oc(7),i.Qb(),i.Oc(8,"; "),i.Qb()),2&t&&(i.Ab(3),i.Qc(" { ",n.module," } "),i.Ab(4),i.Qc("'",n.library,"'"))},encapsulation:2}),t}()},"P+xO":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("EM62"),o=["*"],c=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["header"]],ngContentSelectors:o,decls:2,vars:0,consts:[[1,"header"]],template:function(t,n){1&t&&(i.nc(),i.Rb(0,"h1",0),i.mc(1),i.Qb())},styles:[".header[_ngcontent-%COMP%] {\n                margin-top: 2rem;\n                font-size: 2.2rem;\n            }"]}),t}()},eCHz:function(t,n,e){"use strict";e.d(n,"a",(function(){return C}));var i=e("0krV"),o=(e("LTOS"),e("EM62")),c=e("sEIs"),u=e("2kYt"),a=e("4C0c"),m=e("0b/r"),l=e("LyOV"),r=e("pmyj"),p=e("CE3v"),b=e("zege"),s=["menu"];function d(t,n){if(1&t&&(o.Rb(0,"button",8),o.Oc(1),o.Qb()),2&t){var e=o.hc(),i=o.zc(6);o.oc("fdMenu",!0)("fdMenuTrigger",i),o.Ab(1),o.Qc(" Select a file (",e.files.length,") ")}}var f=function(t){return{"is-selected":t}};function y(t,n){if(1&t){var e=o.Sb();o.Rb(0,"li",9),o.dc("click",(function(){o.Cc(e);var t=n.$implicit;return o.hc().getFile(t)})),o.Rb(1,"div",10),o.Rb(2,"span",11),o.Oc(3),o.Qb(),o.Qb(),o.Qb()}if(2&t){var i=n.$implicit,c=o.hc();o.oc("ngClass",o.sc(2,f,i===c.activeFile)),o.Ab(3),o.Pc(i)}}var C=function(){function t(t,n){this.route=t,this.apiService=n}return t.prototype.ngOnInit=function(){this.route.snapshot.data&&(this.files=this.route.snapshot.data.content),this.files&&this.files.length>0?(this.files.sort(),this.getFile(this.files[0]),this.activeFile=this.files[0]):this.result="<h2>No API files found.</h2>"},t.prototype.getFile=function(t){var n=this;this.apiService.getComponentHtml(t).subscribe((function(e){n.result=e,n.activeFile=t,n.menu.close()}),(function(n){console.warn("Did not find file "+t+".\nError: "+n)}))},t.\u0275fac=function(n){return new(n||t)(o.Lb(c.a),o.Lb(i.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["fd-api"]],viewQuery:function(t,n){var e;1&t&&o.Tc(s,!0),2&t&&o.yc(e=o.ec())&&(n.menu=e.first)},decls:9,vars:5,consts:[[1,"api-main-container"],[1,"api-main-header"],[2,"display","flex","flex-grow","1"],["fd-button","",3,"fdMenu","fdMenuTrigger",4,"ngIf"],["placement","bottom-start",3,"fillControlMode"],["menu",""],["fd-menu-item","",3,"ngClass","click",4,"ngFor","ngForOf"],[3,"innerHTML"],["fd-button","",3,"fdMenu","fdMenuTrigger"],["fd-menu-item","",3,"ngClass","click"],["fd-menu-interactive",""],["fd-menu-title",""]],template:function(t,n){1&t&&(o.Rb(0,"div",0),o.Rb(1,"h2",1),o.Oc(2),o.Qb(),o.Mb(3,"span",2),o.Mc(4,d,2,3,"button",3),o.Rb(5,"fd-menu",4,5),o.Mc(7,y,4,4,"li",6),o.Qb(),o.Qb(),o.Mb(8,"div",7)),2&t&&(o.Ab(2),o.Pc(n.activeFile),o.Ab(2),o.oc("ngIf",n.files.length>1),o.Ab(1),o.oc("fillControlMode",null),o.Ab(2),o.oc("ngForOf",n.files),o.Ab(1),o.oc("innerHTML",n.result,o.Dc))},directives:[u.u,a.a,u.t,m.a,l.a,r.a,u.r,p.a,b.a],styles:[".api-main-header[_ngcontent-%COMP%]{margin:0;font-weight:700;text-rendering:optimizeLegibility}.api-main-container[_ngcontent-%COMP%]{margin-top:2em;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}fd-popover[_ngcontent-%COMP%]     .fd-button{margin-right:0}"]}),t}()},h8DJ:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var i=e("EM62"),o=e("Rb7q"),c=e("Nyd4"),u=e("sEIs"),a=e("34dh"),m=e("JSov"),l=e("ekBi"),r=function(){return{exact:!0}},p=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["fd-header-tabs"]],decls:12,vars:6,consts:[["fd-tab-nav",""],["fd-tab-item",""],["fd-tab-link","","routerLinkActive","",3,"routerLinkActiveOptions","active","routerLink"],["rla1","routerLinkActive"],["fd-tab-tag",""],["fd-tab-link","","routerLinkActive","",3,"active","routerLink"],["rla2","routerLinkActive"],[2,"margin-top","0"]],template:function(t,n){if(1&t&&(i.Rb(0,"ul",0),i.Rb(1,"li",1),i.Rb(2,"a",2,3),i.Rb(4,"span",4),i.Oc(5,"Examples"),i.Qb(),i.Qb(),i.Qb(),i.Rb(6,"li",1),i.Rb(7,"a",5,6),i.Rb(9,"span",4),i.Oc(10,"API"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Mb(11,"separator",7)),2&t){var e=i.zc(3),o=i.zc(8);i.Ab(2),i.oc("routerLinkActiveOptions",i.rc(5,r))("active",e.isActive)("routerLink","./"),i.Ab(5),i.oc("active",o.isActive)("routerLink","./api")}},directives:[o.a,c.a,u.d,a.a,u.c,m.j,l.a],styles:["[_nghost-%COMP%]{display:block}.fd-tabs[_ngcontent-%COMP%]{margin-bottom:0;margin-top:24px}.fd-tabs__item[_ngcontent-%COMP%]{padding:0;margin-right:24px}.fd-tabs__link[_ngcontent-%COMP%]{min-width:60px;padding-right:12px;padding-left:12px;text-align:center}"]}),t}()},n9uh:function(t,n,e){"use strict";e.r(n),e.d(n,"PlatformSplitMenuButtonDocsModule",(function(){return V}));var i={};e.r(i),e.d(i,"default",(function(){return h}));var o={};e.r(o),e.d(o,"default",(function(){return I}));var c={};e.r(c),e.d(c,"default",(function(){return M}));var u={};e.r(u),e.d(u,"default",(function(){return S}));var a,m=e("sEIs"),l=e("eCHz"),r=e("qOWU"),p=e("CRIm"),b=e("EM62"),s=e("P+xO"),d=e("Zn6N"),f=e("7o9V"),y=e("h8DJ"),C=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Fb({type:t,selectors:[["app-link-header"]],decls:19,vars:1,consts:[[3,"routerLink"],["module","PlatformSplitMenuButtonModule"]],template:function(t,n){1&t&&(b.Rb(0,"header"),b.Oc(1,"Split Menu Button"),b.Qb(),b.Rb(2,"description"),b.Oc(3," Split Menu Button features a button with a label and an expand icon. The label specifies the default action and the expand icon opens a menu that list the available actions. The split menu button provides a quick and compact way for users to initiate a default action, or choose another action. "),b.Rb(4,"h3"),b.Oc(5,"Platform specific enhancements:"),b.Qb(),b.Rb(6,"ul"),b.Rb(7,"li"),b.Oc(8,"Separated creation of Menu reference and Split menu button."),b.Qb(),b.Rb(9,"li"),b.Oc(10," Integration of Menu with use of fdpMenuTriggerFor directive. "),b.Mb(11,"br"),b.Oc(12," (More information on fdpMenuTriggerFor directive available in "),b.Rb(13,"a",0),b.Oc(14,"Platform Menu"),b.Qb(),b.Oc(15,".) "),b.Qb(),b.Qb(),b.Qb(),b.Mb(16,"import",1),b.Mb(17,"fd-header-tabs"),b.Mb(18,"router-outlet")),2&t&&(b.Ab(13),b.oc("routerLink","/platform/menu"))},directives:[s.a,d.a,m.d,f.a,y.a,m.f],encapsulation:2}),t}(),h='<h3>Cozy Split Menu Button</h3>\n<ng-container *ngFor="let buttonType of buttonTypes">\n    <fdp-split-menu-button\n        [id]="\'split-menu-button3\'"\n        [name]="\'split-menu-button3\'"\n        [menu]="basicMenuCozy"\n        [buttonLabel]="label"\n        [icon]="\'world\'"\n        [type]="buttonType"\n        [title]="\'Default action button with list of other available action items\'"\n        [menuTitle]="\'More options\'"\n        (primaryButtonClick)="onPrimaryButtonClickCozy()"\n    >\n    </fdp-split-menu-button>\n\n    <span>&nbsp;&nbsp; {{ buttonType | titlecase }}</span>\n    <br />\n    <br />\n</ng-container>\n\n<fdp-split-menu-button\n    [id]="\'split-menu-button3\'"\n    [name]="\'split-menu-button3\'"\n    [menu]="basicMenuCozy"\n    [disabled]="true"\n    [buttonLabel]="label"\n    [icon]="\'world\'"\n    (primaryButtonClick)="onPrimaryButtonClickCozy()"\n>\n</fdp-split-menu-button>\n<span>&nbsp;&nbsp;Disabled</span>\n<br />\n<br />\n<p>Selected Item: {{ selectedCozyItem }}</p>\n<br />\n<br />\n\n<h3>Compact Split Menu Button</h3>\n<ng-container *ngFor="let buttonType of buttonTypes">\n    <fdp-split-menu-button\n        [id]="\'split-menu-button3\'"\n        [name]="\'split-menu-button3\'"\n        [menu]="basicMenuCompact"\n        [buttonLabel]="label"\n        [contentDensity]="\'compact\'"\n        [icon]="\'world\'"\n        [type]="buttonType"\n        (primaryButtonClick)="onPrimaryButtonClickCompact()"\n    >\n    </fdp-split-menu-button>\n\n    <span>&nbsp;&nbsp; {{ buttonType | titlecase }}</span>\n    <br />\n    <br />\n</ng-container>\n\n<fdp-split-menu-button\n    [id]="\'split-menu-button3\'"\n    [name]="\'split-menu-button3\'"\n    [menu]="basicMenuCompact"\n    [contentDensity]="\'compact\'"\n    [disabled]="true"\n    [buttonLabel]="label"\n    [icon]="\'world\'"\n    (primaryButtonClick)="onPrimaryButtonClickCompact()"\n>\n</fdp-split-menu-button>\n<span>&nbsp;&nbsp;Disabled</span>\n<br />\n<br />\n<p>Selected Item: {{ selectedCompactItem }}</p>\n\n<h3>Internationalisation support with i18n directive</h3>\n<fdp-split-menu-button\n    [id]="\'split-menu-button4\'"\n    [name]="\'split-menu-button4\'"\n    [menu]="basicMenuCompact"\n    [icon]="\'world\'"\n    i18n-buttonLabel\n    buttonLabel="Default Action"\n    i18n-title\n    title="Default action button with list of other available action items"\n    (primaryButtonClick)="onPrimaryButtonClickCompact()"\n    i18n="@@basicSplitMenuBtn"\n>\n</fdp-split-menu-button>\n\n<fdp-menu #basicMenuCozy id="basic-menu">\n    <fdp-menu-item (itemSelect)="onItemSelectCozy(\'First Item\')">First Item</fdp-menu-item>\n    <fdp-menu-item (itemSelect)="onItemSelectCozy(\'Second Item\')">Second Item</fdp-menu-item>\n    <fdp-menu-item (itemSelect)="onItemSelectCozy(\'Third Item\')">Third Item</fdp-menu-item>\n</fdp-menu>\n\n<fdp-menu #basicMenuCompact id="basic-menu">\n    <fdp-menu-item (itemSelect)="onItemSelectCompact(\'First Item\')">First Item</fdp-menu-item>\n    <fdp-menu-item (itemSelect)="onItemSelectCompact(\'Second Item\')">Second Item</fdp-menu-item>\n    <fdp-menu-item (itemSelect)="onItemSelectCompact(\'Third Item\')">Third Item</fdp-menu-item>\n</fdp-menu>\n',I="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'split-menu-button-example',\n    templateUrl: 'platform-split-menu-button-examples.component.html',\n})\nexport class PlatformDocsSplitMenuButtonExampleComponent {\n    selectedCozyItem: string;\n    selectedCompactItem: string;\n    label = 'Default Action';\n    buttonTypes = ['standard', 'positive', 'negative', 'ghost', 'transparent', 'emphasized'];\n\n    public onItemSelectCozy(menuItemValue: string): void {\n        this.selectedCozyItem = menuItemValue;\n    }\n\n    public onPrimaryButtonClickCozy(): void {\n        this.selectedCozyItem = this.label;\n    }\n\n    public onItemSelectCompact(menuItemValue: string): void {\n        this.selectedCompactItem = menuItemValue;\n    }\n\n    public onPrimaryButtonClickCompact(): void {\n        this.selectedCompactItem = this.label;\n    }\n}\n",M='<h3>Cozy Split Menu Buttons</h3>\n<fdp-split-menu-button\n    [id]="\'split-menu-button1\'"\n    [name]="\'split-menu-button1\'"\n    [menu]="basicMenuCozy"\n    [buttonLabel]="label"\n    [icon]="\'world\'"\n    [type]="\'standard\'"\n    (primaryButtonClick)="onPrimaryButtonClickCozy()"\n>\n</fdp-split-menu-button>\n<br />\n<br />\n\n<fdp-split-menu-button\n    [id]="\'split-menu-button2\'"\n    [name]="\'split-menu-button2\'"\n    [menu]="basicMenuCozy"\n    [buttonLabel]="label"\n    [type]="\'standard\'"\n    (primaryButtonClick)="onPrimaryButtonClickCozy()"\n>\n</fdp-split-menu-button>\n<br />\n<br />\n\n<fdp-split-menu-button\n    [id]="\'split-menu-button3\'"\n    [name]="\'split-menu-button3\'"\n    [menu]="basicMenuCozy"\n    [icon]="\'world\'"\n    [type]="\'standard\'"\n    (primaryButtonClick)="onPrimaryButtonClickCozy()"\n>\n</fdp-split-menu-button>\n<br />\n<br />\n\n<fdp-split-menu-button\n    [id]="\'split-menu-button4\'"\n    [name]="\'split-menu-button4\'"\n    [menu]="basicMenuCozy"\n    [type]="\'standard\'"\n    (primaryButtonClick)="onPrimaryButtonClickCozy()"\n>\n</fdp-split-menu-button>\n<br />\n<br />\n<p>Selected: {{ selectedCozyItem }}</p>\n\n<br />\n<h3>Compact Split Menu Buttons</h3>\n<fdp-split-menu-button\n    [id]="\'split-menu-button1\'"\n    [name]="\'split-menu-button1\'"\n    [menu]="basicMenuCompact"\n    [buttonLabel]="label"\n    [icon]="\'world\'"\n    [contentDensity]="\'compact\'"\n    [type]="\'standard\'"\n    (primaryButtonClick)="onPrimaryButtonClickCompact()"\n>\n</fdp-split-menu-button>\n<br />\n<br />\n\n<fdp-split-menu-button\n    [id]="\'split-menu-button2\'"\n    [name]="\'split-menu-button2\'"\n    [menu]="basicMenuCompact"\n    [buttonLabel]="label"\n    [contentDensity]="\'compact\'"\n    [type]="\'standard\'"\n    (primaryButtonClick)="onPrimaryButtonClickCompact()"\n>\n</fdp-split-menu-button>\n<br />\n<br />\n\n<fdp-split-menu-button\n    [id]="\'split-menu-button3\'"\n    [name]="\'split-menu-button3\'"\n    [menu]="basicMenuCompact"\n    [icon]="\'world\'"\n    [contentDensity]="\'compact\'"\n    [type]="\'standard\'"\n    (primaryButtonClick)="onPrimaryButtonClickCompact()"\n>\n</fdp-split-menu-button>\n<br />\n<br />\n\n<fdp-split-menu-button\n    [id]="\'split-menu-button4\'"\n    [name]="\'split-menu-button4\'"\n    [menu]="basicMenuCompact"\n    [contentDensity]="\'compact\'"\n    [type]="\'standard\'"\n    (primaryButtonClick)="onPrimaryButtonClickCompact()"\n>\n</fdp-split-menu-button>\n\n<br />\n<br />\n<p>Selected: {{ selectedCompactItem }}</p>\n\n<fdp-menu #basicMenuCompact id="basic-menu">\n    <fdp-menu-item (itemSelect)="onItemSelectCompact(\'First Item\')">First Item</fdp-menu-item>\n    <fdp-menu-item (itemSelect)="onItemSelectCompact(\'Second Item\')">Second Item</fdp-menu-item>\n    <fdp-menu-item (itemSelect)="onItemSelectCompact(\'Third Item\')">Third Item</fdp-menu-item>\n</fdp-menu>\n\n<fdp-menu #basicMenuCozy id="basic-menu">\n    <fdp-menu-item (itemSelect)="onItemSelectCozy(\'First Item\')">First Item</fdp-menu-item>\n    <fdp-menu-item (itemSelect)="onItemSelectCozy(\'Second Item\')">Second Item</fdp-menu-item>\n    <fdp-menu-item (itemSelect)="onItemSelectCozy(\'Third Item\')">Third Item</fdp-menu-item>\n</fdp-menu>\n',S="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'split-menu-button-options',\n    templateUrl: 'platform-split-menu-button-options.component.html',\n})\nexport class PlatformDocsSplitMenuButtonOptionsComponent {\n    selectedCozyItem: string;\n    selectedCompactItem: string;\n    label = 'Default Action';\n    buttonTypes = ['standard', 'positive', 'negative', 'ghost', 'transparent', 'emphasized'];\n\n    public onItemSelectCozy(menuItemValue: string): void {\n        this.selectedCozyItem = menuItemValue;\n    }\n\n    public onPrimaryButtonClickCozy(): void {\n        this.selectedCozyItem = this.label;\n    }\n\n    public onItemSelectCompact(menuItemValue: string): void {\n        this.selectedCompactItem = menuItemValue;\n    }\n\n    public onPrimaryButtonClickCompact(): void {\n        this.selectedCompactItem = this.label;\n    }\n}\n",B=e("9Cr2"),g=e("dB5E"),k=e("2kYt"),v=e("HZSN"),Q=e("1U55"),z=e("aLnL"),R=e("D57K"),O=["buttonLabel",$localize(R.d([":\u241fcafd71d5665d352c42d7887cc44961e9bd37e31a\u241f1205511140132658069:Default Action"],[":\u241fcafd71d5665d352c42d7887cc44961e9bd37e31a\u241f1205511140132658069:Default Action"])),"title",$localize(R.d([":\u241fefb53e7e210f30c43fb05eeb9f4fc9f4be24dbac\u241f6482189071903609830:Default action button with list of other available action items"],[":\u241fefb53e7e210f30c43fb05eeb9f4fc9f4be24dbac\u241f6482189071903609830:Default action button with list of other available action items"]))];function P(t,n){if(1&t){var e=b.Sb();b.Pb(0),b.Rb(1,"fdp-split-menu-button",8),b.dc("primaryButtonClick",(function(){return b.Cc(e),b.hc().onPrimaryButtonClickCozy()})),b.Qb(),b.Rb(2,"span"),b.Oc(3),b.ic(4,"titlecase"),b.Qb(),b.Mb(5,"br"),b.Mb(6,"br"),b.Ob()}if(2&t){var i=n.$implicit,o=b.hc(),c=b.zc(28);b.Ab(1),b.oc("id","split-menu-button3")("name","split-menu-button3")("menu",c)("buttonLabel",o.label)("icon","world")("type",i)("title","Default action button with list of other available action items")("menuTitle","More options"),b.Ab(2),b.Qc("\xa0\xa0 ",b.jc(4,9,i),"")}}function w(t,n){if(1&t){var e=b.Sb();b.Pb(0),b.Rb(1,"fdp-split-menu-button",9),b.dc("primaryButtonClick",(function(){return b.Cc(e),b.hc().onPrimaryButtonClickCompact()})),b.Qb(),b.Rb(2,"span"),b.Oc(3),b.ic(4,"titlecase"),b.Qb(),b.Mb(5,"br"),b.Mb(6,"br"),b.Ob()}if(2&t){var i=n.$implicit,o=b.hc(),c=b.zc(36);b.Ab(1),b.oc("id","split-menu-button3")("name","split-menu-button3")("menu",c)("buttonLabel",o.label)("contentDensity","compact")("icon","world")("type",i),b.Ab(2),b.Qc("\xa0\xa0 ",b.jc(4,8,i),"")}}a=$localize(R.d([":@@basicSplitMenuBtn\u241f06073c14daed655604636fc63d23eec8c7e31c83\u241f5105557172009835231:\n"],[":@@basicSplitMenuBtn\u241f06073c14daed655604636fc63d23eec8c7e31c83\u241f5105557172009835231:\n"]));var A=function(){function t(){this.label="Default Action",this.buttonTypes=["standard","positive","negative","ghost","transparent","emphasized"]}return t.prototype.onItemSelectCozy=function(t){this.selectedCozyItem=t},t.prototype.onPrimaryButtonClickCozy=function(){this.selectedCozyItem=this.label},t.prototype.onItemSelectCompact=function(t){this.selectedCompactItem=t},t.prototype.onPrimaryButtonClickCompact=function(){this.selectedCompactItem=this.label},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Fb({type:t,selectors:[["split-menu-button-example"]],decls:43,vars:21,consts:[[4,"ngFor","ngForOf"],[3,"id","name","menu","disabled","buttonLabel","icon","primaryButtonClick"],[3,"id","name","menu","contentDensity","disabled","buttonLabel","icon","primaryButtonClick"],[3,"id","name","menu","icon","primaryButtonClick",6,"buttonLabel","title"],["id","basic-menu"],["basicMenuCozy",""],[3,"itemSelect"],["basicMenuCompact",""],[3,"id","name","menu","buttonLabel","icon","type","title","menuTitle","primaryButtonClick"],[3,"id","name","menu","buttonLabel","contentDensity","icon","type","primaryButtonClick"]],template:function(t,n){if(1&t&&(b.Rb(0,"h3"),b.Oc(1,"Cozy Split Menu Button"),b.Qb(),b.Mc(2,P,7,11,"ng-container",0),b.Rb(3,"fdp-split-menu-button",1),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCozy()})),b.Qb(),b.Rb(4,"span"),b.Oc(5,"\xa0\xa0Disabled"),b.Qb(),b.Mb(6,"br"),b.Mb(7,"br"),b.Rb(8,"p"),b.Oc(9),b.Qb(),b.Mb(10,"br"),b.Mb(11,"br"),b.Rb(12,"h3"),b.Oc(13,"Compact Split Menu Button"),b.Qb(),b.Mc(14,w,7,10,"ng-container",0),b.Rb(15,"fdp-split-menu-button",2),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCompact()})),b.Qb(),b.Rb(16,"span"),b.Oc(17,"\xa0\xa0Disabled"),b.Qb(),b.Mb(18,"br"),b.Mb(19,"br"),b.Rb(20,"p"),b.Oc(21),b.Qb(),b.Rb(22,"h3"),b.Oc(23,"Internationalisation support with i18n directive"),b.Qb(),b.Rb(24,"fdp-split-menu-button",3),b.Xb(25,O),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCompact()})),b.Vb(26,a),b.Qb(),b.Rb(27,"fdp-menu",4,5),b.Rb(29,"fdp-menu-item",6),b.dc("itemSelect",(function(){return n.onItemSelectCozy("First Item")})),b.Oc(30,"First Item"),b.Qb(),b.Rb(31,"fdp-menu-item",6),b.dc("itemSelect",(function(){return n.onItemSelectCozy("Second Item")})),b.Oc(32,"Second Item"),b.Qb(),b.Rb(33,"fdp-menu-item",6),b.dc("itemSelect",(function(){return n.onItemSelectCozy("Third Item")})),b.Oc(34,"Third Item"),b.Qb(),b.Qb(),b.Rb(35,"fdp-menu",4,7),b.Rb(37,"fdp-menu-item",6),b.dc("itemSelect",(function(){return n.onItemSelectCompact("First Item")})),b.Oc(38,"First Item"),b.Qb(),b.Rb(39,"fdp-menu-item",6),b.dc("itemSelect",(function(){return n.onItemSelectCompact("Second Item")})),b.Oc(40,"Second Item"),b.Qb(),b.Rb(41,"fdp-menu-item",6),b.dc("itemSelect",(function(){return n.onItemSelectCompact("Third Item")})),b.Oc(42,"Third Item"),b.Qb(),b.Qb()),2&t){var e=b.zc(28),i=b.zc(36);b.Ab(2),b.oc("ngForOf",n.buttonTypes),b.Ab(1),b.oc("id","split-menu-button3")("name","split-menu-button3")("menu",e)("disabled",!0)("buttonLabel",n.label)("icon","world"),b.Ab(6),b.Qc("Selected Item: ",n.selectedCozyItem,""),b.Ab(5),b.oc("ngForOf",n.buttonTypes),b.Ab(1),b.oc("id","split-menu-button3")("name","split-menu-button3")("menu",i)("contentDensity","compact")("disabled",!0)("buttonLabel",n.label)("icon","world"),b.Ab(6),b.Qc("Selected Item: ",n.selectedCompactItem,""),b.Ab(3),b.oc("id","split-menu-button4")("name","split-menu-button4")("menu",i)("icon","world")}},directives:[k.t,v.a,Q.a,z.a],pipes:[k.G],encapsulation:2}),t}(),L=e("gJWE"),T=e("ekBi"),x=function(){function t(){this.label="Default Action",this.buttonTypes=["standard","positive","negative","ghost","transparent","emphasized"]}return t.prototype.onItemSelectCozy=function(t){this.selectedCozyItem=t},t.prototype.onPrimaryButtonClickCozy=function(){this.selectedCozyItem=this.label},t.prototype.onItemSelectCompact=function(t){this.selectedCompactItem=t},t.prototype.onPrimaryButtonClickCompact=function(){this.selectedCompactItem=this.label},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Fb({type:t,selectors:[["split-menu-button-options"]],decls:49,vars:46,consts:[[3,"id","name","menu","buttonLabel","icon","type","primaryButtonClick"],[3,"id","name","menu","buttonLabel","type","primaryButtonClick"],[3,"id","name","menu","icon","type","primaryButtonClick"],[3,"id","name","menu","type","primaryButtonClick"],[3,"id","name","menu","buttonLabel","icon","contentDensity","type","primaryButtonClick"],[3,"id","name","menu","buttonLabel","contentDensity","type","primaryButtonClick"],[3,"id","name","menu","icon","contentDensity","type","primaryButtonClick"],[3,"id","name","menu","contentDensity","type","primaryButtonClick"],["id","basic-menu"],["basicMenuCompact",""],[3,"itemSelect"],["basicMenuCozy",""]],template:function(t,n){if(1&t&&(b.Rb(0,"h3"),b.Oc(1,"Cozy Split Menu Buttons"),b.Qb(),b.Rb(2,"fdp-split-menu-button",0),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCozy()})),b.Qb(),b.Mb(3,"br"),b.Mb(4,"br"),b.Rb(5,"fdp-split-menu-button",1),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCozy()})),b.Qb(),b.Mb(6,"br"),b.Mb(7,"br"),b.Rb(8,"fdp-split-menu-button",2),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCozy()})),b.Qb(),b.Mb(9,"br"),b.Mb(10,"br"),b.Rb(11,"fdp-split-menu-button",3),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCozy()})),b.Qb(),b.Mb(12,"br"),b.Mb(13,"br"),b.Rb(14,"p"),b.Oc(15),b.Qb(),b.Mb(16,"br"),b.Rb(17,"h3"),b.Oc(18,"Compact Split Menu Buttons"),b.Qb(),b.Rb(19,"fdp-split-menu-button",4),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCompact()})),b.Qb(),b.Mb(20,"br"),b.Mb(21,"br"),b.Rb(22,"fdp-split-menu-button",5),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCompact()})),b.Qb(),b.Mb(23,"br"),b.Mb(24,"br"),b.Rb(25,"fdp-split-menu-button",6),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCompact()})),b.Qb(),b.Mb(26,"br"),b.Mb(27,"br"),b.Rb(28,"fdp-split-menu-button",7),b.dc("primaryButtonClick",(function(){return n.onPrimaryButtonClickCompact()})),b.Qb(),b.Mb(29,"br"),b.Mb(30,"br"),b.Rb(31,"p"),b.Oc(32),b.Qb(),b.Rb(33,"fdp-menu",8,9),b.Rb(35,"fdp-menu-item",10),b.dc("itemSelect",(function(){return n.onItemSelectCompact("First Item")})),b.Oc(36,"First Item"),b.Qb(),b.Rb(37,"fdp-menu-item",10),b.dc("itemSelect",(function(){return n.onItemSelectCompact("Second Item")})),b.Oc(38,"Second Item"),b.Qb(),b.Rb(39,"fdp-menu-item",10),b.dc("itemSelect",(function(){return n.onItemSelectCompact("Third Item")})),b.Oc(40,"Third Item"),b.Qb(),b.Qb(),b.Rb(41,"fdp-menu",8,11),b.Rb(43,"fdp-menu-item",10),b.dc("itemSelect",(function(){return n.onItemSelectCozy("First Item")})),b.Oc(44,"First Item"),b.Qb(),b.Rb(45,"fdp-menu-item",10),b.dc("itemSelect",(function(){return n.onItemSelectCozy("Second Item")})),b.Oc(46,"Second Item"),b.Qb(),b.Rb(47,"fdp-menu-item",10),b.dc("itemSelect",(function(){return n.onItemSelectCozy("Third Item")})),b.Oc(48,"Third Item"),b.Qb(),b.Qb()),2&t){var e=b.zc(34),i=b.zc(42);b.Ab(2),b.oc("id","split-menu-button1")("name","split-menu-button1")("menu",i)("buttonLabel",n.label)("icon","world")("type","standard"),b.Ab(3),b.oc("id","split-menu-button2")("name","split-menu-button2")("menu",i)("buttonLabel",n.label)("type","standard"),b.Ab(3),b.oc("id","split-menu-button3")("name","split-menu-button3")("menu",i)("icon","world")("type","standard"),b.Ab(3),b.oc("id","split-menu-button4")("name","split-menu-button4")("menu",i)("type","standard"),b.Ab(4),b.Qc("Selected: ",n.selectedCozyItem,""),b.Ab(4),b.oc("id","split-menu-button1")("name","split-menu-button1")("menu",e)("buttonLabel",n.label)("icon","world")("contentDensity","compact")("type","standard"),b.Ab(3),b.oc("id","split-menu-button2")("name","split-menu-button2")("menu",e)("buttonLabel",n.label)("contentDensity","compact")("type","standard"),b.Ab(3),b.oc("id","split-menu-button3")("name","split-menu-button3")("menu",e)("icon","world")("contentDensity","compact")("type","standard"),b.Ab(3),b.oc("id","split-menu-button4")("name","split-menu-button4")("menu",e)("contentDensity","compact")("type","standard"),b.Ab(4),b.Qc("Selected: ",n.selectedCompactItem,"")}},directives:[v.a,Q.a,z.a],encapsulation:2}),t}(),F=function(){function t(){this.splitMenuButtonExample=[{language:"html",code:i,fileName:"platform-split-menu-button-example"},{language:"typescript",code:o,fileName:"platform-split-menu-button-example",component:"PlatformSplitMenuButtonExampleComponent"}],this.splitMenuButtonOptions=[{language:"html",code:c,fileName:"platform-split-menu-button-options"},{language:"typescript",code:u,fileName:"platform-split-menu-button-options",component:"PlatformSplitMenuButtonExampleComponent"}]}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Fb({type:t,selectors:[["app-split-menu-button"]],decls:15,vars:6,consts:[[3,"id","componentName"],[3,"exampleFiles"]],template:function(t,n){1&t&&(b.Rb(0,"fd-docs-section-title",0),b.Oc(1," Split Menu Button Availables States\n"),b.Qb(),b.Rb(2,"description"),b.Oc(3,"This example shows available states for Split Menu Buttons "),b.Qb(),b.Rb(4,"component-example"),b.Mb(5,"split-menu-button-example"),b.Qb(),b.Mb(6,"code-example",1),b.Mb(7,"separator"),b.Rb(8,"fd-docs-section-title",0),b.Oc(9," Types of Split Menu Button\n"),b.Qb(),b.Rb(10,"description"),b.Oc(11,"This example shows available types for Split Menu Buttons "),b.Qb(),b.Rb(12,"component-example"),b.Mb(13,"split-menu-button-options"),b.Qb(),b.Mb(14,"code-example",1)),2&t&&(b.oc("id","def")("componentName","SplitMenuButtonComponent"),b.Ab(6),b.oc("exampleFiles",n.splitMenuButtonExample),b.Ab(2),b.oc("id","def")("componentName","SplitMenuButtonComponent"),b.Ab(6),b.oc("exampleFiles",n.splitMenuButtonOptions))},directives:[B.a,d.a,g.a,A,L.a,T.a,x],encapsulation:2}),t}(),D=e("63W6"),E=[{path:"",component:C,children:[{path:"",component:F},{path:"api",component:l.a,data:{content:r.a.splitMenuButton}}]}],V=function(){function t(){}return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(n){return new(n||t)},imports:[[m.e.forChild(E),p.a,D.t,D.o],m.e]}),t}()}}]);