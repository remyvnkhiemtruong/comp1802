const legacy = [{"id": 1, "name": "H\u1ecdp nh\u00f3m \u0111\u1ed3 \u00e1n", "category": "N\u1ed5i b\u1eadt", "description": "H\u1ecdp nh\u00f3m \u0111\u1ed3 \u00e1n: Ghi l\u1ea1i l\u1ecbch h\u1ecdc, l\u1ecbch nh\u00f3m v\u00e0 c\u00e1c s\u1ef1 ki\u1ec7n b\u1ea1n kh\u00f4ng mu\u1ed1n b\u1ecf l\u1ee1."}, {"id": 2, "name": "Bu\u1ed5i h\u1ecdc CSS", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Bu\u1ed5i h\u1ecdc CSS: Ghi l\u1ea1i l\u1ecbch h\u1ecdc, l\u1ecbch nh\u00f3m v\u00e0 c\u00e1c s\u1ef1 ki\u1ec7n b\u1ea1n kh\u00f4ng mu\u1ed1n b\u1ecf l\u1ee1."}, {"id": 3, "name": "N\u1ed9p b\u00e0i th\u1ef1c h\u00e0nh", "category": "N\u1ed5i b\u1eadt", "description": "N\u1ed9p b\u00e0i th\u1ef1c h\u00e0nh: Ghi l\u1ea1i l\u1ecbch h\u1ecdc, l\u1ecbch nh\u00f3m v\u00e0 c\u00e1c s\u1ef1 ki\u1ec7n b\u1ea1n kh\u00f4ng mu\u1ed1n b\u1ecf l\u1ee1."}, {"id": 4, "name": "\u00d4n t\u1eadp cu\u1ed1i k\u1ef3", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "\u00d4n t\u1eadp cu\u1ed1i k\u1ef3: Ghi l\u1ea1i l\u1ecbch h\u1ecdc, l\u1ecbch nh\u00f3m v\u00e0 c\u00e1c s\u1ef1 ki\u1ec7n b\u1ea1n kh\u00f4ng mu\u1ed1n b\u1ecf l\u1ee1."}, {"id": 5, "name": "Sinh ho\u1ea1t c\u00e2u l\u1ea1c b\u1ed9", "category": "N\u1ed5i b\u1eadt", "description": "Sinh ho\u1ea1t c\u00e2u l\u1ea1c b\u1ed9: Ghi l\u1ea1i l\u1ecbch h\u1ecdc, l\u1ecbch nh\u00f3m v\u00e0 c\u00e1c s\u1ef1 ki\u1ec7n b\u1ea1n kh\u00f4ng mu\u1ed1n b\u1ecf l\u1ee1."}, {"id": 6, "name": "Thuy\u1ebft tr\u00ecnh", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Thuy\u1ebft tr\u00ecnh: Ghi l\u1ea1i l\u1ecbch h\u1ecdc, l\u1ecbch nh\u00f3m v\u00e0 c\u00e1c s\u1ef1 ki\u1ec7n b\u1ea1n kh\u00f4ng mu\u1ed1n b\u1ecf l\u1ee1."}];

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
