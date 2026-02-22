// Список персонажей MLBB
// 120 персонажей MLBB с локальными картинками (пример структуры, остальные добавьте аналогично)
const heroes = [
  { name: 'Layla', role: 'Стрелок', difficulty: 'Легко', type: 'Физ', position: 'Сад', image: 'img/layla.png', builds: ['Ярость берсерка', 'Алая фантомка', 'Ветрокрыл'], counters: ['Наталия', 'Сэйбер', 'Ланселот'] },
  { name: 'Tigreal', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/tigreal.png', builds: ['Щит Афины', 'Ледяное господство', 'Античный кирас'], counters: ['Карри', 'Валир', 'Эсмеральда'] },
  { name: 'Fanny', role: 'Убийца', difficulty: 'Сложно', type: 'Физ', position: 'Середина', image: 'img/fanny.png', builds: ['Топор кровожадности', 'Крылья королевы', 'Клинок отчаяния'], counters: ['Сэйбер', 'Франко', 'Эудора'] },
  { name: 'Gusion', role: 'Убийца', difficulty: 'Сложно', type: 'Маг', position: 'Середина', image: 'img/gusion.png', builds: ['Покровительство', 'Святой кристалл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Хелкарт'] },
  { name: 'Miya', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/miya.png', builds: ['Быстрые сапоги', 'Алая фантомка', 'Ветер природы'], counters: ['Наталия', 'Сэйбер', 'Линг'] },
  { name: 'Eudora', role: 'Маг', difficulty: 'Легко', type: 'Маг', position: 'Середина', image: 'img/eudora.png', builds: ['Часы судьбы', 'Громовой жезл', 'Святой кристалл'], counters: ['Ланселот', 'Хаябуса', 'Чоу'] },
  { name: 'Alucard', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/alucard.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Карри', 'Аврора', 'Эудора'] },
  { name: 'Johnson', role: 'Танк', difficulty: 'Средне', type: 'Физ', position: 'Золото', image: 'img/johnson.png', builds: ['Проклятый шлем', 'Античный кирас', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Lancelot', role: 'Убийца', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/lancelot.png', builds: ['Клинок Гептасея', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Сэйбер', 'Куфра', 'Руби'] },
  { name: 'Aurora', role: 'Маг', difficulty: 'Средне', type: 'Маг', position: 'Середина', image: 'img/aurora.png', builds: ['Пылающий жезл', 'Ледяная королева', 'Гениальный жезл'], counters: ['Ланселот', 'Чоу', 'Хаябуса'] },
  // ... (добавьте еще 50+ героев по аналогии)
  { name: 'Zilong', role: 'Боец', difficulty: 'Легко', type: 'Физ', position: 'Лес', image: 'img/zilong.png', builds: ['Боевые сапоги', 'Клинок отчаяния', 'Бесконечная битва'], counters: ['Чоу', 'Куфра', 'Руби'] },
  { name: 'Franco', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/franco.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Saber', role: 'Убийца', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/saber.png', builds: ['Удар охотника', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Куфра', 'Чоу', 'Руби'] },
  { name: 'Nana', role: 'Поддержка', difficulty: 'Легко', type: 'Маг', position: 'Поддержка', image: 'img/nana.png', builds: ['Зачарованный талисман', 'Мимолетное время', 'Ледяная королева'], counters: ['Хаябуса', 'Ланселот', 'Сэйбер'] },
  { name: 'Clint', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/clint.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Злобный рык'], counters: ['Наталия', 'Сэйбер', 'Линг'] },
  { name: 'Akai', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/akai.png', builds: ['Проклятый шлем', 'Ледяное господство', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Karina', role: 'Убийца', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/karina.png', builds: ['Покровительство', 'Святой кристалл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Хелкарт'] },
  { name: 'Balmond', role: 'Боец', difficulty: 'Легко', type: 'Физ', position: 'Лес', image: 'img/balmond.png', builds: ['Боевые сапоги', 'Топор кровожадности', 'Проклятый шлем'], counters: ['Карри', 'Аврора', 'Эудора'] },
  { name: 'Cyclops', role: 'Маг', difficulty: 'Легко', type: 'Маг', position: 'Середина', image: 'img/cyclops.png', builds: ['Зачарованный талисман', 'Громовой жезл', 'Святой кристалл'], counters: ['Ланселот', 'Хаябуса', 'Чоу'] },
  { name: 'Estes', role: 'Поддержка', difficulty: 'Легко', type: 'Маг', position: 'Поддержка', image: 'img/estes.png', builds: ['Зачарованный талисман', 'Мимолетное время', 'Бессмертие'], counters: ['Наталия', 'Сэйбер', 'Линг'] },
  { name: 'Harith', role: 'Маг', difficulty: 'Средне', type: 'Маг', position: 'Середина', image: 'img/harith.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Granger', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/granger.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Ling', role: 'Убийца', difficulty: 'Сложно', type: 'Физ', position: 'Лес', image: 'img/ling.png', builds: ['Клинок отчаяния', 'Бесконечная битва', 'Крылья королевы'], counters: ['Сэйбер', 'Франко', 'Чоу'] },
  { name: 'Khufra', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/khufra.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Chou', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/chou.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Helcurt', role: 'Убийца', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/helcurt.png', builds: ['Клинок отчаяния', 'Бесконечная битва', 'Крылья королевы'], counters: ['Сэйбер', 'Франко', 'Чоу'] },
  { name: 'Valir', role: 'Маг', difficulty: 'Легко', type: 'Маг', position: 'Середина', image: 'img/valir.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Karrie', role: 'Стрелок', difficulty: 'Легко', type: 'Физ', position: 'Сад', image: 'img/karrie.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Zhask', role: 'Маг', difficulty: 'Легко', type: 'Маг', position: 'Середина', image: 'img/zhask.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Esmeralda', role: 'Маг', difficulty: 'Средне', type: 'Маг', position: 'Середина', image: 'img/esmeralda.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Lunox', role: 'Маг', difficulty: 'Средне', type: 'Маг', position: 'Середина', image: 'img/lunox.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Claude', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/claude.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Angela', role: 'Поддержка', difficulty: 'Легко', type: 'Маг', position: 'Поддержка', image: 'img/angela.png', builds: ['Зачарованный талисман', 'Мимолетное время', 'Бессмертие'], counters: ['Наталия', 'Сэйбер', 'Линг'] },
  { name: 'Pharsa', role: 'Маг', difficulty: 'Легко', type: 'Маг', position: 'Середина', image: 'img/pharsa.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Baxia', role: 'Танк', difficulty: 'Средне', type: 'Физ', position: 'Золото', image: 'img/baxia.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Jawhead', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/jawhead.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Atlas', role: 'Танк', difficulty: 'Средне', type: 'Физ', position: 'Золото', image: 'img/atlas.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Popol and Kupa', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/popol_and_kupa.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Yu Zhong', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/yu_zhong.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Benedetta', role: 'Убийца', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/benedetta.png', builds: ['Клинок отчаяния', 'Бесконечная битва', 'Крылья королевы'], counters: ['Сэйбер', 'Франко', 'Чоу'] },
  { name: 'Mathilda', role: 'Поддержка', difficulty: 'Легко', type: 'Маг', position: 'Поддержка', image: 'img/mathilda.png', builds: ['Зачарованный талисман', 'Мимолетное время', 'Бессмертие'], counters: ['Наталия', 'Сэйбер', 'Линг'] },
  { name: 'Barats', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/barats.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Brody', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/brody.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Paquito', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/paquito.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Yve', role: 'Маг', difficulty: 'Легко', type: 'Маг', position: 'Середина', image: 'img/yve.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Beatrix', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/beatrix.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Gloo', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/gloo.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Aulus', role: 'Боец', difficulty: 'Легко', type: 'Физ', position: 'Лес', image: 'img/aulus.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Valentina', role: 'Маг', difficulty: 'Средне', type: 'Маг', position: 'Середина', image: 'img/valentina.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Edith', role: 'Танк', difficulty: 'Средне', type: 'Физ', position: 'Золото', image: 'img/edith.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Melissa', role: 'Стрелок', difficulty: 'Легко', type: 'Физ', position: 'Сад', image: 'img/melissa.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Julian', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/julian.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Fredrinn', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/fredrinn.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Joy', role: 'Убийца', difficulty: 'Сложно', type: 'Физ', position: 'Лес', image: 'img/joy.png', builds: ['Клинок отчаяния', 'Бесконечная битва', 'Крылья королевы'], counters: ['Сэйбер', 'Франко', 'Чоу'] },
  { name: 'Novaria', role: 'Маг', difficulty: 'Сложно', type: 'Маг', position: 'Середина', image: 'img/novaria.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Ixia', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/ixia.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Chip', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/chip.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Silvanna', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/silvanna.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Guinevere', role: 'Танк', difficulty: 'Средне', type: 'Физ', position: 'Золото', image: 'img/guinevere.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Lylia', role: 'Маг', difficulty: 'Средне', type: 'Маг', position: 'Середина', image: 'img/lylia.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Kagura', role: 'Маг', difficulty: 'Сложно', type: 'Маг', position: 'Середина', image: 'img/kagura.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Floryn', role: 'Поддержка', difficulty: 'Легко', type: 'Маг', position: 'Поддержка', image: 'img/floryn.png', builds: ['Зачарованный талисман', 'Мимолетное время', 'Бессмертие'], counters: ['Наталия', 'Сэйбер', 'Линг'] },
  { name: 'Grock', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/grock.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Minsi', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/minsi.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Thamuz', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/thamuz.png', builds: ['Боевые сапоги', 'Удар охотника', 'Бесконечная битва'], counters: ['Куфра', 'Чоу', 'Руби'] },
  { name: 'Cecilion', role: 'Маг', difficulty: 'Средне', type: 'Маг', position: 'Середина', image: 'img/cecilion.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Dyrroth', role: 'Убийца', difficulty: 'Сложно', type: 'Физ', position: 'Лес', image: 'img/dyrroth.png', builds: ['Клинок отчаяния', 'Бесконечная битва', 'Крылья королевы'], counters: ['Сэйбер', 'Франко', 'Чоу'] },
  { name: 'Leomord', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/leomord.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Kadita', role: 'Маг', difficulty: 'Средне', type: 'Маг', position: 'Середина', image: 'img/kadita.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Selena', role: 'Убийца', difficulty: 'Сложно', type: 'Маг', position: 'Лес', image: 'img/selena.png', builds: ['Святой кристалл', 'Громовой жезл', 'Божественный жезл'], counters: ['Чоу', 'Куфра', 'Сильвана'] },
  { name: 'Esa', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/esa.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Martis', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/martis.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Minsitthar', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/minsitthar.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Badang', role: 'Боец', difficulty: 'Легко', type: 'Физ', position: 'Лес', image: 'img/badang.png', builds: ['Боевые сапоги', 'Бесконечная битва', 'Клинок отчаяния'], counters: ['Ланселот', 'Госсен', 'Линг'] },
  { name: 'Uranus', role: 'Танк', difficulty: 'Средне', type: 'Физ', position: 'Золото', image: 'img/uranus.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Hilda', role: 'Боец', difficulty: 'Средне', type: 'Физ', position: 'Лес', image: 'img/hilda.png', builds: ['Боевые сапоги', 'Удар охотника', 'Бесконечная битва'], counters: ['Куфра', 'Чоу', 'Руби'] },
  { name: 'Belerick', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/belerick.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Lesley', role: 'Стрелок', difficulty: 'Средне', type: 'Физ', position: 'Сад', image: 'img/lesley.png', builds: ['Ярость берсерка', 'Бесконечная битва', 'Ветрокрыл'], counters: ['Линг', 'Хелкарт', 'Ланселот'] },
  { name: 'Ruby', role: 'Танк', difficulty: 'Легко', type: 'Физ', position: 'Золото', image: 'img/ruby.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Guinevere', role: 'Танк', difficulty: 'Средне', type: 'Физ', position: 'Середина', image: 'img/guinevere.png', builds: ['Ледяное господство', 'Щит Афины', 'Бессмертие'], counters: ['Карри', 'Валир', 'Жаск'] },
  { name: 'Natalia', role: 'Убийца', difficulty: 'Сложно', type: 'Физ', position: 'Лес', image: 'img/natalia.png', builds: ['Клинок отчаяния', 'Бесконечная битва', 'Крылья королевы'], counters: ['Сэйбер', 'Франко', 'Чоу'] }
];

// Функция отображения персонажей
function renderHeroes(list) {
  const container = document.getElementById('hero-container');
  if (!container) return;
  if (!list.length) {
    container.innerHTML = '<div style="grid-column:1/-1;text-align:center;font-size:20px;color:#999;">Персонажи не найдены</div>';
    return;
  }
  container.innerHTML = list.map(hero => `
    <div class="hero-card">
      <div class="hero-header">
        <div class="hero-name">${hero.name}</div>
        <div class="hero-type-badge" data-type="${hero.type}">${hero.type}</div>
      </div>
      <div class="hero-subheader">
        <div class="hero-role">${hero.role}</div>
        <div class="hero-difficulty" data-diff="${hero.difficulty}">${hero.difficulty}</div>
      </div>
      <div class="hero-position">📍 ${hero.position}</div>
      <div class="build-title">Рекомендуемые предметы:</div>
      <div class="list">${hero.builds.map(item => `<span class='badge'>${item}</span>`).join('')}</div>
      <div class="counter-title">Сложные противники:</div>
      <div class="list">${hero.counters.map(item => `<span class='badge counter'>${item}</span>`).join('')}</div>
    </div>
  `).join('');
}

// Поиск персонажей
function searchHeroes(query, role) {
  let filtered = heroes;
  if (role && role !== 'all') {
    filtered = filtered.filter(hero => hero.role.toLowerCase() === role.toLowerCase());
  }
  if (query) {
    filtered = filtered.filter(hero =>
      hero.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return filtered;
}

// Обработка поиска
function setupSearch() {
  // Поиск и фильтр ролей в одной строке
  const searchBlock = document.createElement('div');
  searchBlock.id = 'search-block';
  searchBlock.className = 'search-filter-row';

  const select = document.createElement('select');
  select.className = 'filter-select';
  select.innerHTML = '<option value="all">Все роли</option>' +
    Array.from(new Set(heroes.map(h => h.role))).map(role => `<option value="${role}">${role}</option>`).join('');

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Поиск персонажа...';
  input.className = 'search-input';

  searchBlock.appendChild(select);
  searchBlock.appendChild(input);
  document.body.insertBefore(searchBlock, document.getElementById('hero-container'));

  function update() {
    renderHeroes(searchHeroes(input.value, select.value));
  }
  select.addEventListener('change', update);
  input.addEventListener('input', update);
}

// Вход и просмотр (простая имитация)
function setupLogin() {
  const loginDiv = document.createElement('div');
  loginDiv.style.textAlign = 'center';
  loginDiv.style.margin = '24px 0 0 0';
  loginDiv.id = 'login-block';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Введите имя пользователя';
  input.className = 'login-input';
  input.style.marginRight = '10px';

  const btn = document.createElement('button');
  btn.textContent = 'Войти';
  btn.className = 'login-btn';

  btn.onclick = () => {
    if (input.value.trim().length > 0) {
      localStorage.setItem('mlbbUser', input.value.trim());
      loginDiv.innerHTML = '';
      document.getElementById('hero-container').style.display = '';
      const filterBlock = document.getElementById('filter-block');
      if (filterBlock) filterBlock.style.display = '';
    } else {
      alert('Введите имя пользователя!');
    }
  };

  loginDiv.appendChild(input);
  loginDiv.appendChild(btn);
  document.body.insertBefore(loginDiv, document.body.firstChild);

  // Проверка входа
  const user = localStorage.getItem('mlbbUser');
  if (user) {
    loginDiv.innerHTML = '';
    document.getElementById('hero-container').style.display = '';
    const filterBlock = document.getElementById('filter-block');
    if (filterBlock) filterBlock.style.display = '';
  } else {
    document.getElementById('hero-container').style.display = 'none';
    const filterBlock = document.getElementById('filter-block');
    if (filterBlock) filterBlock.style.display = 'none';
  }
}

// Анимация появления карточек
function setupAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .hero-card {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 0.7s forwards;
    }
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

// Footer
function setupFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = '<p>© 2026 MLBB Database. Все права защищены.</p>';
  document.body.appendChild(footer);
}

// Инициализация
window.onload = function() {
  setupSearch();
  setupLogin();
  setupAnimations();
  renderHeroes(heroes);
  setupFooter();
};
