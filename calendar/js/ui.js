/* Project-specific presentation and interactions. */
(() => {
if(CONFIG.slug==='calendar' && $('#workspace')) {
    let selected=localDate();
    $('#workspace').innerHTML=`<div class="planner-layout"><section><div id="month"></div><div class="planner-key"><span>● Today</span><span>Select a day to add an event</span></div></section><aside class="planner-sidebar"><h2>This month</h2><div id="events"></div><form class="planner-composer" data-form="event"><h3>Add an appointment</h3><label>Event name<input name="name" required maxlength="150" placeholder="e.g. Project meeting"></label><div class="field-row"><label>Date<input name="date" type="date" value="${selected}" required></label><label>Time<input name="time" type="time" value="09:00" required></label></div><button>Add to calendar</button></form></aside></div>`;
    renderEvents=function () {
      const all=read('events',[]),prefix=`${year}-${String(month+1).padStart(2,'0')}`;
      const events=all.filter(x=>x.date.startsWith(prefix)).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
      const start=(new Date(year,month,1).getDay()+6)%7,days=new Date(year,month+1,0).getDate();
      $('#month').innerHTML=`<div class="month-controls"><h2>${new Date(year,month,1).toLocaleDateString('en-US',{month:'long'})} <small>/ ${year}</small></h2><div class="actions"><button id="today-month" class="today-button">Today</button><button id="prev-month" aria-label="Previous month">←</button><button id="next-month" aria-label="Next month">→</button></div></div><div class="calendar-board"><div class="weekday-grid">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(x=>`<span>${x}</span>`).join('')}</div><div class="month-grid">${'<div class="planner-day blank"></div>'.repeat(start)}${Array.from({length:days},(_,i)=>{const date=prefix+'-'+String(i+1).padStart(2,'0');return `<button class="planner-day ${date===localDate()?'today':''} ${date===selected?'selected':''}" data-planner-date="${date}" aria-label="Date ${i+1} month ${month+1}"><span>${i+1}</span>${all.filter(x=>x.date===date).slice(0,2).map(x=>`<em>${esc(x.time)} ${esc(x.name)}</em>`).join('')}</button>`;}).join('')}</div></div>`;
      $('#events').innerHTML=events.length?events.map(x=>`<article class="event-card"><small>${esc(x.date.split('-').reverse().join('/'))} · ${esc(x.time)}</small><strong>${esc(x.name)}</strong><button data-event-delete="${x.id}" aria-label="Delete event ${esc(x.name)}">Delete</button></article>`).join(''):'<p class="planner-empty">No appointments this month.<br>Choose a day to start planning.</p>';
      $('#prev-month').onclick=()=>{month--;if(month<0){month=11;year--;}renderEvents();};
      $('#next-month').onclick=()=>{month++;if(month>11){month=0;year++;}renderEvents();};
      $('#today-month').onclick=()=>{month=new Date().getMonth();year=new Date().getFullYear();selected=localDate();renderEvents();};
      document.querySelectorAll('[data-planner-date]').forEach(b=>b.onclick=()=>{selected=b.dataset.plannerDate;document.querySelector('[name=date]').value=selected;renderEvents();});
    };
    renderEvents();
  }
})();
