const urls = [
  'https://vk.ru/sperm_donors',
  'https://vk.ru/babydonor',
  'https://vk.ru/zachatie_donor',
  'https://vk.ru/club156711233',
  // 'https://vk.ru/xaliava_internet',  // стена ебанутая, выкидывает
  'https://vk.ru/donorbaby',
  'https://vk.ru/sprmdnr',
  'https://vk.ru/donor_spermy_zachatie_rebenka',
  'https://vk.ru/club47791197',
  'https://vk.ru/kidsforyouru',
  'https://vk.ru/club224704562',
  'https://vk.ru/papa_poisk',
  'https://vk.ru/donorspermsamara',
  'https://vk.ru/donorspermy',
  'https://vk.ru/donorvspb',
  'https://vk.ru/club52533903',
  'https://vk.ru/club51084496',
  'https://vk.ru/spermadonor',
  'https://vk.ru/club42718257',
  'https://vk.ru/club172472490',
  'https://vk.ru/club49426059',
  'https://vk.ru/clubdonorspermreal',
  'https://vk.ru/club228657706',
  'https://vk.ru/club218399225',
  'https://vk.ru/club58867916',
  'https://vk.ru/donor_sper',
  'https://vk.ru/club52079372',
  'https://vk.ru/club117465772',
  'https://vk.ru/super_donor',
  'https://vk.ru/club104840252',
  'https://vk.ru/club75311187',
  'https://vk.ru/club17004325',
  'https://vk.ru/donori_spermi_minsk',
  'https://vk.ru/club35343644',
  'https://vk.ru/club77360081',
  'https://vk.ru/club76095110',
  'https://vk.ru/club29907354',
  'https://vk.ru/donor_spermi',
  'https://vk.ru/club92046318',
  'https://vk.ru/donor.sperm.moscow',
  'https://vk.ru/club.donor.sperm',
  'https://vk.ru/club161400993',
  'https://vk.ru/club70574358',
  'https://vk.ru/club70574431',
  'https://vk.ru/club151391477',
  'https://vk.ru/probesplodie',
  'https://vk.ru/club77354998',
  'https://vk.ru/club111474774',
  'https://vk.ru/donorspermspb',
  'https://vk.ru/club66312389',
  'https://vk.ru/club104075844',
  'https://vk.ru/donorspermyspb',
  'https://vk.ru/club166507273',
  'https://vk.ru/club54601901',
  'https://vk.ru/astrobaby',
  'https://vk.ru/club71227818',
  'https://vk.ru/club7100325',
  'https://vk.ru/club59049106',
  'https://vk.ru/club75853121'
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
