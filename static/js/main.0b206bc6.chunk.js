(this["webpackJsonpdigikom-app"]=this["webpackJsonpdigikom-app"]||[]).push([[0],{280:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),s=n.n(r),c=(n(34),n(80)),o=n.n(c),l=n(125),d=n(37),h=n(58),j=n(67),u=n(66),p=n(126),b=n.n(p),v=n(341),f=n(326),m=n(329),O=n(134),g=n(331),x=n(327),k=n(330),S=n(328),C=n(332),y=n(336),I=n(334),N=n(335),w=n(333),z=n(59),D=n.n(z),A=n(342),P=n(323),T=n(324),B=n(129),L=n.n(B),_=n(3);function H(e){return Object(_.jsx)("div",{className:"Akkordeon",children:Object(_.jsxs)(A.a,{children:[Object(_.jsx)(P.a,{expandIcon:Object(_.jsx)(L.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(_.jsx)("b",{children:e.titel})}),Object(_.jsx)(T.a,{children:Object(_.jsx)(D.a,{children:e.inhalt})})]})})}var K=n(325),F=function e(t,n,a,i,r){Object(d.a)(this,e),this.defaultProps={title:Object(_.jsx)(K.a,{color:"secondary"}),img:"/placeholder.jpg",descr:Object(_.jsx)(K.a,{color:"secondary"}),acordeones:[{Titel:"Loading...",Inhalt:"Loading..."}],refs:"Referenzen und Anregungen"},this.title=t||this.defaultProps.title,this.img=n||this.defaultProps.img,this.descr=a||this.defaultProps.descr,this.acordeones=i||this.defaultProps.acordeones,this.refs=r||this.defaultProps.refs},R=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this)).defaultProps={thema:new F,active:!1},a.state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},e.thema?a.thema=e.thema:a.thema=a.defaultProps.thema,e.active?a.active=e.active:a.active=a.defaultProps.active,console.log("New Streifen:"),console.log("ACTIVE?"+e.active),a}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return this.props.active?Object(_.jsx)("div",{className:"Streifen",children:Object(_.jsxs)(f.a,{className:"Streifenkarte",variant:"elevation",raised:"true",children:[Object(_.jsx)("div",{className:"Karteninhalt",children:Object(_.jsxs)(x.a,{children:[Object(_.jsx)(S.a,{component:"img",image:"/digikom-app"+this.thema.img,title:"Titelbild"}),Object(_.jsxs)(m.a,{children:[Object(_.jsx)(O.a,{variant:"h5",gutterBottom:!0,component:"center",children:this.props.thema.title}),Object(_.jsx)(O.a,{variant:"body2",children:Object(_.jsx)(D.a,{children:this.props.thema.descr})}),Object(_.jsx)("div",{children:this.props.thema.acordeones.map((function(e){return Object(_.jsx)(H,{titel:e.Titel,inhalt:e.Inhalt})}))})]})]})}),Object(_.jsxs)(k.a,{children:[Object(_.jsx)(v.a.div,{whileHover:{scale:1.1},children:Object(_.jsx)(g.a,{onClick:this.handleClickOpen,variant:"contained",color:"primary",children:"Mehr erfahren"})}),Object(_.jsxs)(C.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(_.jsx)(w.a,{id:"alert-dialog-title",children:"Anregungen und weiterf\xfchrende Links"}),Object(_.jsx)(I.a,{children:Object(_.jsx)(N.a,{id:"alert-dialog-description",children:this.props.thema.refs})}),Object(_.jsx)(y.a,{children:Object(_.jsx)(g.a,{onClick:this.handleClose,color:"primary",children:"Schlie\xdfen"})})]}),Object(_.jsx)(v.a.div,{whileHover:{scale:1.1},children:Object(_.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(t){return e.props.action("-",t)},children:" Vorheriger "})}),Object(_.jsx)(v.a.div,{whileHover:{scale:1.1},children:Object(_.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(t){return e.props.action("+",t)},children:" N\xe4chster "})})]})]})}):Object(_.jsx)("div",{className:"StreifenRueck",children:Object(_.jsx)(f.a,{className:"StreifenRueck",variant:"elevation",raised:"true",onClick:function(t){return e.props.navigation(e.props.id-1,t)},children:Object(_.jsx)("div",{className:"KarteninhaltCovered",children:Object(_.jsxs)(x.a,{children:[Object(_.jsx)(S.a,{}),Object(_.jsx)(m.a,{})]})})})})}}]),n}(i.a.Component),E=n(132),M=n(337),X=n(338),Y=n(281),J=n(343),V=n(339),U=n(340);function W(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),i=n[0],r=n[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)(M.a,{className:"AppBar",position:"static",children:Object(_.jsxs)(X.a,{children:[Object(_.jsx)(Y.a,{onClick:function(){r(!0)},color:"inherit",edge:"start","aria-label":"menu",children:Object(_.jsx)(V.a,{})}),Object(_.jsxs)(O.a,{variant:"h6",children:["Digikom-App ",e.version]})]})}),Object(_.jsxs)(J.a,{className:"drawer",anchor:"left",variant:"temporary",open:i,onClose:function(){r(!1)},children:[Object(_.jsx)(O.a,{variant:"h4",children:"Inhalt"}),Object(_.jsx)(U.a,{}),e.buttonNamen.map((function(t){return Object(_.jsxs)("div",{children:[Object(_.jsx)(g.a,{className:"DrawerButton",variant:"contained",color:"primary",onClick:function(n){e.action(t.ID,n),r(!1)},children:t.Titel}),Object(_.jsx)(U.a,{})]})})),Object(_.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(t){window.open(e.impressumlink)},children:"Kontakt"})]})]})}var q=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).impressum_link=a.props.impressum,a.serverAdress=a.props.server,a.globalOriginX=.5,a.globalOriginY=.5,a.rotStrCoeff=7,a.state={rotations_array:[0],aktiverStreifen:0,daten:[{id:0,rotID:0,tema:new F,rotation:0,z:1,activo:!0}]},a.UNSAFE_componentWillMount=Object(l.a)(o.a.mark((function e(){var t,n,i,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(a.serverAdress+"/streifens");case 3:for(t=e.sent,n=[],i=[],r=0;r<a.rotStrCoeff;r++)i.push(r*(360/a.rotStrCoeff)%360);for(console.log("L\xe4nge des Rotationsarrays: "+i.length),s=0;s<t.data.length;s+=1)n.push({id:t.data[s].id,rotID:s%i.length,tema:new F(t.data[s].Titel,null,t.data[s].Beschreibung,t.data[s].Acordeon,t.data[s].Refs),rotation:i[(t.data[s].id-1)%i.length],activo:t.data[s].id-1==0,z:t.data.length-t.data[s].id});console.log(n),n.sort((function(e,t){return e.id>t.id?1:-1})),console.log("Nach Sortierung"),console.log(n),a.setState({rotations_array:i,daten:n}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),a.setState({error:e.t0}),alert("Error:\n"+e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])}))),a.handleLinkClick=function(){window.open(a.props.impressum)},a}return Object(h.a)(n,[{key:"clickHandler",value:function(e,t){for(var n=this.state.daten[e].rotID,a=this.state.daten,i=this.rotStrCoeff-n,r=a.length-1-a[e].z,s=this.state.aktiverStreifen,c=0;c<a.length;c++)a[c].rotID=(a[c].rotID+i)%this.rotStrCoeff,a[c].rotation=this.state.rotations_array[a[c].rotID],a[c].z=(a[c].z+r)%a.length,a[c].z>a[s].z&&(s=c),a[c].activo=!1;for(var o=0,l=0;l<a.length;l++)a[l].z>a[o].z&&(o=l);a[s=o].activo=!0,this.setState({daten:a,aktiverStreifen:s})}},{key:"handleSwitchButton",value:function(e,t){var n=this.state.daten;e="+"==e?(this.state.aktiverStreifen+1)%n.length:(this.state.aktiverStreifen+(n.length-1))%n.length;for(var a=this.state.daten[e].rotID,i=this.rotStrCoeff-a,r=n.length-1-n[e].z,s=this.state.aktiverStreifen,c=0;c<n.length;c++)n[c].rotID=(n[c].rotID+i)%this.rotStrCoeff,n[c].rotation=this.state.rotations_array[n[c].rotID],n[c].z=(n[c].z+r)%n.length,n[c].z>n[s].z&&(s=c),n[c].activo=!1;for(var o=0,l=0;l<n.length;l++)n[l].z>n[o].z&&(o=l);n[s=o].activo=!0,this.setState({daten:n,aktiverStreifen:s})}},{key:"makeTitels",value:function(){for(var e=[],t=0;t<this.state.daten.length;t++)e.push({ID:t,Titel:this.state.daten[t].tema.title});return e}},{key:"render",value:function(){var e=this;return Object(_.jsxs)("div",{className:"Oberflaeche",children:[Object(_.jsx)(v.a.div,{animate:{zIndex:108},className:"Nav",children:Object(_.jsx)(W,{buttonNamen:this.makeTitels(),action:function(t,n){return e.clickHandler(t,n)},impressumlink:this.props.impressum,version:this.props.version})}),Object(_.jsx)(v.a.div,{className:"Kompass",children:this.state.daten.map((function(t){return Object(_.jsx)(v.a.div,{animate:{rotate:t.rotation,zIndex:t.z,originX:e.globalOriginX,originY:e.globalOriginY},className:t.activo?"Kompassstreifen_Active":"Kompassstreifen_Hidden",children:Object(_.jsx)(R,{id:t.id,thema:t.tema,active:t.activo,action:function(t,n){return e.handleSwitchButton(t,n)},navigation:function(t,n){return e.clickHandler(t,n)}})})}))}),Object(_.jsx)("footer",{children:Object(_.jsx)(v.a.div,{children:Object(_.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(t){return e.handleLinkClick()},children:"Kontakt"})})})]})}}]),n}(i.a.Component),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,344)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)("div",{children:Object(_.jsx)(q,{server:"https://digikom-backend.herokuapp.com",impressum:"https://omen.cs.uni-magdeburg.de/itiamsl/deutsch/home/index.html",version:"b0.9.1"})})}),document.getElementById("root")),G(console.log)},34:function(e,t,n){}},[[280,1,2]]]);
//# sourceMappingURL=main.0b206bc6.chunk.js.map