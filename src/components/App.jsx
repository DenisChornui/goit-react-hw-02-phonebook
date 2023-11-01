import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    console.log(newContact);
    this.setState(prevState => ({
      contatcts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  deleteContact = (id) => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== id)
}))
    console.log('Deletecontact')
  }

  contactFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    )
  }
  render() {

    const filterContacts = this.getFilterContacts()

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter items={filterContacts} onChange={this.contactFilter} />
        <ContactList items={filterContacts} onDelete={this.deleteContact}/>
      </div>
    );
  }
}