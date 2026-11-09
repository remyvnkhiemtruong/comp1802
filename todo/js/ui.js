/* Project-specific presentation and interactions. */
(() => {
if (CONFIG.slug === 'todo' && $('#workspace')) {
    $('#today-label').textContent = new Date().toLocaleDateString('en-US', {weekday:'long',day:'numeric',month:'long'});
    $('#workspace').innerHTML = `<div class="task-workspace"><section class="task-main"><h2 class="form-heading">Your tasks</h2><form class="task-composer" data-form="todo"><label>Next task<input name="name" required maxlength="150" placeholder="What do you need to do?"></label><label>Priority<select name="priority"><option>Normal</option><option>High</option></select></label><button>Add task</button></form><div class="task-filters"><button data-task-filter="all">All</button><button data-task-filter="active">In progress</button><button data-task-filter="done">Completed</button></div><div id="task-list"></div></section><aside class="task-aside"><h2>A slower pace is fine.</h2><p>A list should help you remember, not fill every moment of your day.</p><div class="focus-note"><small>A SMALL REMINDER</small><strong>Finish<br>one small task.</strong><p>Choose one important task. Let the rest wait until the right moment.</p></div><a href="about.html">How it works small tasks →</a></aside></div>`;
    renderTasks = function () {
      const all=read('tasks',[]), done=all.filter(t=>t.done).length;
      const list=all.filter(t=>taskFilter==='all'||(taskFilter==='done'?t.done:!t.done));
      document.querySelectorAll('[data-task-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.taskFilter===taskFilter)));
      $('#task-list').innerHTML=`<div class="task-progress"><span>${done}/${all.length} tasks completed</span><progress max="${all.length||1}" value="${done}" aria-label="Task progress"></progress></div>`+list.map(t=>`<div class="row task-row"><label class="${t.done?'done':''}"><input type="checkbox" data-task-check="${t.id}" ${t.done?'checked':''}><span>${esc(t.name)}</span></label><div class="row-end"><span class="priority ${t.priority==='High'?'high':''}">${esc(t.priority)}</span><button data-task-delete="${t.id}" aria-label="Delete ${esc(t.name)}">Delete</button></div></div>`).join('')+(!list.length?'<p class="empty">Nothing here for now. Add a new task above when you are ready.</p>':'');
    };
    renderTasks();
  }
})();
