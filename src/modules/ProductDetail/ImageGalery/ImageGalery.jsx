
import { useState, useEffect } from 'react';
import styles from './ImageGalery.module.css';
const API_URL =  'http://localhost:3333';

const ImageGallery = ({ images }) => {
    const [main, setMain] = useState('');

    useEffect(() => {
        if (images.length) {
            setMain(`${API_URL}${images[0]}`);
        }
    }, [images]);

    return (
        <div className={styles.gallery}>
            <div className={styles.thumbnails}>
                {images.map((img, i) => {
                    const src = `${API_URL}${img}`;
                    return (
                        <img
                            key={i}
                            src={src}
                            alt={`thumb-${i}`}
                            className={styles.thumb}
                            onClick={() => setMain(src)}
                        />
                    );
                })}
            </div>
            {main && (
                <img
                    src={main}
                    alt="main"
                    className={styles.mainImage}
                />
            )}
        </div>
    );
};

export default ImageGallery;
