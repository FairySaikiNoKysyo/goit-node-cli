import * as contactsService from "./contacts.js"
import { program } from 'commander';


// TODO: рефакторити
const invokeAction = async({ action, contactId, name, email, phone }) =>{
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contactById =   await contactsService.getContactById(contactId);
      console.log(contactById);
      break;

    case "add":
       const addContact =  await contactsService.addContact({name,email,phone});
       console.log(addContact)
      break;

    case "remove":
      const deleteContact = await contactsService.removeContact(contactId);
      console.log(deleteContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
    .option('-a, --action <type>')
    .option('-i, --id <type>')
    .option('-n, --name <type>')
    .option('-e, --email <type>')
    .option('-p, --phone <type>')
    
program.parse();
const options = program.opts();
invokeAction(options);