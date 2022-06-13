"use strict";(self.webpackChunkskyvault=self.webpackChunkskyvault||[]).push([[719],{7719:(q,f,i)=>{i.r(f),i.d(f,{PaymentModule:()=>B});var y=i(6019),u=i(7537),_=i(745),C=i(8329),v=i(3213),g=i(4708),m=i(4762),M=i(5043),x=i(6038),t=i(3556),Z=i(3755),w=i(4071),T=i(5894),b=i(4522);function A(n,l){if(1&n&&(t.TgZ(0,"label",24),t._UZ(1,"fa-icon",8),t._uU(2),t.qZA()),2&n){const e=t.oxw(2);t.s9C("tooltip",e.balanceBreakup),t.xp6(2),t.hij(" Amount (Balance: ",e.balanceString," CC) ")}}function P(n,l){if(1&n&&(t.TgZ(0,"label",12),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("Amount (Balance: ",e.balanceString," CC)")}}function k(n,l){if(1&n&&(t.TgZ(0,"div",25),t.TgZ(1,"span"),t._UZ(2,"fa-icon",26),t._uU(3," This transacton will not be recorded. You can record this transaction by changing the setting in Statements"),t.qZA(),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("icon",e.faInfoCircle)}}function I(n,l){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t.TgZ(2,"h2",5),t._uU(3,"Payment"),t.qZA(),t.TgZ(4,"p",6),t._uU(5,"This function sends CloudCoins to exchanges or merchants and then tells them that you have sent the funds. They then can check to see if the funds have arrived and credit your account automatically."),t._UZ(6,"br"),t.TgZ(7,"span",7),t._UZ(8,"fa-icon",8),t._uU(9," Please send only 16000 coins maximum at a time"),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"div",10),t.TgZ(12,"div",11),t.TgZ(13,"label",12),t._uU(14,"Receiver's SkyVault Address"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().to=o}),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"label",12),t._uU(18,"Return SkyVault Address"),t.qZA(),t.TgZ(19,"input",14),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().from=o}),t.qZA(),t.qZA(),t.TgZ(20,"div",11),t.YNc(21,A,3,2,"label",15),t.YNc(22,P,2,1,"label",16),t.TgZ(23,"input",17),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().amount=o})("keyup",function(){return t.CHM(e),t.oxw().onAmountChange()}),t.qZA(),t.qZA(),t.TgZ(24,"div",11),t.TgZ(25,"label",12),t._uU(26,"Memo or Code Provided by Receiver"),t.qZA(),t.TgZ(27,"input",18),t.NdJ("ngModelChange",function(o){return t.CHM(e),t.oxw().memo=o}),t.qZA(),t.qZA(),t.YNc(28,k,4,1,"div",19),t._UZ(29,"div",20),t.TgZ(30,"div",21),t.TgZ(31,"div",22),t.TgZ(32,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().payment()}),t._uU(33,"SEND PAYMENT AND NOTIFY MERCHANT"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(15),t.Q6J("ngModel",e.to),t.xp6(4),t.Q6J("ngModel",e.from),t.xp6(2),t.Q6J("ngIf",e.opinions>1),t.xp6(1),t.Q6J("ngIf",1===e.opinions||0===e.opinions),t.xp6(1),t.Q6J("ngModel",e.amount),t.xp6(4),t.Q6J("ngModel",e.memo),t.xp6(1),t.Q6J("ngIf",!e.doRecord)}}function S(n,l){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"ng-lottie",27),t.NdJ("animationCreated",function(o){return t.CHM(e),t.oxw().animationCreated(o)}),t.qZA(),t.TgZ(2,"div",28),t._uU(3),t.qZA(),t.TgZ(4,"div",29),t.TgZ(5,"button",23),t.NdJ("click",function(){return t.CHM(e),t.oxw().hideErrorMessage()}),t._uU(6," Back "),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("options",e.errorOptions),t.xp6(2),t.Oqu(e.errorMessage)}}function N(n,l){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",30),t.TgZ(2,"ng-lottie",31),t.NdJ("animationCreated",function(o){return t.CHM(e),t.oxw().animationCreated(o)}),t.qZA(),t.TgZ(3,"span",32),t._uU(4),t.qZA(),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("options",e.options),t.xp6(2),t.Oqu(e.progressMessage)}}function L(n,l){if(1&n&&(t.TgZ(0,"div",30),t._UZ(1,"div",20),t._UZ(2,"div",33),t._UZ(3,"div",34),t.TgZ(4,"button",35),t._UZ(5,"img",36),t._uU(6," Check Balance"),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("innerHTML",e.completeMessage,t.oJD)}}const J=[{path:"",component:(()=>{class n{constructor(e,s,o,a,r,c,d){this.auth=e,this.router=s,this.skyvault=o,this.changeDetectorRef=a,this.activatedRoute=r,this.indc=c,this.http=d,this.faInfoCircle=M.sqG,this.amount=0,this.memo=null,this.to=null,this.from=null,this.errorMessage=null,this.progressMessage=null,this.completeMessage=null,this.loadingOptions={path:"/assets/animations/cloud_loading.json"},this.options={path:"/assets/animations/cloud_transfer.json"},this.errorOptions={path:"/assets/animations/error.json"},this.showLoader=!1,this.balanceLoader=!1,this.showNormal=!0,this.showError=!1,this.complete=!1,this.balance=0,this.balanceString="0",this.balanceBreakup=null,this.opinions=0,this.balances={},this.loadingMessage="",this.skyvaultAddress=null,this.doRecord=!0,this.payRoute=null,this.syncCount=0,this.doRecord=JSON.parse(localStorage.getItem("statements")),this.processing=!1,localStorage.setItem("merchantPay","null"),localStorage.removeItem("merchantPay"),this.activatedRoute.queryParams.subscribe(h=>{this.amount=h.amount?h.amount:0,this.memo=h.memo?h.memo:null,this.to=h.receiver_address?h.receiver_address:null});const p={amount:this.amount,receiver_address:this.to,memo:this.memo};this.auth.getLoggedIn()||(localStorage.setItem("merchantPay",JSON.stringify(p)),this.router.navigate(["/auth/drop-image"]))}ngOnInit(){this.showLoading(!0),localStorage.setItem("job","0"),this.watch=this.auth.watch().subscribe(s=>{s||this.router.navigate(["/welcome"])});let e=0;this.watchIndicator=this.indc.currentRStatus.subscribe(s=>{0==Object.keys(s).length?(this.showLoading(!0),this.progressMessage="Contacting RAIDA..."):(e++,!this.processing&&1==e&&setTimeout(()=>{this.showLoading(!1),this.checkBalance()},2e3))}),localStorage.getItem("skyvault")&&(this.skyvaultAddress=localStorage.getItem("skyvault"),this.from=this.skyvaultAddress)}ngOnDestroy(){this.watch&&this.watch.unsubscribe(),this.watchIndicator&&this.watch.unsubscribe()}onAmountChange(){this.amount&&(this.amount=(0,x.NMM)(this.amount))}checkBalance(){return(0,m.mG)(this,void 0,void 0,function*(){if(console.log("API call:- checking balance.."),this.progressMessage="Checking current balance",this.showLoading(!0),this.auth.getLoggedIn()){const e=this.auth.getToken(),s={sn:e.sn,an:e.an};let o=yield this.skyvault.showBalance(s);if(console.log("API call:- (showBalance): resp:",o),console.log("SKYVAULT: showBalance: ",o),o){this.balance=0,this.opinions=0;let a=0,r=0;if(this.balanceBreakup='<div style="text-align: left; display: table;">Your SkyVault is out of sync. Balance returned by RAIDA servers are as follows: <ul style="text-align: left!important;">',o.balances){this.balances=o.balances;for(const c in o.balances)o.balances.hasOwnProperty(c)&&(this.balanceBreakup+='<li style="text-align: left!important">'+o.balances[c]+" RAIDA(s) - "+parseInt(c).toLocaleString()+" cc </li>",o.balances[c]>a&&(a=o.balances[c],r=parseInt(c),this.balance=r,this.balanceString=this.balance.toLocaleString())),this.opinions++;this.balanceBreakup+="</ul></div>",this.opinions>1&&0==this.syncCount&&(this.syncCount++,yield this.syncAccount())}}this.showLoading(!1)}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"])})}syncAccount(){return(0,m.mG)(this,void 0,void 0,function*(){this.showLoading(!0);let e=!1;if(this.auth.getLoggedIn()){const s=this.auth.getToken();this.progressMessage="Synchronizing SkyVault";const o={sn:s.sn,an:s.an};let a=yield this.skyvault.fixCoinsSync(o);if(console.log("SKYVAULT: apiFixTransfer response: ",a),"done"!=a.status)return void this.showErrorMessage(a.errorText);e||(yield this.checkBalance(),e=!0)}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"])})}payment(){return(0,m.mG)(this,void 0,void 0,function*(){if(this.to)if(this.from)if(isNaN(this.amount)||this.amount<1)this.showErrorMessage("Invalid amount");else if(this.amount>this.balance)this.showErrorMessage("Not enough balance!! Current balance: "+this.balanceString+" CC");else if(this.memo||(this.memo="Payment of $"+this.amount+" towards Merchant Address: "+this.to),this.processing=!0,localStorage.setItem("job","1"),this.auth.getLoggedIn()){this.progressMessage="Transferring Cloudcoins...";const e=this.auth.getToken(),s={sn:e.sn,an:e.an};let o=this.skyvault.generateSeed();this.amount=(0,x.NMM)(this.amount);const a={an:s.an,sender_name:this.from,from:this.from,to:this.to,amount:this.amount,memo:this.memo,guid:o};this.showLoading(!0);let r=yield this.skyvault.payment(a);if(console.log("Payment response:",r),localStorage.setItem("job","0"),r){if(localStorage.setItem("job","0"),"error"===r.status)return void("errorText"in r?-1!==r.errorText.indexOf("Failed to resolve")?this.showErrorMessage("Invalid Recipient SkyVault Address: "+this.to):this.showErrorMessage(r.errorText):this.showErrorMessage("Your login session is not valid, please logout and try again"));if(!("result"in r))return void this.showErrorMessage("Invalid response received");if(!this.doRecord&&r.transaction_id){const c=this.auth.getToken(),d={sn:c.sn,an:c.an};localStorage.setItem("job","1");let p={coin:d,guid:r.transaction_id};yield this.skyvault.deleteRecords(p),this.changeDetectorRef.detectChanges(),localStorage.setItem("job","0")}this.complete=!0,this.showCompleteMessage("Payment Complete")}}else this.auth.checkLoginStatus(),this.router.navigate(["welcome"]);else this.showErrorMessage("Return SkyVault Address is required");else this.showErrorMessage("Receiver's SkyVault Address is required")})}sleep(e){return new Promise(s=>setTimeout(s,e))}animationCreated(e){}showLoading(e){e?(this.showNormal=!1,this.showLoader=!0,this.showError=!1):(this.showNormal=!0,this.showLoader=!1,this.showError=!1)}showErrorMessage(e){this.errorMessage=e,this.showNormal=!1,this.showError=!0,this.showLoader=!1}hideErrorMessage(){this.errorMessage="",this.showNormal=!0,this.showError=!1,this.showLoader=!1}showCompleteMessage(e){this.completeMessage=e,this.complete=!0,this.showError=!1,this.showNormal=!1,this.showLoader=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z.r),t.Y36(g.F0),t.Y36(w._),t.Y36(t.sBO),t.Y36(g.gz),t.Y36(T.Q),t.Y36(b.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment"]],decls:6,vars:4,consts:[[1,"pageWrapper"],[1,"sectionWrapper"],[4,"ngIf"],["class","text-center subInnerHeader",4,"ngIf"],[1,"paymentWrap"],[1,"sectionTitle"],[1,"sectionContent"],[1,"alert-send-msg"],["icon","exclamation-circle"],[1,"paymentForm"],[1,"row"],[1,"col-md-6"],[1,"label-input-form"],["type","text","name","to","placeholder","cloudcoin.yourdomain.com",1,"input-form",3,"ngModel","ngModelChange"],["type","text","name","from","placeholder","username.skyvault.cc","disabled","",1,"input-form",3,"ngModel","ngModelChange"],["class","label-input-form","style","color:#FF7777",3,"tooltip",4,"ngIf"],["class","label-input-form",4,"ngIf"],["type","number","placeholder","XX","name","amount",1,"input-form",3,"ngModel","ngModelChange","keyup"],["placeholder","123456789","type","text",1,"input-form",3,"ngModel","ngModelChange"],["class","col-md-12 disclaimer",4,"ngIf"],[1,"gap10"],[1,"col-md-12"],[1,"button-wrapper"],[1,"buttonCustome",3,"click"],[1,"label-input-form",2,"color","#FF7777",3,"tooltip"],[1,"col-md-12","disclaimer"],[3,"icon"],["height","100px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff","margin-bottom","10px"],[1,"text-center"],[1,"text-center","subInnerHeader"],["height","150px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff"],[3,"innerHTML"],[1,"gap20"],["routerLink","/balance",1,"buttonCustome"],["src","assets/images/balance-wallet.svg","alt","icon",1,"walletIcon"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,I,34,7,"ng-container",2),t.YNc(3,S,7,2,"ng-container",2),t.YNc(4,N,5,2,"ng-container",2),t.YNc(5,L,7,1,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",s.showNormal),t.xp6(1),t.Q6J("ngIf",s.showError),t.xp6(1),t.Q6J("ngIf",s.showLoader),t.xp6(1),t.Q6J("ngIf",s.complete))},directives:[y.O5,C.BN,u.Fj,u.JJ,u.On,u.wV,_.i9,v.e$,g.rH],styles:[".paymentWrap[_ngcontent-%COMP%]{width:100%;height:initial;max-width:600px;margin:0 auto}.paymentWrap[_ngcontent-%COMP%]   .paymentForm[_ngcontent-%COMP%]{margin-top:40px}@media (max-width: 576px){.paymentWrap[_ngcontent-%COMP%]   .paymentForm[_ngcontent-%COMP%]{margin-top:20px}}.paymentWrap[_ngcontent-%COMP%]   .paymentForm[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{margin:30px auto 0;text-align:center;width:100%}.navLink[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.navLink[_ngcontent-%COMP%]:hover{opacity:.8}"]}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(J)],g.Bz]}),n})(),B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[y.ez,O,u.u5,v.CT,C.uH,_.z8]]}),n})()}}]);