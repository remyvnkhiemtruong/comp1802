/* Trình bày và tương tác riêng của calendar. */
(() => {
if(CONFIG.slug==='calendar' && $('#workspace')) {
    let selected=localDate();
    $('#workspace').innerHTML=`<div class="planner-layout"><section><div id="month"></div><div class="planner-key"><span>● Hôm nay</span><span>Nhấp ngày để thêm lịch</span></div></section><aside class="planner-sidebar"><h2>Lịch trong tháng</h2><div id="events"></div><form class="planner-composer" data-form="event"><h3>Thêm một cuộc hẹn</h3><label>Tên sự kiện<input name="name" required maxlength="150" placeholder="Ví dụ: Họp nhóm đồ án"></label><div class="field-row"><label>Ngày<input name="date" type="date" value="${selected}" required></label><label>Giờ<input name="time" type="time" value="09:00" required></label></div><button>Thêm vào lịch</button></form></aside></div>`;
    renderEvents=function () {
      const all=read('events',[]),prefix=`${year}-${String(month+1).padStart(2,'0')}`;
      const events=all.filter(x=>x.date.startsWith(prefix)).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
      const start=(new Date(year,month,1).getDay()+6)%7,days=new Date(year,month+1,0).getDate();
      $('#month').innerHTML=`<div class="month-controls"><h2>Tháng ${String(month+1).padStart(2,'0')} <small>/ ${year}</small></h2><div class="actions"><button id="today-month" class="today-button">Hôm nay</button><button id="prev-month" aria-label="Tháng trước">←</button><button id="next-month" aria-label="Tháng sau">→</button></div></div><div class="calendar-board"><div class="weekday-grid">${['Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy','Chủ nhật'].map(x=>`<span>${x}</span>`).join('')}</div><div class="month-grid">${'<div class="planner-day blank"></div>'.repeat(start)}${Array.from({length:days},(_,i)=>{const date=prefix+'-'+String(i+1).padStart(2,'0');return `<button class="planner-day ${date===localDate()?'today':''} ${date===selected?'selected':''}" data-planner-date="${date}" aria-label="Ngày ${i+1} tháng ${month+1}"><span>${i+1}</span>${all.filter(x=>x.date===date).slice(0,2).map(x=>`<em>${esc(x.time)} ${esc(x.name)}</em>`).join('')}</button>`;}).join('')}</div></div>`;
      $('#events').innerHTML=events.length?events.map(x=>`<article class="event-card"><small>${esc(x.date.split('-').reverse().join('/'))} · ${esc(x.time)}</small><strong>${esc(x.name)}</strong><button data-event-delete="${x.id}" aria-label="Xóa sự kiện ${esc(x.name)}">Xóa</button></article>`).join(''):'<p class="planner-empty">Chưa có cuộc hẹn trong tháng này.<br>Chọn một ngày để bắt đầu.</p>';
      $('#prev-month').onclick=()=>{month--;if(month<0){month=11;year--;}renderEvents();};
      $('#next-month').onclick=()=>{month++;if(month>11){month=0;year++;}renderEvents();};
      $('#today-month').onclick=()=>{month=new Date().getMonth();year=new Date().getFullYear();selected=localDate();renderEvents();};
      document.querySelectorAll('[data-planner-date]').forEach(b=>b.onclick=()=>{selected=b.dataset.plannerDate;document.querySelector('[name=date]').value=selected;renderEvents();});
    };
    renderEvents();
  }
})();
