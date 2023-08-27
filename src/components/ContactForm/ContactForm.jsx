import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // обробник подій за атрибутом name✅
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSumbit = event => {
    const { name, number } = this.state;
    event.preventDefault();

    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSumbit}>
        <label>
          Name
          <input
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
        </label>

        <label>
          Number
          <input
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Nubmer"
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
