const legacy = [{"id": 1, "name": "Tr\u00ean m\u1eb7t h\u1ed3", "category": "M\u1eb7t n\u01b0\u1edbc", "description": "M\u1ed9t kho\u1ea3ng l\u1eb7ng nh\u00ecn t\u1eeb m\u0169i thuy\u1ec1n."}, {"id": 2, "name": "D\u00e3y n\u00fai ph\u00eda xa", "category": "N\u00fai \u0111\u1ed3i", "description": "C\u00e1c l\u1edbp n\u00fai n\u1ed1i nhau d\u01b0\u1edbi n\u1ec1n tr\u1eddi r\u1ed9ng."}, {"id": 3, "name": "L\u1ed1i v\u00e0o r\u1eebng", "category": "R\u1eebng c\u00e2y", "description": "\u00c1nh s\u00e1ng \u0111i qua nh\u1eefng th\u00e2n c\u00e2y."}, {"id": 4, "name": "Gi\u1eefa nh\u1eefng ng\u1ecdn n\u00fai", "category": "N\u00fai \u0111\u1ed3i", "description": "D\u1eebng ch\u00e2n \u1edf m\u1ed9t kho\u1ea3ng nh\u00ecn r\u1ed9ng."}, {"id": 5, "name": "S\u00e1ng tr\u00ean c\u00e1nh \u0111\u1ed3ng", "category": "\u0110\u1ed3ng c\u1ecf", "description": "S\u01b0\u01a1ng s\u1edbm ph\u1ee7 tr\u00ean th\u1ea3m c\u1ecf."}, {"id": 6, "name": "\u0110\u00eam \u0111\u1ea7y sao", "category": "N\u00fai \u0111\u1ed3i", "description": "\u0110\u01b0\u1eddng n\u00fai v\u00e0 b\u1ea7u tr\u1eddi khi ng\u00e0y \u0111\u00e3 kh\u00e9p."}];

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
