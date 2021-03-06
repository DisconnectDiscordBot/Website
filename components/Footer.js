import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.basic}>
					<p className={styles.brand}>Disconnect</p>
					<p>Copyright © 2021 Disconnect</p>
				</div>
				<div className={styles.links}>
					<Link href='/about'>
						<a>Terms of Service</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
