export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <p>
            {contact.name} <span>{contact.number}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};
