/* Vó Maria — interações: programação da semana e carrosséis. Sem bibliotecas externas. */
(function(){
  // Miniaturas usadas na programação do dia (versões pequenas, carregam rápido)
  var BASE='assets/img/fotos/';
  var IMG={prato:BASE+'prato-480.webp',feijoada:BASE+'feijoada-480.webp',pizza:BASE+'pizza-308.webp',chopp:BASE+'chopp-480.webp',musica:BASE+'musica-360.webp',kids:BASE+'kids-480.webp',buffet:BASE+'buffet-480.webp'};
  var NOMES=['domingo','segunda','terça','quarta','quinta','sexta','sábado'], CURTO=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  function prog(d){
    var it=[];
    if(d===0) it.push(['prato','Almoço especial de domingo','Buffet livre com costela no fogo, 11h às 15h','R$ 39,90']);
    else if(d===3||d===6) it.push(['feijoada','Feijoada no buffet livre','Com tudo que acompanha, 11h às 15h','R$ 34,90']);
    else it.push(['buffet','Almoço · buffet livre','Comida caseira à vontade, 11h às 15h','R$ 34,90']);
    if(d===4) it.push(['pizza','Rodízio de pizza','Vários sabores passando pela mesa','à noite']);
    if(d===0||d===6) it.push(['musica','Música ao vivo','Som ao vivo no fim de semana','fim de semana']);
    if(d===0) it.push(['kids','Espaço kids','Parquinho pra criançada','almoço']);
    it.push(['chopp','Chopp, pizzas e porções','Esfihas, porções e drinks da casa','à noite']);
    return it;
  }
  var hoje=new Date().getDay();
  try{ var w=new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',weekday:'short'}).format(new Date()); var m={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}; if(w in m) hoje=m[w]; }catch(e){}
  var box=document.querySelector('[data-dias]'), lista=document.querySelector('[data-lista]'), tit=document.querySelector('[data-dia]');
  function mostra(d){
    [].forEach.call(box.children,function(b){ b.setAttribute('aria-pressed',String(+b.dataset.d===d)); });
    tit.textContent=(d===hoje?'Hoje, ':'')+NOMES[d];
    lista.innerHTML='';
    prog(d).forEach(function(p){
      var li=document.createElement('li'), im=document.createElement('img'), dv=document.createElement('div'), b=document.createElement('b'), s=document.createElement('span'), em=document.createElement('em');
      im.src=IMG[p[0]]||''; im.alt=''; im.loading='lazy'; im.decoding='async'; im.width=60; im.height=60; b.textContent=p[1]; s.textContent=p[2]; em.textContent=p[3];
      dv.appendChild(b); dv.appendChild(s); li.appendChild(im); li.appendChild(dv); li.appendChild(em); lista.appendChild(li);
    });
  }
  [1,2,3,4,5,6,0].forEach(function(d){
    var b=document.createElement('button'); b.type='button'; b.dataset.d=d; b.title=NOMES[d];
    b.innerHTML=CURTO[d]+(d===hoje?'<small>hoje</small>':''); b.addEventListener('click',function(){mostra(d)}); box.appendChild(b);
  });
  mostra(hoje);

  [].forEach.call(document.querySelectorAll('[data-car]'),function(car){
    var tr=car.querySelector('[data-trilho]'), pts=car.querySelector('[data-pontos]');
    function paginas(){ return Math.max(1,Math.round(tr.scrollWidth/tr.clientWidth)); }
    function atual(){ return Math.round(tr.scrollLeft/tr.clientWidth); }
    function desenha(){ var n=paginas(); pts.innerHTML=''; for(var i=0;i<n;i++){ (function(i){ var b=document.createElement('button'); b.type='button'; b.setAttribute('aria-label','Página '+(i+1)); if(i===atual()) b.setAttribute('aria-current','true'); b.addEventListener('click',function(){ tr.scrollTo({left:i*tr.clientWidth,behavior:'smooth'}); }); pts.appendChild(b); })(i); } }
    [].forEach.call(car.querySelectorAll('.seta-btn'),function(btn){ btn.addEventListener('click',function(){
      var max=tr.scrollWidth-tr.clientWidth, alvo=tr.scrollLeft+(+btn.dataset.dir)*tr.clientWidth;
      if(alvo>max+4) alvo=0; if(alvo< -4) alvo=max; tr.scrollTo({left:alvo,behavior:'smooth'}); }); });
    var t; tr.addEventListener('scroll',function(){ clearTimeout(t); t=setTimeout(desenha,80); },{passive:true});
    var rz; window.addEventListener('resize',function(){ clearTimeout(rz); rz=setTimeout(desenha,150); },{passive:true}); desenha();
  });
  var a=document.querySelector('[data-ano]'); if(a) a.textContent=String(new Date().getFullYear());
})();
