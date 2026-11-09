const legacy = [{"id": 1, "name": "Ph\u1edf H\u00e0 N\u1ed9i", "category": "Mi\u1ec1n B\u1eafc", "description": "B\u00e1nh ph\u1edf, n\u01b0\u1edbc d\u00f9ng v\u00e0 c\u00e1c lo\u1ea1i th\u1ecbt t\u1ea1o n\u00ean m\u00f3n \u0103n quen thu\u1ed9c c\u1ee7a mi\u1ec1n B\u1eafc.", "detail": "Ch\u00fa \u00fd s\u1ef1 c\u00e2n b\u1eb1ng gi\u1eefa n\u01b0\u1edbc d\u00f9ng, b\u00e1nh ph\u1edf v\u00e0 rau gia v\u1ecb. C\u00e1ch n\u00eam v\u00e0 m\u00f3n \u0103n k\u00e8m kh\u00e1c nhau theo m\u1ed7i qu\u00e1n."}, {"id": 2, "name": "B\u00fan b\u00f2 Hu\u1ebf", "category": "Mi\u1ec1n Trung", "description": "M\u00f3n b\u00fan v\u1edbi h\u01b0\u01a1ng s\u1ea3, n\u01b0\u1edbc d\u00f9ng \u0111\u1eadm v\u00e0 v\u1ecb cay \u0111\u1eb7c tr\u01b0ng.", "detail": "Th\u01b0\u1edfng th\u1ee9c t\u1eeb \u00edt gia v\u1ecb tr\u01b0\u1edbc, sau \u0111\u00f3 th\u00eam \u1edbt theo kh\u1ea9u v\u1ecb. H\u1ecfi th\u00e0nh ph\u1ea7n n\u1ebfu b\u1ea1n c\u00f3 d\u1ecb \u1ee9ng ho\u1eb7c c\u1ea7n tr\u00e1nh m\u1ed9t lo\u1ea1i th\u1ecbt."}, {"id": 3, "name": "M\u00ec Qu\u1ea3ng", "category": "Mi\u1ec1n Trung", "description": "S\u1ee3i m\u00ec, \u00edt n\u01b0\u1edbc d\u00f9ng \u0111\u1eadm v\u1ecb, rau s\u1ed1ng v\u00e0 b\u00e1nh tr\u00e1ng t\u1ea1o th\u00e0nh m\u1ed9t ph\u1ea7n \u0103n nhi\u1ec1u l\u1edbp k\u1ebft c\u1ea5u.", "detail": "Tr\u1ed9n nh\u1eb9 c\u00e1c th\u00e0nh ph\u1ea7n, th\u00eam rau v\u00e0 b\u00e1nh tr\u00e1ng theo kh\u1ea9u v\u1ecb. C\u00e1c phi\u00ean b\u1ea3n c\u00f3 th\u1ec3 d\u00f9ng g\u00e0, t\u00f4m ho\u1eb7c th\u1ecbt."}, {"id": 4, "name": "Cao l\u1ea7u H\u1ed9i An", "category": "Mi\u1ec1n Trung", "description": "M\u00f3n m\u00ec g\u1eafn v\u1edbi H\u1ed9i An, k\u1ebft h\u1ee3p s\u1ee3i m\u00ec d\u00e0y, th\u1ecbt v\u00e0 rau.", "detail": "D\u00e0nh m\u1ed9t b\u1eefa tr\u01b0a \u0111\u1ec3 t\u00ecm hi\u1ec3u m\u00f3n \u0103n v\u00e0 c\u00e2u chuy\u1ec7n khu ph\u1ed1. Th\u00e0nh ph\u1ea7n v\u00e0 c\u00e1ch ch\u1ebf bi\u1ebfn thay \u0111\u1ed5i theo n\u01a1i b\u00e1n."}, {"id": 5, "name": "B\u00e1nh x\u00e8o mi\u1ec1n T\u00e2y", "category": "Mi\u1ec1n Nam", "description": "B\u00e1nh \u0111\u1ed5 tr\u00ean ch\u1ea3o v\u1edbi ph\u1ea7n v\u1ecf gi\u00f2n, \u0103n c\u00f9ng nhi\u1ec1u lo\u1ea1i rau.", "detail": "Cu\u1ed1n m\u1ed9t mi\u1ebfng nh\u1ecf c\u00f9ng rau, ch\u1ea5m v\u1eeba \u0111\u1ee7. H\u1ecfi th\u00e0nh ph\u1ea7n nh\u00e2n n\u1ebfu kh\u00f4ng d\u00f9ng t\u00f4m ho\u1eb7c th\u1ecbt."}, {"id": 6, "name": "C\u01a1m t\u1ea5m S\u00e0i G\u00f2n", "category": "Mi\u1ec1n Nam", "description": "C\u01a1m t\u1eeb h\u1ea1t g\u1ea1o t\u1ea5m, th\u01b0\u1eddng \u0111i c\u00f9ng s\u01b0\u1eddn v\u00e0 c\u00e1c m\u00f3n \u0103n k\u00e8m.", "detail": "Ch\u1ecdn ph\u1ea7n \u0103n v\u1eeba s\u1ee9c, th\u00eam \u0111\u1ed3 chua v\u00e0 n\u01b0\u1edbc m\u1eafm theo kh\u1ea9u v\u1ecb. \u0110\u00e2y l\u00e0 m\u00f3n \u0103n th\u01b0\u1eddng g\u1eb7p trong nh\u1ecbp s\u1ed1ng th\u00e0nh ph\u1ed1."}];

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
