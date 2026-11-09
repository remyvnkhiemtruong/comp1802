const legacy = [{"id": 1, "name": "B\u00e0n l\u00e0m vi\u1ec7c g\u1ed7", "category": "N\u1ed5i b\u1eadt", "description": "120 \u00d7 60 \u00d7 74 cm \u00b7 G\u1ed7 cao su \u00b7 L\u1eafp r\u00e1p.", "specs": ["120 \u00d7 60 \u00d7 74 cm", "G\u1ed7 cao su", "L\u1eafp r\u00e1p"]}, {"id": 2, "name": "Gh\u1ebf t\u1ef1a g\u1ed7 s\u1ed3i", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "45 \u00d7 48 \u00d7 80 cm \u00b7 T\u1ef1a g\u1ed7 \u00b7 M\u00e0u t\u1ef1 nhi\u00ean.", "specs": ["45 \u00d7 48 \u00d7 80 cm", "T\u1ef1a g\u1ed7", "M\u00e0u t\u1ef1 nhi\u00ean"]}, {"id": 3, "name": "\u0110\u00e8n b\u00e0n \u0111\u1ecdc s\u00e1ch", "category": "N\u1ed5i b\u1eadt", "description": "Cao 38 cm \u00b7 \u00c1nh s\u00e1ng \u1ea5m \u00b7 Ngu\u1ed3n \u0111i\u1ec7n 220V.", "specs": ["Cao 38 cm", "\u00c1nh s\u00e1ng \u1ea5m", "Ngu\u1ed3n \u0111i\u1ec7n 220V"]}, {"id": 4, "name": "K\u1ec7 s\u00e1ch ba t\u1ea7ng", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "60 \u00d7 25 \u00d7 90 cm \u00b7 Ba t\u1ea7ng \u00b7 G\u1ed7 c\u00f4ng nghi\u1ec7p.", "specs": ["60 \u00d7 25 \u00d7 90 cm", "Ba t\u1ea7ng", "G\u1ed7 c\u00f4ng nghi\u1ec7p"]}, {"id": 5, "name": "B\u00ecnh g\u1ed1m nh\u1ecf", "category": "N\u1ed5i b\u1eadt", "description": "Cao 18 cm \u00b7 G\u1ed1m men m\u1edd \u00b7 D\u00f9ng trang tr\u00ed.", "specs": ["Cao 18 cm", "G\u1ed1m men m\u1edd", "D\u00f9ng trang tr\u00ed"]}, {"id": 6, "name": "Gh\u1ebf \u0111\u00f4n tr\u00f2n", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "M\u1eb7t gh\u1ebf 32 cm \u00b7 Cao 45 cm \u00b7 Ch\u00e2n g\u1ed7.", "specs": ["M\u1eb7t gh\u1ebf 32 cm", "Cao 45 cm", "Ch\u00e2n g\u1ed7"]}];

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
