"use strict";(self.webpackChunkskyvault=self.webpackChunkskyvault||[]).push([[934],{2934:(J,p,i)=>{i.r(p),i.d(p,{BitmartModule:()=>E});var f=i(6019),m=i(7537),v=i(3213),y=i(8329),b=i(745),C=i(4522),u=i(4708),g=i(4762),w=i(1659),M=i.n(w),x=i(6038),t=i(3556),_=i(3755),T=i(4071),B=i(5894);function I(n,r){if(1&n&&(t.TgZ(0,"label",17),t._UZ(1,"fa-icon",8),t._uU(2),t.qZA()),2&n){const e=t.oxw(2);t.s9C("tooltip",e.balanceBreakup),t.xp6(2),t.hij(" Amount (Balance: ",e.balanceString," CC) ")}}function Z(n,r){if(1&n&&(t.TgZ(0,"label",18),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("Amount (Balance: ",e.balanceString," CC)")}}function A(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t.TgZ(2,"h2",5),t._uU(3,"Send CloudCoins to BitMart"),t.qZA(),t.TgZ(4,"p",6),t._uU(5,"This function sends CloudCoins to BitMart and then tells them that you have sent the funds. They then can check to see if the funds have arrived and credit your account automatically. "),t._UZ(6,"br"),t.TgZ(7,"span",7),t._UZ(8,"fa-icon",8),t._uU(9," Please send only 16000 coins maximum at a time"),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"div",10),t.TgZ(12,"div",11),t.YNc(13,I,3,2,"label",12),t.YNc(14,Z,2,1,"label",13),t.TgZ(15,"input",14),t.NdJ("ngModelChange",function(s){return t.CHM(e),t.oxw().amount=s})("keyup",function(){return t.CHM(e),t.oxw().onAmountChange()}),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"div",15),t.TgZ(18,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().payment()}),t._uU(19,"SEND PAYMENT AND NOTIFY BITMART"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(13),t.Q6J("ngIf",e.opinions>1),t.xp6(1),t.Q6J("ngIf",1===e.opinions||0===e.opinions),t.xp6(1),t.Q6J("ngModel",e.amount)}}function S(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"ng-lottie",19),t.NdJ("animationCreated",function(s){return t.CHM(e),t.oxw().animationCreated(s)}),t.qZA(),t.TgZ(2,"div",20),t._uU(3),t.qZA(),t.TgZ(4,"div",21),t.TgZ(5,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().hideErrorMessage()}),t._uU(6," Back "),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("options",e.errorOptions),t.xp6(2),t.Oqu(e.errorMessage)}}function k(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",21),t.TgZ(2,"ng-lottie",22),t.NdJ("animationCreated",function(s){return t.CHM(e),t.oxw().animationCreated(s)}),t.qZA(),t.TgZ(3,"span",23),t._uU(4),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("options",e.options),t.xp6(2),t.Oqu(e.loadingMessage)}}function L(n,r){if(1&n&&(t.TgZ(0,"div",24),t._UZ(1,"div",25),t._UZ(2,"img",26),t._UZ(3,"div",27),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("innerHTML",e.completeMessage,t.oJD)}}const N=[{path:"",component:(()=>{class n{constructor(e,o,s,a,c,l,d){this.auth=e,this.router=o,this.skyvault=s,this.activatedRoute=a,this.http=c,this.indc=l,this.changeDetectorRef=d,this.errorMessage=null,this.options={path:"/assets/animations/cloud_loading.json"},this.errorOptions={path:"/assets/animations/error.json"},this.showLoader=!1,this.showNormal=!0,this.showError=!1,this.complete=!1,this.completeMessage=null,this.loadingMessage=null,this.mySkyVault=null,this.memo=null,this.doRecord=!0,this.balance=0,this.balanceString="0",this.balanceBreakup=null,this.opinions=0,this.balances={},this.syncCount=0,this.processing=!1,this.doRecord=JSON.parse(localStorage.getItem("statements")),localStorage.setItem("bitmartPay","null"),localStorage.removeItem("bitmartPay"),this.activatedRoute.queryParams.subscribe(h=>{this.amount=h.amount?h.amount:0,this.memo=h.memo?h.memo:null,this.receiverAddress=h.receiver_address?h.receiver_address:null});const F={amount:this.amount,receiver_address:this.receiverAddress,memo:this.memo};this.auth.getLoggedIn()||(localStorage.setItem("bitmartPay",JSON.stringify(F)),this.router.navigate(["/auth/drop-image"])),(!this.receiverAddress||!this.memo)&&(M().fire("Error","Receiver Address or Memo missing!!","error"),this.router.navigate(["balance"]))}ngOnInit(){this.showLoading(!0),localStorage.setItem("job","0"),this.auth.getLoggedIn()||(this.auth.checkLoginStatus(),this.router.navigate(["/welcome"])),this.watch=this.auth.watch().subscribe(o=>{o||this.router.navigate(["/welcome"])});let e=0;this.watchIndicator=this.indc.currentRStatus.subscribe(o=>{0==Object.keys(o).length?(this.showLoading(!0),this.loadingMessage="Contacting RAIDA..."):(e++,!this.processing&&1==e&&setTimeout(()=>{this.showLoading(!1),this.checkBalance()},2e3))}),localStorage.getItem("skyvault")&&(this.mySkyVault=localStorage.getItem("skyvault"))}ngOnDestroy(){this.watch&&this.watch.unsubscribe(),this.watchIndicator&&this.watchIndicator.unsubscribe()}animationCreated(e){}showLoading(e){this.loadingMessage="",e?(this.showNormal=!1,this.showLoader=!0,this.showError=!1):(this.showNormal=!0,this.showLoader=!1,this.showError=!1)}showErrorMessage(e){this.errorMessage=e,this.showNormal=!1,this.showError=!0,this.showLoader=!1}hideErrorMessage(){this.errorMessage="",this.showNormal=!0,this.showError=!1,this.showLoader=!1}checkBalance(){return(0,g.mG)(this,void 0,void 0,function*(){if(this.showLoading(!0),this.auth.getLoggedIn()){localStorage.setItem("job","1");const e=this.auth.getToken(),o={sn:e.sn,an:e.an};this.loadingMessage="Fetching balance";let s=yield this.skyvault.showBalance(o);if(console.log("API call:- (showBalance): resp:",s),console.log("SKYVAULT: showBalance: ",s),localStorage.setItem("job","0"),s){this.balance=0,this.opinions=0;let a=0,c=0;if(this.balanceBreakup='<div style="text-align: left; display: table;">Your SkyVault is out of sync. Balance returned by RAIDA servers are as follows: <ul style="text-align: left!important;">',s.balances){this.balances=s.balances;for(const l in s.balances)s.balances.hasOwnProperty(l)&&(this.balanceBreakup+='<li style="text-align: left!important">'+s.balances[l]+" RAIDA(s) - "+parseInt(l).toLocaleString()+" cc </li>",s.balances[l]>a&&(a=s.balances[l],c=parseInt(l),this.balance=c,this.balanceString=this.balance.toLocaleString())),this.opinions++;this.balanceBreakup+="</ul></div>",this.opinions>1&&0==this.syncCount&&(this.syncCount++,yield this.syncAccount())}}this.showLoading(!1)}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"])})}syncAccount(){return(0,g.mG)(this,void 0,void 0,function*(){this.showLoading(!0),localStorage.setItem("job","1");let e=!1;if(this.auth.getLoggedIn()){const o=this.auth.getToken();this.loadingMessage="Synchronizing SkyVault";const s={sn:o.sn,an:o.an};let a=yield this.skyvault.fixCoinsSync(s);if(console.log("SKYVAULT: apiFixTransfer response: ",a),this.showLoading(!1),"done"!=a.status)return this.showErrorMessage(a.errorText),void localStorage.setItem("job","0");e||(yield this.checkBalance(),e=!0)}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"]);localStorage.setItem("job","0")})}onAmountChange(e){this.amount&&(this.amount=(0,x.NMM)(this.amount))}payment(){return(0,g.mG)(this,void 0,void 0,function*(){if(this.mySkyVault)if(isNaN(this.amount)||this.amount<1)this.showErrorMessage("Invalid amount");else if(this.amount>this.balance)this.showErrorMessage("Not enough balance!! Current balance: "+this.balanceString+" CC");else if(this.processing=!0,localStorage.setItem("job","1"),this.auth.getLoggedIn()){this.loadingMessage="Transferring Cloudcoins...";const e=this.auth.getToken(),o={sn:e.sn,an:e.an};this.amount=(0,x.NMM)(this.amount);const s={an:o.an,sender_name:this.mySkyVault,from:this.mySkyVault,to:this.receiverAddress,amount:this.amount,memo:this.memo};this.showLoading(!0);let a=yield this.skyvault.payment(s);if(console.log("Payment response:",a),localStorage.setItem("job","0"),a){if(localStorage.setItem("job","0"),"error"===a.status)return void("errorText"in a?-1!==a.errorText.indexOf("Failed to resolve")?this.showErrorMessage("Invalid Recipient SkyVault Address: "+this.receiverAddress):this.showErrorMessage(a.errorText):this.showErrorMessage("Your login session is not valid, please logout and try again"));if(!("result"in a))return void this.showErrorMessage("Invalid response received");if(!this.doRecord&&a.transaction_id){const c=this.auth.getToken(),l={sn:c.sn,an:c.an};localStorage.setItem("job","1");let d={coin:l,guid:a.transaction_id};yield this.skyvault.deleteRecords(d),this.changeDetectorRef.detectChanges(),localStorage.setItem("job","0")}this.complete=!0,this.showCompleteMessage("Payment Complete")}}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"]);else this.showErrorMessage("Invalid Sender! To continue please re-login.")})}sleep(e){return new Promise(o=>setTimeout(o,e))}showCompleteMessage(e){this.completeMessage=e,this.complete=!0,this.showError=!1,this.showNormal=!1,this.showLoader=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(_.r),t.Y36(u.F0),t.Y36(T._),t.Y36(u.gz),t.Y36(C.eN),t.Y36(B.Q),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bitmart"]],decls:6,vars:4,consts:[[1,"pageWrapper"],[1,"sectionWrapper"],[4,"ngIf"],["class","text-center subInnerHeader",4,"ngIf"],[1,"bitmartWrap"],[1,"sectionTitle"],[1,"sectionContent"],[1,"alert-send-msg"],["icon","exclamation-circle"],[1,"bitmartForm"],[1,"row"],[1,"col-md-12"],["class","label-input-form","style","color:#FF7777",3,"tooltip",4,"ngIf"],["class","label-input-form",4,"ngIf"],["type","number","placeholder","XX","name","amount",1,"input-form",3,"ngModel","ngModelChange","keyup"],[1,"button-wrapper"],[1,"buttonCustome",3,"click"],[1,"label-input-form",2,"color","#FF7777",3,"tooltip"],[1,"label-input-form"],["height","100px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff","margin-bottom","10px"],[1,"text-center"],["height","150px",3,"options","animationCreated"],[2,"color","#ffffff"],[1,"text-center","subInnerHeader"],[1,"gap20"],["src","assets/images/check-white.svg","alt","paymet complete",1,"resultIcon"],[3,"innerHTML"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,A,20,3,"ng-container",2),t.YNc(3,S,7,2,"ng-container",2),t.YNc(4,k,5,2,"ng-container",2),t.YNc(5,L,4,1,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",o.showNormal),t.xp6(1),t.Q6J("ngIf",o.showError),t.xp6(1),t.Q6J("ngIf",o.showLoader),t.xp6(1),t.Q6J("ngIf",o.complete))},directives:[f.O5,y.BN,m.wV,m.Fj,m.JJ,m.On,b.i9,v.e$],styles:[".bitmartWrap[_ngcontent-%COMP%]{width:100%;height:initial;max-width:600px;margin:0 auto}.bitmartWrap[_ngcontent-%COMP%]   .bitmartForm[_ngcontent-%COMP%]{margin-top:40px}@media (max-width: 576px){.bitmartWrap[_ngcontent-%COMP%]   .bitmartForm[_ngcontent-%COMP%]{margin-top:20px}}.bitmartWrap[_ngcontent-%COMP%]   .bitmartForm[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{margin:30px auto 0;text-align:center;width:100%}.bitmartWrap[_ngcontent-%COMP%]   .bitmartForm[_ngcontent-%COMP%]   .dropDebitcardWrapOuter[_ngcontent-%COMP%]{width:100%}"]}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(N)],u.Bz]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[f.ez,O,m.u5,v.CT,y.uH,b.z8,C.JF]]}),n})()}}]);