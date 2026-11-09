const legacy = [{"id": 1, "name": "\u00c1o s\u01a1 mi linen", "category": "\u00c1o & qu\u1ea7n", "description": "Linen pha cotton \u00b7 Phom r\u1ed9ng \u00b7 S/M/L.", "specs": ["Linen pha cotton", "Phom r\u1ed9ng", "S/M/L"]}, {"id": 2, "name": "Qu\u1ea7n su\u00f4ng cotton", "category": "\u00c1o & qu\u1ea7n", "description": "Cotton \u00b7 \u1ed0ng su\u00f4ng \u00b7 S/M/L.", "specs": ["Cotton", "\u1ed0ng su\u00f4ng", "S/M/L"]}, {"id": 3, "name": "\u00c1o thun tr\u01a1n", "category": "\u00c1o & qu\u1ea7n", "description": "Cotton \u00b7 C\u1ed5 tr\u00f2n \u00b7 S/M/L.", "specs": ["Cotton", "C\u1ed5 tr\u00f2n", "S/M/L"]}, {"id": 4, "name": "T\u00fai v\u1ea3i canvas", "category": "Gi\u00e0y & t\u00fai", "description": "Canvas \u00b7 35 \u00d7 40 cm \u00b7 M\u00e0u t\u1ef1 nhi\u00ean.", "specs": ["Canvas", "35 \u00d7 40 cm", "M\u00e0u t\u1ef1 nhi\u00ean"]}, {"id": 5, "name": "Gi\u00e0y v\u1ea3i c\u1ed5 th\u1ea5p", "category": "Gi\u00e0y & t\u00fai", "description": "V\u1ea3i canvas \u00b7 \u0110\u1ebf cao su \u00b7 Size 36\u201342.", "specs": ["V\u1ea3i canvas", "\u0110\u1ebf cao su", "Size 36\u201342"]}, {"id": 6, "name": "M\u0169 bucket", "category": "Ph\u1ee5 ki\u1ec7n", "description": "Cotton \u00b7 V\u00e0nh m\u1ec1m \u00b7 V\u00f2ng \u0111\u1ea7u 56\u201358 cm.", "specs": ["Cotton", "V\u00e0nh m\u1ec1m", "V\u00f2ng \u0111\u1ea7u 56\u201358 cm"]}];

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
