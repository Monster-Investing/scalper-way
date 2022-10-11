const opts = {
	mode: 'cors',
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
}

export const Mostactive = async (filter) => {
	const url = 'https://www.set.or.th/api/set/ranking/topGainer/mai/S?count=10'
	let response = await fetch(url)

	if (response.ok) {
		let json = await response.json()
		return json
	}
}

export const MarkeySummary = async () => {
	const url =
		'https://corsproxy.io/?https://www.set.or.th/api/set/market/SET/investor-type'
	let response = await fetch(url, opts)

	if (response.ok) {
		let json = await response.json()
		return json
	}
}
