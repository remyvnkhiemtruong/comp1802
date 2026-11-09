const legacy = [{"id": 1, "name": "C\u1eaft t\u00f3c c\u01a1 b\u1ea3n", "category": "N\u1ed5i b\u1eadt", "description": "30 ph\u00fat \u00b7 C\u1eaft v\u00e0 t\u1ea1o ki\u1ec3u c\u01a1 b\u1ea3n"}, {"id": 2, "name": "G\u1ed9i \u0111\u1ea7u th\u01b0 gi\u00e3n", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "45 ph\u00fat \u00b7 G\u1ed9i v\u00e0 massage da \u0111\u1ea7u"}, {"id": 3, "name": "Ch\u0103m s\u00f3c da", "category": "N\u1ed5i b\u1eadt", "description": "60 ph\u00fat \u00b7 L\u00e0m s\u1ea1ch v\u00e0 ch\u0103m s\u00f3c c\u01a1 b\u1ea3n"}, {"id": 4, "name": "Massage vai g\u00e1y", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "30 ph\u00fat \u00b7 Th\u01b0 gi\u00e3n v\u00f9ng vai g\u00e1y"}, {"id": 5, "name": "T\u01b0 v\u1ea5n ki\u1ec3u t\u00f3c", "category": "N\u1ed5i b\u1eadt", "description": "20 ph\u00fat \u00b7 T\u01b0 v\u1ea5n theo d\u00e1ng m\u1eb7t"}, {"id": 6, "name": "Ch\u0103m s\u00f3c m\u00f3ng", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "45 ph\u00fat \u00b7 L\u00e0m s\u1ea1ch v\u00e0 ch\u0103m s\u00f3c m\u00f3ng"}];

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
