'use strict';

const sampleJokes = [
  {
    title: "Programming Humor",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!",
    category: "Tech",
    author: "CodeMaster",
    isPublished: true,
    uploadedTime: new Date()
  },
  {
    title: "Classic Dad Joke",
    content: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    category: "Dad Jokes",
    author: "DadJokePro",
    isPublished: true,
    uploadedTime: new Date()
  },
  {
    title: "Animal Comedy",
    content: "What do you call a sleeping bull? A bulldozer!",
    category: "Animals",
    author: "AnimalLover",
    isPublished: true,
    uploadedTime: new Date()
  },
  {
    title: "Food Fun",
    content: "Why don't scientists trust atoms? Because they make up everything!",
    category: "Science",
    author: "ScienceGeek",
    isPublished: true,
    uploadedTime: new Date()
  }
];

async function seedJokes() {
  try {
    console.log('Seeding jokes...');
    
    for (const joke of sampleJokes) {
      await strapi.documents('api::joke.joke').create({
        data: {
          ...joke,
          publishedAt: new Date()
        }
      });
    }
    
    console.log('Jokes seeded successfully!');
  } catch (error) {
    console.error('Error seeding jokes:', error);
  }
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  await seedJokes();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});