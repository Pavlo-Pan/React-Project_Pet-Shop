import styles from './SkeletonCard.module.css'

export default function SkeletonCard({ width = '300px', height = '200px' }) {
    return (
        <div
            className={styles.spinner}
            style={{ width, height, margin: '8px' }}
        />
    )
}
