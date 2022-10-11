import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { MarkeySummary } from '../helpers'

export default function Home() {
	const M = 1_000_000
	const [summary, setSummary] = useState({})

	// const [summary, setSummary] = useState({
	// 	institution: '',
	// 	proprietary: '',
	// 	foreign: '',
	// 	individual: '',
	// })

	useEffect(() => {
		MarkeySummary().then((data) => {
			setSummary({
				[data.investors[0].type]: (data.investors[0].netValue / M).toFixed(2),
				[data.investors[1].type]: (data.investors[1].netValue / M).toFixed(2),
				[data.investors[2].type]: (data.investors[2].netValue / M).toFixed(2),
				[data.investors[3].type]: (data.investors[3].netValue / M).toFixed(2),
			})
		})
	}, [])

	return (
		<div>
			<Head>
				<title>Scalper Way</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className={styles.trading_summary}>
					<div className={styles.trading_summary_type}>
						<div className={styles.summary_card}>
							<div>Institution</div>
							<div className={styles.number}>{summary.institution}</div>
						</div>
					</div>
					<div className={styles.trading_summary_type}>
						<div className={styles.summary_card}>
							<div>Proprietary</div>
							<div className={styles.number}>{summary.proprietary}</div>
						</div>
					</div>
					<div className={styles.trading_summary_type}>
						<div className={styles.summary_card}>
							<div>Foreign</div>
							<div className={styles.number}>{summary.foreign}</div>
						</div>
					</div>
					<div className={styles.trading_summary_type}>
						<div className={styles.summary_card}>
							<div>Individual</div>
							<div className={styles.number}>{summary.individual}</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
