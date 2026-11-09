/* Project-specific presentation and interactions. */
(() => {
if(CONFIG.slug==='appointments') {
    cards=function(list,target){if(!$(target))return;$(target).innerHTML=list.length?list.map((p,i)=>`<article class="item"><span class="service-no">${String(i+1).padStart(2,'0')}</span><div><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p></div><div><span class="price">${money(p.price)}</span><button data-open="${p.id}">Choose a time</button></div></article>`).join(''):'<p class="empty">No services match your search.</p>';};
    cards(items.slice(0,4),'#featured');if($('#catalog'))catalog();
    function history(){if(!$('#booking-history'))return;const a=read('bookings',[]);$('#booking-history').innerHTML=a.length?a.map(x=>`<div class="row"><span>${esc(items.find(i=>i.id===Number(x.item))?.name||'Services')}<small> · ${esc(x.date)} · ${esc(x.time)}</small></span><span>${money(x.total)}</span></div>`).join(''):'<p>No appointments have been saved on this device.</p>';}
    history();document.addEventListener('submit',()=>setTimeout(history,0));
  }
})();
