(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(3),c=a.n(s),r=(a(16),a(9)),l=a(4),o=a(5),d=a(8),u=a(6),m=a(10),f=(a(18),function(e){return n.a.createElement("div",{role:"img","aria-label":"click item",className:"friendCard",style:{backgroundImage:'url("'.concat(e.image,'")')},onClick:function(){return e.handleClick(e.id)}})}),g=(a(20),function(e){return n.a.createElement("main",{className:"wrapper"},e.children)}),k=a(7),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={friends:k,score:0,topScore:0},a.shuffleDeck=function(e){return e.sort(function(e,t){return.5-Math.random()})},a.resetDeck=function(e){var t=e.map(function(e){return Object(r.a)({},e,{clicked:!1})});return a.shuffleDeck(t)},a.correctGuess=function(e){var t=a.state.score;t++;var i=Math.max(t,a.state.topScore);a.setState({friends:a.shuffleDeck(e),score:t,topScore:i})},a.wrongGuess=function(e){a.setState({friends:a.resetDeck(e),score:0})},a.gameCardClick=function(e){var t=!1,i=a.state.friends.map(function(a){return a.id===e&&(a.clicked||(a.clicked=!0,t=!0)),a});t?a.correctGuess(i):a.wrongGuess(i)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({friends:this.shuffleDeck(this.state.friends)})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(g,null,n.a.createElement("h1",null),this.state.friends.map(function(t){return n.a.createElement(f,{key:t.id,id:t.id,name:t.name,image:t.image,clicked:t.clicked,handleClick:e.gameCardClick})})))}}]),t}(n.a.Component),p=function(){return n.a.createElement(h,null)};c.a.render(n.a.createElement(p,null),document.getElementById("root"))},7:function(e){e.exports=[{id:1,image:"assets/images/BeachTown-Left.jpg",clicked:"false"},{id:1,image:"assets/images/BeachTown-Right.jpg",clicked:"false"},{id:1,image:"assets/images/BestInTheWest-Left.jpg",clicked:"false"},{id:1,image:"assets/images/BestInTheWest-Right.jpg",clicked:"false"},{id:1,image:"assets/images/FunnyFarmFamily-Left.jpg",clicked:"false"},{id:1,image:"assets/images/FunnyFarmFamily-Right.jpg",clicked:"false"},{id:1,image:"assets/images/Singing Children-Left.jpg",clicked:"false"},{id:1,image:"assets/images/Singing Children-Right.jpg",clicked:"false"},{id:1,image:"assets/images/TrickOrTreat-Left.jpg",clicked:"false"},{id:1,image:"assets/images/TrickOrTreat-Right.jpg",clicked:"false"},{id:1,image:"assets/images/UniqueHomes-Left.jpg",clicked:"false"},{id:1,image:"assets/images/UniqueHomes-Right.jpg",clicked:"false"}]}},[[11,2,1]]]);
//# sourceMappingURL=main.dbd2b15e.chunk.js.map