db = new Mongo().getDB("direct-contact");

db.createUser(
  {
    user: "service",
    pwd: "service",
    roles: [
      {
        role: "readWrite",
        db: "direct-contact"
      }
    ]
  }
)

// Создание коллекции users
db.users.insertMany([
    { username: "user1" },
    { username: "user2" }
]);

// Функция для генерации случайных данных клиента
function getRandomClientData(id) {
    // Наборы имен для мужчин и женщин
    const maleFirstNames = ["Michael", "Ethan", "Jackson", "Oliver", "James", "William", "Joshua", "Daniel", "Luke", "Andrew"];
    const femaleFirstNames = ["Sophia", "Isabella", "Ava", "Mia", "Olivia", "Ella", "Chloe", "Lily", "Grace", "Zoe"];
    
    const lastNames = ["Abernathy", "Kuhn", "Dickinson", "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson"];
    
    const genders = ["male", "female"];
    
    const cities = ["Port Logan", "Fort Jordi", "Rickyberg", "Harrisland", "New Versailles", "Port Thalia", "Lake Lang", "East Alana", "South Alex", "North Henry"];
    
    const addresses = ["00606 Keyshawn Crossing", "37119 Strosin Avenue", "08178 Bradtke Tunnel", "Location A", "Location B", "Location C", "Location D", "Location E", "Location F", "Location G", "Location H"];

    // Случайный выбор пола
    const gender = genders[Math.floor(Math.random() * genders.length)];
    
    // Выбор имени в зависимости от пола
    const firstName = gender === "male" 
        ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)] 
        : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const address = addresses[Math.floor(Math.random() * addresses.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const phone = "501-" + Math.floor(Math.random() * 1000) + "-" + Math.floor(Math.random() * 1000);
    const email = firstName.toLowerCase() + "_" + lastName.toLowerCase() + id + "@example.com";

    return {
        id: id, // Упорядоченный ID
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        address: address,
        city: city,
        phone: phone,
        email: email
    }
}


// Генерация 3000 клиентов
const clientsData = [];
for (let i = 1; i <= 100000; i++) {
    clientsData.push(getRandomClientData(i)); // Передаем значение i как id
}

// Вставка данных в коллекцию clients
db.clients.insertMany(clientsData);
