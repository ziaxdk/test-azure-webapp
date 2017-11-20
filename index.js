const osmosis = require('osmosis');
const micro = require('micro')
const PORT = process.env.PORT || 3000
 
const server = micro(async (req, res) => {
  return await P((resolve, reject) => {
    osmosis
      .get('https://www.vesselfinder.com/vessels/LADY-A-IMO-0-MMSI-219019716')
      .find('main')
      .set({
        'date': 'time#last_report_ts@datetime',
        'lat': 'span[itemprop=latitude]',
        'lon': 'span[itemprop=longitude]'
      })
      .data(listing => {
        data = listing
      })
      // .log(console.log)
      // .error(console.log)
      // .debug(console.log)
      .error(reject)
      .done(() => { resolve(data) })
  })
})
 
server.listen(PORT, () => console.log('Ready on', PORT))

 const P = function (resolve, reject) {
 	return new Promise(resolve, reject)
 }