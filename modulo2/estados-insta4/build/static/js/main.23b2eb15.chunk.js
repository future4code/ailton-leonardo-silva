(this.webpackJsonpinsta4=this.webpackJsonpinsta4||[]).push([[0],{10:function(t,n,e){t.exports=e.p+"static/media/favorite-white.042aa417.svg"},11:function(t,n,e){t.exports=e.p+"static/media/favorite.4c67d875.svg"},18:function(t,n,e){t.exports=e.p+"static/media/comment_icon.de299b47.svg"},19:function(t,n,e){t.exports=e(27)},24:function(t,n,e){},27:function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),r=e(14),i=e.n(r),c=(e(24),e(3)),u=e(4),s=e(6),l=e(5),m=e(7),p=e(1),d=e(2);function f(){var t=Object(p.a)(["\n\tmargin-right: 5px;\n"]);return f=function(){return t},t}function h(){var t=Object(p.a)(["\n\tdisplay: flex;\n"]);return h=function(){return t},t}var v=d.a.div(h()),C=d.a.img(f());function g(t){return o.a.createElement(v,null,o.a.createElement(C,{alt:"Icone",src:t.icone,onClick:t.onClickIcone}),o.a.createElement("p",null,t.valorContador))}var b=e(10),j=e.n(b),E=e(11),O=e.n(E),x=e(18),y=e.n(x);function k(){var t=Object(p.a)(["\n    width: 100%;\n    margin-right: 5px;\n"]);return k=function(){return t},t}function w(){var t=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 5px;\n"]);return w=function(){return t},t}var U=d.a.div(w()),I=d.a.input(k()),S=function(t){function n(){var t,e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=Object(s.a)(this,(t=Object(l.a)(n)).call.apply(t,[this].concat(o)))).state={},e}return Object(m.a)(n,t),Object(u.a)(n,[{key:"onChangeComentario",value:function(){}},{key:"render",value:function(){return o.a.createElement(U,null,o.a.createElement(I,{placeholder:"Coment\xe1rio",value:"",onChange:this.onChangeComentario}),o.a.createElement("button",{onClick:this.props.aoEnviar},"Enviar"))}}]),n}(a.Component);function P(){var t=Object(p.a)(["\n  width: 100%;\n"]);return P=function(){return t},t}function A(){var t=Object(p.a)(["\n  height: 30px;\n  width: 30px;\n  margin-right: 10px;\n  border-radius: 50%;\n"]);return A=function(){return t},t}function B(){var t=Object(p.a)(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  justify-content: space-between;\n"]);return B=function(){return t},t}function J(){var t=Object(p.a)(["\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding-left: 10px;\n"]);return J=function(){return t},t}function W(){var t=Object(p.a)(["\n  border: 1px solid gray;\n  width: 300px;\n  margin-bottom: 10px;\n"]);return W=function(){return t},t}var $=d.a.div(W()),_=d.a.div(J()),q=d.a.div(B()),z=d.a.img(A()),D=d.a.img(P()),F=function(t){function n(){var t,e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=Object(s.a)(this,(t=Object(l.a)(n)).call.apply(t,[this].concat(o)))).state={curtido:!1,numeroCurtidas:0,comentando:!1,numeroComentarios:0},e.onClickCurtida=function(){console.log("Curtiu!"),e.setState({curtido:!e.state.curtido}),e.state.numeroCurtidas?e.setState({numeroCurtidas:e.state.numeroCurtidas-1}):e.setState({numeroCurtidas:e.state.numeroCurtidas+1})},e.onClickComentario=function(){console.log(e.state),e.setState({comentando:!e.state.comentando})},e.aoEnviarComentario=function(){e.setState({comentando:!1,numeroComentarios:e.state.numeroComentarios+1})},e}return Object(m.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t,n;return t=this.state.curtido?O.a:j.a,t=this.state.curtido?O.a:j.a,this.state.comentando&&(n=o.a.createElement(S,{aoEnviar:this.aoEnviarComentario})),o.a.createElement($,null,o.a.createElement(_,null,o.a.createElement(z,{src:this.props.fotoUsuario,alt:"Imagem do usuario"}),o.a.createElement("p",null,this.props.nomeUsuario)),o.a.createElement(D,{src:this.props.fotoPost,alt:"Imagem do post"}),o.a.createElement(q,null,o.a.createElement(g,{icone:t,onClickIcone:this.onClickCurtida,valorContador:this.state.numeroCurtidas}),o.a.createElement(g,{icone:y.a,onClickIcone:this.onClickComentario,valorContador:this.state.numeroComentarios})),n)}}]),n}(o.a.Component);function G(){var t=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n"]);return G=function(){return t},t}var H=d.a.div(G()),K=function(t){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(m.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(H,null,o.a.createElement(F,{nomeUsuario:"paulinha",fotoUsuario:"https://picsum.photos/50/50",fotoPost:"https://picsum.photos/200/150"}),o.a.createElement(F,{nomeUsuario:"leandro",fotoUsuario:"https://picsum.photos/50/51",fotoPost:"https://picsum.photos/200/151"}),o.a.createElement(F,{nomeUsuario:"fernanda",fotoUsuario:"https://picsum.photos/50/52",fotoPost:"https://picsum.photos/200/152"}))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.23b2eb15.chunk.js.map