const phoneBook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Julius Caesar', phone: '+380441112233' },
    { name: 'Seneca the Younger', phone: '+380447778899' }
];

const findPhoneByName = name => 
    phoneBook.find(contact => contact.name === name)?.phone;


console.log(findPhoneByName('Marcus Aurelius')); 
