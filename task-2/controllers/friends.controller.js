// axios installed for express; helps make HTTP requests to another website

const axios = require('axios');

// function that will run when someone hits the /friends route:

const getFriends = async (req, res) => {
  try {
    // using axios to go to the TVMaze website and get Friends show info:
    const response = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes');

    // send back the data we got from TVMaze as JSON

    //make json output pretty
   
    const result = {
      name: data.name,
      summary: data.summary,
      image: data.image.original,
      episodes: data._embedded.episodes.map((ep) => ({
        name: ep.name,
        airdate: ep.airdate,
        summary: ep.summary,
      })),
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = { getFriendsData };
