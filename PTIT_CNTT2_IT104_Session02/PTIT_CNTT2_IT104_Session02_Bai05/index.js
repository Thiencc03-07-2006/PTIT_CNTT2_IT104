class contacts {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
  display() {
    console.log(`
        Ten: ${this.name}
        Phone: ${this.phone}
        Email: ${this.email}`);
  }
}
const addContact = (name, phone, email) => new contacts(name, phone, email);
const displayContact = (contactsList) =>
  contactsList.map((target) => target.display());
const contactsList = [];
contactsList.push(addContact("An", "081111111", "an@gmail.com"));
contactsList.push(addContact("Binh", "082222222", "an@gmail.com"));
contactsList.push(addContact("Chi", "083333333", "an@gmail.com"));
displayContact(contactsList);
