const legacy = [{"id": 1, "name": "HTML c\u0103n b\u1ea3n", "category": "N\u1ed5i b\u1eadt", "description": "HTML c\u0103n b\u1ea3n: Luy\u1ec7n ki\u1ebfn th\u1ee9c web b\u1eb1ng c\u00e2u h\u1ecfi ng\u1eafn, xem gi\u1ea3i th\u00edch ngay sau khi tr\u1ea3 l\u1eddi."}, {"id": 2, "name": "CSS c\u01a1 b\u1ea3n", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "CSS c\u01a1 b\u1ea3n: Luy\u1ec7n ki\u1ebfn th\u1ee9c web b\u1eb1ng c\u00e2u h\u1ecfi ng\u1eafn, xem gi\u1ea3i th\u00edch ngay sau khi tr\u1ea3 l\u1eddi."}, {"id": 3, "name": "JavaScript", "category": "N\u1ed5i b\u1eadt", "description": "JavaScript: Luy\u1ec7n ki\u1ebfn th\u1ee9c web b\u1eb1ng c\u00e2u h\u1ecfi ng\u1eafn, xem gi\u1ea3i th\u00edch ngay sau khi tr\u1ea3 l\u1eddi."}, {"id": 4, "name": "Responsive", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Responsive: Luy\u1ec7n ki\u1ebfn th\u1ee9c web b\u1eb1ng c\u00e2u h\u1ecfi ng\u1eafn, xem gi\u1ea3i th\u00edch ngay sau khi tr\u1ea3 l\u1eddi."}, {"id": 5, "name": "Truy c\u1eadp web", "category": "N\u1ed5i b\u1eadt", "description": "Truy c\u1eadp web: Luy\u1ec7n ki\u1ebfn th\u1ee9c web b\u1eb1ng c\u00e2u h\u1ecfi ng\u1eafn, xem gi\u1ea3i th\u00edch ngay sau khi tr\u1ea3 l\u1eddi."}, {"id": 6, "name": "L\u01b0u tr\u1eef tr\u00ecnh duy\u1ec7t", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "L\u01b0u tr\u1eef tr\u00ecnh duy\u1ec7t: Luy\u1ec7n ki\u1ebfn th\u1ee9c web b\u1eb1ng c\u00e2u h\u1ecfi ng\u1eafn, xem gi\u1ea3i th\u00edch ngay sau khi tr\u1ea3 l\u1eddi."}];

/* Translate only shipped sample records and known UI enums. Preserve user content. */
(() => {
  const prefix = 'comp1802:' + CONFIG.slug + ':';
  try {
    if (localStorage.getItem(prefix + 'language-version') === 'en-1') return;
    const read = name => JSON.parse(localStorage.getItem(prefix + name));
    const write = (name, value) => localStorage.setItem(prefix + name, JSON.stringify(value));
    const categoryMap = new Map(legacy.map(old => [old.category, CONFIG.items.find(item => item.id === old.id)?.category]));
    const stored = read('items');
    if (Array.isArray(stored)) {
      const updated = stored.map(item => {
        const old = legacy.find(seed => seed.id === item.id);
        const current = CONFIG.items.find(seed => seed.id === item.id);
        const result = {...item};
        if (old && current) {
          for (const field of ['name', 'description', 'category', 'detail', 'specs']) {
            if (JSON.stringify(item[field]) === JSON.stringify(old[field])) result[field] = current[field];
          }
        }
        if (categoryMap.has(result.category)) result.category = categoryMap.get(result.category);
        return result;
      });
      write('items', updated);
    }
    if (CONFIG.slug === 'todo') {
      const tasks = read('tasks');
      if (Array.isArray(tasks)) write('tasks', tasks.map(task => {
        const old = legacy.find(seed => seed.id === task.id && seed.name === task.name);
        const current = old && CONFIG.items.find(seed => seed.id === old.id);
        return {...task, name: current ? current.name : task.name,
          priority: task.priority === '\u0043ao' ? 'High' : task.priority === '\u0042\u00ecnh th\u01b0\u1eddng' ? 'Normal' : task.priority};
      }));
    }
    if (CONFIG.slug === 'expenses') {
      const categories = new Map(legacy.map(old => [old.name, CONFIG.items.find(item => item.id === old.id)?.name]));
      const transactions = read('transactions');
      if (Array.isArray(transactions)) write('transactions', transactions.map(entry => ({...entry, category: categories.get(entry.category) || entry.category})));
    }
    localStorage.setItem(prefix + 'language-version', 'en-1');
  } catch {
    // A blocked or invalid storage record must not stop the page from loading.
  }
})();
