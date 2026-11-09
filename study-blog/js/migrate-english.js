const legacy = [{"id": 1, "name": "Ghi ch\u00fa HTML5", "category": "N\u1ed5i b\u1eadt", "description": "Ghi ch\u00e9p 1 \u00b7 HTML \u00b7 Th\u1ef1c h\u00e0nh t\u1eebng b\u01b0\u1edbc", "detail": "D\u00f9ng th\u1ebb h1 cho ti\u00eau \u0111\u1ec1 ch\u00ednh, p cho \u0111o\u1ea1n v\u0103n v\u00e0 a cho li\u00ean k\u1ebft. H\u00e3y t\u1ea1o m\u1ed9t trang gi\u1edbi thi\u1ec7u b\u1ea3n th\u00e2n, ki\u1ec3m tra c\u1ea5u tr\u00fac b\u1eb1ng c\u00f4ng c\u1ee5 c\u1ee7a tr\u00ecnh duy\u1ec7t."}, {"id": 2, "name": "S\u1ed5 tay CSS Grid", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Ghi ch\u00e9p 2 \u00b7 CSS \u00b7 Th\u1ef1c h\u00e0nh t\u1eebng b\u01b0\u1edbc", "detail": "Grid chia b\u1ed1 c\u1ee5c th\u00e0nh h\u00e0ng v\u00e0 c\u1ed9t. Th\u1eed display: grid; grid-template-columns: 1fr 1fr; gap: 16px; sau \u0111\u00f3 chuy\u1ec3n v\u1ec1 m\u1ed9t c\u1ed9t trong media query cho m\u00e0n h\u00ecnh nh\u1ecf."}, {"id": 3, "name": "\u00d4n t\u1eadp JavaScript", "category": "N\u1ed5i b\u1eadt", "description": "Ghi ch\u00e9p 3 \u00b7 JavaScript \u00b7 Th\u1ef1c h\u00e0nh t\u1eebng b\u01b0\u1edbc", "detail": "L\u1ea5y ph\u1ea7n t\u1eed b\u1eb1ng document.querySelector, l\u1eafng nghe s\u1ef1 ki\u1ec7n click b\u1eb1ng addEventListener v\u00e0 c\u1eadp nh\u1eadt textContent. Th\u1eed t\u1ea1o m\u1ed9t n\u00fat \u0111\u1ebfm l\u01b0\u1ee3t b\u1ea5m, b\u1eaft \u0111\u1ea7u t\u1eeb 0."}, {"id": 4, "name": "C\u00e1ch \u0111\u1ecdc t\u00e0i li\u1ec7u", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Ghi ch\u00e9p 4 \u00b7 Thi\u1ebft k\u1ebf \u00b7 Th\u1ef1c h\u00e0nh t\u1eebng b\u01b0\u1edbc", "detail": "Ch\u1ecdn m\u1ed9t nhi\u1ec7m v\u1ee5 ch\u00ednh c\u1ee7a m\u00e0n h\u00ecnh. S\u1eafp x\u1ebfp ti\u00eau \u0111\u1ec1, th\u00f4ng tin v\u00e0 n\u00fat h\u00e0nh \u0111\u1ed9ng theo th\u1ee9 t\u1ef1 ng\u01b0\u1eddi d\u00f9ng c\u1ea7n \u0111\u1ecdc. Gi\u1ea3m m\u00e0u v\u00e0 \u0111\u01b0\u1eddng vi\u1ec1n kh\u00f4ng ph\u1ee5c v\u1ee5 ph\u00e2n c\u1ea5p."}, {"id": 5, "name": "L\u1eadp k\u1ebf ho\u1ea1ch h\u1ecdc", "category": "N\u1ed5i b\u1eadt", "description": "Ghi ch\u00e9p 5 \u00b7 Th\u1ef1c h\u00e0nh \u00b7 Th\u1ef1c h\u00e0nh t\u1eebng b\u01b0\u1edbc", "detail": "Chia m\u1ed9t y\u00eau c\u1ea7u l\u1edbn th\u00e0nh ba b\u01b0\u1edbc nh\u1ecf. Ho\u00e0n th\u00e0nh b\u01b0\u1edbc \u0111\u1ea7u, ki\u1ec3m tra k\u1ebft qu\u1ea3 b\u1eb1ng v\u00ed d\u1ee5 c\u1ee5 th\u1ec3 r\u1ed3i m\u1edbi chuy\u1ec3n b\u01b0\u1edbc. Vi\u1ebft l\u1ea1i \u0111i\u1ec1u \u0111\u00e3 h\u1ecdc trong n\u0103m d\u00f2ng."}, {"id": 6, "name": "Checklist \u0111\u1ed3 \u00e1n web", "category": "B\u1ed9 s\u01b0u t\u1eadp", "description": "Ghi ch\u00e9p 6 \u00b7 Tr\u00ecnh b\u00e0y \u00b7 Th\u1ef1c h\u00e0nh t\u1eebng b\u01b0\u1edbc", "detail": "M\u1edf \u0111\u1ea7u b\u1eb1ng v\u1ea5n \u0111\u1ec1 c\u1ea7n gi\u1ea3i quy\u1ebft. Demo m\u1ed9t thao t\u00e1c t\u1eeb \u0111\u1ea7u \u0111\u1ebfn cu\u1ed1i, gi\u1ea3i th\u00edch quy\u1ebft \u0111\u1ecbnh ch\u00ednh v\u00e0 k\u1ebft th\u00fac b\u1eb1ng m\u1ed9t gi\u1edbi h\u1ea1n th\u1ef1c t\u1ebf c\u1ee7a s\u1ea3n ph\u1ea9m."}];

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
