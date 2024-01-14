import * as contactsService from "./contacts.js"


// TODO: рефакторити
const invokeAction = async({ action, contactId, name, email, phone }) =>{
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
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

invokeAction({action:'list'});
invokeAction({action:'get',contactId:'05olLMgyVQdWRwgKfg5J6'});
invokeAction({action:'add',name:'Zhenia',email:'zhenya@gmail.com',phone:'0935675436'});
invokeAction({action:'remove',contactId:"gOdRSMGD0ZZhGMwmi9ZtI"});