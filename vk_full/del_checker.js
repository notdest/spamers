const postfix = '?q=2BTkLx5kho38FHD';

const urls = [
  'https://vk.ru/sperm_donors',
  'https://vk.ru/babydonor',
  'https://vk.ru/zachatie_donor',
  'https://vk.ru/club156711233',
  'https://vk.ru/xaliava_internet',
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

urls.forEach((url) => {
  uiv.open(url + postfix);
  uiv.sleep('10s');
  let found = uiv.eval(`
    return document.body.innerText.replace(/\u00A0/g, ' ').includes('Ничего не найдено');
  `);

  if (!found) {
     uiv.run('pause', '0');
     uiv.log(`ne ok`, 'blue');
  }
});
