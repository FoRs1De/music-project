import { useState, useEffect } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import RadioStation from './RadioStation';

const Radio = () => {
  const api = new RadioBrowserApi('My Radio App');
  const [radioStations, setRadioStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);
  const [searchName, setSearchName] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [searchTag, setSearchTag] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameSearch = (e) => {
    let value = e.target.value;
    setSearchName(value);
  };
  const handleCountrySearch = (e) => {
    let value = e.target.value;
    const capitalizeFirstLetter = (str) => {
      if (str.length === 0) return str;
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    setSearchCountry(capitalizeFirstLetter(value));
  };

  const handleGenreSearch = (e) => {
    let value = e.target.value;
    setSearchTag(value.toLowerCase());
  };

  const handleLimit = () => {
    setLimit(limit + 20);
  };

  const handleFilterChange = (e) => {
    let value = e.target.value;
    setFilter(value);
  };

  useEffect(() => {
    const getStations = async () => {
      try {
        const stations = await api.searchStations({
          name: searchName,
          country: searchCountry,
          tag: searchTag,
          limit: limit,
        });

        const filteredStations = stations.filter(
          (station) =>
            station.favicon && station.bitrate !== 0 && station.img !== ''
        );

        let finalRadioStations;

        if (filter === '') {
          finalRadioStations = [...filteredStations]; // Copy the array
        } else if (filter === 'popular first') {
          finalRadioStations = [...filteredStations].sort((a, b) => {
            return b.votes - a.votes;
          });
        } else {
          finalRadioStations = [...filteredStations].sort((a, b) => {
            return a.votes - b.votes;
          });
        }

        const transformedStations = finalRadioStations.map((station) => ({
          name: station.name,
          description: station.country,
          bitRate: station.bitrate,
          img: station.favicon,
          streamUrl: station.url,
          votes: station.votes,
        }));

        setRadioStations(transformedStations);
      } catch (error) {
        console.error('Error fetching radio stations:', error);
      } finally {
        setLoading(false);
      }
    };

    getStations();
  }, [limit, searchName, searchCountry, searchTag, filter]);

  return (
    <div className="radio">
      <div className="search-container">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search by name"
            onChange={handleNameSearch}
          />
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search by country"
            onChange={handleCountrySearch}
          />
        </div>

        <div className="search-input">
          <input
            type="text"
            placeholder="Search by Genre"
            onChange={handleGenreSearch}
          />
        </div>
        <div className="search-input">
          <select className="filter-dropdown" onChange={handleFilterChange}>
            <option value="">Filter by rating</option>
            <option value="popular first">Popular first</option>
            <option value="popular last">Popular last</option>
          </select>
        </div>
      </div>
      <div className="radio-wrapper">
        {loading ? (
          <p>Loading radio stations...</p>
        ) : (
          radioStations.map((station, index) => (
            <RadioStation
              key={index}
              name={station.name}
              description={station.description}
              img={station.img}
              streamUrl={station.streamUrl}
              bitRate={station.bitRate}
              votes={station.votes}
            />
          ))
        )}
      </div>
      <center>
        <button onClick={handleLimit}>Show more...</button>
      </center>
    </div>
  );
};

export default Radio;
