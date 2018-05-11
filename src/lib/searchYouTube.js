var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: options.max,
      q: options.query,
      key: options.key,
      type: 'video',
      videoEmbeddable: 'true',
      part: 'snippet'
    },
    success: function(data) {
      callback(data.items);
      
    }
  });
};

window.searchYouTube = searchYouTube;
window.debounceSearch = _.debounce(searchYouTube, 1000);
