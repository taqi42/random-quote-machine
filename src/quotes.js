const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "In the midst of chaos, there is also opportunity.",
    author: "Sun Tzu",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "To succeed in life, you need two things: ignorance and confidence.",
    author: "Mark Twain",
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
  },
  {
    quote: "If you want to achieve greatness stop asking for permission.",
    author: "Anonymous",
  },
  {
    quote: "The secret to getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
  },
  {
    quote:
      "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "The successful man is the one who finds out what is the matter with his business before his competitors do.",
    author: "Roy L. Smith",
  },
  {
    quote:
      "Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    author: "David Frost",
  },
  {
    quote: "Opportunities multiply as they are seized.",
    author: "Sun Tzu",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    author: "Barack Obama",
  },
  {
    quote:
      "Success is not about the destination, but the journey and the people you meet along the way.",
    author: "Anonymous",
  },
  {
    quote:
      "You can't go back and change the beginning, but you can start where you are and change the ending.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "The successful man is the one who finds out what is the matter with his business before his competitors do.",
    author: "Roy L. Smith",
  },
  {
    quote:
      "Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    author: "David Frost",
  },
  {
    quote: "Opportunities multiply as they are seized.",
    author: "Sun Tzu",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    author: "Barack Obama",
  },
  {
    quote:
      "Success is not about the destination, but the journey and the people you meet along the way.",
    author: "Anonymous",
  },
  {
    quote:
      "You can't go back and change the beginning, but you can start where you are and change the ending.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "The successful man is the one who finds out what is the matter with his business before his competitors do.",
    author: "Roy L. Smith",
  },
  {
    quote:
      "Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    author: "David Frost",
  },
  {
    quote: "Opportunities multiply as they are seized.",
    author: "Sun Tzu",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    author: "Barack Obama",
  },
  {
    quote:
      "Success is not about the destination, but the journey and the people you meet along the way.",
    author: "Anonymous",
  },
  {
    quote:
      "You can't go back and change the beginning, but you can start where you are and change the ending.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    author: "Joel Brown",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "The successful man is the one who finds out what is the matter with his business before his competitors do.",
    author: "Roy L. Smith",
  },
  {
    quote:
      "Don't aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    author: "David Frost",
  },
  {
    quote: "Opportunities multiply as they are seized.",
    author: "Sun Tzu",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    quote:
      "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    author: "Barack Obama",
  },
];

console.log(quotes.length);

export default quotes;
