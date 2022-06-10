"use strict";(self.webpackChunkskyvault=self.webpackChunkskyvault||[]).push([[232],{232:(E,f,i)=>{i.r(f),i.d(f,{TransferModule:()=>R});var p=i(6019),h=i(7537),u=i(4708),g=i(4762),w=i(5043),m=i(6038),t=i(3556),M=i(3755),y=i(4071),Z=i(5894),_=i(8329),T=i(745),x=i(3213);function b(n,r){if(1&n&&(t.TgZ(0,"label",23),t._UZ(1,"fa-icon",8),t._uU(2),t.qZA()),2&n){const e=t.oxw(2);t.s9C("tooltip",e.balanceBreakup),t.xp6(2),t.hij(" Amount (Balance: ",e.balanceString," CC) ")}}function A(n,r){if(1&n&&(t.TgZ(0,"label",12),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("Amount (Balance: ",e.balanceString," CC)")}}function k(n,r){if(1&n&&(t.TgZ(0,"div",24),t.TgZ(1,"span"),t._UZ(2,"fa-icon",25),t._uU(3," This transacton will not be recorded. You can record this transaction by changing the setting in Statements"),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("icon",e.faInfoCircle)}}function I(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t.TgZ(2,"h2",5),t._uU(3,"Transfer CloudCoins"),t.qZA(),t.TgZ(4,"p",6),t._uU(5,"Used for transfering CloudCoin to individual SkyVault."),t._UZ(6,"br"),t.TgZ(7,"span",7),t._UZ(8,"fa-icon",8),t._uU(9," Please send only 16000 coins maximum at a time"),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"div",10),t.TgZ(12,"div",11),t.TgZ(13,"label",12),t._uU(14,"To SkyVault Address"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().to=o}),t.qZA(),t.qZA(),t.TgZ(16,"div",14),t.YNc(17,b,3,2,"label",15),t.YNc(18,A,2,1,"label",16),t.TgZ(19,"input",17),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().amount=o})("keyup",function(){return t.CHM(e),t.oxw().onAmountChange()}),t.qZA(),t.qZA(),t.TgZ(20,"div",14),t.TgZ(21,"label",12),t._uU(22,"Memo (optional)"),t.qZA(),t.TgZ(23,"input",18),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().memo=o}),t.qZA(),t.qZA(),t.YNc(24,k,4,1,"div",19),t._UZ(25,"div",20),t.TgZ(26,"div",11),t.TgZ(27,"div",21),t.TgZ(28,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().transfer()}),t._uU(29,"TRANSFER"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(15),t.Q6J("ngModel",e.to)("disabled",e.defaultAddress),t.xp6(2),t.Q6J("ngIf",e.opinions>1),t.xp6(1),t.Q6J("ngIf",1===e.opinions||0===e.opinions),t.xp6(1),t.Q6J("ngModel",e.amount),t.xp6(4),t.Q6J("ngModel",e.memo),t.xp6(1),t.Q6J("ngIf",!e.doRecord)}}function S(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"ng-lottie",26),t.NdJ("animationCreated",function(o){return t.CHM(e),t.oxw().animationCreated(o)}),t.qZA(),t.TgZ(2,"div",27),t._uU(3),t.qZA(),t.TgZ(4,"div",28),t.TgZ(5,"button",22),t.NdJ("click",function(){return t.CHM(e),t.oxw().hideErrorMessage()}),t._uU(6," Back "),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("options",e.errorOptions),t.xp6(2),t.Oqu(e.errorMessage)}}function L(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",29),t.TgZ(2,"ng-lottie",30),t.NdJ("animationCreated",function(o){return t.CHM(e),t.oxw().animationCreated(o)}),t.qZA(),t.TgZ(3,"span",31),t._uU(4),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("options",e.options),t.xp6(2),t.Oqu(e.progressMessage)}}function N(n,r){if(1&n&&(t.TgZ(0,"div",29),t._UZ(1,"div",20),t._UZ(2,"div",32),t._UZ(3,"div",33),t.TgZ(4,"button",34),t._UZ(5,"img",35),t._uU(6," Check Balance"),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("innerHTML",e.completeMessage,t.oJD)}}let C=(()=>{class n{constructor(e,s,o,a,c,l){this.auth=e,this.router=s,this.skyvault=o,this.changeDetectorRef=a,this.route=c,this.indc=l,this.faInfoCircle=w.sqG,this.amount=0,this.memo=null,this.to=null,this.errorMessage=null,this.progressMessage=null,this.completeMessage=null,this.loadingOptions={path:"/assets/animations/cloud_loading.json"},this.options={path:"/assets/animations/cloud_transfer.json"},this.errorOptions={path:"/assets/animations/error.json"},this.showLoader=!1,this.balanceLoader=!1,this.showNormal=!0,this.showError=!1,this.complete=!1,this.balance=0,this.balanceString="0",this.balanceBreakup=null,this.opinions=0,this.balances={},this.loadingMessage="",this.defaultAddress=!1,this.skyvaultAddress=null,this.doRecord=!0,this.payRoute=null,this.syncCount=0,this.doRecord=JSON.parse(localStorage.getItem("statements")),this.processing=!1,localStorage.setItem("payRoute","null"),localStorage.removeItem("payRoute");let d=this.route.snapshot.paramMap.get("transferID");if(d){if(!d.toLowerCase().endsWith(".skyvault.cc"))return void this.showErrorMessage("Invalid QR Code Address!");this.progressMessage="",this.defaultAddress=!0,this.to=d;let B=window.location.href,U=window.location.origin;this.payRoute=B.split(U.toString())[1],this.auth.getLoggedIn()||(localStorage.setItem("payRoute",JSON.stringify(this.payRoute)),this.router.navigate(["/auth/drop-image"]))}else this.auth.getLoggedIn()||this.router.navigate(["/welcome"]),this.defaultAddress=!1}ngOnInit(){this.showLoading(!0),localStorage.setItem("job","0"),this.watch=this.auth.watch().subscribe(s=>{s||this.router.navigate(["/welcome"])});let e=0;this.watchIndicator=this.indc.currentRStatus.subscribe(s=>{0==Object.keys(s).length?(this.showLoading(!0),this.progressMessage="Contacting RAIDA..."):(e++,!this.processing&&1==e&&setTimeout(()=>{this.showLoading(!1),this.checkBalance()},2e3))}),localStorage.getItem("skyvault")&&(this.skyvaultAddress=localStorage.getItem("skyvault"))}ngOnDestroy(){this.watch&&this.watch.unsubscribe(),this.watchIndicator&&this.watch.unsubscribe()}checkBalance(){return(0,g.mG)(this,void 0,void 0,function*(){if(this.progressMessage="Checking current balance",this.showLoading(!0),this.auth.getLoggedIn()){const e=this.auth.getToken(),s={sn:e.sn,an:e.an};let o=yield this.skyvault.showBalance(s);if(o){this.balance=0,this.opinions=0;let a=0,c=0;if(this.balanceBreakup='<div style="text-align: left; display: table;">Your SkyVault is out of sync. Balance returned by RAIDA servers are as follows: <ul style="text-align: left!important;">',o.balances){this.balances=o.balances;for(const l in o.balances)o.balances.hasOwnProperty(l)&&(this.balanceBreakup+='<li style="text-align: left!important">'+o.balances[l]+" RAIDA(s) - "+parseInt(l).toLocaleString()+" cc </li>",o.balances[l]>a&&(a=o.balances[l],c=parseInt(l),this.balance=c,this.balanceString=this.balance.toLocaleString())),this.opinions++;this.balanceBreakup+="</ul></div>",this.opinions>1&&0==this.syncCount&&(this.syncCount++,yield this.syncAccount())}}this.showLoading(!1)}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"])})}syncAccount(){return(0,g.mG)(this,void 0,void 0,function*(){this.showLoading(!0);let e=!1;if(this.auth.getLoggedIn()){const s=this.auth.getToken();this.progressMessage="Synchronizing SkyVault";const o={sn:s.sn,an:s.an};let a=yield this.skyvault.fixCoinsSync(o);if(console.log("SKYVAULT: apiFixTransfer response: ",a),"done"!=a.status)return void this.showErrorMessage(a.errorText);e||(this.checkBalance(),e=!0)}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"])})}onAmountChange(e){this.amount&&(this.amount=(0,m.NMM)(this.amount))}transfer(){return(0,g.mG)(this,void 0,void 0,function*(){if(this.processing=!0,this.to&&""!==this.to)if(isNaN(this.amount)||this.amount<1)this.showErrorMessage("Please enter a valid amount");else if(this.amount>this.balance)this.showErrorMessage("Insufficient balance!");else if("cloudcoin"!==this.to.substr(0,9).toLowerCase())if((!this.memo||""===this.memo)&&(this.memo="Transfer"),this.auth.getLoggedIn()){this.progressMessage="Transferring CloudCoins...";const e=this.auth.getToken(),s={sn:e.sn,an:e.an};this.amount=(0,m.NMM)(this.amount);const o=Object.assign(Object.assign({},s),{amount:this.amount,to:this.to,memo:this.memo});this.showLoading(!0),localStorage.setItem("job","1");let a=yield this.skyvault.transfer(o);if(console.log("SKYVAULT: transfer response (apiTransfer): ",a),a){if(localStorage.setItem("job","0"),"error"===a.status)return void("errorText"in a?-1!==a.errorText.indexOf("Failed to resolve")?this.showErrorMessage("Invalid Recipient SkyVault Address: "+this.to):this.showErrorMessage(a.errorText):this.showErrorMessage("Your login session is not valid, please logout and try again"));if(!("result"in a))return void this.showErrorMessage("Invalid response received");if(!this.doRecord&&a.transaction_id){const c=this.auth.getToken(),l={sn:c.sn,an:c.an};localStorage.setItem("job","1");let v={coin:l,guid:a.transaction_id};yield this.skyvault.deleteRecords(v),this.changeDetectorRef.detectChanges(),localStorage.setItem("job","0")}this.complete=!0,this.showCompleteMessage("Transfer Complete")}}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"]);else this.showErrorMessage('Transfer option cannot be used to send money to a Merchant SkyVault Account, please use the "Payment" option instead from the menu');else this.showErrorMessage("Please enter a valid recipient SkyVault account")})}sleep(e){return new Promise(s=>setTimeout(s,e))}animationCreated(e){}showLoading(e){e?(this.showNormal=!1,this.showLoader=!0,this.showError=!1):(this.showNormal=!0,this.showLoader=!1,this.showError=!1)}showErrorMessage(e){this.errorMessage=e,this.showNormal=!1,this.showError=!0,this.showLoader=!1}hideErrorMessage(){this.errorMessage="",this.showNormal=!0,this.showError=!1,this.showLoader=!1}showCompleteMessage(e){this.completeMessage=e,this.complete=!0,this.showError=!1,this.showNormal=!1,this.showLoader=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(M.r),t.Y36(u.F0),t.Y36(y._),t.Y36(t.sBO),t.Y36(u.gz),t.Y36(Z.Q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-transfer"]],decls:6,vars:4,consts:[[1,"pageWrapper"],[1,"sectionWrapper"],[4,"ngIf"],["class","text-center subInnerHeader",4,"ngIf"],[1,"transferWrap"],[1,"sectionTitle"],[1,"sectionContent"],[1,"alert-send-msg"],["icon","exclamation-circle"],[1,"transferForm"],[1,"row"],[1,"col-md-12"],[1,"label-input-form"],["type","text","name","to","placeholder","username.skyvault.cc",1,"input-form",3,"ngModel","disabled","ngModelChange"],[1,"col-md-6"],["class","label-input-form","style","color:#FF7777",3,"tooltip",4,"ngIf"],["class","label-input-form",4,"ngIf"],["type","number","placeholder","XX","name","amount",1,"input-form",3,"ngModel","ngModelChange","keyup"],["placeholder","Rent Payment","type","text",1,"input-form",3,"ngModel","ngModelChange"],["class","col-md-12 disclaimer",4,"ngIf"],[1,"gap10"],[1,"button-wrapper"],[1,"buttonCustome",3,"click"],[1,"label-input-form",2,"color","#FF7777",3,"tooltip"],[1,"col-md-12","disclaimer"],[3,"icon"],["height","100px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff","margin-bottom","10px"],[1,"text-center"],[1,"text-center","subInnerHeader"],["height","150px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff"],[3,"innerHTML"],[1,"gap20"],["routerLink","/balance",1,"buttonCustome"],["src","assets/images/balance-wallet.svg","alt","icon",1,"walletIcon"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,I,30,7,"ng-container",2),t.YNc(3,S,7,2,"ng-container",2),t.YNc(4,L,5,2,"ng-container",2),t.YNc(5,N,7,1,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",s.showNormal),t.xp6(1),t.Q6J("ngIf",s.showError),t.xp6(1),t.Q6J("ngIf",s.showLoader),t.xp6(1),t.Q6J("ngIf",s.complete))},directives:[p.O5,_.BN,h.Fj,h.JJ,h.On,h.wV,T.i9,x.e$,u.rH],styles:[".transferWrap[_ngcontent-%COMP%]{width:100%;height:initial;max-width:600px;margin:0 auto}.transferWrap[_ngcontent-%COMP%]   .transferForm[_ngcontent-%COMP%]{margin-top:40px}@media (max-width: 576px){.transferWrap[_ngcontent-%COMP%]   .transferForm[_ngcontent-%COMP%]{margin-top:20px}}.transferWrap[_ngcontent-%COMP%]   .transferForm[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{margin:30px auto 0;text-align:center;width:100%}"]}),n})();const J=[{path:"",component:C},{path:":transferID",component:C}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(J)],u.Bz]}),n})(),R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,O,h.u5,x.CT,_.uH,T.z8]]}),n})()}}]);