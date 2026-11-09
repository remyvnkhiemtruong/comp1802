/* Trình bày và tương tác riêng của todo. */
(() => {
if (CONFIG.slug === 'todo' && $('#workspace')) {
    $('#today-label').textContent = new Date().toLocaleDateString('vi-VN', {weekday:'long',day:'numeric',month:'long'});
    $('#workspace').innerHTML = `<div class="task-workspace"><section class="task-main"><h2 class="form-heading">Việc cần làm</h2><form class="task-composer" data-form="todo"><label>Việc tiếp theo<input name="name" required maxlength="150" placeholder="Bạn cần làm gì?"></label><label>Ưu tiên<select name="priority"><option>Bình thường</option><option>Cao</option></select></label><button>Thêm việc</button></form><div class="task-filters"><button data-task-filter="all">Tất cả</button><button data-task-filter="active">Đang làm</button><button data-task-filter="done">Đã xong</button></div><div id="task-list"></div></section><aside class="task-aside"><h2>Chậm một chút cũng được.</h2><p>Danh sách để giúp bạn nhớ, không phải để làm đầy ngày của bạn.</p><div class="focus-note"><small>MỘT NHẮC NHỞ</small><strong>Làm xong<br>một việc nhỏ.</strong><p>Chọn một việc quan trọng. Để những việc còn lại chờ đúng lúc.</p></div><a href="about.html">Cách sử dụng việc nhỏ →</a></aside></div>`;
    renderTasks = function () {
      const all=read('tasks',[]), done=all.filter(t=>t.done).length;
      const list=all.filter(t=>taskFilter==='all'||(taskFilter==='done'?t.done:!t.done));
      document.querySelectorAll('[data-task-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.taskFilter===taskFilter)));
      $('#task-list').innerHTML=`<div class="task-progress"><span>${done}/${all.length} việc đã hoàn thành</span><progress max="${all.length||1}" value="${done}" aria-label="Tiến độ công việc"></progress></div>`+list.map(t=>`<div class="row task-row"><label class="${t.done?'done':''}"><input type="checkbox" data-task-check="${t.id}" ${t.done?'checked':''}><span>${esc(t.name)}</span></label><div class="row-end"><span class="priority ${t.priority==='Cao'?'high':''}">${esc(t.priority)}</span><button data-task-delete="${t.id}" aria-label="Xóa ${esc(t.name)}">Xóa</button></div></div>`).join('')+(!list.length?'<p class="empty">Mục này đã gọn rồi. Bạn có thể thêm một việc mới ở trên.</p>':'');
    };
    renderTasks();
  }
})();
