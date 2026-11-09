const legacy = [{"id": 1, "name": "M\u00e1y t\u00ednh", "category": "N\u1ed5i b\u1eadt", "description": "M\u00e1y t\u00ednh: T\u00ednh to\u00e1n nhanh, xem l\u1ecbch v\u00e0 \u0111\u1ebfm ng\u01b0\u1ee3c cho m\u1ed9t phi\u00ean t\u1eadp trung."}, {"id": 2, "name": "\u0110\u1ebfm ng\u01b0\u1ee3c", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "\u0110\u1ebfm ng\u01b0\u1ee3c: T\u00ednh to\u00e1n nhanh, xem l\u1ecbch v\u00e0 \u0111\u1ebfm ng\u01b0\u1ee3c cho m\u1ed9t phi\u00ean t\u1eadp trung."}, {"id": 3, "name": "L\u1ecbch th\u00e1ng", "category": "N\u1ed5i b\u1eadt", "description": "L\u1ecbch th\u00e1ng: T\u00ednh to\u00e1n nhanh, xem l\u1ecbch v\u00e0 \u0111\u1ebfm ng\u01b0\u1ee3c cho m\u1ed9t phi\u00ean t\u1eadp trung."}, {"id": 4, "name": "Phi\u00ean h\u1ecdc 25 ph\u00fat", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Phi\u00ean h\u1ecdc 25 ph\u00fat: T\u00ednh to\u00e1n nhanh, xem l\u1ecbch v\u00e0 \u0111\u1ebfm ng\u01b0\u1ee3c cho m\u1ed9t phi\u00ean t\u1eadp trung."}, {"id": 5, "name": "Ngh\u1ec9 ng\u1eafn 5 ph\u00fat", "category": "N\u1ed5i b\u1eadt", "description": "Ngh\u1ec9 ng\u1eafn 5 ph\u00fat: T\u00ednh to\u00e1n nhanh, xem l\u1ecbch v\u00e0 \u0111\u1ebfm ng\u01b0\u1ee3c cho m\u1ed9t phi\u00ean t\u1eadp trung."}, {"id": 6, "name": "Ngh\u1ec9 d\u00e0i 15 ph\u00fat", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Ngh\u1ec9 d\u00e0i 15 ph\u00fat: T\u00ednh to\u00e1n nhanh, xem l\u1ecbch v\u00e0 \u0111\u1ebfm ng\u01b0\u1ee3c cho m\u1ed9t phi\u00ean t\u1eadp trung."}];

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
