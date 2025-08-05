const user1 = {
  name: "John",
  age: 25,
  location: {
    city: "Hanoi",
    country: "Vietnam",
  },
  contact: {
    email: "john@example.com",
    phone: "0123456789",
  },
  job: {
    title: "Developer",
    company: "Tech Corp",
  },
};
const user2 = {
  name: "John",
  age: 25,
  location: {
    city: "Hanoi",
    country: "Vietnam",
  },
};
const displayUserInfo = (user) => {
  if (!user.contact) {
    user.contact = {};
    user.contact.email = "unknown";
    user.contact.phone = "unknown";
  }
  if (!user.job) {
    user.job = {};
    user.job.title = "unknown";
    user.job.company = "unknown";
  }
  console.log(
    `${user.name} is ${user.age} years old, lives in ${user.location.city}, ${user.location.country}, works as ${user.job.title} at ${user.job.company}, and can be contacted via ${user.contact.email} or ${user.contact.phone}.`
  );
};
displayUserInfo(user1);
displayUserInfo(user2);
