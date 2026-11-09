const legacy = [{"id": 1, "name": "Phim: M\u00f9a h\u00e8 cu\u1ed1i", "category": "\u0110i\u1ec7n \u1ea3nh", "description": "Phim truy\u1ec7n \u00b7 100 ph\u00fat \u00b7 Su\u1ea5t chi\u1ebfu 19:00"}, {"id": 2, "name": "Acoustic Th\u1ee9 B\u1ea3y", "category": "\u00c2m nh\u1ea1c", "description": "Acoustic \u00b7 90 ph\u00fat \u00b7 B\u1eaft \u0111\u1ea7u 20:00"}, {"id": 3, "name": "Jazz b\u00ean c\u1eeda s\u1ed5", "category": "\u00c2m nh\u1ea1c", "description": "Jazz \u00b7 90 ph\u00fat \u00b7 B\u1eaft \u0111\u1ea7u 20:30"}, {"id": 4, "name": "Phim: Chuy\u1ebfn t\u00e0u s\u1edbm", "category": "\u0110i\u1ec7n \u1ea3nh", "description": "Phim truy\u1ec7n \u00b7 110 ph\u00fat \u00b7 Su\u1ea5t chi\u1ebfu 18:30"}, {"id": 5, "name": "\u0110\u00eam nh\u1ea1c Indie", "category": "\u00c2m nh\u1ea1c", "description": "Nh\u1ea1c Indie \u00b7 120 ph\u00fat \u00b7 B\u1eaft \u0111\u1ea7u 19:30"}, {"id": 6, "name": "S\u00e2n kh\u1ea5u cu\u1ed1i tu\u1ea7n", "category": "S\u00e2n kh\u1ea5u", "description": "S\u00e2n kh\u1ea5u \u00b7 90 ph\u00fat \u00b7 B\u1eaft \u0111\u1ea7u 19:00"}];

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
