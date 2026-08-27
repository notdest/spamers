const postfix = '?q=2BTkLx5kho38FHD';

const urls = [
  'https://vk.ru/sperm_donors',
  'https://vk.ru/babydonor',
  'https://vk.ru/zachatie_donor',
  'https://vk.ru/donorbaby',
];

urls.forEach((url) => {
  uiv.open(url + postfix);

  try {
    const toogle = uiv.$('[data-testid="post_context_menu_toggle"]');
    uiv.sleep('1s');
    uiv.page.click(toogle);

    const del = uiv.$('[data-testid="post_context_menu_item_delete"]');
    uiv.sleep('1s');
    uiv.page.click(del);

    uiv.$('[data-testid="feed-item-custom-state-block"]');
  } catch (error) {
    uiv.log('Not found ' + url + postfix);
  }
  
  uiv.sleep('1s');
});
