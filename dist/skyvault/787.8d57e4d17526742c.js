"use strict";(self.webpackChunkskyvault=self.webpackChunkskyvault||[]).push([[787],{9787:(J,v,c)=>{c.r(v),c.d(v,{WithdrawModule:()=>E});var m=c(6019),f=c(7537),_=c(3213),C=c(8329),p=c(4708),w=c(4762),I=c(5043),M=c(6038),t=c(3556),Z=c(3755),b=c(4071),W=c(5894);function A(n,d){if(1&n&&(t.TgZ(0,"div",14),t.TgZ(1,"span"),t._UZ(2,"fa-icon",15),t._uU(3," This transacton will not be recorded. You can record this transaction by changing the setting in Statements"),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("icon",e.faInfoCircle)}}function k(n,d){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t.TgZ(2,"h2",5),t._uU(3,"Enter Amount To Withdraw"),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"div",7),t.TgZ(6,"div",8),t.TgZ(7,"input",9),t.NdJ("ngModelChange",function(i){return t.CHM(e),t.oxw().amount=i})("keyup",function(){return t.CHM(e),t.oxw().onAmountChange()}),t.qZA(),t.qZA(),t.YNc(8,A,4,1,"div",10),t._UZ(9,"div",11),t.TgZ(10,"div",8),t.TgZ(11,"div",12),t.TgZ(12,"button",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().withdraw()}),t._uU(13,"WITHDRAW"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("ngModel",e.amount),t.xp6(1),t.Q6J("ngIf",!e.doRecord)}}function B(n,d){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"ng-lottie",16),t.NdJ("animationCreated",function(i){return t.CHM(e),t.oxw().animationCreated(i)}),t.qZA(),t.TgZ(2,"div",17),t._uU(3),t.qZA(),t.TgZ(4,"div",18),t.TgZ(5,"button",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().hideErrorMessage()}),t._uU(6," Back "),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("options",e.errorOptions),t.xp6(2),t.Oqu(e.errorMessage)}}function O(n,d){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",19),t.TgZ(2,"ng-lottie",20),t.NdJ("animationCreated",function(i){return t.CHM(e),t.oxw().animationCreated(i)}),t.qZA(),t.TgZ(3,"span",21),t._uU(4),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("options",e.options),t.xp6(2),t.Oqu(e.progressMessage)}}function S(n,d){if(1&n&&(t.TgZ(0,"div",19),t._UZ(1,"div",11),t._UZ(2,"div",22),t._UZ(3,"div",23),t.TgZ(4,"button",24),t._UZ(5,"img",25),t._uU(6," Check Balance"),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("innerHTML",e.completeMessage,t.oJD)}}const F=[{path:"",component:(()=>{class n{constructor(e,o,i,r,l,s){this.auth=e,this.router=o,this.skyvault=i,this.datePipe=r,this.changeDetectorRef=l,this.indc=s,this.faInfoCircle=I.sqG,this.amount=0,this.errorMessage=null,this.progressMessage=null,this.options={path:"/assets/animations/cloud_download.json"},this.errorOptions={path:"/assets/animations/error.json"},this.showLoader=!1,this.showNormal=!0,this.showError=!1,this.localCoin=!1,this.cardImageBlank=null,this.cardImage=null,this.loaded=!1,this.th_val=[],this.dg_val=[],this.tn_val=[],this.tw_val=[],this.seed="",this.doRecord=!0,this.complete=!1,this.completeMessage=null,this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.th_val=["","thousand","million","billion","trillion"],this.dg_val=["zero","one","two","three","four","five","six","seven","eight","nine"],this.tn_val=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],this.tw_val=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],this.getseed(),this.doRecord=JSON.parse(localStorage.getItem("statements")),this.processing=!1}ngOnInit(){localStorage.setItem("job","0"),this.auth.getLoggedIn()||(this.auth.checkLoginStatus(),this.router.navigate(["/welcome"])),this.watch=this.auth.watch().subscribe(e=>{e||this.router.navigate(["/welcome"])}),this.watchIndicator=this.indc.currentRStatus.subscribe(e=>{0==Object.keys(e).length?(this.options={path:"/assets/animations/cloud_loading.json"},this.showLoading(!0),this.progressMessage="Contacting RAIDA..."):(this.options={path:"/assets/animations/cloud_download.json"},this.processing||(this.progressMessage=null,this.showLoading(!1)))})}ngOnDestroy(){this.watch&&this.watch.unsubscribe(),this.watchIndicator&&this.watchIndicator.unsubscribe()}getseed(){this.seed=this.skyvault.generateSeed()}onAmountChange(e){this.amount&&(this.amount=(0,M.NMM)(this.amount))}withdraw(){return(0,w.mG)(this,void 0,void 0,function*(){if(this.processing=!0,isNaN(this.amount)||this.amount<1)this.showErrorMessage("Please enter a valid amount");else if(this.auth.getLoggedIn()){const e=this.auth.getToken(),o={sn:e.sn,an:e.an,pan:e.an};this.amount=(0,M.NMM)(this.amount);let i=+this.amount;const r=Object.assign(Object.assign({},o),{amount:i,seed:this.seed});this.showLoading(!0),localStorage.setItem("job","1");let l=yield this.skyvault.receive(r);if(console.log("SKYVAULT: apireceive response:",l),l){if("error"===l.status)return void this.showErrorMessage("errorText"in l?l.errorText:"Your login session is not valid. Please logout and try again");if(!("result"in l))return void this.showErrorMessage("Invalid response received");const s=Object.keys(l.result).map(h=>l.result[h]);if(this.addTextoImage(l.totalNotes,s),this.changeDetectorRef.detectChanges(),!this.doRecord&&l.transaction_id){const h=this.auth.getToken();let u={coin:{sn:h.sn,an:h.an},guid:l.transaction_id};yield this.skyvault.deleteRecords(u)}this.changeDetectorRef.detectChanges(),this.showLoading(!1),localStorage.setItem("job","0"),this.showCompleteMessage('<fa-icon icon="check"></fa-icon>  Withdrawal Complete. '+this.amount+" coin(s) withdrawn")}}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"])})}toWords(e){if((e=(e=e.toString()).replace(/[\, ]/g,""))!=parseFloat(e))return"not a number ";let o=e.indexOf(".");if(-1==o&&(o=e.length),o>15)return"too big";let i=e.split(""),r="",l=0;for(let s=0;s<o;s++)(o-s)%3==2?"1"==i[s]?(r+=this.tn_val[Number(i[s+1])]+" ",s++,l=1):0!=i[s]&&(r+=this.tw_val[i[s]-2]+" ",l=1):0!=i[s]&&(r+=this.dg_val[i[s]]+" ",(o-s)%3==0&&(r+="hundred "),l=1),(o-s)%3==1&&(l&&(r+=this.th_val[(o-s-1)/3]+" "),l=0);if(o!=e.length){let s=e.length;r+="point ";for(let h=o+1;h<s;h++)r+=this.dg_val[i[h]]+" "}return r.replace(/\s+/g," ")}formatNum(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e).replace("$","").replace(".00","")}addTextoImage(e,o){this.loaded=!0;const i=this,r=new Date;let l=this.datePipe.transform(r,"yyyy-MM-dd h:mm a"),s="",h="";s=e<11?this.toWords(e).toUpperCase():e<1e3?e:e<1e6?e%100==0?(e/=1e3)+"K":i.formatNum(e):e<1e9?e%1e5==0?(e/=1e6)+"M":i.formatNum(e):e%1e5==0?(e/=1e6)+"B":i.formatNum(e);let g=s.toString().length;g<=4?h="bold 122px Barlow":g<=5?h="bold 98px Barlow":g<=6?h="bold 83px Barlow":g<=7?h="bold 68px Barlow":g<=8?h="bold 60px Barlow":g<=9?h="bold 54px Barlow":g<=10&&(h="bold 46px Barlow");const u=document.createElement("canvas");u.setAttribute("width","375"),u.setAttribute("height","667");const a=u.getContext("2d"),x=new Image;x.src="assets/images/bgImg.png";const y=new Image;y.src="assets/images/listIcon.svg";const T=new Image;T.src="assets/images/unionIcon.svg",x.onload=function(){return(0,w.mG)(this,void 0,void 0,function*(){a.fillStyle="#02203D",a.fillRect(0,0,375,667),a.drawImage(x,0,0),a.fillStyle="#7FA8FF",a.font="600 24px Barlow",a.fillText("CloudCoin",230,40),a.drawImage(y,24,325),a.fillStyle="#ffffff",a.font="18px Barlow",a.fillText(s,55,338),a.drawImage(T,24,360),a.font="400 18px Barlow",a.fillText(l,55,375),a.font=h,a.fillText(s,24,520),a.font="16px Barlow",a.fillText("Upload this file to your Skyvault",24,595),a.fillText("or POWN it and keep it wherever you want",24,615),a.fillStyle="#7FA8FF",a.font="14px Barlow",a.fillText("More info on Cloudcoin.global",24,645),a.rotate(90*Math.PI/180),a.font="600 40px Barlow",a.fillStyle="#7FA8FF",a.fillText("CC",24,-30),a.fillStyle="#ffffff",a.fillText(i.formatNum(e),100,-30),i.cardImageBlank=u.toDataURL(),yield i.makePng(e,o)})}}makePng(e,o){return(0,w.mG)(this,void 0,void 0,function*(){const i={coins:o,template:this.cardImageBlank};try{let r=yield this.skyvault.embedInImage(i);r.status&&"error"===r.status?(this.showErrorMessage(r.errorText),localStorage.setItem("job","0")):(this.cardImage="data:image/png;base64,"+r,this.downloadPng(e))}catch(r){console.log(r)}})}downloadPng(e){const o=document.createElement("a");o.href=this.cardImage;const i=e+".CloudCoin."+Date.now()+".png";o.download=i,o.click()}animationCreated(e){}showLoading(e){e?(this.showNormal=!1,this.showLoader=!0,this.showError=!1):(this.showNormal=!0,this.showLoader=!1,this.showError=!1)}showErrorMessage(e){this.errorMessage=e,this.showNormal=!1,this.showError=!0,this.showLoader=!1}hideErrorMessage(){this.errorMessage="",this.showNormal=!0,this.showError=!1,this.showLoader=!1}showCompleteMessage(e){this.completeMessage=e,this.complete=!0,this.showError=!1,this.showNormal=!1,this.showLoader=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z.r),t.Y36(p.F0),t.Y36(b._),t.Y36(m.uU),t.Y36(t.sBO),t.Y36(W.Q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-withdraw"]],features:[t._Bn([m.uU])],decls:6,vars:4,consts:[[1,"pageWrapper"],[1,"sectionWrapper"],[4,"ngIf"],["class","text-center subInnerHeader",4,"ngIf"],[1,"widthdrawWrap"],[1,"sectionTitle"],[1,"withdrawForm"],[1,"row"],[1,"col-md-12"],["placeholder","XX","type","number",1,"input-form",3,"ngModel","ngModelChange","keyup"],["class","col-md-12 disclaimer",4,"ngIf"],[1,"gap10"],[1,"button-wrapper"],[1,"buttonCustome",3,"click"],[1,"col-md-12","disclaimer"],[3,"icon"],["height","100px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff","margin-bottom","10px"],[1,"text-center"],[1,"text-center","subInnerHeader"],["height","150px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff"],[3,"innerHTML"],[1,"gap20"],["routerLink","/balance",1,"buttonCustome"],["src","assets/images/balance-wallet.svg","alt","icon",1,"walletIcon"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,k,14,2,"ng-container",2),t.YNc(3,B,7,2,"ng-container",2),t.YNc(4,O,5,2,"ng-container",2),t.YNc(5,S,7,1,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",o.showNormal),t.xp6(1),t.Q6J("ngIf",o.showError),t.xp6(1),t.Q6J("ngIf",o.showLoader),t.xp6(1),t.Q6J("ngIf",o.complete))},directives:[m.O5,f.wV,f.Fj,f.JJ,f.On,C.BN,_.e$,p.rH],styles:[".widthdrawWrap[_ngcontent-%COMP%]{width:100%;height:initial;max-width:600px;margin:0 auto}.widthdrawWrap[_ngcontent-%COMP%]   .withdrawForm[_ngcontent-%COMP%]{margin-top:40px}@media (max-width: 576px){.widthdrawWrap[_ngcontent-%COMP%]   .withdrawForm[_ngcontent-%COMP%]{margin-top:20px}}.widthdrawWrap[_ngcontent-%COMP%]   .withdrawForm[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{margin:30px auto 0;text-align:center;width:100%}.widthdrawWrap[_ngcontent-%COMP%]   .withdrawForm[_ngcontent-%COMP%]   .dropDebitcardWrapOuter[_ngcontent-%COMP%]{width:100%}"]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.Bz.forChild(F)],p.Bz]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,P,f.u5,_.CT,C.uH]]}),n})()}}]);