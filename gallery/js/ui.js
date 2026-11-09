/* Project-specific presentation and interactions. */
(() => {
if(CONFIG.slug==='gallery') {
    cards=function(list,target){if(!$(target))return;$(target).innerHTML=list.length?list.map((p,i)=>`<article class="item"><button class="photo-open" data-open="${p.id}" aria-label="View photograph: ${esc(p.name)}"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"></button><small>KHUNG ${String(i+1).padStart(2,'0')} / ${esc(p.category)}</small><h3>${esc(p.name)}</h3><button data-open="${p.id}">View larger image</button></article>`).join(''):'<p class="empty">No photographs found. Try another search term.</p>';};
    cards(items.slice(0,6),'#featured');if($('#catalog'))catalog();
  }
})();
