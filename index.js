const osmosis = require('osmosis');
const micro = require('micro')
const PORT = process.env.PORT || 3000
 
const server = micro(async (req, res) => {
	return await P((resolve, reject) => {
		setTimeout(() => {
			console.log('Resolve')
			resolve('done...')
		}, 1000)
	})
	// osmosis
	// .get('www.bt.dk')
	// .set({
	//     'title':        'h1',
	// })
	// .data(function(listing) {
	// 	console.log(listing)
	//     // do something with listing data 
	// })
	// .log(console.log)
	// .error(console.log)
	// .debug(console.log)

})
 
server.listen(PORT, () => console.log('Ready on', PORT))

 const P = function (resolve, reject) {
 	return new Promise(resolve, reject)
 }