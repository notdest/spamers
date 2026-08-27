const urls = [
  'https://vk.ru/sperm_donors',
  'https://vk.ru/babydonor',
  'https://vk.ru/zachatie_donor',
  'https://vk.ru/donorbaby',
];

const messages = [`‼‼ Москва ‼‼
могу припарковать машину возле вокзала/аэропорта,
«Работаю» с женщинами до 35 лет (≤ 35)
Донор без со-родительства
Справки / анализы в альбомах моей страницы
Закончил Бауманский, работаю программистом
Мой возраст -- 35 лет, рост 182, вес 75, глаза серо-голубые, группа крови A(II)+
Способ - только ИИ в домашних условиях
Бесплатно, или покрытие расходов, если они ощутимые
Жду в ЛС
2BTkLx5kho38FHD`,

`‼‼ Москва ‼‼
могу припарковать машину возле вокзала/аэропорта,
«Работаю» с женщинами до 35 лет (≤ 35)
Донор без со-родительства
Справки / анализы в альбомах моей страницы
Закончил Бауманский, работаю программистом
Мой возраст - 35 лет, рост 182, вес 75, глаза серо-голубые, группа крови A(II)+
Способ -- только ИИ в домашних условиях
Бесплатно, или покрытие расходов, если они ощутимые
Жду в ЛС
2BTkLx5kho38FHD`,

`‼‼ Москва ‼‼
могу припарковать машину возле вокзала/аэропорта,
«Работаю» с женщинами до 35 лет (≤ 35)
Донор без со-родительства
Справки / анализы в альбомах моей страницы
Закончил Бауманский, работаю программистом
Мой возраст -- 35 лет, рост 182, вес 75, глаза серо-голубые, группа крови A(II)+
Способ -- только ИИ в домашних условиях
Бесплатно, или покрытие расходов, если они ощутимые
Жду в ЛС
2BTkLx5kho38FHD`];

urls.forEach((url, index) => {
  try {
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

  const buttonNext = uiv.$('[data-testid="posting_base_screen_next"]');
  uiv.sleep('1s');
  uiv.page.click(buttonNext);

  uiv.sleep('1s');
  const buttonSubmit = uiv.$('[data-testid="posting_submit_button"]');
  uiv.sleep('1s');
  uiv.page.click(buttonSubmit);
  uiv.sleep('3s');
}