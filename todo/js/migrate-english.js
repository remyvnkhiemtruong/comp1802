const legacy = [{"id": 1, "name": "\u0110\u1ecdc t\u00e0i li\u1ec7u HTML", "category": "N\u1ed5i b\u1eadt", "description": "\u0110\u1ecdc t\u00e0i li\u1ec7u HTML: Ghi vi\u1ec7c c\u1ea7n l\u00e0m, ch\u1ecdn \u01b0u ti\u00ean v\u00e0 d\u00e0nh ch\u1ed7 cho nh\u1eefng \u0111i\u1ec1u \u0111\u00e3 ho\u00e0n th\u00e0nh."}, {"id": 2, "name": "Ho\u00e0n th\u00e0nh b\u1ed1 c\u1ee5c", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Ho\u00e0n th\u00e0nh b\u1ed1 c\u1ee5c: Ghi vi\u1ec7c c\u1ea7n l\u00e0m, ch\u1ecdn \u01b0u ti\u00ean v\u00e0 d\u00e0nh ch\u1ed7 cho nh\u1eefng \u0111i\u1ec1u \u0111\u00e3 ho\u00e0n th\u00e0nh."}, {"id": 3, "name": "Ki\u1ec3m tra responsive", "category": "N\u1ed5i b\u1eadt", "description": "Ki\u1ec3m tra responsive: Ghi vi\u1ec7c c\u1ea7n l\u00e0m, ch\u1ecdn \u01b0u ti\u00ean v\u00e0 d\u00e0nh ch\u1ed7 cho nh\u1eefng \u0111i\u1ec1u \u0111\u00e3 ho\u00e0n th\u00e0nh."}, {"id": 4, "name": "\u00d4n JavaScript", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "\u00d4n JavaScript: Ghi vi\u1ec7c c\u1ea7n l\u00e0m, ch\u1ecdn \u01b0u ti\u00ean v\u00e0 d\u00e0nh ch\u1ed7 cho nh\u1eefng \u0111i\u1ec1u \u0111\u00e3 ho\u00e0n th\u00e0nh."}, {"id": 5, "name": "Vi\u1ebft b\u00e1o c\u00e1o", "category": "N\u1ed5i b\u1eadt", "description": "Vi\u1ebft b\u00e1o c\u00e1o: Ghi vi\u1ec7c c\u1ea7n l\u00e0m, ch\u1ecdn \u01b0u ti\u00ean v\u00e0 d\u00e0nh ch\u1ed7 cho nh\u1eefng \u0111i\u1ec1u \u0111\u00e3 ho\u00e0n th\u00e0nh."}, {"id": 6, "name": "Chu\u1ea9n b\u1ecb thuy\u1ebft tr\u00ecnh", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Chu\u1ea9n b\u1ecb thuy\u1ebft tr\u00ecnh: Ghi vi\u1ec7c c\u1ea7n l\u00e0m, ch\u1ecdn \u01b0u ti\u00ean v\u00e0 d\u00e0nh ch\u1ed7 cho nh\u1eefng \u0111i\u1ec1u \u0111\u00e3 ho\u00e0n th\u00e0nh."}];

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
