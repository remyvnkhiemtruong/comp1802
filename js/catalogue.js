'use strict';

(() => {
  const search=document.querySelector('#project-search');
  const filters=[...document.querySelectorAll('[data-filter]')];
  const projects=[...document.querySelectorAll('.project')];
  const sections=[...document.querySelectorAll('.project-section')];
  let category='all';
  const normalize=text=>text.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/\s+/g,' ');
  const index=new Map(projects.map(project=>[project,normalize(project.textContent)]));

  function applyFilters() {
    const query=normalize(search.value.trim());
    let visible=0;
    projects.forEach(project=>{
      const match=(category==='all'||project.dataset.category===category)&&index.get(project).includes(query);
      project.hidden=!match;
      if(match)visible++;
    });
    sections.forEach(section=>{section.hidden=![...section.querySelectorAll('.project')].some(project=>!project.hidden);});
    filters.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===category)));
    document.querySelector('#result-count').textContent=visible+' / '+projects.length+' project';
    document.querySelector('#empty-state').hidden=visible!==0;
  }
  filters.forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;applyFilters();}));
  search.addEventListener('input',applyFilters);
  document.querySelector('#reset-filters').addEventListener('click',()=>{category='all';search.value='';applyFilters();search.focus();});
  applyFilters();
})();
