// axios installed for express; helps make HTTP requests to another website

const axios = require('axios');

// function that will run when someone hits the /friends route:

const getShowDetails = async (req, res) => {
  try {
    // using axios to go to the TVMaze website and get Friends show info:
    const response = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes');

    // send back the data we got from TVMaze as JSON

    //make json output pretty
   
    const show = response.data;

    const data = {
      name: show.name,
      summary: show.summary,
      image: show.image?.original
    };

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong while fetching show details.' });
  }
};

// for getting /episodes
const getAllEpisodes = async (req, res) => {
  try {
    const response = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes');
    const episodes = response.data._embedded.episodes;

    const episodeList = episodes.map((ep) => ({
      name: ep.name,
      airdate: ep.airdate,
      summary: ep.summary
    }));

    res.status(200).json(episodeList);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong while fetching episodes.' });
  }
};

module.exports = {
  getShowDetails,
  getAllEpisodes
};