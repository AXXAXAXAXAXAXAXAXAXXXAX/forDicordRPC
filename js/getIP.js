// Получение информации о местоположении на основе IP-адреса
fetch("http://ip-api.com/json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.city); // Город
    })
    .catch(console.error);
