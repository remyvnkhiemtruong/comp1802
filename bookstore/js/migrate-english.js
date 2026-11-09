const legacy = [{"id": 1, "name": "Ng\u00e0y d\u00e0i v\u00e0 trang s\u00e1ch", "category": "N\u1ed5i b\u1eadt", "description": "V\u0103n h\u1ecdc \u00b7 B\u00eca m\u1ec1m \u00b7 224 trang.", "specs": ["V\u0103n h\u1ecdc", "B\u00eca m\u1ec1m", "224 trang"]}, {"id": 2, "name": "Nh\u1eadp m\u00f4n thi\u1ebft k\u1ebf web", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Tin h\u1ecdc \u00b7 B\u00eca m\u1ec1m \u00b7 320 trang.", "specs": ["Tin h\u1ecdc", "B\u00eca m\u1ec1m", "320 trang"]}, {"id": 3, "name": "Chuy\u1ec7n c\u1ee7a m\u00f9a h\u00e8", "category": "N\u1ed5i b\u1eadt", "description": "Truy\u1ec7n ng\u1eafn \u00b7 B\u00eca m\u1ec1m \u00b7 180 trang.", "specs": ["Truy\u1ec7n ng\u1eafn", "B\u00eca m\u1ec1m", "180 trang"]}, {"id": 4, "name": "T\u01b0 duy s\u00e1ng t\u1ea1o", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "K\u1ef9 n\u0103ng \u00b7 B\u00eca m\u1ec1m \u00b7 256 trang.", "specs": ["K\u1ef9 n\u0103ng", "B\u00eca m\u1ec1m", "256 trang"]}, {"id": 5, "name": "Ghi ch\u00e9p m\u1ed9t chuy\u1ebfn \u0111i", "category": "N\u1ed5i b\u1eadt", "description": "Du k\u00fd \u00b7 B\u00eca m\u1ec1m \u00b7 208 trang.", "specs": ["Du k\u00fd", "B\u00eca m\u1ec1m", "208 trang"]}, {"id": 6, "name": "K\u1ef9 n\u0103ng t\u1ef1 h\u1ecdc", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "H\u1ecdc t\u1eadp \u00b7 B\u00eca m\u1ec1m \u00b7 192 trang.", "specs": ["H\u1ecdc t\u1eadp", "B\u00eca m\u1ec1m", "192 trang"]}];

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
