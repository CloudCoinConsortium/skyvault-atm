"use strict";(self.webpackChunkskyvault=self.webpackChunkskyvault||[]).push([[847],{847:(H,C,l)=>{l.d(C,{_f:()=>Z,sv:()=>B,bB:()=>F,Jj:()=>S});var n=l(3556),c=l(6019),D=l(4762),v=l(5427);function y(o,i){if(1&o){const e=n.EpF();n.TgZ(0,"ngx-dropzone-remove-badge",1),n.NdJ("click",function(r){return n.CHM(e),n.oxw()._remove(r)}),n.qZA()}}const f=[[["ngx-dropzone-label"]]],h=["ngx-dropzone-label"],P=["fileInput"];function I(o,i){1&o&&n.Hsn(0,2,["*ngIf","!_hasPreviews"])}const M=[[["ngx-dropzone-preview"]],"*",[["ngx-dropzone-label"]]],N=["ngx-dropzone-preview","*","ngx-dropzone-label"];function w(o,i){if(1&o){const e=n.EpF();n.TgZ(0,"ngx-dropzone-remove-badge",2),n.NdJ("click",function(r){return n.CHM(e),n.oxw()._remove(r)}),n.qZA()}}let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=n.lG2({type:o,selectors:[["ngx-dropzone-label"]]}),o})();function p(o){return null!=o&&"false"!=`${o}`}var g=(()=>{return(o=g||(g={}))[o.BACKSPACE=8]="BACKSPACE",o[o.DELETE=46]="DELETE",g;var o})();let _=(()=>{class o{constructor(e){this.sanitizer=e,this._removable=!1,this.removed=new n.vpe,this.tabIndex=0}set file(e){this._file=e}get file(){return this._file}get removable(){return this._removable}set removable(e){this._removable=p(e)}keyEvent(e){switch(e.keyCode){case g.BACKSPACE:case g.DELETE:this.remove()}}get hostStyle(){return this.sanitizer.bypassSecurityTrustStyle("\n\t\t\tdisplay: flex;\n\t\t\theight: 140px;\n\t\t\tmin-height: 140px;\n\t\t\tmin-width: 180px;\n\t\t\tmax-width: 180px;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 0 20px;\n\t\t\tmargin: 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tposition: relative;\n\t\t")}_remove(e){e.stopPropagation(),this.remove()}remove(){this._removable&&this.removed.next(this.file)}readFile(){return(0,D.mG)(this,void 0,void 0,function*(){return new Promise((e,t)=>{const r=new FileReader;if(r.onload=s=>{e(s.target.result)},r.onerror=s=>{console.error(`FileReader failed on file ${this.file.name}.`),t(s)},!this.file)return t("No file to read. Please provide a file using the [file] Input property.");r.readAsDataURL(this.file)})})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(v.H7))},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngx-dropzone-preview"]],hostVars:3,hostBindings:function(e,t){1&e&&n.NdJ("keyup",function(s){return t.keyEvent(s)}),2&e&&(n.Ikx("tabindex",t.tabIndex),n.Akn(t.hostStyle))},inputs:{file:"file",removable:"removable"},outputs:{removed:"removed"},ngContentSelectors:h,decls:2,vars:1,consts:[[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(n.F$t(f),n.Hsn(0),n.YNc(1,y,1,0,"ngx-dropzone-remove-badge",0)),2&e&&(n.xp6(1),n.Q6J("ngIf",t.removable))},directives:function(){return[c.O5,x]},styles:["[_nghost-%COMP%]{background-image:linear-gradient(0deg,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{background-image:linear-gradient(0deg,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]}),o})(),z=(()=>{class o{parseFileList(e,t,r,s){const u=[],m=[];for(let b=0;b<e.length;b++){const d=e.item(b);this.isAccepted(d,t)?r&&d.size>r?this.rejectFile(m,d,"size"):!s&&u.length>=1?this.rejectFile(m,d,"no_multiple"):u.push(d):this.rejectFile(m,d,"type")}return{addedFiles:u,rejectedFiles:m}}isAccepted(e,t){if("*"===t)return!0;const r=t.split(",").map(a=>a.toLowerCase().trim()),s=e.type.toLowerCase(),u=e.name.toLowerCase();return!!r.find(a=>a.endsWith("/*")?s.split("/")[0]===a.split("/")[0]:a.startsWith(".")?u.endsWith(a):a==s)}rejectFile(e,t,r){const s=t;s.reason=r,e.push(s)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})(),Z=(()=>{class o{constructor(e){this.service=e,this.change=new n.vpe,this.accept="*",this._disabled=!1,this._multiple=!0,this._maxFileSize=void 0,this._expandable=!1,this._disableClick=!1,this._isHovered=!1}get _hasPreviews(){return!!this._previewChildren.length}get disabled(){return this._disabled}set disabled(e){this._disabled=p(e),this._isHovered&&(this._isHovered=!1)}get multiple(){return this._multiple}set multiple(e){this._multiple=p(e)}get maxFileSize(){return this._maxFileSize}set maxFileSize(e){this._maxFileSize=function(o){return isNaN(parseFloat(o))||isNaN(Number(o))?null:Number(o)}(e)}get expandable(){return this._expandable}set expandable(e){this._expandable=p(e)}get disableClick(){return this._disableClick}set disableClick(e){this._disableClick=p(e)}_onClick(){this.disableClick||this.showFileSelector()}_onDragOver(e){this.disabled||(this.preventDefault(e),this._isHovered=!0)}_onDragLeave(){this._isHovered=!1}_onDrop(e){this.disabled||(this.preventDefault(e),this._isHovered=!1,this.handleFileDrop(e.dataTransfer.files))}showFileSelector(){this.disabled||this._fileInput.nativeElement.click()}_onFilesSelected(e){this.handleFileDrop(e.target.files),this._fileInput.nativeElement.value="",this.preventDefault(e)}handleFileDrop(e){const t=this.service.parseFileList(e,this.accept,this.maxFileSize,this.multiple);this.change.next({addedFiles:t.addedFiles,rejectedFiles:t.rejectedFiles,source:this})}preventDefault(e){e.preventDefault(),e.stopPropagation()}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(z,2))},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngx-dropzone"],["","ngx-dropzone",""]],contentQueries:function(e,t,r){if(1&e&&n.Suo(r,_,5),2&e){let s;n.iGM(s=n.CRH())&&(t._previewChildren=s)}},viewQuery:function(e,t){if(1&e&&n.Gf(P,7),2&e){let r;n.iGM(r=n.CRH())&&(t._fileInput=r.first)}},hostVars:8,hostBindings:function(e,t){1&e&&n.NdJ("click",function(){return t._onClick()})("dragover",function(s){return t._onDragOver(s)})("dragleave",function(){return t._onDragLeave()})("drop",function(s){return t._onDrop(s)}),2&e&&n.ekj("ngx-dz-hovered",t._isHovered)("ngx-dz-disabled",t.disabled)("expandable",t.expandable)("unclickable",t.disableClick)},inputs:{accept:"accept",disabled:"disabled",multiple:"multiple",maxFileSize:"maxFileSize",expandable:"expandable",disableClick:"disableClick",id:"id",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedBy:["aria-describedby","ariaDescribedBy"]},outputs:{change:"change"},features:[n._Bn([z])],ngContentSelectors:N,decls:5,vars:8,consts:[["type","file",3,"id","multiple","accept","disabled","change"],["fileInput",""],[4,"ngIf"]],template:function(e,t){1&e&&(n.F$t(M),n.TgZ(0,"input",0,1),n.NdJ("change",function(s){return t._onFilesSelected(s)}),n.qZA(),n.YNc(2,I,1,0,"ng-content",2),n.Hsn(3),n.Hsn(4,1)),2&e&&(n.Q6J("id",t.id)("multiple",t.multiple)("accept",t.accept)("disabled",t.disabled),n.uIk("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedBy),n.xp6(2),n.Q6J("ngIf",!t._hasPreviews))},directives:[c.O5],styles:["[_nghost-%COMP%]{align-items:center;background:#fff;border:2px dashed #717386;border-radius:5px;color:#717386;cursor:pointer;display:flex;font-size:16px;height:180px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{cursor:no-drop;opacity:.5;pointer-events:none}.expandable[_nghost-%COMP%]{flex-wrap:wrap;height:unset;min-height:180px;overflow:hidden}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{margin:10px auto;text-align:center;z-index:10}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{height:.1px;opacity:0;overflow:hidden;position:absolute;width:.1px;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:5px auto -webkit-focus-ring-color}"]}),o})(),B=(()=>{class o extends _{constructor(e){super(e),this.defaultImgLoading="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==",this.imageSrc=this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading)}set file(e){this._file=e,this.renderImage()}get file(){return this._file}ngOnInit(){this.renderImage()}renderImage(){this.readFile().then(e=>setTimeout(()=>this.imageSrc=e)).catch(e=>console.error(e))}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(v.H7))},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngx-dropzone-image-preview"]],inputs:{file:"file"},features:[n._Bn([{provide:_,useExisting:o}]),n.qOj],ngContentSelectors:h,decls:3,vars:2,consts:[[3,"src"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,t){1&e&&(n.F$t(f),n._UZ(0,"img",0),n.Hsn(1),n.YNc(2,w,1,0,"ngx-dropzone-remove-badge",1)),2&e&&(n.Q6J("src",t.imageSrc,n.LSH),n.xp6(2),n.Q6J("ngIf",t.removable))},directives:function(){return[c.O5,x]},styles:["[_nghost-%COMP%]{max-width:unset!important;min-width:unset!important;padding:0!important}[_nghost-%COMP%]:focus   img[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px;max-height:100%;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word;position:absolute}"]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngx-dropzone-remove-badge"]],decls:3,vars:0,consts:[["x1","0","y1","0","x2","10","y2","10"],["x1","0","y1","10","x2","10","y2","0"]],template:function(e,t){1&e&&(n.O4$(),n.TgZ(0,"svg"),n._UZ(1,"line",0),n._UZ(2,"line",1),n.qZA())},styles:["[_nghost-%COMP%]{align-items:center;background:#bbb;border-radius:50%;color:#333;cursor:pointer;display:flex;height:22px;justify-content:center;position:absolute;right:5px;top:5px;width:22px}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke:#fff;stroke-width:2px}"]}),o})(),F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.ez]]}),o})()}}]);