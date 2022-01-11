import styles from './Hero.module.css'

export const Hero = ({title, children}) => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.hero_content_wrapper}>
                <h1 className={styles.hero_title}>{title}</h1>
                <p className={styles.hero_content}>{children}</p>
            </div>
        </div>
    )
}
