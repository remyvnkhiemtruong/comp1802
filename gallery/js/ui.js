/* Trình bày và tương tác riêng của gallery. */
(() => {
if(CONFIG.slug==='gallery') {
    cards=function(list,target){if(!$(target))return;$(target).innerHTML=list.length?list.map((p,i)=>`<article class="item"><button class="photo-open" data-open="${p.id}" aria-label="Xem ảnh ${esc(p.name)}"><img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"></button><small>KHUNG ${String(i+1).padStart(2,'0')} / ${esc(p.category)}</small><h3>${esc(p.name)}</h3><button data-open="${p.id}">Xem ảnh lớn</button></article>`).join(''):'<p class="empty">Không tìm thấy ảnh. Thử một từ khóa khác.</p>';};
    cards(items.slice(0,6),'#featured');if($('#catalog'))catalog();
  }
})();
