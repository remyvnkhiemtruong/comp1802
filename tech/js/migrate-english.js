const legacy = [{"id": 1, "name": "B\u00e0n ph\u00edm c\u01a1 75%", "category": "N\u1ed5i b\u1eadt", "description": "B\u1ed1 c\u1ee5c 75% \u00b7 USB-C \u00b7 Switch c\u01a1.", "specs": ["B\u1ed1 c\u1ee5c 75%", "USB-C", "Switch c\u01a1"]}, {"id": 2, "name": "Chu\u1ed9t kh\u00f4ng d\u00e2y", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "K\u1ebft n\u1ed1i 2.4GHz \u00b7 3 m\u1ee9c DPI \u00b7 Pin AA.", "specs": ["K\u1ebft n\u1ed1i 2.4GHz", "3 m\u1ee9c DPI", "Pin AA"]}, {"id": 3, "name": "M\u00e0n h\u00ecnh 24 inch", "category": "N\u1ed5i b\u1eadt", "description": "24 inch \u00b7 Full HD \u00b7 T\u1ea5m n\u1ec1n IPS.", "specs": ["24 inch", "Full HD", "T\u1ea5m n\u1ec1n IPS"]}, {"id": 4, "name": "RAM 16GB DDR4", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "16GB \u00b7 DDR4 \u00b7 3200MHz \u00b7 Ki\u1ec3m tra mainboard tr\u01b0\u1edbc khi ch\u1ecdn.", "specs": ["16GB", "DDR4", "3200MHz", "Ki\u1ec3m tra mainboard tr\u01b0\u1edbc khi ch\u1ecdn"]}, {"id": 5, "name": "SSD 512GB", "category": "N\u1ed5i b\u1eadt", "description": "512GB \u00b7 SSD SATA 2.5 inch \u00b7 D\u00e0nh cho m\u00e1y c\u00f3 c\u1ed5ng SATA.", "specs": ["512GB", "SSD SATA 2.5 inch", "D\u00e0nh cho m\u00e1y c\u00f3 c\u1ed5ng SATA"]}, {"id": 6, "name": "Tai nghe ch\u1ee5p tai", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Ch\u1ee5p tai \u00b7 Jack 3.5mm \u00b7 Micro t\u00edch h\u1ee3p.", "specs": ["Ch\u1ee5p tai", "Jack 3.5mm", "Micro t\u00edch h\u1ee3p"]}];

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
