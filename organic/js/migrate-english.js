const legacy = [{"id": 1, "name": "Rau c\u1ea3i h\u1eefu c\u01a1 500g", "category": "N\u1ed5i b\u1eadt", "description": "G\u00f3i 500g \u00b7 B\u1ea3o qu\u1ea3n ng\u0103n m\u00e1t.", "specs": ["G\u00f3i 500g", "B\u1ea3o qu\u1ea3n ng\u0103n m\u00e1t"]}, {"id": 2, "name": "C\u00e0 chua 1kg", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "T\u00fai 1kg \u00b7 C\u00e0 chua t\u01b0\u01a1i \u00b7 R\u1eeda tr\u01b0\u1edbc khi d\u00f9ng.", "specs": ["T\u00fai 1kg", "C\u00e0 chua t\u01b0\u01a1i", "R\u1eeda tr\u01b0\u1edbc khi d\u00f9ng"]}, {"id": 3, "name": "Cam v\u01b0\u1eddn 1kg", "category": "N\u1ed5i b\u1eadt", "description": "T\u00fai 1kg \u00b7 Tr\u00e1i c\u00e2y theo m\u00f9a.", "specs": ["T\u00fai 1kg", "Tr\u00e1i c\u00e2y theo m\u00f9a"]}, {"id": 4, "name": "G\u1ea1o l\u1ee9t 1kg", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "T\u00fai 1kg \u00b7 B\u1ea3o qu\u1ea3n kh\u00f4 r\u00e1o.", "specs": ["T\u00fai 1kg", "B\u1ea3o qu\u1ea3n kh\u00f4 r\u00e1o"]}, {"id": 5, "name": "M\u1eadt ong 250ml", "category": "N\u1ed5i b\u1eadt", "description": "Chai 250ml \u00b7 \u0110\u1eady k\u00edn sau khi d\u00f9ng.", "specs": ["Chai 250ml", "\u0110\u1eady k\u00edn sau khi d\u00f9ng"]}, {"id": 6, "name": "Khoai lang 1kg", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "T\u00fai 1kg \u00b7 B\u1ea3o qu\u1ea3n n\u01a1i tho\u00e1ng m\u00e1t.", "specs": ["T\u00fai 1kg", "B\u1ea3o qu\u1ea3n n\u01a1i tho\u00e1ng m\u00e1t"]}];

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
