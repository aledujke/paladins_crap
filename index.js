const paladins = require('paladins-api');
const pal = new paladins('', '');

var sessionId;
pal.connect('PC', (err, res) => {
	if(!err) {
		sessionId = res;
    let matches;
    pal.getMatchHistory(sessionId, 'PC', 'aledujke', (err, res) => {
    	matches = res;
      for(var i = 0; i < matches.length; i++) {
        pal.getMatchDetails(sessionId, 'PC', matches[i].Match, (err, res) => {
          console.log(res);
        })
      }
    });
	};
});

