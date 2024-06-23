document.addEventListener("DOMContentLoaded", function() {
  const fortunes = [
      "True wisdom comes not from knowledge, but from understanding.",
      "A journey of a thousand miles begins with a single step.",
      "The early bird gets the worm, but the second mouse gets the cheese.",
      "Do not wait for the perfect moment. Take the moment and make it perfect.",
      "The only limits in your life are those that you set yourself.",
      "Life is 10% what happens to us and 90% how we react to it.",
      "You are never too old to set another goal or to dream a new dream.",
      "Your limitation—it's only your imagination.",
      "Push yourself, because no one else is going to do it for you.",
      "Great things never come from comfort zones.",
      "Dream it. Wish it. Do it.",
      "Believe you can and you're halfway there.",
      "Happiness is not by chance, but by choice.",
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
      "The best way to predict the future is to create it.",
      "Every moment is a fresh beginning.",
      "Happiness is not something ready made. It comes from your own actions.",
      "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
      "The only way to do great work is to love what you do.",
      "The best time to plant a tree was 20 years ago. The second best time is now."
  ];

  function getRandomFortune() {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      return fortunes[randomIndex];
  }

  const fortuneBox = document.getElementById("fortune-box");
  fortuneBox.textContent = getRandomFortune();
});
