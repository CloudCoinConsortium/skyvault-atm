(self.webpackChunkskyvault=self.webpackChunkskyvault||[]).push([[27],{3869:N=>{"use strict";var i={single_source_shortest_paths:function(s,r,o){var t={},e={};e[r]=0;var a,c,l,g,y,p,n=i.PriorityQueue.make();for(n.push(r,0);!n.empty();)for(l in g=(a=n.pop()).cost,y=s[c=a.value]||{})y.hasOwnProperty(l)&&(p=g+y[l],(void 0===e[l]||e[l]>p)&&(e[l]=p,n.push(l,p),t[l]=c));if(void 0!==o&&void 0===e[o]){var R=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(R)}return t},extract_shortest_path_from_predecessor_list:function(s,r){for(var o=[],t=r;t;)o.push(t),t=s[t];return o.reverse(),o},find_path:function(s,r,o){var t=i.single_source_shortest_paths(s,r,o);return i.extract_shortest_path_from_predecessor_list(t,o)},PriorityQueue:{make:function(s){var t,r=i.PriorityQueue,o={};for(t in s=s||{},r)r.hasOwnProperty(t)&&(o[t]=r[t]);return o.queue=[],o.sorter=s.sorter||r.default_sorter,o},default_sorter:function(s,r){return s.cost-r.cost},push:function(s,r){this.queue.push({value:s,cost:r}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};N.exports=i},291:N=>{"use strict";N.exports=function(s){for(var r=[],o=s.length,t=0;t<o;t++){var e=s.charCodeAt(t);if(e>=55296&&e<=56319&&o>t+1){var n=s.charCodeAt(t+1);n>=56320&&n<=57343&&(e=1024*(e-55296)+n-56320+65536,t+=1)}e<128?r.push(e):e<2048?(r.push(e>>6|192),r.push(63&e|128)):e<55296||e>=57344&&e<65536?(r.push(e>>12|224),r.push(e>>6&63|128),r.push(63&e|128)):e>=65536&&e<=1114111?(r.push(e>>18|240),r.push(e>>12&63|128),r.push(e>>6&63|128),r.push(63&e|128)):r.push(239,191,189)}return new Uint8Array(r).buffer}},3823:(N,i,s)=>{const r=s(8765),o=s(667),t=s(5671),e=s(5103);function n(a,c,l,g,y){const L=[].slice.call(arguments,1),p=L.length,w="function"==typeof L[p-1];if(!w&&!r())throw new Error("Callback required as last argument");if(!w){if(p<1)throw new Error("Too few arguments provided");return 1===p?(l=c,c=g=void 0):2===p&&!c.getContext&&(g=l,l=c,c=void 0),new Promise(function(M,R){try{const v=o.create(l,g);M(a(v,c,g))}catch(v){R(v)}})}if(p<2)throw new Error("Too few arguments provided");2===p?(y=l,l=c,c=g=void 0):3===p&&(c.getContext&&void 0===y?(y=g,g=void 0):(y=g,g=l,l=c,c=void 0));try{const M=o.create(l,g);y(null,a(M,c,g))}catch(M){y(M)}}i.create=o.create,i.toCanvas=n.bind(null,t.render),i.toDataURL=n.bind(null,t.renderToDataURL),i.toString=n.bind(null,function(a,c,l){return e.render(a,l)})},8765:N=>{N.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},9454:(N,i,s)=>{const r=s(8545).getSymbolSize;i.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,n=r(t),a=145===n?26:2*Math.ceil((n-13)/(2*e-2)),c=[n-7];for(let l=1;l<e-1;l++)c[l]=c[l-1]-a;return c.push(6),c.reverse()},i.getPositions=function(t){const e=[],n=i.getRowColCoords(t),a=n.length;for(let c=0;c<a;c++)for(let l=0;l<a;l++)0===c&&0===l||0===c&&l===a-1||c===a-1&&0===l||e.push([n[c],n[l]]);return e}},9995:(N,i,s)=>{const r=s(9091),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(e){this.mode=r.ALPHANUMERIC,this.data=e}t.getBitsLength=function(n){return 11*Math.floor(n/2)+n%2*6},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let a;for(a=0;a+2<=this.data.length;a+=2){let c=45*o.indexOf(this.data[a]);c+=o.indexOf(this.data[a+1]),n.put(c,11)}this.data.length%2&&n.put(o.indexOf(this.data[a]),6)},N.exports=t},8613:N=>{function i(){this.buffer=[],this.length=0}i.prototype={get:function(s){const r=Math.floor(s/8);return 1==(this.buffer[r]>>>7-s%8&1)},put:function(s,r){for(let o=0;o<r;o++)this.putBit(1==(s>>>r-o-1&1))},getLengthInBits:function(){return this.length},putBit:function(s){const r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),s&&(this.buffer[r]|=128>>>this.length%8),this.length++}},N.exports=i},6750:N=>{function i(s){if(!s||s<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=s,this.data=new Uint8Array(s*s),this.reservedBit=new Uint8Array(s*s)}i.prototype.set=function(s,r,o,t){const e=s*this.size+r;this.data[e]=o,t&&(this.reservedBit[e]=!0)},i.prototype.get=function(s,r){return this.data[s*this.size+r]},i.prototype.xor=function(s,r,o){this.data[s*this.size+r]^=o},i.prototype.isReserved=function(s,r){return this.reservedBit[s*this.size+r]},N.exports=i},4791:(N,i,s)=>{const r=s(291),o=s(9091);function t(e){this.mode=o.BYTE,this.data=new Uint8Array(r(e))}t.getBitsLength=function(n){return 8*n},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){for(let n=0,a=this.data.length;n<a;n++)e.put(this.data[n],8)},N.exports=t},8211:(N,i,s)=>{const r=s(8291),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];i.getBlocksCount=function(n,a){switch(a){case r.L:return o[4*(n-1)+0];case r.M:return o[4*(n-1)+1];case r.Q:return o[4*(n-1)+2];case r.H:return o[4*(n-1)+3];default:return}},i.getTotalCodewordsCount=function(n,a){switch(a){case r.L:return t[4*(n-1)+0];case r.M:return t[4*(n-1)+1];case r.Q:return t[4*(n-1)+2];case r.H:return t[4*(n-1)+3];default:return}}},8291:(N,i)=>{i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2},i.isValid=function(o){return o&&void 0!==o.bit&&o.bit>=0&&o.bit<4},i.from=function(o,t){if(i.isValid(o))return o;try{return function(r){if("string"!=typeof r)throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+r)}}(o)}catch(e){return t}}},4463:(N,i,s)=>{const r=s(8545).getSymbolSize;i.getPositions=function(e){const n=r(e);return[[0,0],[n-7,0],[0,n-7]]}},8926:(N,i,s)=>{const r=s(8545),e=r.getBCHDigit(1335);i.getEncodedBits=function(a,c){const l=a.bit<<3|c;let g=l<<10;for(;r.getBCHDigit(g)-e>=0;)g^=1335<<r.getBCHDigit(g)-e;return 21522^(l<<10|g)}},3326:(N,i)=>{const s=new Uint8Array(512),r=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)s[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)s[e]=s[e-255]})(),i.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},i.exp=function(t){return s[t]},i.mul=function(t,e){return 0===t||0===e?0:s[r[t]+r[e]]}},6325:(N,i,s)=>{const r=s(9091),o=s(8545);function t(e){this.mode=r.KANJI,this.data=e}t.getBitsLength=function(n){return 13*n},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(e){let n;for(n=0;n<this.data.length;n++){let a=o.toSJIS(this.data[n]);if(a>=33088&&a<=40956)a-=33088;else{if(!(a>=57408&&a<=60351))throw new Error("Invalid SJIS character: "+this.data[n]+"\nMake sure your charset is UTF-8");a-=49472}a=192*(a>>>8&255)+(255&a),e.put(a,13)}},N.exports=t},5656:(N,i)=>{i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};function r(o,t,e){switch(o){case i.Patterns.PATTERN000:return(t+e)%2==0;case i.Patterns.PATTERN001:return t%2==0;case i.Patterns.PATTERN010:return e%3==0;case i.Patterns.PATTERN011:return(t+e)%3==0;case i.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(e/3))%2==0;case i.Patterns.PATTERN101:return t*e%2+t*e%3==0;case i.Patterns.PATTERN110:return(t*e%2+t*e%3)%2==0;case i.Patterns.PATTERN111:return(t*e%3+(t+e)%2)%2==0;default:throw new Error("bad maskPattern:"+o)}}i.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},i.from=function(t){return i.isValid(t)?parseInt(t,10):void 0},i.getPenaltyN1=function(t){const e=t.size;let n=0,a=0,c=0,l=null,g=null;for(let y=0;y<e;y++){a=c=0,l=g=null;for(let L=0;L<e;L++){let p=t.get(y,L);p===l?a++:(a>=5&&(n+=a-5+3),l=p,a=1),p=t.get(L,y),p===g?c++:(c>=5&&(n+=c-5+3),g=p,c=1)}a>=5&&(n+=a-5+3),c>=5&&(n+=c-5+3)}return n},i.getPenaltyN2=function(t){const e=t.size;let n=0;for(let a=0;a<e-1;a++)for(let c=0;c<e-1;c++){const l=t.get(a,c)+t.get(a,c+1)+t.get(a+1,c)+t.get(a+1,c+1);(4===l||0===l)&&n++}return 3*n},i.getPenaltyN3=function(t){const e=t.size;let n=0,a=0,c=0;for(let l=0;l<e;l++){a=c=0;for(let g=0;g<e;g++)a=a<<1&2047|t.get(l,g),g>=10&&(1488===a||93===a)&&n++,c=c<<1&2047|t.get(g,l),g>=10&&(1488===c||93===c)&&n++}return 40*n},i.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let c=0;c<n;c++)e+=t.data[c];return 10*Math.abs(Math.ceil(100*e/n/5)-10)},i.applyMask=function(t,e){const n=e.size;for(let a=0;a<n;a++)for(let c=0;c<n;c++)e.isReserved(c,a)||e.xor(c,a,r(t,c,a))},i.getBestMask=function(t,e){const n=Object.keys(i.Patterns).length;let a=0,c=1/0;for(let l=0;l<n;l++){e(l),i.applyMask(l,t);const g=i.getPenaltyN1(t)+i.getPenaltyN2(t)+i.getPenaltyN3(t)+i.getPenaltyN4(t);i.applyMask(l,t),g<c&&(c=g,a=l)}return a}},9091:(N,i,s)=>{const r=s(3478),o=s(8339);i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(n,a){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!r.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?n.ccBits[0]:a<27?n.ccBits[1]:n.ccBits[2]},i.getBestModeForData=function(n){return o.testNumeric(n)?i.NUMERIC:o.testAlphanumeric(n)?i.ALPHANUMERIC:o.testKanji(n)?i.KANJI:i.BYTE},i.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},i.isValid=function(n){return n&&n.bit&&n.ccBits},i.from=function(n,a){if(i.isValid(n))return n;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+e)}}(n)}catch(c){return a}}},2964:(N,i,s)=>{const r=s(9091);function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let n,a,c;for(n=0;n+3<=this.data.length;n+=3)a=this.data.substr(n,3),c=parseInt(a,10),e.put(c,10);const l=this.data.length-n;l>0&&(a=this.data.substr(n),c=parseInt(a,10),e.put(c,3*l+1))},N.exports=o},9909:(N,i,s)=>{const r=s(3326);i.mul=function(t,e){const n=new Uint8Array(t.length+e.length-1);for(let a=0;a<t.length;a++)for(let c=0;c<e.length;c++)n[a+c]^=r.mul(t[a],e[c]);return n},i.mod=function(t,e){let n=new Uint8Array(t);for(;n.length-e.length>=0;){const a=n[0];for(let l=0;l<e.length;l++)n[l]^=r.mul(e[l],a);let c=0;for(;c<n.length&&0===n[c];)c++;n=n.slice(c)}return n},i.generateECPolynomial=function(t){let e=new Uint8Array([1]);for(let n=0;n<t;n++)e=i.mul(e,new Uint8Array([1,r.exp(n)]));return e}},667:(N,i,s)=>{const r=s(8545),o=s(8291),t=s(8613),e=s(6750),n=s(9454),a=s(4463),c=s(5656),l=s(8211),g=s(2723),y=s(8398),L=s(8926),p=s(9091),w=s(1302);function S(C,B,u){const d=C.size,f=L.getEncodedBits(B,u);let h,m;for(h=0;h<15;h++)m=1==(f>>h&1),C.set(h<6?h:h<8?h+1:d-15+h,8,m,!0),C.set(8,h<8?d-h-1:h<9?15-h-1+1:15-h-1,m,!0);C.set(d-8,8,1,!0)}function O(C,B,u,d){let f;if(Array.isArray(C))f=w.fromArray(C);else{if("string"!=typeof C)throw new Error("Invalid data");{let F=B;if(!F){const k=w.rawSplit(C);F=y.getBestVersionForData(k,u)}f=w.fromString(C,F||40)}}const h=y.getBestVersionForData(f,u);if(!h)throw new Error("The amount of data is too big to be stored in a QR Code");if(B){if(B<h)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+h+".\n")}else B=h;const m=function(C,B,u){const d=new t;u.forEach(function(P){d.put(P.mode.bit,4),d.put(P.getLength(),p.getCharCountIndicator(P.mode,C)),P.write(d)});const m=8*(r.getSymbolTotalCodewords(C)-l.getTotalCodewordsCount(C,B));for(d.getLengthInBits()+4<=m&&d.put(0,4);d.getLengthInBits()%8!=0;)d.putBit(0);const A=(m-d.getLengthInBits())/8;for(let P=0;P<A;P++)d.put(P%2?17:236,8);return function(C,B,u){const d=r.getSymbolTotalCodewords(B),h=d-l.getTotalCodewordsCount(B,u),m=l.getBlocksCount(B,u),P=m-d%m,F=Math.floor(d/m),k=Math.floor(h/m),Y=k+1,V=F-k,K=new g(V);let z=0;const x=new Array(m),W=new Array(m);let Q=0;const j=new Uint8Array(C.buffer);for(let _=0;_<m;_++){const J=_<P?k:Y;x[_]=j.slice(z,z+J),W[_]=K.encode(x[_]),z+=J,Q=Math.max(Q,J)}const H=new Uint8Array(d);let D,U,Z=0;for(D=0;D<Q;D++)for(U=0;U<m;U++)D<x[U].length&&(H[Z++]=x[U][D]);for(D=0;D<V;D++)for(U=0;U<m;U++)H[Z++]=W[U][D];return H}(d,C,B)}(B,u,f),A=r.getSymbolSize(B),P=new e(A);return function(C,B){const u=C.size,d=a.getPositions(B);for(let f=0;f<d.length;f++){const h=d[f][0],m=d[f][1];for(let A=-1;A<=7;A++)if(!(h+A<=-1||u<=h+A))for(let P=-1;P<=7;P++)m+P<=-1||u<=m+P||C.set(h+A,m+P,A>=0&&A<=6&&(0===P||6===P)||P>=0&&P<=6&&(0===A||6===A)||A>=2&&A<=4&&P>=2&&P<=4,!0)}}(P,B),function(C){const B=C.size;for(let u=8;u<B-8;u++){const d=u%2==0;C.set(u,6,d,!0),C.set(6,u,d,!0)}}(P),function(C,B){const u=n.getPositions(B);for(let d=0;d<u.length;d++){const f=u[d][0],h=u[d][1];for(let m=-2;m<=2;m++)for(let A=-2;A<=2;A++)C.set(f+m,h+A,-2===m||2===m||-2===A||2===A||0===m&&0===A,!0)}}(P,B),S(P,u,0),B>=7&&function(C,B){const u=C.size,d=y.getEncodedBits(B);let f,h,m;for(let A=0;A<18;A++)f=Math.floor(A/3),h=A%3+u-8-3,m=1==(d>>A&1),C.set(f,h,m,!0),C.set(h,f,m,!0)}(P,B),function(C,B){const u=C.size;let d=-1,f=u-1,h=7,m=0;for(let A=u-1;A>0;A-=2)for(6===A&&A--;;){for(let P=0;P<2;P++)if(!C.isReserved(f,A-P)){let F=!1;m<B.length&&(F=1==(B[m]>>>h&1)),C.set(f,A-P,F),h--,-1===h&&(m++,h=7)}if(f+=d,f<0||u<=f){f-=d,d=-d;break}}}(P,m),isNaN(d)&&(d=c.getBestMask(P,S.bind(null,P,u))),c.applyMask(d,P),S(P,u,d),{modules:P,version:B,errorCorrectionLevel:u,maskPattern:d,segments:f}}i.create=function(B,u){if(void 0===B||""===B)throw new Error("No input text");let f,h,d=o.M;return void 0!==u&&(d=o.from(u.errorCorrectionLevel,o.M),f=y.from(u.version),h=c.from(u.maskPattern),u.toSJISFunc&&r.setToSJISFunction(u.toSJISFunc)),O(B,f,d,h)}},2723:(N,i,s)=>{const r=s(9909);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const a=r.mod(n,this.genPoly),c=this.degree-a.length;if(c>0){const l=new Uint8Array(this.degree);return l.set(a,c),l}return a},N.exports=o},8339:(N,i)=>{const s="[0-9]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const t="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";i.KANJI=new RegExp(o,"g"),i.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),i.BYTE=new RegExp(t,"g"),i.NUMERIC=new RegExp(s,"g"),i.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const e=new RegExp("^"+o+"$"),n=new RegExp("^"+s+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");i.testKanji=function(l){return e.test(l)},i.testNumeric=function(l){return n.test(l)},i.testAlphanumeric=function(l){return a.test(l)}},1302:(N,i,s)=>{const r=s(9091),o=s(2964),t=s(9995),e=s(4791),n=s(6325),a=s(8339),c=s(8545),l=s(3869);function g(T){return unescape(encodeURIComponent(T)).length}function y(T,S,I){const E=[];let b;for(;null!==(b=T.exec(I));)E.push({data:b[0],index:b.index,mode:S,length:b[0].length});return E}function L(T){const S=y(a.NUMERIC,r.NUMERIC,T),I=y(a.ALPHANUMERIC,r.ALPHANUMERIC,T);let E,b;return c.isKanjiModeEnabled()?(E=y(a.BYTE,r.BYTE,T),b=y(a.KANJI,r.KANJI,T)):(E=y(a.BYTE_KANJI,r.BYTE,T),b=[]),S.concat(I,E,b).sort(function(C,B){return C.index-B.index}).map(function(C){return{data:C.data,mode:C.mode,length:C.length}})}function p(T,S){switch(S){case r.NUMERIC:return o.getBitsLength(T);case r.ALPHANUMERIC:return t.getBitsLength(T);case r.KANJI:return n.getBitsLength(T);case r.BYTE:return e.getBitsLength(T)}}function v(T,S){let I;const E=r.getBestModeForData(T);if(I=r.from(S,E),I!==r.BYTE&&I.bit<E.bit)throw new Error('"'+T+'" cannot be encoded with mode '+r.toString(I)+".\n Suggested mode is: "+r.toString(E));switch(I===r.KANJI&&!c.isKanjiModeEnabled()&&(I=r.BYTE),I){case r.NUMERIC:return new o(T);case r.ALPHANUMERIC:return new t(T);case r.KANJI:return new n(T);case r.BYTE:return new e(T)}}i.fromArray=function(S){return S.reduce(function(I,E){return"string"==typeof E?I.push(v(E,null)):E.data&&I.push(v(E.data,E.mode)),I},[])},i.fromString=function(S,I){const b=function(T){const S=[];for(let I=0;I<T.length;I++){const E=T[I];switch(E.mode){case r.NUMERIC:S.push([E,{data:E.data,mode:r.ALPHANUMERIC,length:E.length},{data:E.data,mode:r.BYTE,length:E.length}]);break;case r.ALPHANUMERIC:S.push([E,{data:E.data,mode:r.BYTE,length:E.length}]);break;case r.KANJI:S.push([E,{data:E.data,mode:r.BYTE,length:g(E.data)}]);break;case r.BYTE:S.push([{data:E.data,mode:r.BYTE,length:g(E.data)}])}}return S}(L(S,c.isKanjiModeEnabled())),O=function(T,S){const I={},E={start:{}};let b=["start"];for(let O=0;O<T.length;O++){const C=T[O],B=[];for(let u=0;u<C.length;u++){const d=C[u],f=""+O+u;B.push(f),I[f]={node:d,lastCount:0},E[f]={};for(let h=0;h<b.length;h++){const m=b[h];I[m]&&I[m].node.mode===d.mode?(E[m][f]=p(I[m].lastCount+d.length,d.mode)-p(I[m].lastCount,d.mode),I[m].lastCount+=d.length):(I[m]&&(I[m].lastCount=d.length),E[m][f]=p(d.length,d.mode)+4+r.getCharCountIndicator(d.mode,S))}}b=B}for(let O=0;O<b.length;O++)E[b[O]].end=0;return{map:E,table:I}}(b,I),C=l.find_path(O.map,"start","end"),B=[];for(let u=1;u<C.length-1;u++)B.push(O.table[C[u]].node);return i.fromArray(B.reduce(function(S,I){const E=S.length-1>=0?S[S.length-1]:null;return E&&E.mode===I.mode?(S[S.length-1].data+=I.data,S):(S.push(I),S)},[]))},i.rawSplit=function(S){return i.fromArray(L(S,c.isKanjiModeEnabled()))}},8545:(N,i)=>{let s;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];i.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},i.getSymbolTotalCodewords=function(t){return r[t]},i.getBCHDigit=function(o){let t=0;for(;0!==o;)t++,o>>>=1;return t},i.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');s=t},i.isKanjiModeEnabled=function(){return void 0!==s},i.toSJIS=function(t){return s(t)}},3478:(N,i)=>{i.isValid=function(r){return!isNaN(r)&&r>=1&&r<=40}},8398:(N,i,s)=>{const r=s(8545),o=s(8211),t=s(8291),e=s(9091),n=s(3478),c=r.getBCHDigit(7973);function g(p,w){return e.getCharCountIndicator(p,w)+4}function y(p,w){let M=0;return p.forEach(function(R){M+=g(R.mode,w)+R.getBitsLength()}),M}i.from=function(w,M){return n.isValid(w)?parseInt(w,10):M},i.getCapacity=function(w,M,R){if(!n.isValid(w))throw new Error("Invalid QR Code version");void 0===R&&(R=e.BYTE);const S=8*(r.getSymbolTotalCodewords(w)-o.getTotalCodewordsCount(w,M));if(R===e.MIXED)return S;const I=S-g(R,w);switch(R){case e.NUMERIC:return Math.floor(I/10*3);case e.ALPHANUMERIC:return Math.floor(I/11*2);case e.KANJI:return Math.floor(I/13);default:return Math.floor(I/8)}},i.getBestVersionForData=function(w,M){let R;const v=t.from(M,t.M);if(Array.isArray(w)){if(w.length>1)return function(p,w){for(let M=1;M<=40;M++)if(y(p,M)<=i.getCapacity(M,w,e.MIXED))return M}(w,v);if(0===w.length)return 1;R=w[0]}else R=w;return function(p,w,M){for(let R=1;R<=40;R++)if(w<=i.getCapacity(R,M,p))return R}(R.mode,R.getLength(),v)},i.getEncodedBits=function(w){if(!n.isValid(w)||w<7)throw new Error("Invalid QR Code version");let M=w<<12;for(;r.getBCHDigit(M)-c>=0;)M^=7973<<r.getBCHDigit(M)-c;return w<<12|M}},5671:(N,i,s)=>{const r=s(1035);i.render=function(n,a,c){let l=c,g=a;void 0===l&&(!a||!a.getContext)&&(l=a,a=void 0),a||(g=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),l=r.getOptions(l);const y=r.getImageWidth(n.modules.size,l),L=g.getContext("2d"),p=L.createImageData(y,y);return r.qrToImageData(p.data,n,l),function(e,n,a){e.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=a,n.width=a,n.style.height=a+"px",n.style.width=a+"px"}(L,g,y),L.putImageData(p,0,0),g},i.renderToDataURL=function(n,a,c){let l=c;return void 0===l&&(!a||!a.getContext)&&(l=a,a=void 0),l||(l={}),i.render(n,a,l).toDataURL(l.type||"image/png",(l.rendererOpts||{}).quality)}},5103:(N,i,s)=>{const r=s(1035);function o(n,a){const c=n.a/255,l=a+'="'+n.hex+'"';return c<1?l+" "+a+'-opacity="'+c.toFixed(2).slice(1)+'"':l}function t(n,a,c){let l=n+a;return void 0!==c&&(l+=" "+c),l}i.render=function(a,c,l){const g=r.getOptions(c),y=a.modules.size,L=a.modules.data,p=y+2*g.margin,w=g.color.light.a?"<path "+o(g.color.light,"fill")+' d="M0 0h'+p+"v"+p+'H0z"/>':"",M="<path "+o(g.color.dark,"stroke")+' d="'+function(n,a,c){let l="",g=0,y=!1,L=0;for(let p=0;p<n.length;p++){const w=Math.floor(p%a),M=Math.floor(p/a);!w&&!y&&(y=!0),n[p]?(L++,p>0&&w>0&&n[p-1]||(l+=y?t("M",w+c,.5+M+c):t("m",g,0),g=0,y=!1),w+1<a&&n[p+1]||(l+=t("h",L),L=0)):g++}return l}(L,y,g.margin)+'"/>',T='<svg xmlns="http://www.w3.org/2000/svg" '+(g.width?'width="'+g.width+'" height="'+g.width+'" ':"")+'viewBox="0 0 '+p+" "+p+'" shape-rendering="crispEdges">'+w+M+"</svg>\n";return"function"==typeof l&&l(null,T),T}},1035:(N,i)=>{function s(r){if("number"==typeof r&&(r=r.toString()),"string"!=typeof r)throw new Error("Color should be defined as hex string");let o=r.slice().replace("#","").split("");if(o.length<3||5===o.length||o.length>8)throw new Error("Invalid hex color: "+r);(3===o.length||4===o.length)&&(o=Array.prototype.concat.apply([],o.map(function(e){return[e,e]}))),6===o.length&&o.push("F","F");const t=parseInt(o.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:255&t,hex:"#"+o.slice(0,6).join("")}}i.getOptions=function(o){o||(o={}),o.color||(o.color={});const e=o.width&&o.width>=21?o.width:void 0;return{width:e,scale:e?4:o.scale||4,margin:null==o.margin||o.margin<0?4:o.margin,color:{dark:s(o.color.dark||"#000000ff"),light:s(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},i.getScale=function(o,t){return t.width&&t.width>=o+2*t.margin?t.width/(o+2*t.margin):t.scale},i.getImageWidth=function(o,t){const e=i.getScale(o,t);return Math.floor((o+2*t.margin)*e)},i.qrToImageData=function(o,t,e){const n=t.modules.size,a=t.modules.data,c=i.getScale(n,e),l=Math.floor((n+2*e.margin)*c),g=e.margin*c,y=[e.color.light,e.color.dark];for(let L=0;L<l;L++)for(let p=0;p<l;p++){let w=4*(L*l+p),M=e.color.light;L>=g&&p>=g&&L<l-g&&p<l-g&&(M=y[a[Math.floor((L-g)/c)*n+Math.floor((p-g)/c)]?1:0]),o[w++]=M.r,o[w++]=M.g,o[w++]=M.b,o[w]=M.a}}},6027:(N,i,s)=>{"use strict";s.r(i),s.d(i,{MyqrModule:()=>B});var r=s(6019),o=s(4708),t=s(3556),e=s(4762),n=s(3823);const a=["qrcElement"];var c=(()=>{return(u=c||(c={})).URL="url",u.IMG="img",u.CANVAS="canvas",c;var u})(),l=(()=>{return(u=l||(l={})).LOW="L",u.MEDIUM="M",u.QUARTILE="Q",u.HIGH="H",l;var u})();const g={elementType:c.URL,cssClass:"qrcode",value:"https://www.techiediaries.com",version:"",errorCorrectionLevel:l.MEDIUM,margin:4,scale:4,width:10,colorDark:"#000",colorLight:"#FFF"};let y=(()=>{let u=class{constructor(f){this.renderer=f,this.elementType=g.elementType,this.cssClass=g.cssClass,this.value=g.value,this.version=g.version,this.errorCorrectionLevel=g.errorCorrectionLevel,this.margin=g.margin,this.scale=g.scale,this.width=g.width,this.colorDark=g.colorDark,this.colorLight=g.colorLight}ngOnChanges(){this.createQRCode()}createQRCode(){if(!this.value)return;let f;this.elementType===c.CANVAS?(f=this.renderer.createElement("canvas"),this.toCanvas(f).then(()=>{this.renderElement(f)}).catch(h=>{this.removeElementChildren(),console.error(h)})):(f=this.renderer.createElement("img"),this.toDataURL().then(h=>{f.setAttribute("src",h),this.alt&&f.setAttribute("alt",this.alt),this.renderElement(f)}).catch(h=>{this.removeElementChildren(),console.error(h)}))}toDataURL(){return n.toDataURL(this.value,{version:this.version,errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,width:this.width,color:{dark:this.colorDark,light:this.colorLight}})}toCanvas(f){return n.toCanvas(f,this.value,{version:this.version,errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,width:this.width,color:{dark:this.colorDark,light:this.colorLight}})}renderElement(f){this.removeElementChildren(),this.renderer.appendChild(this.qrcElement.nativeElement,f)}removeElementChildren(){for(const f of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,f)}};return u.\u0275fac=function(f){return new(f||u)(t.Y36(t.Qsj))},u.\u0275cmp=t.Xpm({type:u,selectors:[["ngx-qrcode"]],viewQuery:function(f,h){if(1&f&&t.Gf(a,5),2&f){let m;t.iGM(m=t.CRH())&&(h.qrcElement=m.first)}},inputs:{elementType:"elementType",cssClass:"cssClass",value:"value",version:"version",errorCorrectionLevel:"errorCorrectionLevel",margin:"margin",scale:"scale",width:"width",colorDark:"colorDark",colorLight:"colorLight",alt:"alt"},features:[t.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(f,h){1&f&&t._UZ(0,"div",null,0),2&f&&t.Tol(h.cssClass)},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,t.IIB)()],u.prototype,"elementType",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"cssClass",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"alt",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"value",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"version",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"errorCorrectionLevel",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"margin",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"scale",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"width",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"colorDark",void 0),(0,e.gn)([(0,t.IIB)()],u.prototype,"colorLight",void 0),(0,e.gn)([(0,t.i9L)("qrcElement")],u.prototype,"qrcElement",void 0),u})(),L=(()=>{let u=class{};return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({}),u})();var p=s(3755),w=s(5894),M=s(3213);function R(u,d){if(1&u&&(t.ynx(0),t.TgZ(1,"h2",3),t._uU(2,"My QR Code"),t.qZA(),t.TgZ(3,"div",4),t._UZ(4,"ngx-qrcode",5),t.TgZ(5,"p",6),t._uU(6,"Scan to Pay"),t.qZA(),t.qZA(),t.BQk()),2&u){const f=t.oxw();t.xp6(4),t.Q6J("elementType",f.elementType)("value",f.value)}}function v(u,d){if(1&u){const f=t.EpF();t.ynx(0),t.TgZ(1,"ng-lottie",7),t.NdJ("animationCreated",function(m){return t.CHM(f),t.oxw().animationCreated(m)}),t.qZA(),t.TgZ(2,"div",8),t._uU(3),t.qZA(),t.TgZ(4,"div",9),t.TgZ(5,"button",10),t.NdJ("click",function(){return t.CHM(f),t.oxw().hideErrorMessage()}),t._uU(6," Back "),t.qZA(),t.qZA(),t.BQk()}if(2&u){const f=t.oxw();t.xp6(1),t.Q6J("options",f.errorOptions),t.xp6(2),t.Oqu(f.errorMessage)}}function T(u,d){if(1&u){const f=t.EpF();t.ynx(0),t.TgZ(1,"div",9),t.TgZ(2,"ng-lottie",11),t.NdJ("animationCreated",function(m){return t.CHM(f),t.oxw().animationCreated(m)}),t.qZA(),t.TgZ(3,"span",12),t._uU(4),t.qZA(),t.qZA(),t.BQk()}if(2&u){const f=t.oxw();t.xp6(2),t.Q6J("options",f.options),t.xp6(2),t.Oqu(f.loadingMessage)}}const I=[{path:"",component:(()=>{class u{constructor(f,h,m){this.auth=f,this.router=h,this.indc=m,this.errorMessage=null,this.options={path:"/assets/animations/cloud_loading.json"},this.errorOptions={path:"/assets/animations/error.json"},this.showLoader=!1,this.showNormal=!0,this.showError=!1,this.mySkyVault=null,this.balanceBreakup=null,this.opinions=0,this.loadingMessage="",this.title="QRCode",this.name="QRCode"+t.q4F.major,this.elementType=c.URL,this.correctionLevel=l.HIGH,this.value="https://skyvault.cc/transfer",localStorage.getItem("skyvault")&&(this.mySkyVault=localStorage.getItem("skyvault")),this.value=window.location.origin+"/transfer/"+this.mySkyVault}ngOnInit(){localStorage.setItem("job","0"),this.auth.getLoggedIn()||(this.auth.checkLoginStatus(),this.router.navigate(["/welcome"])),this.watch=this.auth.watch().subscribe(f=>{f||this.router.navigate(["/welcome"])}),this.watchIndicator=this.indc.currentRStatus.subscribe(f=>{0==Object.keys(f).length?(this.showLoading(!0),this.loadingMessage="Contacting RAIDA..."):this.showLoading(!1)}),localStorage.getItem("skyvault")&&(this.mySkyVault=localStorage.getItem("skyvault"))}ngOnDestroy(){this.watch&&this.watch.unsubscribe(),this.watchIndicator&&this.watchIndicator.unsubscribe()}animationCreated(f){}showLoading(f){this.loadingMessage="",f?(this.showNormal=!1,this.showLoader=!0,this.showError=!1):(this.showNormal=!0,this.showLoader=!1,this.showError=!1)}showErrorMessage(f){this.errorMessage=f,this.showNormal=!1,this.showError=!0,this.showLoader=!1}hideErrorMessage(){this.errorMessage="",this.showNormal=!0,this.showError=!1,this.showLoader=!1}}return u.\u0275fac=function(f){return new(f||u)(t.Y36(p.r),t.Y36(o.F0),t.Y36(w.Q))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-myqr"]],decls:5,vars:3,consts:[[1,"pageWrapper"],[1,"sectionWrapper"],[4,"ngIf"],[1,"pageHeading"],[1,"cardOne","qrWrap"],["cssClass","aclass","errorCorrectionLevel","L",3,"elementType","value"],[1,"qrScanText"],["height","100px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff","margin-bottom","10px"],[1,"text-center"],[1,"buttonCustome",3,"click"],["height","150px",3,"options","animationCreated"],[1,"errorMsg",2,"color","#ffffff"]],template:function(f,h){1&f&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,R,7,2,"ng-container",2),t.YNc(3,v,7,2,"ng-container",2),t.YNc(4,T,5,2,"ng-container",2),t.qZA(),t.qZA()),2&f&&(t.xp6(2),t.Q6J("ngIf",h.showNormal),t.xp6(1),t.Q6J("ngIf",h.showError),t.xp6(1),t.Q6J("ngIf",h.showLoader))},directives:[r.O5,y,M.e$],styles:[".pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .cardOne[_ngcontent-%COMP%]{width:100%;height:300px;background-color:#272a4b;border-radius:30px;padding:15px;display:flex;justify-content:center;flex-direction:column;text-align:center}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .cardOne[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:70px;margin:0 auto 15px}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .cardOne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;color:#fff;font-weight:600}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .cardOne[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:55px;color:#fff;font-weight:600}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .cardOne[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .cardOne[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#ffffff21;border:solid 1px #6B6E8D;font-size:16px;font-weight:600;text-transform:uppercase;color:#ffffff80;display:flex;width:100px;height:50px;border-radius:30px;justify-content:center;align-items:center;margin:0 auto;transition:all .2s}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .cardOne[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ffffff3b}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .cardOne[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:initial;margin:0 6px 0 0}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .qrScanText[_ngcontent-%COMP%]{font-size:20px;color:#fff;font-weight:600;margin-top:10px}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .qrWrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:150px}.pageWrapper[_ngcontent-%COMP%]   .sectionWrapper[_ngcontent-%COMP%]   .qrWrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}"]}),u})()}];let E=(()=>{class u{}return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[o.Bz.forChild(I)],o.Bz]}),u})();var b=s(7537),O=s(8329),C=s(745);let B=(()=>{class u{}return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[r.ez,E,b.u5,M.CT,O.uH,C.z8,L]]}),u})()}}]);