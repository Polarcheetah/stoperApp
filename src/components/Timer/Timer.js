import styles from './Timer.module.scss';

const Timer = ({ value }) => {
  const formatTime = (miliseconds) => {
    const getMiliseconds = `${miliseconds % 1000}`;
    const seconds = `${Math.floor(miliseconds / 1000)}`;
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(minutes / 60)}`.slice(-2);

    const formattedValue = `${getHours} : ${getMinutes} : ${getSeconds} . ${getMiliseconds}`;

    return formattedValue;
  };

  return <div className={styles.time}>{formatTime(value)}</div>;
};

export default Timer;
