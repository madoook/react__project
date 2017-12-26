- Для дальнейшей работы вам необходимо установить git c git-scm.org
- Node js c nodejs.org

# Установка базы данных mongodb WIN
- Установка монго с официального сайта https://www.mongodb.com/download-center?jmp=nav#community в путь по умолчанию *C:/Program Files/MongoDb/*
- Добавляем *C:\Program Files\MongoDB\Server\3.4\bin\* в переменные окружения windows
В строке "Поиск" выполните поиск: Система (Панель управления)
Нажмите на ссылку Дополнительные параметры системы.
Нажмите Переменные среды. В разделе Переменные среды выберите переменную среды PATH. Нажмите Изменить и добавьте к сущестующим путям путь описанный выше. Если переменной PATH не существует, нажмите Создать.
В окне Изменение системной переменной (или Новая системная переменная) укажите значение переменной среды PATH. Нажмите ОК. Закройте остальные открытые окна, нажимая ОК.
Видео пример установки монго на win https://www.youtube.com/watch?v=1uFY60CESlM&feature=youtu.be
- В папке server создаем папку mongo-db
- После для запуска монго сервера выполняем в cmd npm run start-mongo-win
- Консоль не закрываем!!!!! Последующие команды выполняются в другом окне cmd

# Установка базы данных mongodb MAC
- В терминале запустить команду */usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"* - установка homebrew http://brew.sh/index_ru.html
- В терминале запустить команду *brew install mongodb*

# Установка и запуск API сервера
- Переходим в папку /server
- Запускаем консоль cmd, gitBash, или terminal(для macOS) 
- В открывшейся консоли выполняем команду npm install(установятся все необходимые библиотеки)
- В консоле(win - cmd, mac - terminal) выполнить команды *npm run start-mongo-mac* или *npm run start-mongo-win*  эта команда запускает базу данных, окно не закрываем
- Открыть *еще одно* окно консоли(терминала) выполнить команду *npm run export-data* - експортирует данные в базу данных
- Выполняем команду *npm run start-api*

# Установка и запуск клиента
Переходим в папку /client в командной строке/терминале выполняем:
- глобальную установку webpack командой: npm i -g webpack,
- установку локальных библиотек команда: npm install
- в папке client выполняем команду npm start запустится сервер разработки
- в браузере переходим по адресу http://localhost:3000


# Запросы к серверу
Получение каталога телефонов GET http://localhost:4001/api/v1/phones
Плучение деталей для телефона  GET http://localhost:4001/api/v1/phones/:id
Получение комментариев к телефону GET http://localhost:4001/api/v1/comments/:id
Добавление комментария к телефону POST http://localhost:4001/api/v1/comments/
body: {
  "item_id": "5706d89c40fe4998057b4fe9",
  "text": "comment for comment asdasdasdasdasdasdasd",
  "author": "test authordfsdfsdfdsf",
  "item_rating": 1
}

