import styles from "../styles/Card.module.css";
export default function Card() {
	console.log(styles.button);
	const h3CSS = {
		color: "blue",
	};
	return (
		<div className='container'>
			<h3 style={h3CSS}>Velkommen</h3>
			<p>Haper du gaer en fin dag</p>
			<div className={styles.container}>
				<input type='text'></input>
				<button className={styles.button}>add</button>
				<button>delete</button>
			</div>
		</div>
	);
}
//global->modul->inline
