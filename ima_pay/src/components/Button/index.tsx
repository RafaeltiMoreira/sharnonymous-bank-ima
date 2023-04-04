import styles from './styles.module.css';

type Props = {
    txt: string;
    action: (event?: any) => void;
    size?: string;
    disable?: boolean;
}

export function Button({ action, txt, size, disable }: Props) {
    return (
        <>
            <button 
                onClick={action} 
                className={styles.btn} 
                style={{width: `${size}px`}}
                disabled={disable}
            >{txt}
            </button>
        </>
    );
}