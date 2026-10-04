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
  uiv.sleep('5s');

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

  let found = uiv.evaluate(`
    return document.body.innerText.replace(/\u00A0/g, ' ').includes('ничего не найдено.');
  `);

  if (!found) {
     uiv.run('pause', '0');
     uiv.log(`ne ok`, 'blue');
  }
});
