(this.webpackJsonpmydao=this.webpackJsonpmydao||[]).push([[1],{161:function(e,t,n){},167:function(e,t){},215:function(e,t){},241:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(139),o=n.n(r),a=(n(161),n(84)),i=n(59),l=n(4),d=n.n(l),u=n(140),h=n(98),b=n(26),j=n(14),p=new u.a("rinkeby"),f=p.getBundleDropModule("0xF5e792349b481E8D79F0a6f06aB4540c0ac4bD6F"),O=p.getTokenModule("0xc56693AC133d4f5890A90dB3Aa64EaD2C5296cDd"),m=p.getVoteModule("0x031a8FCCFd0b18f00cc069146C43285F6527D64b"),x=function(){var e=Object(h.b)(),t=e.connectWallet,n=e.address,s=(e.error,e.provider);console.log("\ud83d\udc4b Address:",n);var r=Object(c.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],x=Object(c.useState)(!1),g=Object(i.a)(x,2),v=g[0],k=g[1],y=Object(c.useState)({}),A=Object(i.a)(y,2),w=A[0],M=A[1],D=Object(c.useState)([]),I=Object(i.a)(D,2),E=I[0],F=I[1],N=Object(c.useState)([]),S=Object(i.a)(N,2),C=S[0],T=S[1],P=Object(c.useState)(!1),B=Object(i.a)(P,2),V=B[0],H=B[1],J=Object(c.useState)(!1),R=Object(i.a)(J,2),U=R[0],W=R[1],Y=s?s.getSigner():void 0;Object(c.useEffect)((function(){p.setProviderOrSigner(Y)}),[Y]),Object(c.useEffect)((function(){if(n)return f.balanceOf(n,"0").then((function(e){e.gt(0)?(u(!0),console.log("\ud83c\udf1f this user has a membership NFT!")):(u(!1),console.log("\ud83d\ude2d this user doesn't have a membership NFT."))})).catch((function(e){u(!1),console.error("failed to nft balance",e)}))}),[n]),Object(c.useEffect)((function(){l&&f.getAllClaimerAddresses("0").then((function(e){console.log("\ud83d\ude80 Members addresses",e),F(e)})).catch((function(e){console.error("failed to get member list",e)}))}),[l]),Object(c.useEffect)((function(){l&&O.getAllHolderBalances().then((function(e){console.log("\ud83d\udc5c Amounts",e),M(e)})).catch((function(e){console.error("failed to get token amounts",e)}))}),[l]),Object(c.useEffect)((function(){l&&m.getAll().then((function(e){T(e),console.log("\ud83c\udf08 Proposals:",e)})).catch((function(e){console.error("failed to get proposals",e)}))}),[l]),Object(c.useEffect)((function(){l&&C.length&&m.hasVoted(C[0].proposalId,n).then((function(e){W(e),console.log("\ud83e\udd75 User has already voted")})).catch((function(e){console.error("failed to check if wallet has voted",e)}))}),[l,C,n]);var z=Object(c.useMemo)((function(){return E.map((function(e){return{address:e,tokenAmount:b.a.utils.formatUnits(w[e]||0,18)}}))}),[E,w]);if(!n)return Object(j.jsxs)("div",{className:"content-container",children:[Object(j.jsx)("h1",{children:"Welcome to DApps and DAOs!"}),Object(j.jsxs)("div",{className:"instructions",children:[Object(j.jsx)("h2",{style:{textAlign:"center"},children:"An example DAO to learn about DApps and DAOs!"}),Object(j.jsxs)("p",{style:{textAlign:"center"},children:[" To use this app all you need to do is get a wallet with a browser extension like ",Object(j.jsx)("a",{className:"keep-white",href:"https://metamask.io/download",children:"MetaMask"})]}),Object(j.jsx)("a",{className:"instructions-here keep-white",href:"https://gist.github.com/tschubotz/8047d13a2d2ac8b2a9faa3a74970c7ef",children:"Follow the Instructions here!"})]}),Object(j.jsx)("button",{onClick:function(){return t("injected")},className:"btn-hero",children:"Connect your wallet"})]});if(l)return Object(j.jsxs)("div",{className:"member-page",children:[Object(j.jsx)("h1",{children:"DApps and DAOs Member Page"}),Object(j.jsx)("p",{children:"Congratulations on being a member!"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Member List"}),Object(j.jsxs)("table",{className:"card",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Address"}),Object(j.jsx)("th",{children:"Token Amount"})]})}),Object(j.jsx)("tbody",{children:z.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:(t=e.address,t.substring(0,6)+"..."+t.substring(t.length-4))}),Object(j.jsx)("td",{children:e.tokenAmount})]},e.address);var t}))})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Active Proposals"}),Object(j.jsxs)("form",{onSubmit:function(){var e=Object(a.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),H(!0),c=C.map((function(e){var t={proposalId:e.proposalId,vote:2};return e.votes.forEach((function(n){document.getElementById(e.proposalId+"-"+n.type).checked&&(t.vote=n.type)})),t})),e.prev=4,e.next=7,O.getDelegationOf(n);case 7:if(e.sent!==b.a.constants.AddressZero){e.next=11;break}return e.next=11,O.delegateTo(n);case 11:return e.prev=11,e.next=14,Promise.all(c.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(t.proposalId);case 2:if(1!==e.sent.state){e.next=5;break}return e.abrupt("return",m.vote(t.proposalId,t.vote));case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 14:return e.prev=14,e.next=17,Promise.all(c.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(t.proposalId);case 2:if(4!==e.sent.state){e.next=5;break}return e.abrupt("return",m.execute(t.proposalId));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 17:W(!0),console.log("successfully voted"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),console.error("failed to execute votes",e.t0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(11),console.error("failed to vote",e.t1);case 29:e.next=34;break;case 31:e.prev=31,e.t2=e.catch(4),console.error("failed to delegate tokens");case 34:return e.prev=34,H(!1),e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[4,31,34,37],[11,26],[14,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[C.map((function(e,t){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("h5",{children:e.description}),Object(j.jsx)("div",{children:e.votes.map((function(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"radio",id:e.proposalId+"-"+t.type,name:e.proposalId,value:t.type,defaultChecked:2===t.type}),Object(j.jsx)("label",{htmlFor:e.proposalId+"-"+t.type,children:t.label})]},t.type)}))})]},e.proposalId)})),Object(j.jsx)("button",{disabled:V||U,type:"submit",children:V?"Voting...":U?"You Already Voted":"Submit Votes"}),Object(j.jsx)("small",{children:"This will trigger multiple transactions that you will need to sign."})]})]})]})]});return Object(j.jsxs)("div",{className:"mint-nft",children:[Object(j.jsx)("h1",{children:"Mint Your Free Membership NFT"}),Object(j.jsx)("h3",{children:" This will give you access to the app as a member of the DAO"}),Object(j.jsx)("p",{children:" Make sure MetaMask is on the Rinkeby network so you don't spend real money! "}),Object(j.jsxs)("p",{children:[' Then add "fake" ETH here: ',Object(j.jsx)("a",{className:"keep-white",href:"https://faucets.chain.link/rinkeby",children:"https://faucets.chain.link/rinkeby"}),", it's free! And then claim your NFT! "]}),Object(j.jsx)("button",{disabled:v,onClick:function(){return k(!0),void f.claim("0",1).catch((function(e){console.error("failed to claim",e),k(!1)})).finally((function(){k(!1),u(!0),console.log("\ud83c\udf0a Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/".concat(f.address,"/0"))}))},children:v?"Minting...":"Mint your nft (FREE)"})]})};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h.a,{connectors:{injected:{}},supportedChainIds:[4],children:Object(j.jsx)(x,{})})}),document.getElementById("root"))}},[[241,2,3]]]);
//# sourceMappingURL=main.49d97997.chunk.js.map