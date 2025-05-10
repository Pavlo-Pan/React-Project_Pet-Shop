import { useState } from 'react';
import styles from './Descriptions.module.css';

const Description = ({ text = '' }) => {
    const [open, setOpen] = useState(false);
    const preview = text.slice(0, 500);

    return (
        <div className={styles.desc}>
            <h5 className={styles.title}>Description</h5>
            {open ? text : preview + (text.length > 500 ? '…' : '')}
            {text.length > 500 && (
                <span className={styles.more} onClick={() => setOpen(o => !o)}>
                    {open ? 'Show less' : 'Read more'}
                </span>
            )}
        </div>
    );
};

export default Description;


