import styles from './alert.module.css';
import { clsx } from 'clsx';

export default function Alert({ children, type }) {
    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: tyle === 'error',
            })}
        >
            {children}
        </div>
    );
}
