// axios installed for express; helps make HTTP requests to another website

const axios = require('axios');

// function that will run when someone hits the /friends route:

const getFriends = async (req, res) => {
  try {
    // using axios to go to the TVMaze website and get Friends show info:
    const response = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends&embed=episodes');

    // send back the data we got from TVMaze as JSON
   
    res.json(response.data);
  } catch (error) {
    // sends back a 500 error message
    res.status(500).json({ error: 'Failed to fetch Friends data' });
  }
};

// export the function so other files can use it
module.exports = { getFriends };
