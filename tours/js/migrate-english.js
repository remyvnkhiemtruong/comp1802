const legacy = [{"id": 1, "name": "\u0110\u00e0 L\u1ea1t 3 ng\u00e0y", "category": "Cao nguy\u00ean", "description": "3 ng\u00e0y 2 \u0111\u00eam \u00b7 L\u1ecbch tr\u00ecnh th\u00e0nh ph\u1ed1 v\u00e0 v\u00f9ng \u0111\u1ed3i", "detail": "Ng\u00e0y 1: trung t\u00e2m v\u00e0 ga c\u0169. Ng\u00e0y 2: C\u1ea7u \u0110\u1ea5t v\u00e0 Tr\u1ea1i M\u00e1t. Ng\u00e0y 3: \u0111i d\u1ea1o ven h\u1ed3, k\u1ebft th\u00fac h\u00e0nh tr\u00ecnh."}, {"id": 2, "name": "Ph\u00fa Qu\u1ed1c 4 ng\u00e0y", "category": "Bi\u1ec3n \u0111\u1ea3o", "description": "4 ng\u00e0y 3 \u0111\u00eam \u00b7 Bi\u1ec3n v\u00e0 tr\u1ea3i nghi\u1ec7m \u0111\u1ecba ph\u01b0\u01a1ng", "detail": "Ng\u00e0y 1: nh\u1eadn ph\u00f2ng v\u00e0 d\u1ea1o bi\u1ec3n. Ng\u00e0y 2: ph\u00eda nam \u0111\u1ea3o. Ng\u00e0y 3: l\u00e0ng ch\u00e0i v\u00e0 \u1ea9m th\u1ef1c. Ng\u00e0y 4: ngh\u1ec9 ng\u01a1i, tr\u1edf v\u1ec1."}, {"id": 3, "name": "Sapa 3 ng\u00e0y", "category": "Mi\u1ec1n n\u00fai", "description": "3 ng\u00e0y 2 \u0111\u00eam \u00b7 Th\u1ecb tr\u1ea5n v\u00e0 b\u1ea3n l\u00e0ng", "detail": "Ng\u00e0y 1: \u0111\u1ebfn th\u1ecb tr\u1ea5n. Ng\u00e0y 2: \u0111i b\u1ed9 t\u00ecm hi\u1ec3u b\u1ea3n l\u00e0ng v\u1edbi h\u01b0\u1edbng d\u1eabn \u0111\u1ecba ph\u01b0\u01a1ng. Ng\u00e0y 3: ngh\u1ec9 ng\u01a1i v\u00e0 tr\u1edf v\u1ec1."}, {"id": 4, "name": "H\u1ed9i An 2 ng\u00e0y", "category": "Di s\u1ea3n", "description": "2 ng\u00e0y 1 \u0111\u00eam \u00b7 Ph\u1ed1 c\u1ed5 v\u00e0 l\u00e0ng ngh\u1ec1", "detail": "Ng\u00e0y 1: tham quan ph\u1ed1 c\u1ed5. Ng\u00e0y 2: gh\u00e9 l\u00e0ng ngh\u1ec1, th\u01b0\u1edfng th\u1ee9c \u1ea9m th\u1ef1c v\u00e0 k\u1ebft th\u00fac chuy\u1ebfn \u0111i."}, {"id": 5, "name": "Ninh B\u00ecnh 2 ng\u00e0y", "category": "C\u1ea3nh quan", "description": "2 ng\u00e0y 1 \u0111\u00eam \u00b7 C\u1ea3nh quan s\u00f4ng n\u00fai", "detail": "Ng\u00e0y 1: tham quan tuy\u1ebfn thuy\u1ec1n theo \u0111i\u1ec1u ki\u1ec7n th\u1eddi ti\u1ebft. Ng\u00e0y 2: kh\u00e1m ph\u00e1 di t\u00edch v\u00e0 c\u1ea3nh quan, tr\u1edf v\u1ec1."}, {"id": 6, "name": "Hu\u1ebf 3 ng\u00e0y", "category": "Di s\u1ea3n", "description": "3 ng\u00e0y 2 \u0111\u00eam \u00b7 Di s\u1ea3n v\u00e0 \u1ea9m th\u1ef1c", "detail": "Ng\u00e0y 1: khu v\u1ef1c \u0110\u1ea1i N\u1ed9i. Ng\u00e0y 2: l\u0103ng t\u1ea9m v\u00e0 l\u00e0ng ngh\u1ec1. Ng\u00e0y 3: ch\u1ee3 \u0111\u1ecba ph\u01b0\u01a1ng v\u00e0 tr\u1edf v\u1ec1."}];

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
