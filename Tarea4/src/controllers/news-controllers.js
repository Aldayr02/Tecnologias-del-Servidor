const ResponseStatus = require('../utils/response-status');
const axios = require('axios');

class NewsController {
  getNews(req, res) {
    const url = 'https://newsapi.org/v2/everything?q=music&apiKey=087e879293f640dcb3e300a20db66229';

    axios
      .get(url)
      .then((response) => {
        res.send(response.data.articles);
      })
      .catch((e) => {
        res.status(ResponseStatus.NOT_FOUND).send('Something wrong in getNews' + e);
      });
  }
}

module.exports = new NewsController();
