const urls = [
  'https://vk.ru/sperm_donors',
  'https://vk.ru/babydonor',
  'https://vk.ru/zachatie_donor',
  'https://vk.ru/donorbaby',
];

const messages = [
`‼‼ Москва ‼‼

Могу припарковать машину возле вокзала/аэропорта

Справки: https://vk.ru/album200001250223_314036533

Ограничение: первая попытка до 36 лет (<36), год попыток
Способ: только ИИ в домашних условиях
Донор без со-родительства
Бесплатно, или покрытие расходов, если они ощутимые
Закончил Бауманский, работаю программистом
Мой возраст -- 35 лет, рост 182, вес 75, глаза серо-голубые, группа крови A(II)+
Жду в ЛС
2BTkLx5kho38FHD (так быстрее удалять)`,

`‼‼ Москва ‼‼

Могу припарковать машину возле вокзала/аэропорта

Справки: https://vk.ru/album200001250223_314036533

Ограничение: первая попытка до 36 лет (<36), год попыток
Способ: только ИИ в домашних условиях
Донор без со-родительства
Бесплатно, или покрытие расходов, если они ощутимые.
Закончил Бауманский, работаю программистом.
Мой возраст -- 35 лет, рост 182, вес 75, глаза серо-голубые, группа крови A(II)+
Жду в ЛС
2BTkLx5kho38FHD (так быстрее удалять)`,

`‼‼ Москва ‼‼

Могу припарковать машину возле вокзала/аэропорта

Справки: https://vk.ru/album200001250223_314036533

Ограничение: первая попытка до 36 лет (<36), год попыток
Способ: только ИИ в домашних условиях
Донор без со-родительства
Бесплатно, или покрытие расходов, если они ощутимые
Закончил Бауманский, работаю программистом
Мой возраст -- 35 лет, рост 182, вес 75, глаза серо-голубые, группа крови A(II)+
Жду в ЛС.
2BTkLx5kho38FHD (так быстрее удалять).`
];

urls.forEach((url, index) => {
  try {
    uiv.banner('Адрес ' + (index + 1) + ' из ' + urls.length);
    const message = messages[index % messages.length];
    spam(url, message)
  } catch (error) {
    uiv.log('Не смог: ' + url);
  }
})



function spam(url, message) {
  uiv.open(url);
  uiv.sleep('10s');

  const publish = uiv.$('[data-testid="group_publish_block"]');
  uiv.sleep('1s');
  uiv.page.click(publish);

  uiv.sleep('1s');
  uiv.eval(`
    const el = document.querySelector('span[data-testid="posting_base_screen_input_message"]');
    el.innerText = \`` + message + `\`;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  `);

  // -------- Ставим фотку
  const buttonPhoto = uiv.$('[data-testid="posting_base_screen_select_from_vk"]');
  uiv.page.click(buttonPhoto);
  uiv.sleep('2s');

  const buttonPhoto2 = uiv.$('[data-testid="posting_base_screen_select_photo_vk"]');
  uiv.page.click(buttonPhoto2);
  uiv.sleep('2s');

  const albumSaved = uiv.$('[data-testid="posting_photo_picker_top_albums_item"]');
  uiv.page.click(albumSaved);
  uiv.sleep('2s');

  const firstPhoto = uiv.$('[data-testid="posting_photo_picker_photos_item"]');
  uiv.page.click(firstPhoto);
  uiv.sleep('2s');

  const savePhoto = uiv.$('[data-testid="posting_photo_picker_footer_submit_button"]');
  uiv.page.click(savePhoto);
  uiv.sleep('2s');
  // --------


  const buttonNext = uiv.$('[data-testid="posting_base_screen_next"]');
  uiv.page.click(buttonNext);
  uiv.sleep('2s');

  // -------- Ставим локацию Москва
  const buttonGeo = uiv.$('[data-testid="posting_geo_picker_cell"]');
  uiv.page.click(buttonGeo);
  uiv.sleep('3s');

  const inputGeo = uiv.$('[data-testid="posting_geo_picker_search_input"]');
  uiv.page.type(inputGeo, 'Москва');
  uiv.sleep('3s');

  const buttonMoscow = uiv.$('[data-testid="posting_geo_picker_place_row"]');
  uiv.page.click(buttonMoscow);
  uiv.sleep('2s');

  const buttonSaveGeo = uiv.$('[data-testid="posting_geo_picker_save_button"]');
  uiv.page.click(buttonSaveGeo);
  uiv.sleep('2s');

  //----------- Дальше сохраняем
  const buttonSubmit = uiv.$('[data-testid="posting_submit_button"]');
  uiv.sleep('1s');
  uiv.page.click(buttonSubmit);
  uiv.sleep('3s');
}