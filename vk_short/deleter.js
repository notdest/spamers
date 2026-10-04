const sign = '2BTkLx5kho38FHD';

const urls = [
  'https://vk.ru/sperm_donors',
  'https://vk.ru/babydonor',
  'https://vk.ru/zachatie_donor',
  'https://vk.ru/donorbaby',
];

urls.forEach((url, index) => {
  uiv.goto(url);
  uiv.banner('Адрес ' + (index + 1) + ' из ' + urls.length);
  uiv.sleep('2s');

  try {
    const search = uiv.$('[data-testid="community-tabs-search-button"]');
    uiv.sleep('1s');
    uiv.page.click(search);

    uiv.sleep('1s');
    uiv.evaluate(`
      const div = document.querySelector('div[data-testid="community-tabs-search-input"]');
      const input = div.querySelector('input');
      input.value = '` + sign + `';
      input.closest('form')?.requestSubmit();
    `);
    uiv.sleep('1s');

    const toogle = uiv.$('[data-testid="post_context_menu_toggle"]');
    uiv.sleep('2s');
    uiv.page.click(toogle);

    const del = uiv.$('[data-testid="post_context_menu_item_delete"]');
    uiv.sleep('1s');
    uiv.page.click(del);

    uiv.$('[data-testid="feed-item-custom-state-block"]');
  } catch (error) {
    uiv.log('Not found ' + url);
  }
  
  uiv.sleep('1s');
});
