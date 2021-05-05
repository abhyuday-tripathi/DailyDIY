import styles from '../styles/Contact.module.css';

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Want to add your Content?</h1>
      <form
        className={styles.contactForm}
        name='contact'
        action='https://formsubmit.co/ae80e0e0833568a2b84859be52e5b5a4'
        method='POST'
      >
        <input
          className={styles.inputBox}
          type='text'
          name='name'
          placeholder='Enter your Name'
          required
        />
        <input
          className={styles.inputBox}
          type='email'
          name='email'
          placeholder='Enter your Email'
          required
        />
        <input
          className={styles.inputBox}
          type='number'
          name='phone'
          placeholder='Enter your Phone'
          required
        />
        <button className={styles.btn} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
