import styles from './Card.module.css'
import cat01Img from './../../img/fashion-images/categories/cat-01.jpg'
import arrowImg from './../../img/fashion-images/icons/arrow.svg'

const Card = () => {
  return (<div className={styles.card}>
    <img className={styles.card__img} src={cat01Img} alt="Cate01" />
    <div className={styles.card__body}>
    <div className={styles.card__text}>
    <div className={styles.card__title}>Hoodies & Sweetshirt</div>
    <div className={styles.card__muted}>Explore Now!</div>
      </div>
      <div className={styles.card__icon}>
      <img src={arrowImg} alt="" />
    </div>
    </div>
  </div>);
}
 
export default Card;