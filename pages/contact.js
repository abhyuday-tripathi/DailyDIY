import styles from '../styles/Contact.module.css';

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Want to add your Content?</h1>
      <form
        className={styles.contactForm}
        name='contact'
        data-netlify='true'
        data-netlify-recaptcha='true'
        method='POST'
      >
        <input
          className={styles.inputBox}
          type='text'
          name='name'
          placeholder='Enter your Name'
        />
        <input
          className={styles.inputBox}
          type='email'
          name='email'
          placeholder='Enter your Email'
        />
        <input
          className={styles.inputBox}
          type='number'
          name='phone'
          placeholder='Enter your Phone'
        />
        <button className={styles.btn} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
