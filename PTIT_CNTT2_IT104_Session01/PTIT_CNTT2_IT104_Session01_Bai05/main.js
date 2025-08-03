const response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com",
    },
  },
};
let [title, author] = [response.data.title, response.data.author];
let [authorName, authorEmail] = [author.name, author.email];
console.log(`Title : ${title}`);
console.log(`Author : ${author}`);
console.log(`AuthorName : ${authorName}`);
console.log(`AuthorEmail : ${authorEmail}`);
