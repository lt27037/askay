import React, { useState, useRef } from 'react';

import Button from '../components/Button';

import '../styles/Contact.scss';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [budgetMin, setBudgetMin] = useState('');
  const [budgetMax, setBudgetMax] = useState('');
  const [content, setContent] = useState('');

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleType = (e) => setType(e.target.value);
  const handleDeadline = (e) => setDeadline(e.target.value);
  const handleBudgetMin = (e) => setBudgetMin(e.target.value);
  const handleBudgetMax = (e) => setBudgetMax(e.target.value);
  const handleContent = (e) => setContent(e.target.value);

  const contact = useRef(null);

  return (
    <section className="contact" ref={contact}>
      <h2 className="contact__title">
        Złóż
        <span> zamówienie</span>
      </h2>
      <h3 className="contact__subtitle">
        Napisz do nas poprzez
        <span> Facebooka </span>
        lub wypełnij poniższy
        <span> formularz</span>
      </h3>
      <h4 className="contact__formTitle">Formularz</h4>
      <form className="contact__form">
        <input
          type="text"
          className="contact__form__input"
          onChange={handleFirstName}
          value={firstName}
          placeholder="Imię*"
        />
        <input
          type="text"
          className="contact__form__input"
          onChange={handleLastName}
          value={lastName}
          placeholder="Nazwisko"
        />
        <input
          type="email"
          className="contact__form__input"
          onChange={handleEmail}
          value={email}
          placeholder="E-mail*"
        />
        <input
          type="text"
          className="contact__form__input"
          onChange={handleType}
          value={type}
          placeholder="Rodzaj zamówienia*"
        />
        <input
          type="text"
          className="contact__form__input"
          onChange={handleDeadline}
          value={deadline}
          placeholder="Czas realizacji"
        />
        <input
          type="text"
          className="contact__form__input budget"
          onChange={handleBudgetMin}
          value={budgetMin}
          placeholder="Budżet min."
        />
        <input
          type="text"
          className="contact__form__input budget"
          onChange={handleBudgetMax}
          value={budgetMax}
          placeholder="Budżet maks."
        />
        <textarea
          className="contact__form__text"
          placeholder="Opis"
          value={content}
          onChange={handleContent}
        />
        <span className="contact__form__info">* - pole obowiązkawe</span>
        <input type="file" className="contact__form__file" />
      </form>
      <Button content="Wyślij" />
    </section>
  );
};

export default Contact;
