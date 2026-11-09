const legacy = [{"id": 1, "name": "B\u00f3 h\u1ed3ng pastel", "category": "N\u1ed5i b\u1eadt", "description": "Hoa h\u1ed3ng ph\u1ed1i l\u00e1 \u00b7 B\u00f3 c\u1ee1 v\u1eeba \u00b7 T\u00f4ng h\u1ed3ng.", "specs": ["Hoa h\u1ed3ng ph\u1ed1i l\u00e1", "B\u00f3 c\u1ee1 v\u1eeba", "T\u00f4ng h\u1ed3ng"]}, {"id": 2, "name": "Gi\u1ecf c\u00fac h\u1ecda mi", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "C\u00fac tr\u1eafng \u00b7 Gi\u1ecf tre \u00b7 T\u00f4ng tr\u1eafng xanh.", "specs": ["C\u00fac tr\u1eafng", "Gi\u1ecf tre", "T\u00f4ng tr\u1eafng xanh"]}, {"id": 3, "name": "B\u00f3 h\u01b0\u1edbng d\u01b0\u01a1ng", "category": "N\u1ed5i b\u1eadt", "description": "H\u01b0\u1edbng d\u01b0\u01a1ng ph\u1ed1i l\u00e1 \u00b7 B\u00f3 c\u1ee1 v\u1eeba.", "specs": ["H\u01b0\u1edbng d\u01b0\u01a1ng ph\u1ed1i l\u00e1", "B\u00f3 c\u1ee1 v\u1eeba"]}, {"id": 4, "name": "H\u1ed9p hoa sinh nh\u1eadt", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Hoa ph\u1ed1i theo m\u00f9a \u00b7 H\u1ed9p gi\u1ea5y \u00b7 T\u00f4ng \u1ea5m.", "specs": ["Hoa ph\u1ed1i theo m\u00f9a", "H\u1ed9p gi\u1ea5y", "T\u00f4ng \u1ea5m"]}, {"id": 5, "name": "B\u00ecnh hoa \u0111\u1ed3ng n\u1ed9i", "category": "N\u1ed5i b\u1eadt", "description": "Hoa nh\u1ecf ph\u1ed1i l\u00e1 \u00b7 K\u00e8m b\u00ecnh th\u1ee7y tinh.", "specs": ["Hoa nh\u1ecf ph\u1ed1i l\u00e1", "K\u00e8m b\u00ecnh th\u1ee7y tinh"]}, {"id": 6, "name": "Thi\u1ec7p vi\u1ebft tay", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Thi\u1ec7p gi\u1ea5y \u00b7 10 \u00d7 15 cm \u00b7 Ghi l\u1eddi nh\u1eafn \u1edf \u0111\u1ecba ch\u1ec9 \u0111\u01a1n h\u00e0ng.", "specs": ["Thi\u1ec7p gi\u1ea5y", "10 \u00d7 15 cm", "Ghi l\u1eddi nh\u1eafn \u1edf \u0111\u1ecba ch\u1ec9 \u0111\u01a1n h\u00e0ng"]}];

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
