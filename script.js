
document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value;
  const userMessage = document.getElementById('userMessage').value;

  if (userName && userMessage) {
    sendMessageToTelegram(userName, userMessage);
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('messageForm').reset();
  }
});

function sendMessageToTelegram(name, message) {
  const botToken = "8173670604:AAHrt7IGEtjug3UpKQkcov1olrv1BfJw7c4";
  const chatId = "7766155793";

  const text = `Mesej diterima daripada: ${name}\nMesej: ${message}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        console.log("Mesej berjaya dihantar ke Telegram");
      } else {
        console.log("Ralat semasa menghantar mesej ke Telegram");
      }
    })
    .catch(error => {
      console.error("Ralat semasa hantar mesej:", error);
    });
}
