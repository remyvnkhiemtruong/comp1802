const legacy = [{"id": 1, "name": "\u0102n u\u1ed1ng", "category": "N\u1ed5i b\u1eadt", "description": "\u0102n u\u1ed1ng: Ghi thu chi, xem s\u1ed1 d\u01b0 v\u00e0 \u0111i\u1ec1u ch\u1ec9nh th\u00f3i quen t\u1eeb nh\u1eefng kho\u1ea3n nh\u1ecf."}, {"id": 2, "name": "\u0110i l\u1ea1i", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "\u0110i l\u1ea1i: Ghi thu chi, xem s\u1ed1 d\u01b0 v\u00e0 \u0111i\u1ec1u ch\u1ec9nh th\u00f3i quen t\u1eeb nh\u1eefng kho\u1ea3n nh\u1ecf."}, {"id": 3, "name": "H\u1ecdc t\u1eadp", "category": "N\u1ed5i b\u1eadt", "description": "H\u1ecdc t\u1eadp: Ghi thu chi, xem s\u1ed1 d\u01b0 v\u00e0 \u0111i\u1ec1u ch\u1ec9nh th\u00f3i quen t\u1eeb nh\u1eefng kho\u1ea3n nh\u1ecf."}, {"id": 4, "name": "Nh\u00e0 \u1edf", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Nh\u00e0 \u1edf: Ghi thu chi, xem s\u1ed1 d\u01b0 v\u00e0 \u0111i\u1ec1u ch\u1ec9nh th\u00f3i quen t\u1eeb nh\u1eefng kho\u1ea3n nh\u1ecf."}, {"id": 5, "name": "Gi\u1ea3i tr\u00ed", "category": "N\u1ed5i b\u1eadt", "description": "Gi\u1ea3i tr\u00ed: Ghi thu chi, xem s\u1ed1 d\u01b0 v\u00e0 \u0111i\u1ec1u ch\u1ec9nh th\u00f3i quen t\u1eeb nh\u1eefng kho\u1ea3n nh\u1ecf."}, {"id": 6, "name": "Thu nh\u1eadp", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Thu nh\u1eadp: Ghi thu chi, xem s\u1ed1 d\u01b0 v\u00e0 \u0111i\u1ec1u ch\u1ec9nh th\u00f3i quen t\u1eeb nh\u1eefng kho\u1ea3n nh\u1ecf."}];

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
