(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(23)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(4),o=t.n(c),r=(t(15),t(3)),i=t(2),m=(t(16),t(17),t(6));var s=function(){return l.a.createElement("header",{className:"Header"},l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar-left"},l.a.createElement(r.b,{to:"/"},"HOME"),l.a.createElement(r.b,{to:"/portfolio"},"PORTFOLIO"),l.a.createElement(r.b,{to:"/o_mnie"},"O\xa0MNIE"),l.a.createElement(r.b,{to:"/kontakt"},"KONTAKT"),l.a.createElement(r.b,{to:"/cennik"},"CENNIK")),l.a.createElement("div",{className:"navbar-center"},l.a.createElement("h1",null,"Aleksander Kowalczuk")),l.a.createElement("div",{className:"navbar-right"},l.a.createElement("a",{href:"https://www.instagram.com/emkacz_photo","aria-label":"Instagram"},l.a.createElement(m.a,{size:64})))))};var d=function(){return l.a.createElement("div",{className:"Home"},l.a.createElement(s,null),l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"Siema, Jestem Emkacz!"),l.a.createElement("p",null,'Naci\u015bnij przycisk "Portfolio", aby zobaczy\u0107 moj\u0105 prac\u0119, lub przycisk "O Mnie", aby dowiedzie\u0107 si\u0119 wi\u0119cej'),l.a.createElement(r.b,{to:"/portfolio",className:"portfolio-button"},"PORTFOLIO"),l.a.createElement(r.b,{to:"/O_mnie",className:"portfolio-button"},"O Mnie")))};t(18);var p=function(){return l.a.createElement("div",{className:"Kontakt"},l.a.createElement(s,null),l.a.createElement("div",{className:"Kontakt-content"},l.a.createElement("h2",null,"Skontaktuj si\u0119 ze mn\u0105 za pomoc\u0105 formularza poni\u017cej"),l.a.createElement("p",null,"Lub naci\u015bnij przycisk poni\u017cej aby zobaczy\u0107 cennik"),l.a.createElement(r.b,{to:"/cennik",className:"nigga-button"},"Cennik"),l.a.createElement("form",{className:"contact-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Imi\u0119:"),l.a.createElement("input",{type:"text",id:"name",name:"name",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email:"),l.a.createElement("input",{type:"email",id:"email",name:"email",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Wiadomo\u015b\u0107:"),l.a.createElement("textarea",{id:"message",name:"message",rows:"5",required:!0})),l.a.createElement("button",{type:"submit"},"Wy\u015blij"))))};t(19);const u=[{src:"https://code.emkacz.pl/websitephotos/bmw4.jpg",alt:"BMW X3M Competition",description:"BMW X3M Competition 2024",brand:"BMW",model:"X3M",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/bmw2.jpg",alt:"BMW X3M Competition",description:"BMW X3M Competition 2024",brand:"BMW",model:"X3M",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/bmw3.jpg",alt:"BMW X3M Competition",description:"BMW X3M Competition 2024",brand:"BMW",model:"X3M",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/bmw7.jpg",alt:"BMW X3M Competition",description:"BMW X3M Competition 2024",brand:"BMW",model:"X3M",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/bmw5.jpg",alt:"BMW X3M Competition",description:"BMW X3M Competition 2024",brand:"BMW",model:"X3M",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/bmw1.jpg",alt:"BMW X3M Competition",description:"BMW X3M Competition 2024",brand:"BMW",model:"X3M",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/bmw6.jpg",alt:"BMW M3 Competition",description:"BMW M3 Competition 2024",brand:"BMW",model:"M3",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/A45s.jpg",alt:"Mercedes A45S",description:"Mercedes A45S 2023",brand:"Mercedes",model:"A45S",year:"2023"},{src:"https://code.emkacz.pl/websitephotos/AudiTT.jpg",alt:"Audi TT",description:"Audi TT 2024",brand:"Audi",model:"TT",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/Huracan.jpg",alt:"Lamborghini Huracan",description:"Lamborghini Huracan 2024",brand:"Lamborghini",model:"Huracan",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/Huracan2.jpg",alt:"Lamborghini Huracan",description:"Lamborghini Huracan 2024",brand:"Lamborghini",model:"Huracan",year:"2024"},{src:"https://code.emkacz.pl/websitephotos/Mustang.jpg",alt:"Ford Mustang",description:"Ford Mustang 2023",brand:"Ford",model:"Mustang",year:"2023"},{src:"https://code.emkacz.pl/websitephotos/Urus.jpg",alt:"Lamborghini Urus",description:"Lamborghini Urus 2023",brand:"Lamborghini",model:"Urus",year:"2023"}];var E=function(){const[e,a]=Object(n.useState)(null),[t,c]=Object(n.useState)(""),o=u.filter(e=>e.brand.toLowerCase().includes(t)||e.model.toLowerCase().includes(t)||e.year.includes(t));return l.a.createElement("div",{className:"Portfolio"},l.a.createElement(s,null),l.a.createElement("div",{className:"portfolio-content"},l.a.createElement("h2",null,"Moje Portfolio"),l.a.createElement("input",{type:"text",placeholder:"Szukaj po marce, modelu, roku...",value:t,onChange:e=>{c(e.target.value.toLowerCase())},className:"search-bar"}),l.a.createElement("div",{className:"photo-grid"},o.map(e=>l.a.createElement("div",{className:"photo",key:e.src,onClick:()=>(e=>{a(e)})(e.src),style:{backgroundImage:"url(".concat(e.src,")")}},l.a.createElement("div",{className:"overlay"},e.description))))),e&&l.a.createElement("div",{className:"modal",onClick:()=>{a(null)}},l.a.createElement("span",{className:"close"},"\xd7"),l.a.createElement("img",{className:"modal-content",src:e,alt:"Enlarged"})))};t(20);var b=function(){return l.a.createElement("div",{className:"O_mnie"},l.a.createElement(s,null),l.a.createElement("div",{className:"o-mnie-content"},l.a.createElement("h2",null,"O mnie"),l.a.createElement("p",null,"Witaj! Nazywam si\u0119 Aleksander Kowalczuk. Jestem pasjonatem fotografii i grafiki komputerowej. Moje prace mo\u017cesz zobaczy\u0107 na tej stronie. Zapraszam do kontaktu!")),l.a.createElement(r.b,{to:"/kontakt",className:"nigga-button"},"KONTAKT"))};t(21);const h=[{name:"Basic",price:100,photos:5,editing:"Podstawowa edycja",delivery:14},{name:"Standard",price:200,photos:10,editing:"Zaawansowana edycja",delivery:7},{name:"Premium",price:300,photos:20,editing:"Profesjonalna edycja",delivery:3}];var v=function(){const[e,a]=Object(n.useState)(5),[t,c]=Object(n.useState)("basic"),[o,r]=Object(n.useState)(3),[m,d]=Object(n.useState)(100),p=Object(i.o)();Object(n.useEffect)(()=>{u()},[e,t,o]);const u=()=>{if(e<1)return void d(0);let a=0;"basic"===t?a+=20*e:"advanced"===t?a+=30*e:"professional"===t&&(a+=40*e),14===o?a+=0:7===o?a+=50:3===o&&(a+=100),d(a)},E=a=>{p("/checkout",{state:{customPlan:a||{photos:e,editing:"basic"===t?"Podstawowa edycja":"advanced"===t?"Zaawansowana edycja":"Profesjonalna edycja",delivery:o,price:m}}})};return l.a.createElement("div",{className:"Cennik"},l.a.createElement(s,null),l.a.createElement("div",{className:"cennik-content"},l.a.createElement("h2",null,"Cennik"),l.a.createElement("div",{className:"cennik-plans"},h.map(e=>l.a.createElement("div",{className:"plan",key:e.name},l.a.createElement("h3",null,e.name),l.a.createElement("p",{className:"price"},e.price," PLN"),l.a.createElement("ul",null,l.a.createElement("li",null,e.photos," zdj\u0119\u0107"),l.a.createElement("li",null,e.editing),l.a.createElement("li",null,"Dostawa w ",e.delivery," dni")),l.a.createElement("button",{onClick:()=>E(e)},"Wybierz Plan")))),l.a.createElement("div",{className:"custom-plan"},l.a.createElement("h3",null,"Plan Dostosowany"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Liczba zdj\u0119\u0107"),l.a.createElement("input",{type:"number",value:e,min:"1",onChange:e=>a(parseInt(e.target.value))})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Poziom edycji"),l.a.createElement("select",{value:t,onChange:e=>c(e.target.value)},l.a.createElement("option",{value:"basic"},"Podstawowa edycja"),l.a.createElement("option",{value:"advanced"},"Zaawansowana edycja"),l.a.createElement("option",{value:"professional"},"Profesjonalna edycja"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Czas realizacji zam\xf3wienia"),l.a.createElement("select",{value:o,onChange:e=>r(parseInt(e.target.value))},l.a.createElement("option",{value:14},"do 14 dni"),l.a.createElement("option",{value:7},"do 7 dni"),l.a.createElement("option",{value:3},"do 3 dni"))),l.a.createElement("h4",null,"Przybli\u017cona cena: ",m," PLN"),l.a.createElement("button",{onClick:()=>E(null)},"Kontynuuj z Planem Dostosowanym"))))};t(22);var g=function(){const e=Object(i.m)(),{customPlan:a}=e.state||{customPlan:{photos:0,editing:"",delivery:0,price:0}};return l.a.createElement("div",{className:"Checkout"},l.a.createElement(s,null),l.a.createElement("div",{className:"checkout-content"},l.a.createElement("h2",null,"Podsumowanie"),l.a.createElement("p",null,"Liczba Zdj\u0119\u0107: ",a.photos),l.a.createElement("p",null,"Poziom Edycji: ",a.editing),l.a.createElement("p",null,"Czas Realizacji: ",a.delivery," dni"),l.a.createElement("p",null,"Cena Ko\u0144cowa: ",a.price," PLN")))};var k=function(){return l.a.createElement(r.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(d,null)}),l.a.createElement(i.a,{path:"/kontakt",element:l.a.createElement(p,null)}),l.a.createElement(i.a,{path:"/portfolio",element:l.a.createElement(E,null)}),l.a.createElement(i.a,{path:"/o_mnie",element:l.a.createElement(b,null)}),l.a.createElement(i.a,{path:"/cennik",element:l.a.createElement(v,null)}),l.a.createElement(i.a,{path:"/checkout",element:l.a.createElement(g,null)})))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.628bbd73.chunk.js.map