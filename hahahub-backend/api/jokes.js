const jokes = [
  {
    id: 1,
    title: "Programming Humor",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!",
    category: "Tech",
    author: "CodeMaster",
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    title: "Classic Dad Joke",
    content: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    category: "Dad Jokes",
    author: "DadJokePro",
    createdAt: "2024-01-14T15:20:00Z"
  },
  {
    id: 3,
    title: "Animal Comedy",
    content: "What do you call a sleeping bull? A bulldozer!",
    category: "Animals",
    author: "AnimalLover",
    createdAt: "2024-01-13T09:45:00Z"
  },
  {
    id: 4,
    title: "Science Fun",
    content: "Why don't scientists trust atoms? Because they make up everything!",
    category: "Science",
    author: "ScienceGeek",
    createdAt: "2024-01-12T14:10:00Z"
  }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'GET') {
    res.status(200).json({ data: jokes });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};