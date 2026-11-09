const legacy = [{"id": 1, "name": "C\u1ed1c g\u1ed1m men tr\u1eafng", "category": "N\u1ed5i b\u1eadt", "description": "G\u1ed1m men tr\u1eafng \u00b7 Dung t\u00edch 300ml.", "specs": ["G\u1ed1m men tr\u1eafng", "Dung t\u00edch 300ml"]}, {"id": 2, "name": "T\u00fai \u0111an s\u1ee3i cotton", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "S\u1ee3i cotton \u00b7 T\u00fai \u0111an m\u1ec1m \u00b7 M\u00e0u kem.", "specs": ["S\u1ee3i cotton", "T\u00fai \u0111an m\u1ec1m", "M\u00e0u kem"]}, {"id": 3, "name": "N\u1ebfn s\u00e1p \u0111\u1eadu n\u00e0nh", "category": "N\u1ed5i b\u1eadt", "description": "S\u00e1p \u0111\u1eadu n\u00e0nh \u00b7 H\u0169 120g \u00b7 M\u00f9i g\u1ed7 nh\u1eb9.", "specs": ["S\u00e1p \u0111\u1eadu n\u00e0nh", "H\u0169 120g", "M\u00f9i g\u1ed7 nh\u1eb9"]}, {"id": 4, "name": "S\u1ed5 kh\u00e2u tay", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Gi\u1ea5y 100gsm \u00b7 80 trang \u00b7 B\u00eca v\u1ea3i.", "specs": ["Gi\u1ea5y 100gsm", "80 trang", "B\u00eca v\u1ea3i"]}, {"id": 5, "name": "L\u00f3t ly m\u00e2y", "category": "N\u1ed5i b\u1eadt", "description": "M\u00e2y \u0111an \u00b7 \u0110\u01b0\u1eddng k\u00ednh 10 cm \u00b7 B\u1ed9 2 chi\u1ebfc.", "specs": ["M\u00e2y \u0111an", "\u0110\u01b0\u1eddng k\u00ednh 10 cm", "B\u1ed9 2 chi\u1ebfc"]}, {"id": 6, "name": "V\u00ed v\u1ea3i th\u00eau", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "V\u1ea3i cotton \u00b7 Kh\u00f3a k\u00e9o \u00b7 12 \u00d7 9 cm.", "specs": ["V\u1ea3i cotton", "Kh\u00f3a k\u00e9o", "12 \u00d7 9 cm"]}];

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
