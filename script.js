const LANGUAGES = {
  ru: {
    language: 'Язык', theme: 'Тема', themeDark: 'Тёмная', themeLight: 'Светлая', themeOcean: 'Океан',
    siteSettings: 'Настройки сайта', filtersLabel: 'Поиск и фильтры', heroesLabel: 'Персонажи',
    pageTitle: 'База героев MLBB',
    title: 'Mobile Legends: Bang Bang',
    subtitle: 'Добро пожаловать в архив игр: здесь можно учиться играть и смотреть характеристики всех героев.',
    chooseGame: 'Выберите игру', gamePickerHint: 'Каталоги игр можно добавлять отдельно.',
    gameMlbb: 'Mobile Legends: Bang Bang', sectionsLabel: 'Разделы сайта', sections: 'Разделы',
    characteristics: 'Характеристики', winningGuide: 'Как играть и побеждать',
    sidebarNote: 'Выберите раздел, чтобы начать.', gameDatabase: 'БАЗА ИГРЫ',
    characteristicsIntro: 'Сравнивайте героев, боевые показатели и рекомендуемые сборки.',
    victoryPlaybook: 'ПЛАН НА ПОБЕДУ',
    guideIntro: 'Сосредоточьтесь на целях, командной игре и безопасном преимуществе.',
    earlyGame: 'Начало игры',
    earlyTipOne: 'Фармите свою линию и безопасно добивайте миньонов, чтобы быстрее получить золото и опыт.',
    earlyTipTwo: 'Следите за мини-картой; отступайте, если враги пропали и могут готовить нападение.',
    earlyTipThree: 'Помогайте команде у ближайшей цели, если линия в безопасности.',
    midGame: 'Середина игры',
    midTipOne: 'Двигайтесь с союзниками и проверяйте карту, прежде чем заходить в реку или вражескую область.',
    midTipTwo: 'Превращайте выигранные схватки в башни, черепаху или пространство на карте.',
    midTipThree: 'Покупайте защитные предметы против главной угрозы соперника.',
    lateGame: 'Конец игры',
    lateTipOne: 'Не рискуйте в одиночку: одна ошибка может отдать врагам лорда или базу.',
    lateTipTwo: 'Собирайтесь перед появлением лорда и сохраняйте способности для решающей битвы.',
    lateTipThree: 'После победы в командной битве вместе продвигайтесь к цели и заканчивайте игру.',
    teamFight: 'Командные бои',
    teamTipOne: 'Перед началом проверьте позиции союзников и не начинайте бой в меньшинстве.',
    teamTipTwo: 'Герои передней линии создают пространство; хрупкие герои держатся позади и бьют безопасно.',
    teamTipThree: 'Выбирайте достижимую цель и помогайте команде контролем и уроном.',
    laneGuide: 'Линии и роли MLBB',
    laneTipOne: 'Золотая линия: безопасно фармите и собирайте предметы; стрелку важно пережить начало игры.',
    laneTipTwo: 'Центр: магу следует быстро очистить волну, а затем помочь на реке или соседней линии.',
    laneTipThree: 'Линия опыта: бойцу нужно удерживать линию и быть готовым к схваткам за черепаху.',
    laneTipFour: 'Лес: возьмите «Воздаяние», чередуйте лагеря с линиями и согласуйте выходы на черепаху и лорда.',
    laneTipFive: 'Роум: помогайте союзникам и проверяйте кусты вместе с командой; не забирайте их безопасный фарм.',
    objectiveGuide: 'Цели и перемещения',
    objectiveTipOne: 'После успешного ганка или победы в бою сразу решите, что можно забрать: башню, черепаху, лорда или вражеский лес.',
    objectiveTipTwo: 'Черепаха даёт команде преимущество в начале; собирайтесь заранее и помогайте леснику контролировать подходы.',
    objectiveTipThree: 'Лорд помогает продвинуть линии. Убедитесь, что союзники готовы сопровождать его, прежде чем начинать.',
    objectiveTipFour: 'Башни открывают карту и безопасные маршруты; не преследуйте врагов, забывая о свободной цели.',
    itemGuide: 'Сборка и контрпредметы',
    itemTipOne: 'Начинайте с рекомендуемой сборки, но меняйте порядок и предметы по ситуации в матче.',
    itemTipTwo: 'Против сильного лечения рассмотрите сокращение восстановления; против магического взрывного урона — магическую защиту.',
    itemTipThree: 'Против физического урона подберите броню, а против критических атак — подходящую защиту от критов.',
    itemTipFour: 'Следите за вражескими предметами и покупайте защиту до решающего боя, а не после него.',
    practiceGuide: 'Изучение героя',
    practiceTipOne: 'Прочитайте умения и пассивный эффект; проверьте дальность атаки, стоимость ресурсов и время перезарядки.',
    practiceTipTwo: 'Потренируйте базовую комбинацию в тренировке и узнайте, какое умение нужно сохранить для отхода.',
    practiceTipThree: 'Выберите линию, рекомендуемую для героя, и используйте характеристики, сложность, сборку и контрпики в первом разделе.',
    practiceTipFour: 'После матча оцените позиционирование, карту и потраченные умения, а не только итоговый счёт.',
    guideDisclaimer: 'Советы общие: адаптируйте их к составам команд и обновлениям игры.',
    search: 'Поиск',
    searchPlaceholder: 'Имя, роль, линия, предмет...', role: 'Роль', difficulty: 'Сложность',
    damageType: 'Тип урона', lane: 'Линия', sort: 'Сортировка', sortDefault: 'По умолчанию',
    sortAsc: 'По имени: А—Я', sortDesc: 'По имени: Я—А', sortDifficulty: 'По сложности', reset: 'Сбросить',
    allRoles: 'Все роли', any: 'Любая', anyType: 'Любой', anyLane: 'Любая', unknown: 'Не указано',
    physical: 'Физический', magic: 'Магический', mixed: 'Смешанный', easy: 'Легко', medium: 'Средне', hard: 'Сложно',
    builds: 'Рекомендуемые предметы', counters: 'Сложные противники',
    heroTitle: 'Титул', region: 'Регион', released: 'Дата выхода',
    descriptionUnavailable: 'Описание пока не указано.',
    combatInfo: 'Боевые характеристики', level: 'Уровень', levelOne: '1', levelFifteen: '15',
    health: 'Здоровье', healthRegen: 'Восстановление здоровья', mana: 'Мана',
    manaRegen: 'Восстановление маны', physicalAttack: 'Физическая атака',
    physicalDefense: 'Физическая защита', magicDefense: 'Магическая защита',
    attackSpeed: 'Скорость атаки', attackSpeedRatio: 'Коэффициент скорости атаки',
    movementSpeed: 'Скорость передвижения',
    attackRange: 'Дальность атаки', resource: 'Ресурс', attackType: 'Тип атаки',
    melee: 'Ближний бой', ranged: 'Дальний бой', hybrid: 'Гибридный',
    none: 'Нет', energy: 'Энергия', durability: 'Живучесть', offense: 'Атака',
    controlRating: 'Контроль', ratingScale: '(из 10)', ratingOutOf: value => `${value}/10`,
    statUnavailable: '—',
    guideUnavailable: 'Рекомендации для этого персонажа пока не добавлены.',
    countersUnavailable: 'Контрпики пока не добавлены.',
    noResults: 'Персонажи не найдены. Измените запрос или сбросьте фильтры.',
    results: n => `Найдено персонажей: ${n}`,
    preferenceError: 'Не удалось сохранить настройки в этом браузере.',
    catalogueError: 'Не удалось загрузить базу персонажей. Обновите страницу и попробуйте снова.',
    difficultyEstimated: 'Сложность не указана', typeEstimated: 'Тип урона не указан',
    specialty: 'Специализация', noLane: 'Линия не указана',
    roleNames: { Marksman: 'Стрелок', Fighter: 'Боец', Assassin: 'Убийца', Tank: 'Танк', Mage: 'Маг', Support: 'Поддержка' },
    specialtyNames: {
      Finisher: 'Добивание', Damage: 'Урон', Regen: 'Восстановление', Charge: 'Атака',
      'Magic Damage': 'Магический урон', 'Crowd Control': 'Контроль', Guard: 'Защита',
      Poke: 'Дистанционная атака', Burst: 'Взрывной урон', Chase: 'Преследование',
      Push: 'Продвижение', Control: 'Контроль', Initiator: 'Инициатор', Support: 'Поддержка',
      'Mixed Damage': 'Смешанный урон'
    },
    laneNames: { 'Gold Lane': 'Линия золота', Jungle: 'Лес', 'EXP Lane': 'Линия опыта', Roaming: 'Роум', 'Mid Lane': 'Центр' }
  },
  en: {
    language: 'Language', theme: 'Theme', themeDark: 'Dark', themeLight: 'Light', themeOcean: 'Ocean',
    siteSettings: 'Site settings', filtersLabel: 'Search and filters', heroesLabel: 'Heroes',
    pageTitle: 'MLBB Hero Database',
    title: 'Mobile Legends: Bang Bang',
    subtitle: 'Welcome to archive of games where you can learn how to play and see all characteristics of all heroes',
    chooseGame: 'Choose a game', gamePickerHint: 'Add more game catalogs as separate datasets.',
    gameMlbb: 'Mobile Legends: Bang Bang', sectionsLabel: 'Site sections', sections: 'Sections',
    characteristics: 'Characteristics', winningGuide: 'How to play and win',
    sidebarNote: 'Choose a section to get started.', gameDatabase: 'GAME DATABASE',
    characteristicsIntro: 'Compare heroes, combat stats, and suggested builds.',
    victoryPlaybook: 'VICTORY PLAYBOOK',
    guideIntro: 'Focus on objectives, teamwork, and building a safe advantage.',
    earlyGame: 'Early game',
    earlyTipOne: 'Farm your lane and secure minion last hits safely to build gold and experience.',
    earlyTipTwo: 'Watch the minimap; retreat when enemies disappear and may be preparing a gank.',
    earlyTipThree: 'Help your team contest a nearby objective when your lane is safe.',
    midGame: 'Mid game',
    midTipOne: 'Move with allies and check the map before entering the river or enemy territory.',
    midTipTwo: 'Turn won skirmishes into turrets, Turtle, or control of map space.',
    midTipThree: 'Buy defensive items that answer the opposing team’s main threat.',
    lateGame: 'Late game',
    lateTipOne: 'Avoid risky solo plays: one mistake can give the enemy Lord or your base.',
    lateTipTwo: 'Group before Lord spawns and save key abilities for the decisive fight.',
    lateTipThree: 'After winning a team fight, push together and convert it into an objective or game finish.',
    teamFight: 'Team fights',
    teamTipOne: 'Check ally positions before engaging; avoid starting a fight while outnumbered.',
    teamTipTwo: 'Frontliners create space; fragile heroes stay behind them and deal damage safely.',
    teamTipThree: 'Choose a reachable target and support your team with control and damage.',
    laneGuide: 'MLBB lanes and roles',
    laneTipOne: 'Gold lane: farm safely and build items; marksmen need to survive the early game.',
    laneTipTwo: 'Mid lane: mages should clear the wave quickly, then help around the river or a nearby lane.',
    laneTipThree: 'EXP lane: fighters should hold their lane and be ready to contest Turtle skirmishes.',
    laneTipFour: 'Jungle: equip Retribution, balance camps with lane pressure, and coordinate Turtle and Lord attempts.',
    laneTipFive: 'Roam: help allies and check bushes with your team; avoid taking their safe farm.',
    objectiveGuide: 'Objectives and rotations',
    objectiveTipOne: 'After a successful gank or fight, decide what you can take next: a turret, Turtle, Lord, or enemy jungle.',
    objectiveTipTwo: 'Turtle gives your team an early advantage; group beforehand and help your jungler control approaches.',
    objectiveTipThree: 'Lord helps push lanes. Make sure your allies can follow up before starting it.',
    objectiveTipFour: 'Turrets open the map and safer routes; do not chase enemies while a free objective is available.',
    itemGuide: 'Builds and counter items',
    itemTipOne: 'Start from the suggested build, but adapt item order and choices to the match.',
    itemTipTwo: 'Against strong healing, consider anti-heal; against magic burst, add magic defense.',
    itemTipThree: 'Build armor against physical damage and suitable critical-damage defense against crit-focused enemies.',
    itemTipFour: 'Track enemy items and buy defensive answers before the decisive fight, not after it.',
    practiceGuide: 'Learning a hero',
    practiceTipOne: 'Read each skill and passive; check attack range, resource costs, and cooldowns.',
    practiceTipTwo: 'Practice a basic combo in training and identify which skill you should save to escape.',
    practiceTipThree: 'Choose a lane suited to the hero and use the first section for stats, difficulty, builds, and counters.',
    practiceTipFour: 'After a match, review positioning, map awareness, and ability use—not only the final score.',
    guideDisclaimer: 'These are general tips; adapt them to team compositions and game updates.',
    search: 'Search',
    searchPlaceholder: 'Name, role, lane, item...', role: 'Role', difficulty: 'Difficulty',
    damageType: 'Damage type', lane: 'Lane', sort: 'Sort', sortDefault: 'Default',
    sortAsc: 'Name: A—Z', sortDesc: 'Name: Z—A', sortDifficulty: 'Difficulty', reset: 'Reset',
    allRoles: 'All roles', any: 'Any', anyType: 'Any', anyLane: 'Any', unknown: 'Not listed',
    physical: 'Physical', magic: 'Magic', mixed: 'Mixed', easy: 'Easy', medium: 'Medium', hard: 'Hard',
    builds: 'Suggested items', counters: 'Tough matchups',
    heroTitle: 'Title', region: 'Region', released: 'Release date',
    descriptionUnavailable: 'No description is listed yet.',
    combatInfo: 'Combat stats', level: 'Level', levelOne: '1', levelFifteen: '15',
    health: 'Health', healthRegen: 'Health regeneration', mana: 'Mana',
    manaRegen: 'Mana regeneration', physicalAttack: 'Physical attack',
    physicalDefense: 'Physical defense', magicDefense: 'Magic defense',
    attackSpeed: 'Attack speed', attackSpeedRatio: 'Attack speed ratio',
    movementSpeed: 'Movement speed',
    attackRange: 'Attack range', resource: 'Resource', attackType: 'Attack type',
    melee: 'Melee', ranged: 'Ranged', hybrid: 'Hybrid',
    none: 'None', energy: 'Energy', durability: 'Durability', offense: 'Offense',
    controlRating: 'Control', ratingScale: '(out of 10)', ratingOutOf: value => `${value}/10`,
    statUnavailable: '—',
    guideUnavailable: 'A guide for this hero has not been added yet.',
    countersUnavailable: 'Counters have not been added yet.',
    noResults: 'No heroes found. Change your search or reset the filters.',
    results: n => `Heroes found: ${n}`,
    preferenceError: 'Could not save this preference in your browser.',
    catalogueError: 'Could not load the hero catalogue. Refresh the page and try again.',
    difficultyEstimated: 'Difficulty not listed', typeEstimated: 'Damage type not listed',
    specialty: 'Specialty', noLane: 'Lane not listed',
    roleNames: { Marksman: 'Marksman', Fighter: 'Fighter', Assassin: 'Assassin', Tank: 'Tank', Mage: 'Mage', Support: 'Support' },
    specialtyNames: {
      Finisher: 'Finisher', Damage: 'Damage', Regen: 'Regen', Charge: 'Charge',
      'Magic Damage': 'Magic damage', 'Crowd Control': 'Crowd control', Guard: 'Guard',
      Poke: 'Poke', Burst: 'Burst', Chase: 'Chase', Push: 'Push', Control: 'Control',
      Initiator: 'Initiator', Support: 'Support', 'Mixed Damage': 'Mixed damage'
    },
    laneNames: { 'Gold Lane': 'Gold lane', Jungle: 'Jungle', 'EXP Lane': 'EXP lane', Roaming: 'Roaming', 'Mid Lane': 'Mid lane' }
  },
  uz: {
    language: 'Til', theme: 'Mavzu', themeDark: 'Qorong‘i', themeLight: 'Yorug‘', themeOcean: 'Okean',
    siteSettings: 'Sayt sozlamalari', filtersLabel: 'Qidirish va filtrlar', heroesLabel: 'Qahramonlar',
    pageTitle: 'MLBB qahramonlari bazasi',
    title: 'Mobile Legends: Bang Bang',
    subtitle: 'O‘yinlar arxiviga xush kelibsiz: bu yerda o‘ynashni o‘rganib, barcha qahramonlarning xususiyatlarini ko‘rishingiz mumkin.',
    chooseGame: 'O‘yinni tanlang', gamePickerHint: 'Boshqa o‘yinlar katalogini alohida qo‘shish mumkin.',
    gameMlbb: 'Mobile Legends: Bang Bang', sectionsLabel: 'Sayt bo‘limlari', sections: 'Bo‘limlar',
    characteristics: 'Xususiyatlar', winningGuide: 'Qanday o‘ynash va g‘alaba qozonish',
    sidebarNote: 'Boshlash uchun bo‘limni tanlang.', gameDatabase: 'O‘YIN BAZASI',
    characteristicsIntro: 'Qahramonlar, jang xususiyatlari va tavsiya etilgan jihozlarni solishtiring.',
    victoryPlaybook: 'G‘ALABA REJASI',
    guideIntro: 'Maqsadlar, jamoaviy o‘yin va xavfsiz ustunlikka e’tibor qarating.',
    earlyGame: 'O‘yin boshi',
    earlyTipOne: 'Oltin va tajriba yig‘ish uchun yo‘lakda xavfsiz farm qiling va minionlarni oxirgi zarba bilan oling.',
    earlyTipTwo: 'Xarita mini-ko‘rinishini kuzating; dushmanlar yo‘qolsa va hujum qilishi mumkin bo‘lsa, chekining.',
    earlyTipThree: 'Yo‘lak xavfsiz bo‘lsa, yaqin maqsad uchun jamoaga yordam bering.',
    midGame: 'O‘yin o‘rtasi',
    midTipOne: 'Ittifoqchilar bilan harakatlaning; daryo yoki dushman hududiga kirishdan oldin xaritani tekshiring.',
    midTipTwo: 'Yutilgan janglarni minoralar, Toshbaqa yoki xaritada ustunlikka aylantiring.',
    midTipThree: 'Raqib jamoaning asosiy xavfiga qarshi himoya buyumlarini oling.',
    lateGame: 'O‘yin oxiri',
    lateTipOne: 'Yolg‘iz xavfli harakat qilmang: bitta xato dushmanga Lord yoki bazani berishi mumkin.',
    lateTipTwo: 'Lord chiqishidan oldin jamlaning va hal qiluvchi jang uchun muhim qobiliyatlarni saqlang.',
    lateTipThree: 'Jamoaviy jangda g‘alaba qozongach, birga oldinga boring va o‘yinni yakunlang.',
    teamFight: 'Jamoaviy janglar',
    teamTipOne: 'Jangni boshlashdan oldin ittifoqchilar joylashuvini tekshiring; son jihatdan kam bo‘lsangiz hujum qilmang.',
    teamTipTwo: 'Oldingi safdagi qahramonlar joy ochadi; himoyasiz qahramonlar orqada turib xavfsiz hujum qiladi.',
    teamTipThree: 'Yetib borish mumkin bo‘lgan nishonni tanlang va nazorat hamda zarar bilan jamoaga yordam bering.',
    laneGuide: 'MLBB yo‘laklari va rollari',
    laneTipOne: 'Oltin yo‘lagi: xavfsiz farm qiling va buyum yig‘ing; mergan o‘yin boshida omon qolishi muhim.',
    laneTipTwo: 'O‘rta yo‘lak: sehrgar to‘lqinni tez tozalab, daryo yoki yaqin yo‘lakka yordam berishi kerak.',
    laneTipThree: 'Tajriba yo‘lagi: jangchi yo‘lakni ushlab, Toshbaqa uchun jangga tayyor tursin.',
    laneTipFour: 'Jungli: Retribution oling, lagerlarni yo‘laklarga yordam bilan muvozanatlang va Toshbaqa hamda Lordni jamoa bilan rejalang.',
    laneTipFive: 'Roum: ittifoqchilarga yordam bering va butalarni jamoa bilan tekshiring; ularning xavfsiz farmiga xalaqit bermang.',
    objectiveGuide: 'Maqsadlar va xarita bo‘ylab harakat',
    objectiveTipOne: 'Gank yoki jangda g‘alabadan keyin keyingi maqsadni tanlang: minora, Toshbaqa, Lord yoki dushman junglisi.',
    objectiveTipTwo: 'Toshbaqa o‘yin boshida jamoaga ustunlik beradi; oldindan jamlanib, junglerga yo‘llarni nazorat qilishda yordam bering.',
    objectiveTipThree: 'Lord yo‘laklarni surishga yordam beradi. Uni boshlashdan oldin ittifoqchilar tayyorligini tekshiring.',
    objectiveTipFour: 'Minoralar xaritani va xavfsiz yo‘llarni ochadi; bo‘sh maqsad turganda dushmanni quvmang.',
    itemGuide: 'Jihozlar va qarshi buyumlar',
    itemTipOne: 'Tavsiya etilgan yig‘imdan boshlang, ammo buyumlar tartibi va tanlovini o‘yinga qarab o‘zgartiring.',
    itemTipTwo: 'Kuchli davolanishga qarshi davolanishni kamaytiruvchi, sehrli portlovchi zararga qarshi sehrli himoya oling.',
    itemTipThree: 'Jismoniy zararga qarshi sovut, kritik hujumlarga qarshi esa mos kritik himoyasini tanlang.',
    itemTipFour: 'Dushman buyumlarini kuzating va hal qiluvchi jangdan oldin himoya buyumlarini oling.',
    practiceGuide: 'Qahramonni o‘rganish',
    practiceTipOne: 'Qobiliyatlar va passivni o‘qing; hujum masofasi, resurs narxi va sovish vaqtini tekshiring.',
    practiceTipTwo: 'Mashq rejimida asosiy kombinatsiyani sinang va chekinish uchun qaysi qobiliyatni saqlashni aniqlang.',
    practiceTipThree: 'Qahramonga mos yo‘lakni tanlang; birinchi bo‘limda xususiyatlar, qiyinlik, jihozlar va qarshi qahramonlarni ko‘ring.',
    practiceTipFour: 'O‘yindan keyin faqat hisobni emas, joylashuv, xarita kuzatuvi va qobiliyat ishlatishni ham tahlil qiling.',
    guideDisclaimer: 'Bu umumiy maslahatlar; ularni jamoa tarkibi va o‘yin yangilanishlariga moslang.',
    search: 'Qidirish',
    searchPlaceholder: 'Ism, rol, yo‘lak, buyum...', role: 'Rol', difficulty: 'Qiyinlik',
    damageType: 'Zarar turi', lane: 'Yo‘lak', sort: 'Saralash', sortDefault: 'Standart',
    sortAsc: 'Ism: A—Z', sortDesc: 'Ism: Z—A', sortDifficulty: 'Qiyinlik bo‘yicha', reset: 'Tozalash',
    allRoles: 'Barcha rollar', any: 'Istalgan', anyType: 'Istalgan', anyLane: 'Istalgan', unknown: 'Ko‘rsatilmagan',
    physical: 'Jismoniy', magic: 'Sehrli', mixed: 'Aralash', easy: 'Oson', medium: 'O‘rtacha', hard: 'Qiyin',
    builds: 'Tavsiya etilgan buyumlar', counters: 'Qiyin raqiblar',
    heroTitle: 'Unvon', region: 'Hudud', released: 'Chiqarilgan sana',
    descriptionUnavailable: 'Tavsif hali mavjud emas.',
    combatInfo: 'Jang xususiyatlari', level: 'Daraja', levelOne: '1', levelFifteen: '15',
    health: 'Salomatlik', healthRegen: 'Salomatlik tiklanishi', mana: 'Mana',
    manaRegen: 'Mana tiklanishi', physicalAttack: 'Jismoniy hujum',
    physicalDefense: 'Jismoniy himoya', magicDefense: 'Sehrli himoya',
    attackSpeed: 'Hujum tezligi', attackSpeedRatio: 'Hujum tezligi koeffitsiyenti',
    movementSpeed: 'Harakat tezligi',
    attackRange: 'Hujum masofasi', resource: 'Resurs', attackType: 'Hujum turi',
    melee: 'Yaqin masofali', ranged: 'Uzoq masofali', hybrid: 'Aralash',
    none: 'Yo‘q', energy: 'Energiya', durability: 'Chidamlilik', offense: 'Hujum',
    controlRating: 'Nazorat', ratingScale: '(10 dan)', ratingOutOf: value => `${value}/10`,
    statUnavailable: '—',
    guideUnavailable: 'Bu qahramon uchun qo‘llanma hali qo‘shilmagan.',
    countersUnavailable: 'Qarshi qahramonlar hali qo‘shilmagan.',
    noResults: 'Qahramon topilmadi. Qidiruvni o‘zgartiring yoki filtrlarni tozalang.',
    results: n => `Topilgan qahramonlar: ${n}`,
    preferenceError: 'Bu sozlamani brauzerda saqlab bo‘lmadi.',
    catalogueError: 'Qahramonlar ro‘yxatini yuklab bo‘lmadi. Sahifani yangilang va qayta urinib ko‘ring.',
    difficultyEstimated: 'Qiyinlik ko‘rsatilmagan', typeEstimated: 'Zarar turi ko‘rsatilmagan',
    specialty: 'Mutaxassislik', noLane: 'Yo‘lak ko‘rsatilmagan',
    roleNames: { Marksman: 'Mergan', Fighter: 'Jangchi', Assassin: 'Qotil', Tank: 'Tank', Mage: 'Sehrgar', Support: 'Yordamchi' },
    specialtyNames: {
      Finisher: 'Yakunlovchi', Damage: 'Zarar', Regen: 'Tiklanish', Charge: 'Hujum',
      'Magic Damage': 'Sehrli zarar', 'Crowd Control': 'Nazorat', Guard: 'Himoya',
      Poke: 'Uzoqdan hujum', Burst: 'Kuchli zarba', Chase: 'Quvish', Push: 'Oldinga siljish',
      Control: 'Nazorat', Initiator: 'Boshlovchi', Support: 'Yordam', 'Mixed Damage': 'Aralash zarar'
    },
    laneNames: { 'Gold Lane': 'Oltin yo‘lagi', Jungle: 'Jungli', 'EXP Lane': 'Tajriba yo‘lagi', Roaming: 'Rouming', 'Mid Lane': 'O‘rta yo‘lak' }
  }
};

const FILTER_IDS = ['role-filter', 'difficulty-filter', 'type-filter', 'position-filter'];
const GAME_CATALOG = [
  { id: 'mlbb', nameKey: 'gameMlbb', dataUrl: './heroes.json', expectedHeroCount: 132 }
];
const DIFFICULTY_ORDER = { easy: 1, medium: 2, hard: 3 };
const DAMAGE_TYPES = ['physical', 'magic', 'mixed'];
const DIFFICULTIES = ['easy', 'medium', 'hard'];
const COUNTER_NAMES = {
  'Наталия': 'Natalia', 'Сэйбер': 'Saber', 'Ланселот': 'Lancelot', 'Карри': 'Karrie',
  'Валир': 'Valir', 'Эсмеральда': 'Esmeralda', 'Чоу': 'Chou', 'Куфра': 'Khufra',
  'Хелкарт': 'Helcurt', 'Франко': 'Franco', 'Эудора': 'Eudora', 'Линг': 'Ling',
  'Аврора': 'Aurora', 'Жаск': 'Zhask', 'Хаябуса': 'Hayabusa', 'Руби': 'Ruby',
  'Госсен': 'Gusion', 'Сильвана': 'Silvanna', 'Кадита': 'Kadita', 'Лейла': 'Layla',
  'Дигги': 'Diggie', 'Баданг': 'Badang', 'Мартис': 'Martis', 'Алдос': 'Aldous'
};
const COUNTER_NAMES_RU = {
  Aamon: 'Аамон', Aldous: 'Алдос', Alice: 'Алиса', Alpha: 'Альфа', Angela: 'Анджела',
  Arlott: 'Арлотт', Aurora: 'Аврора', Bane: 'Бейн', Barats: 'Баратс', Baxia: 'Баксия',
  Beatrix: 'Беатрис', Benedetta: 'Бенедетта', Brody: 'Броуди', Chip: 'Чип', Claude: 'Клод',
  Cyclops: 'Циклоп', Diggie: 'Дигги', Dyrroth: 'Диррот', Esmeralda: 'Эсмеральда',
  Estes: 'Эстес', Eudora: 'Эудора', Fanny: 'Фанни', Floryn: 'Флорин', Fredrinn: 'Фредрин',
  Freya: 'Фрейя', Gloo: 'Глу', Hanzo: 'Ханзо', Harith: 'Харит', Harley: 'Харли',
  Hayabusa: 'Хаябуса', Helcurt: 'Хелкарт', Hilda: 'Хильда', Irithel: 'Иритэль',
  Ixia: 'Иксия', Joy: 'Джой', Karina: 'Карина', Karrie: 'Карри', Khaleed: 'Халид',
  Khufra: 'Куфра', 'Lapu-Lapu': 'Лапу-Лапу', Leomord: 'Леоморд', Lesley: 'Лесли',
  Ling: 'Линг', Lolita: 'Лолита', Lunox: 'Лунокс', Mathilda: 'Матильда', Melissa: 'Мелисса',
  Minsitthar: 'Минситтар', Nana: 'Нана', Natalia: 'Наталия', Natan: 'Натан', Nolan: 'Нолан',
  Obsidia: 'Обсидия', Odette: 'Одетта', Phoveus: 'Фовеус', 'Popol and Kupa': 'Пополь и Купа',
  Ruby: 'Руби', Saber: 'Сэйбер', Sun: 'Сан', Terizla: 'Теризла', Uranus: 'Уранус',
  Vale: 'Вейл', Valentina: 'Валентина', Valir: 'Валир', Wanwan: 'Ванван',
  'X.Borg': 'Икс Борг', Yve: 'Ив', Zhask: 'Жаск', Zhuxin: 'Чжусин'
};
const ITEM_NAMES = {
  'Ярость берсерка': "Berserker's Fury", 'Алая фантомка': 'Scarlet Phantom',
  'Ветрокрыл': 'Windtalker', 'Щит Афины': "Athena's Shield",
  'Ледяное господство': 'Dominance Ice', 'Античный кирас': 'Antique Cuirass',
  'Топор кровожадности': 'Bloodlust Axe', 'Крылья королевы': 'Queen’s Wings',
  'Клинок отчаяния': 'Blade of Despair', 'Покровительство': 'Holy Crystal',
  'Святой кристалл': 'Holy Crystal', 'Божественный жезл': 'Divine Glaive',
  'Быстрые сапоги': 'Swift Boots', 'Ветер природы': 'Wind of Nature',
  'Часы судьбы': 'Clock of Destiny', 'Громовой жезл': 'Lightning Truncheon',
  'Боевые сапоги': 'Warrior Boots', 'Бесконечная битва': 'Endless Battle',
  'Проклятый шлем': 'Cursed Helmet', 'Бессмертие': 'Immortality',
  'Клинок Гептасея': 'Blade of the Heptaseas', 'Пылающий жезл': 'Glowing Wand',
  'Ледяная королева': 'Ice Queen Wand', 'Гениальный жезл': 'Genius Wand',
  'Зачарованный талисман': 'Enchanted Talisman', 'Мимолетное время': 'Fleeting Time',
  'Злобный рык': 'Malefic Roar', 'Удар охотника': 'Hunter Strike'
};
const ITEM_NAMES_RU = {
  'Antique Cuirass': 'Античная кираса',
  'Arcane Boots': 'Магические сапоги',
  'Arcane Boots - Conceal': 'Магические сапоги — Скрытность',
  'Arcane Boots - Dire Hit': 'Магические сапоги — Карательный удар',
  "Athena's Shield": 'Щит Афины',
  'Bloodlust Axe': 'Топор кровожадности',
  "Behemoth Hunter's Arcane Boots": 'Магические сапоги охотника на чудовищ',
  "Berserker's Fury": 'Ярость берсерка',
  'Blade Armor': 'Клинок-броня',
  'Blade of Despair': 'Клинок отчаяния',
  'Blade of the Heptaseas': 'Клинок Гептасея',
  'Blood Wings': 'Кровавые крылья',
  'Brute Force Breastplate': 'Нагрудник грубой силы',
  'Clock of Destiny': 'Часы судьбы',
  'Concentrated Energy': 'Концентрированная энергия',
  'Corrosion Scythe': 'Коса коррозии',
  'Cursed Helmet': 'Проклятый шлем',
  'Demon Boots - Encourage': 'Сапоги демона — Воодушевление',
  'Demon Boots - Favor': 'Сапоги демона — Благосклонность',
  'Demon Hunter Sword': 'Меч охотника на демонов',
  'Divine Glaive': 'Божественный жезл',
  'Dominance Ice': 'Ледяное господство',
  'Enchanted Talisman': 'Зачарованный талисман',
  'Endless Battle': 'Бесконечная битва',
  'Feather of Heaven': 'Небесное перо',
  'Flask of the Oasis': 'Фляга оазиса',
  'Fleeting Time': 'Мимолетное время',
  'Genius Wand': 'Гениальный жезл',
  'Glowing Wand': 'Пылающий жезл',
  'Golden Staff': 'Золотой посох',
  'Great Dragon Spear': 'Копье великого дракона',
  'Guardian Helmet': 'Шлем стража',
  "Haas' Claws": 'Когти Хааса',
  'Holy Crystal': 'Святой кристалл',
  'Hunter Strike': 'Удар охотника',
  "Ice Hunter's Magic Boots": 'Магические сапоги ледяного охотника',
  "Ice Hunter's Swift Boots": 'Быстрые сапоги ледяного охотника',
  "Ice Hunter's Tough Boots": 'Крепкие сапоги ледяного охотника',
  'Ice Queen Wand': 'Жезл ледяной королевы',
  Immortality: 'Бессмертие',
  'Lightning Truncheon': 'Громовой жезл',
  'Magic Boots': 'Магические сапоги',
  'Magic Boots - Dire Hit': 'Магические сапоги — Карательный удар',
  'Malefic Gun': 'Зловещее ружье',
  'Malefic Roar': 'Злобный рык',
  Oracle: 'Оракул',
  "Queen's Wings": 'Крылья королевы',
  'Radiant Armor': 'Сияющая броня',
  'Rapid Boots': 'Сапоги стремительности',
  'Rapid Boots - Encourage': 'Сапоги стремительности — Воодушевление',
  'Rapid Boots- Conceal': 'Сапоги стремительности — Скрытность',
  'Rose Gold Meteor': 'Метеор из розового золота',
  'Scarlet Phantom': 'Алая фантомка',
  'Sea Halberd': 'Морская алебарда',
  'Sky Piercer': 'Небесный пронзатель',
  'Starlium Scythe': 'Коса Старлиум',
  'Swift Boots': 'Быстрые сапоги',
  'Swift Boots - Dire Hit': 'Быстрые сапоги — Карательный удар',
  'Thunder Belt': 'Громовой пояс',
  'Tough Boots': 'Крепкие сапоги',
  'Tough Boots - Dire Hit': 'Крепкие сапоги — Карательный удар',
  'Tough Boots - Encourage': 'Крепкие сапоги — Воодушевление',
  'Tough Boots - Favor': 'Крепкие сапоги — Благосклонность',
  'War Axe': 'Боевой топор',
  'Warrior Boots': 'Сапоги воина',
  'Wind of Nature': 'Ветер природы',
  Windtalker: 'Ветрокрыл',
  'Winter Crown': 'Зимняя корона',
  'Wishing Lantern': 'Фонарь желаний',
  'Queen’s Wings': 'Крылья королевы'
};
const ITEM_NAMES_UZ = {
  'Antique Cuirass': 'Qadimiy sovut',
  'Arcane Boots': 'Sehrli etiklar',
  'Arcane Boots - Conceal': 'Sehrli etiklar — Yashirinish',
  'Arcane Boots - Dire Hit': 'Sehrli etiklar — Halokatli zarba',
  "Athena's Shield": 'Afina qalqoni',
  "Behemoth Hunter's Arcane Boots": 'Bahodir ovchisining sehrli etiklari',
  "Berserker's Fury": 'Berserk g‘azabi',
  'Bloodlust Axe': 'Qonxo‘r bolta',
  'Blade Armor': 'Tig‘li sovut',
  'Blade of Despair': 'Umidsizlik tig‘i',
  'Blade of the Heptaseas': 'Geptaseya tig‘i',
  'Blood Wings': 'Qon qanotlari',
  'Brute Force Breastplate': 'Qo‘pol kuch ko‘krak zirhi',
  'Clock of Destiny': 'Taqdir soati',
  'Concentrated Energy': 'Jamlangan energiya',
  'Corrosion Scythe': 'Zanglash o‘rog‘i',
  'Cursed Helmet': 'La’natlangan dubulg‘a',
  'Demon Boots - Encourage': 'Jin etiklari — Ruhlantirish',
  'Demon Boots - Favor': 'Jin etiklari — Madad',
  'Demon Hunter Sword': 'Jin ovchisining qilichi',
  'Divine Glaive': 'Ilohiy nayza',
  'Dominance Ice': 'Muz hukmronligi',
  'Enchanted Talisman': 'Sehrlangan tumor',
  'Endless Battle': 'Cheksiz jang',
  'Feather of Heaven': 'Osmon pati',
  'Flask of the Oasis': 'Voha idishi',
  'Fleeting Time': 'O‘tkinchi vaqt',
  'Genius Wand': 'Daholar hassasi',
  'Glowing Wand': 'Yorqin hassa',
  'Golden Staff': 'Oltin hassa',
  'Great Dragon Spear': 'Buyuk ajdarho nayzasi',
  'Guardian Helmet': 'Qo‘riqchi dubulg‘asi',
  "Haas' Claws": 'Haas changallari',
  'Holy Crystal': 'Muqaddas kristall',
  'Hunter Strike': 'Ovchi zarbasi',
  "Ice Hunter's Magic Boots": 'Muz ovchisining sehrli etiklari',
  "Ice Hunter's Swift Boots": 'Muz ovchisining chaqqon etiklari',
  "Ice Hunter's Tough Boots": 'Muz ovchisining mustahkam etiklari',
  'Ice Queen Wand': 'Muz malikasi hassasi',
  Immortality: 'O‘lmaslik',
  'Lightning Truncheon': 'Chaqmoq hassasi',
  'Magic Boots': 'Sehrli etiklar',
  'Magic Boots - Dire Hit': 'Sehrli etiklar — Halokatli zarba',
  'Malefic Gun': 'Yovuz miltiq',
  'Malefic Roar': 'Yovuz bo‘kirish',
  Oracle: 'Orakul',
  "Queen's Wings": 'Malika qanotlari',
  'Radiant Armor': 'Nurli sovut',
  'Rapid Boots': 'Tezkor etiklar',
  'Rapid Boots - Encourage': 'Tezkor etiklar — Ruhlantirish',
  'Rapid Boots- Conceal': 'Tezkor etiklar — Yashirinish',
  'Rose Gold Meteor': 'Atirgul oltin meteori',
  'Scarlet Phantom': 'Qirmizi arvoh',
  'Sea Halberd': 'Dengiz halberdi',
  'Sky Piercer': 'Osmon yoruvchi',
  'Starlium Scythe': 'Starlium o‘rog‘i',
  'Swift Boots': 'Chaqqon etiklar',
  'Swift Boots - Dire Hit': 'Chaqqon etiklar — Halokatli zarba',
  'Thunder Belt': 'Momaqaldiroq kamari',
  'Tough Boots': 'Mustahkam etiklar',
  'Tough Boots - Dire Hit': 'Mustahkam etiklar — Halokatli zarba',
  'Tough Boots - Encourage': 'Mustahkam etiklar — Ruhlantirish',
  'Tough Boots - Favor': 'Mustahkam etiklar — Madad',
  'War Axe': 'Jang boltasi',
  'Warrior Boots': 'Jangchi etiklari',
  'Wind of Nature': 'Tabiat shamoli',
  Windtalker: 'Shamol so‘zlovchisi',
  'Winter Crown': 'Qish toji',
  'Wishing Lantern': 'Tilak fonari',
  'Queen’s Wings': 'Malika qanotlari'
};
const HERO_TITLE_TRANSLATIONS = {
  ru: {
    'Moonlight Archer': 'Лунная лучница', 'Bloody Beast': 'Кровавый зверь',
    'Wandering Sword': 'Странствующий меч', 'Queen of Blood': 'Королева крови',
    'Sweet Leonin': 'Милый леонин', 'Warrior of Dawn': 'Воин рассвета',
    'Demon Hunter': 'Охотник на демонов', 'Shadow Blade': 'Теневой клинок',
    'Panda Warrior': 'Воин-панда', 'Frozen Warrior': 'Ледяной воин',
    'Frozen King': 'Ледяной король', 'The Protector': 'Защитник',
    'West Justice': 'Правосудие Запада', 'Wings of Holiness': 'Крылья святости',
    'Lightning Weaver': 'Ткач молний', 'Spear of Dragon': 'Копьё дракона',
    'Blade Dancer': 'Танцовщица клинка', 'Energy Gunner': 'Энергетический стрелок',
    'Son of Minos': 'Сын Миноса', 'Steel Elf': 'Стальной эльф',
    'Crimson Shadow': 'Багровая тень', Valkyrie: 'Валькирия',
    'Professor of the Mystics': 'Профессор мистических искусств',
    'Bright Claw': 'Сияющий коготь', 'Onmyouji Master': 'Мастер оммёдзи',
    'Kung Fu Boy': 'Мастер кунг-фу', 'Monkey King': 'Царь обезьян',
    'Blade of Enmity': 'Клинок вражды', 'Little Red Hood': 'Красная Шапочка',
    'Paenlong Legend': 'Легенда Пэнлун', 'Spear of Quiescence': 'Копьё безмолвия',
    'Wild Engine': 'Дикий двигатель', 'Starsoul Magician': 'Звёздный маг',
    'Moon Elf King': 'Король лунных эльфов', 'Power of Megalith': 'Сила мегалита',
    'Maiden of the Glacier': 'Дева ледника', 'Courageous Blade': 'Отважный клинок',
    'Shimmer of Hope': 'Мерцание надежды', 'Dire Wolf Hunter': 'Охотник на свирепых волков',
    'Lost Star': 'Потерянная звезда', 'Mighty Legend': 'Могучая легенда',
    'Mage Genius': 'Гениальный маг', 'Jungle Heart': 'Сердце джунглей',
    'Fortress Titan': 'Титан-крепость', 'Dark Angel': 'Тёмный ангел',
    'Swan Princess': 'Принцесса лебедей', 'Blade of Roses': 'Клинок роз',
    Timekeeper: 'Хранитель времени', 'Grand Warden': 'Великий страж',
    'The King of Swarms': 'Король роя', Shadowbringer: 'Несущий тень',
    'Wings of Vengeance': 'Крылья возмездия', 'Deadly Sniper': 'Смертоносный снайпер',
    'Steel Sweetheart': 'Стальная любимица', Bunnylove: 'Любовь зайки',
    'Holy Blade': 'Святой клинок', 'Son of Flames': 'Сын пламени',
    'Ashura King': 'Царь асуров', 'Aesthereal Defender': 'Эфирный защитник',
    'Scarlet Flower': 'Багровый цветок', 'Moon Palace Immortal': 'Бессмертный из Лунного дворца',
    'Nazar King': 'Царь Назара', 'Abyssal Witch': 'Ведьма Бездны',
    'Soul Contractor': 'Контрактор душ', 'Master Thief': 'Мастер-вор',
    Windtalker: 'Повелитель ветра', 'Sworn Sword': 'Верный меч',
    'Twilight Goddess': 'Богиня сумерек', 'Akuma Ninja': 'Ниндзя-демон',
    'Guard of Nature': 'Страж природы', 'Hoverjet Outrider': 'Всадник на ховерджете',
    'Lord Lava': 'Повелитель лавы', 'Time Traveler': 'Путешественник во времени',
    'Courageous Warrior': 'Отважный воин', 'Ocean Goddess': 'Богиня океана',
    'Soul Binder': 'Связующий души', 'Tribal Warrior': 'Племенной воин',
    'Desert Tyrant': 'Тиран пустыни', 'Death Chanter': 'Певец смерти',
    'Ms. Violet': 'Мисс Фиалка', Astrologer: 'Астролог', Executioner: 'Палач',
    'Firaga Armor': 'Броня Фираги', 'Cyan Finch': 'Лазурный зяблик',
    'Prince of the Abyss': 'Принц Бездны', 'Little Witch': 'Маленькая ведьма',
    'Mystic Tortoise': 'Мистическая черепаха', 'Wild-oats Fist': 'Кулак дикого духа',
    'Agile Tiger': 'Проворный тигр', 'Imperial Knightess': 'Имперская рыцарь',
    'Embrace of Night': 'Объятия ночи', 'Shadow of Twilight': 'Тень сумерек',
    'Ocean Gladiator': 'Океанский гладиатор', 'Icefield Companions': 'Спутники ледяных полей',
    'Black Dragon': 'Чёрный дракон', 'Yin-yang Geomancer': 'Геомант инь и ян',
    'Shadow Ranger': 'Теневой следопыт', 'Desert Scimitar': 'Пустынный ятаган',
    'Dino Rider': 'Всадник на динозавре', 'The Lone Star': 'Одинокая звезда',
    Astrowarden: 'Страж звёзд', 'Swift Plume': 'Быстрое перо',
    'The Heavenly Fist': 'Небесный кулак', 'Swamp Spirits': 'Духи болота',
    'Dawnbreak Soldier': 'Солдат рассвета', 'Chains of Sin': 'Цепи греха',
    'Spacetime Walker': 'Странник пространства-времени', 'Warrior of Ferocity': 'Воин ярости',
    'Duke of Shards': 'Герцог осколков', 'Prophetess of the Night': 'Пророчица ночи',
    'Ancient Guard': 'Древний страж', 'The Budding Hope': 'Расцветающая надежда',
    'Martial Genius': 'Боевой гений', 'Cursed Needle': 'Проклятая игла',
    'Defier of Light': 'Бросающий вызов свету', 'Scarlet Raven': 'Багровый ворон',
    'Rogue Appraiser': 'Оценщик-авантюрист', 'Flash of Miracle': 'Вспышка чуда',
    'Star Rebel': 'Звёздный бунтарь', 'Lone Lancer': 'Одинокий копейщик',
    'Arclight Outlaw': 'Преступник света', 'Cosmic Wayfinder': 'Космический путеводитель',
    'Buoyant Performer': 'Жизнерадостная артистка', 'Phase Technician': 'Техник фазовых переходов',
    'Beacon of Spirits': 'Маяк духов', 'Mask of the Immortal': 'Маска бессмертного',
    'Beast of Light': 'Светлый зверь', 'Surging Wave': 'Бушующая волна',
    'Celestial Empress': 'Небесная императрица', "Sovereign of Dark's End": 'Владычица конца тьмы',
    'Shifting Cloud': 'Переменчивое облако', 'Soul Photographer': 'Фотограф душ'
  },
  uz: {
    'Moonlight Archer': 'Oy nuri mergani', 'Bloody Beast': 'Qonli maxluq',
    'Wandering Sword': 'Sayyor qilich', 'Queen of Blood': 'Qon malikasi',
    'Sweet Leonin': 'Shirin Leonin', 'Warrior of Dawn': 'Tong jangchisi',
    'Demon Hunter': 'Jin ovchisi', 'Shadow Blade': 'Soya tig‘i',
    'Panda Warrior': 'Panda jangchisi', 'Frozen Warrior': 'Muz jangchisi',
    'Frozen King': 'Muz qiroli', 'The Protector': 'Himoyachi',
    'West Justice': 'G‘arb adolati', 'Wings of Holiness': 'Muqaddaslik qanotlari',
    'Lightning Weaver': 'Chaqmoq to‘quvchisi', 'Spear of Dragon': 'Ajdarho nayzasi',
    'Blade Dancer': 'Tig‘ raqqosasi', 'Energy Gunner': 'Energiya mergani',
    'Son of Minos': 'Minos o‘g‘li', 'Steel Elf': 'Po‘lat elfi',
    'Crimson Shadow': 'Qirmizi soya', Valkyrie: 'Valkiriya',
    'Professor of the Mystics': 'Sirli ilmlar professori',
    'Bright Claw': 'Yorqin changal', 'Onmyouji Master': 'Onmyoji ustasi',
    'Kung Fu Boy': 'Kung-fu jangchisi', 'Monkey King': 'Maymunlar qiroli',
    'Blade of Enmity': 'Dushmanlik tig‘i', 'Little Red Hood': 'Qizil qalpoqcha',
    'Paenlong Legend': 'Paenlong afsonasi', 'Spear of Quiescence': 'Sukunat nayzasi',
    'Wild Engine': 'Yovvoyi dvigatel', 'Starsoul Magician': 'Yulduz qalbli sehrgar',
    'Moon Elf King': 'Oy elflari qiroli', 'Power of Megalith': 'Megalit kuchi',
    'Maiden of the Glacier': 'Muzlik qizi', 'Courageous Blade': 'Jasur tig‘',
    'Shimmer of Hope': 'Umid shu’lasi', 'Dire Wolf Hunter': 'Yovvoyi bo‘ri ovchisi',
    'Lost Star': 'Yo‘qolgan yulduz', 'Mighty Legend': 'Qudratli afsona',
    'Mage Genius': 'Daho sehrgar', 'Jungle Heart': 'Jungli yuragi',
    'Fortress Titan': 'Qal’a titani', 'Dark Angel': 'Qorong‘i farishta',
    'Swan Princess': 'Oqqush malikasi', 'Blade of Roses': 'Atirgul tig‘i',
    Timekeeper: 'Vaqt posboni', 'Grand Warden': 'Ulug‘ qo‘riqchi',
    'The King of Swarms': 'To‘dalar qiroli', Shadowbringer: 'Soya keltiruvchi',
    'Wings of Vengeance': 'Qasos qanotlari', 'Deadly Sniper': 'Halokatli mergan',
    'Steel Sweetheart': 'Po‘lat go‘zal', Bunnylove: 'Quyoncha muhabbati',
    'Holy Blade': 'Muqaddas tig‘', 'Son of Flames': 'Olov o‘g‘li',
    'Ashura King': 'Asuralar qiroli', 'Aesthereal Defender': 'Aether himoyachisi',
    'Scarlet Flower': 'Qirmizi gul', 'Moon Palace Immortal': 'Oy saroyi abadiysi',
    'Nazar King': 'Nazar qiroli', 'Abyssal Witch': 'Tubanlik jodugari',
    'Soul Contractor': 'Ruhlar pudratchisi', 'Master Thief': 'O‘g‘rilar ustasi',
    Windtalker: 'Shamol so‘zlovchisi', 'Sworn Sword': 'Qasamyod qilgan qilich',
    'Twilight Goddess': 'Shom ma’budasi', 'Akuma Ninja': 'Akuma ninjasi',
    'Guard of Nature': 'Tabiat qo‘riqchisi', 'Hoverjet Outrider': 'Hoverjet chavandozi',
    'Lord Lava': 'Lava hukmdori', 'Time Traveler': 'Vaqt sayohatchisi',
    'Courageous Warrior': 'Jasur jangchi', 'Ocean Goddess': 'Okean ma’budasi',
    'Soul Binder': 'Ruh bog‘lovchisi', 'Tribal Warrior': 'Qabila jangchisi',
    'Desert Tyrant': 'Cho‘l zolimi', 'Death Chanter': 'O‘lim kuychisi',
    'Ms. Violet': 'Binafsha xonim', Astrologer: 'Munajjim', Executioner: 'Jallod',
    'Firaga Armor': 'Firaga sovuti', 'Cyan Finch': 'Moviy sa’va',
    'Prince of the Abyss': 'Tubanlik shahzodasi', 'Little Witch': 'Kichik jodugar',
    'Mystic Tortoise': 'Sirli toshbaqa', 'Wild-oats Fist': 'Yovvoyi musht',
    'Agile Tiger': 'Chaqqon yo‘lbars', 'Imperial Knightess': 'Imperiya ritsar qizi',
    'Embrace of Night': 'Tun quchog‘i', 'Shadow of Twilight': 'Shom soyasi',
    'Ocean Gladiator': 'Okean gladiatori', 'Icefield Companions': 'Muzlik hamrohlari',
    'Black Dragon': 'Qora ajdarho', 'Yin-yang Geomancer': 'Yin-yang geomanti',
    'Shadow Ranger': 'Soya izquvari', 'Desert Scimitar': 'Cho‘l shamshiri',
    'Dino Rider': 'Dinozavr chavandozi', 'The Lone Star': 'Yolg‘iz yulduz',
    Astrowarden: 'Yulduz posboni', 'Swift Plume': 'Tezkor pat',
    'The Heavenly Fist': 'Samoviy musht', 'Swamp Spirits': 'Botqoq ruhlari',
    'Dawnbreak Soldier': 'Tong askari', 'Chains of Sin': 'Gunoh zanjirlari',
    'Spacetime Walker': 'Makon-zamon sayyohi', 'Warrior of Ferocity': 'G‘azab jangchisi',
    'Duke of Shards': 'Parchalar gersogi', 'Prophetess of the Night': 'Tun bashoratchisi',
    'Ancient Guard': 'Qadimiy qo‘riqchi', 'The Budding Hope': 'Kurtak otgan umid',
    'Martial Genius': 'Jang san’ati dahosi', 'Cursed Needle': 'La’natlangan igna',
    'Defier of Light': 'Nurga qarshi chiquvchi', 'Scarlet Raven': 'Qirmizi qarg‘a',
    'Rogue Appraiser': 'Sarguzashtchi baholovchi', 'Flash of Miracle': 'Mo‘jiza chaqnashi',
    'Star Rebel': 'Yulduz isyonchisi', 'Lone Lancer': 'Yolg‘iz nayzaboz',
    'Arclight Outlaw': 'Yorug‘lik qonunbuzari', 'Cosmic Wayfinder': 'Koinot yo‘l ko‘rsatuvchisi',
    'Buoyant Performer': 'Quvnoq ijrochi', 'Phase Technician': 'Faza texnigi',
    'Beacon of Spirits': 'Ruhlar chirog‘i', 'Mask of the Immortal': 'Abadiy niqobi',
    'Beast of Light': 'Nur maxluqi', 'Surging Wave': 'Jo‘shqin to‘lqin',
    'Celestial Empress': 'Samoviy imperatrisa', "Sovereign of Dark's End": 'Qorong‘ulik yakunining hukmdori',
    'Shifting Cloud': 'O‘zgaruvchan bulut', 'Soul Photographer': 'Ruhlar suratchisi'
  }
};

let language = 'ru';
let theme = 'dark';
let heroes = [];

function text(key) {
  return LANGUAGES[language][key];
}

function readPreference(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch (error) {
    console.error(`Could not read ${key} preference.`, error);
    return fallback;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(`Could not save ${key} preference.`, error);
    showStatus(text('preferenceError'));
  }
}

function applyLanguage() {
  const dictionary = LANGUAGES[language];
  document.documentElement.lang = language;
  document.title = text('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translated = dictionary[element.dataset.i18n];
    if (typeof translated === 'string') element.textContent = translated;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = dictionary[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    element.setAttribute('aria-label', dictionary[element.dataset.i18nAriaLabel]);
  });
  document.getElementById('language-select').value = language;
  document.getElementById('theme-select').value = theme;
  document.getElementById('role-filter').options[0].textContent = text('allRoles');
  document.getElementById('difficulty-filter').options[0].textContent = text('any');
  document.getElementById('type-filter').options[0].textContent = text('anyType');
  document.getElementById('position-filter').options[0].textContent = text('anyLane');
  populateGameSelector();
  updateResults();
}

function populateGameSelector() {
  const select = document.getElementById('game-select');
  const selectedGame = select.value || GAME_CATALOG[0].id;
  select.replaceChildren(...GAME_CATALOG.map(game => {
    const option = document.createElement('option');
    option.value = game.id;
    option.textContent = text(game.nameKey);
    return option;
  }));
  select.value = selectedGame;
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  document.documentElement.className = theme === 'dark' ? '' : `theme-${theme}`;
  document.getElementById('theme-select').value = theme;
}

function showStatus(message) {
  document.getElementById('site-status').textContent = message;
}

function labelForRole(role) {
  return LANGUAGES[language].roleNames[role] || role;
}

function labelForSpecialty(specialty) {
  return LANGUAGES[language].specialtyNames[specialty] || specialty;
}

function labelForLane(lane) {
  return LANGUAGES[language].laneNames[lane] || lane;
}

function labelForDifficulty(difficulty) {
  return difficulty ? text(difficulty) : text('unknown');
}

function labelForDamageType(type) {
  if (type === 'physical') return text('physical');
  if (type === 'magic') return text('magic');
  if (type === 'mixed') return text('mixed');
  return text('unknown');
}

function labelForAttackType(type) {
  const key = { Melee: 'melee', Ranged: 'ranged', Hybrid: 'hybrid' }[type];
  return key ? text(key) : text('unknown');
}

function labelForResource(resource) {
  const key = { Mana: 'mana', Energy: 'energy', None: 'none' }[resource];
  return key ? text(key) : resource || text('unknown');
}

function normalizeSearchText(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '');
}

function translateCounter(name) {
  if (language === 'ru') return COUNTER_NAMES_RU[name] || name;
  return COUNTER_NAMES[name] || name;
}

function translateItem(name) {
  const englishName = ITEM_NAMES[name] || name;
  if (language === 'ru') return ITEM_NAMES_RU[englishName] || name;
  if (language === 'uz') return ITEM_NAMES_UZ[englishName] || englishName;
  return englishName;
}

function translateHeroTitle(title) {
  return HERO_TITLE_TRANSLATIONS[language]?.[title] || title;
}

function formatReleaseDate(value) {
  if (!value || /^\d{4}$/.test(value)) return value || text('unknown');
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const locale = { ru: 'ru-RU', en: 'en-US', uz: 'uz-UZ' }[language];
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(date);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function renderCombatStats(hero) {
  const stats = hero.combatStats;
  const statRows = [
    ['health', stats.health],
    ['healthRegen', stats.healthRegen],
    ['mana', stats.mana],
    ['manaRegen', stats.manaRegen],
    ['physicalAttack', stats.physicalAttack],
    ['physicalDefense', stats.physicalDefense],
    ['magicDefense', stats.magicDefense],
    ['attackSpeed', stats.attackSpeed]
  ];
  const valueOrDash = value => value === null || value === undefined
    ? text('statUnavailable')
    : escapeHtml(value);

  return `
    <details class="hero-stats">
      <summary>${escapeHtml(text('combatInfo'))}</summary>
      <div class="combat-meta">
        <p><strong>${escapeHtml(text('resource'))}:</strong> ${escapeHtml(labelForResource(hero.resource))}</p>
        <p><strong>${escapeHtml(text('attackType'))}:</strong> ${escapeHtml(labelForAttackType(hero.attackType))}</p>
        <p><strong>${escapeHtml(text('movementSpeed'))}:</strong> ${valueOrDash(stats.movementSpeed)}</p>
        <p><strong>${escapeHtml(text('attackSpeedRatio'))}:</strong> ${valueOrDash(stats.attackSpeedRatio)}</p>
        <p><strong>${escapeHtml(text('attackRange'))}:</strong> ${valueOrDash(stats.attackRange)}</p>
      </div>
      <div class="combat-ratings">
        <span>${escapeHtml(text('durability'))}: ${valueOrDash(hero.combatRatings.durability)}${escapeHtml(text('ratingScale'))}</span>
        <span>${escapeHtml(text('offense'))}: ${valueOrDash(hero.combatRatings.offense)}${escapeHtml(text('ratingScale'))}</span>
        <span>${escapeHtml(text('controlRating'))}: ${valueOrDash(hero.combatRatings.control)}${escapeHtml(text('ratingScale'))}</span>
      </div>
      <div class="stats-table" role="table" aria-label="${escapeHtml(text('combatInfo'))}">
        <div class="stats-row stats-heading" role="row">
          <span role="columnheader">${escapeHtml(text('level'))}</span>
          <span role="columnheader">${escapeHtml(text('levelOne'))}</span>
          <span role="columnheader">${escapeHtml(text('levelFifteen'))}</span>
        </div>
        ${statRows.map(([key, pair]) => `
          <div class="stats-row" role="row">
            <span role="rowheader">${escapeHtml(text(key))}</span>
            <span role="cell">${valueOrDash(pair.level1)}</span>
            <span role="cell">${valueOrDash(pair.level15)}</span>
          </div>`).join('')}
      </div>
    </details>`;
}

function populateFilters() {
  const roleSelect = document.getElementById('role-filter');
  const difficultySelect = document.getElementById('difficulty-filter');
  const typeSelect = document.getElementById('type-filter');
  const laneSelect = document.getElementById('position-filter');
  [roleSelect, difficultySelect, typeSelect, laneSelect].forEach(select => {
    const previousValue = select.value;
    if (select.options.length === 0) {
      const placeholder = document.createElement('option');
      placeholder.value = '';
      select.appendChild(placeholder);
    }
    while (select.options.length > 1) select.remove(1);
    select.dataset.previousValue = previousValue;
  });
  roleSelect.options[0].textContent = text('allRoles');
  difficultySelect.options[0].textContent = text('any');
  typeSelect.options[0].textContent = text('anyType');
  laneSelect.options[0].textContent = text('anyLane');

  const addOptions = (select, values, label) => [...new Set(values)].sort((a, b) =>
    label(a).localeCompare(label(b), language)
  ).forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label(value);
    select.appendChild(option);
  });

  addOptions(roleSelect, heroes.flatMap(hero => hero.roles), labelForRole);
  addOptions(difficultySelect, [...DIFFICULTIES, 'unknown'], value =>
    value === 'unknown' ? text('unknown') : text(value)
  );
  addOptions(typeSelect, [...DAMAGE_TYPES, 'unknown'], value =>
    value === 'unknown' ? text('unknown') : labelForDamageType(value)
  );
  addOptions(laneSelect, heroes.flatMap(hero => hero.lanes), labelForLane);
  [roleSelect, difficultySelect, typeSelect, laneSelect].forEach(select => {
    select.value = select.dataset.previousValue;
    delete select.dataset.previousValue;
  });
}

function matchesHero(hero) {
  const queryTerms = document.getElementById('hero-search').value
    .trim()
    .split(/\s+/)
    .map(normalizeSearchText)
    .filter(Boolean);
  const filters = Object.fromEntries(FILTER_IDS.map(id => [id, document.getElementById(id).value]));
  const searchValues = [
    hero.name,
    hero.title,
    ...Object.values(HERO_TITLE_TRANSLATIONS).map(translations => translations[hero.title]),
    hero.region,
    hero.description,
    hero.releaseDate,
    ...hero.roles.flatMap(role => [role, ...Object.values(LANGUAGES).map(dictionary => dictionary.roleNames[role])]),
    ...hero.specialties.flatMap(specialty => [
      specialty,
      ...Object.values(LANGUAGES).map(dictionary => dictionary.specialtyNames[specialty])
    ]),
    ...hero.lanes.flatMap(lane => [lane, ...Object.values(LANGUAGES).map(dictionary => dictionary.laneNames[lane])]),
    hero.difficulty,
    ...Object.values(LANGUAGES).map(dictionary => hero.difficulty ? dictionary[hero.difficulty] : dictionary.unknown),
    hero.damageType,
    ...Object.values(LANGUAGES).map(dictionary => hero.damageType
      ? dictionary[hero.damageType]
      : dictionary.unknown),
    ...hero.builds.flatMap(item => [
      item,
      ITEM_NAMES[item],
      ITEM_NAMES_RU[ITEM_NAMES[item] || item],
      ITEM_NAMES_UZ[ITEM_NAMES[item] || item]
    ]),
    ...hero.counters.flatMap(counter => [counter, COUNTER_NAMES[counter], COUNTER_NAMES_RU[counter]])
  ];
  const searchText = searchValues.filter(Boolean).map(normalizeSearchText).join(' ');

  return queryTerms.every(term => searchText.includes(term))
    && (!filters['role-filter'] || hero.roles.includes(filters['role-filter']))
    && (!filters['difficulty-filter'] || (filters['difficulty-filter'] === 'unknown'
      ? !hero.difficulty : hero.difficulty === filters['difficulty-filter']))
    && (!filters['type-filter'] || (filters['type-filter'] === 'unknown'
      ? !hero.damageType : hero.damageType === filters['type-filter']))
    && (!filters['position-filter'] || hero.lanes.includes(filters['position-filter']));
}

function getVisibleHeroes() {
  const filtered = heroes.filter(matchesHero);
  const sort = document.getElementById('sort-order').value;
  if (sort === 'name-asc' || sort === 'name-desc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name, language) * (sort === 'name-asc' ? 1 : -1));
  } else if (sort === 'difficulty') {
    filtered.sort((a, b) => (DIFFICULTY_ORDER[a.difficulty] || 4) - (DIFFICULTY_ORDER[b.difficulty] || 4)
      || a.name.localeCompare(b.name, language));
  }
  return filtered;
}

function renderHeroes(list) {
  document.getElementById('result-count').textContent = text('results')(list.length);
  const container = document.getElementById('hero-container');
  if (list.length === 0) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(text('noResults'))}</p>`;
    return;
  }

  container.innerHTML = list.map(hero => {
    const roles = hero.roles.map(labelForRole).map(escapeHtml).join(' / ') || escapeHtml(text('unknown'));
    const specialties = hero.specialties.map(labelForSpecialty).map(escapeHtml);
    const lanes = hero.lanes.map(labelForLane).map(escapeHtml);
    const builds = hero.builds.map(translateItem);
    const counters = hero.counters.map(translateCounter);
    const title = translateHeroTitle(hero.title);
    const difficultyKey = hero.difficulty || 'unknown';
    const difficultyText = hero.difficultyRating
      ? `${text('ratingOutOf')(hero.difficultyRating)} · ${labelForDifficulty(hero.difficulty)}`
      : labelForDifficulty(hero.difficulty);
    return `
      <article class="hero-card">
        <div class="hero-header">
          <h2 class="hero-name">${escapeHtml(hero.name)}</h2>
          <span class="hero-type-badge" data-type="${escapeHtml(hero.damageType || 'unknown')}">${escapeHtml(labelForDamageType(hero.damageType))}</span>
        </div>
        <p class="hero-title">${escapeHtml(text('heroTitle'))}: ${escapeHtml(title || text('unknown'))}</p>
        <p class="hero-description"${hero.description ? ' lang="en"' : ''}>${escapeHtml(hero.description || text('descriptionUnavailable'))}</p>
        <div class="hero-subheader">
          <span class="hero-role">${roles}</span>
          <span class="hero-difficulty" data-diff="${escapeHtml(difficultyKey)}">${escapeHtml(difficultyText)}</span>
        </div>
        <p class="hero-position"><strong>${escapeHtml(text('lane'))}:</strong> ${lanes.join(', ') || escapeHtml(text('noLane'))}</p>
        <p class="hero-specialty"><strong>${escapeHtml(text('specialty'))}:</strong> ${specialties.join(', ') || escapeHtml(text('unknown'))}</p>
        <p class="hero-region"><strong>${escapeHtml(text('region'))}:</strong> ${escapeHtml(hero.region || text('unknown'))}</p>
        <p class="hero-release"><strong>${escapeHtml(text('released'))}:</strong> ${escapeHtml(formatReleaseDate(hero.releaseDate))}</p>
        ${renderCombatStats(hero)}
        <h3 class="build-title">${escapeHtml(text('builds'))}</h3>
        ${builds.length
          ? `<div class="list">${builds.map(item => `<span class="badge">${escapeHtml(item)}</span>`).join('')}</div>`
          : `<p class="guide-unavailable">${escapeHtml(text('guideUnavailable'))}</p>`}
        <h3 class="counter-title">${escapeHtml(text('counters'))}</h3>
        ${counters.length
          ? `<div class="list">${counters.map(item => `<span class="badge counter">${escapeHtml(item)}</span>`).join('')}</div>`
          : `<p class="guide-unavailable">${escapeHtml(text('countersUnavailable'))}</p>`}
      </article>`;
  }).join('');
}

function updateResults() {
  if (heroes.length) renderHeroes(getVisibleHeroes());
}

function setupSettings() {
  language = readPreference('mlbbLanguage', ['ru', 'en', 'uz'], 'ru');
  theme = readPreference('mlbbTheme', ['dark', 'light', 'ocean'], 'dark');
  document.getElementById('language-select').addEventListener('change', event => {
    language = event.target.value;
    savePreference('mlbbLanguage', language);
    populateFilters();
    applyLanguage();
  });
  document.getElementById('theme-select').addEventListener('change', event => {
    theme = event.target.value;
    applyTheme();
    savePreference('mlbbTheme', theme);
  });
  applyTheme();
}

function setupFilters() {
  [...FILTER_IDS, 'sort-order'].forEach(id => {
    document.getElementById(id).addEventListener('change', updateResults);
  });
  document.getElementById('hero-search').addEventListener('input', updateResults);
  document.getElementById('reset-filters').addEventListener('click', () => {
    document.getElementById('hero-search').value = '';
    [...FILTER_IDS, 'sort-order'].forEach(id => {
      document.getElementById(id).selectedIndex = 0;
    });
    updateResults();
    document.getElementById('hero-search').focus();
  });
}

function setupNavigation() {
  document.querySelectorAll('.section-link').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.view;
      document.querySelectorAll('.section-link').forEach(link => {
        const active = link === button;
        link.classList.toggle('is-active', active);
        link.setAttribute('aria-pressed', String(active));
      });
      document.querySelectorAll('.content-view').forEach(view => {
        view.hidden = view.id !== targetId;
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

async function loadHeroes() {
  try {
    const selectedGame = GAME_CATALOG.find(game => game.id === document.getElementById('game-select').value);
    if (!selectedGame) throw new Error('The selected game does not have a registered catalogue.');
    const response = await fetch(selectedGame.dataUrl);
    if (!response.ok) throw new Error(`Hero data request failed with status ${response.status}`);
    heroes = await response.json();
    if (heroes.length !== selectedGame.expectedHeroCount
      || new Set(heroes.map(hero => hero.name)).size !== selectedGame.expectedHeroCount) {
      throw new Error(`Expected ${selectedGame.expectedHeroCount} unique heroes, received ${heroes.length}`);
    }
    populateFilters();
    applyLanguage();
  } catch (error) {
    console.error('The hero catalogue could not be loaded.', error);
    const container = document.getElementById('hero-container');
    container.innerHTML = `<p class="empty-state">${escapeHtml(text('catalogueError'))}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupSettings();
  setupFilters();
  setupNavigation();
  populateGameSelector();
  document.getElementById('game-select').addEventListener('change', loadHeroes);
  loadHeroes();
});
