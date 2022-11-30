import styles from './Form.module.css';

export function Message(props) {

  return (
    <>
      <div className={styles.message}>
        <p>Author: </p>
        <div className={styles.messageDesc}>
          <p>{props.message}</p>
          <div className={styles.time}>{props.timeMessage.hours}:{props.timeMessage.minutes}</div>
        </div>
      </div>
    </>
  )
}