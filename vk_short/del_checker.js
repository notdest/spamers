const postfix = '?q=2BTkLx5kho38FHD';

const urls = [
  'https://vk.ru/sperm_donors',
  'https://vk.ru/babydonor',
  'https://vk.ru/zachatie_donor',
  'https://vk.ru/donorbaby',
];

urls.forEach((url, index) => {
  uiv.open(url + postfix);
  uiv.banner('Адрес ' + (index + 1) + ' из ' + urls.length);
  uiv.sleep('5s');
  let found = uiv.eval(`
    return document.body.innerText.replace(/\u00A0/g, ' ').includes('Ничего не найдено');
  `);

  if (!found) {
     uiv.run('pause', '0');
     uiv.log(`ne ok`, 'blue');
  }
});
