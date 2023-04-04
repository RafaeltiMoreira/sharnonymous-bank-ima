import styles from './styles.module.css';

type Props = {
    txt: string;
    action: (event?: any) => void;
}

export function Button({ action, txt }: Props) {
    return (
        <>
            <button onClick={action} className={styles.btn}>{txt}</button>
        </>
    );
}