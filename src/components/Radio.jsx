import { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import RadioStation from "./RadioStation";

const Radio = () => {
  const api = new RadioBrowserApi("My Radio App");
  const [radioStations, setRadioStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [searchName, setSearchName] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchTag, setSearchTag] = useState("");

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
    setLimit(limit + 10);
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

        // Filter out stations without a favicon (img)
        const filteredStations = stations.filter(
          (station) => station.favicon && station.bitrate > 0
        );

        // Transform the data
        const transformedStations = filteredStations.map((station) => ({
          name: station.name,
          description: station.country,
          bitRate: station.bitrate,
          img: station.favicon,
          streamUrl: station.url,
        }));

        setRadioStations(transformedStations);
      } catch (error) {
        console.error("Error fetching radio stations:", error);
      } finally {
        setLoading(false);
      }
    };

    getStations();
  }, [limit, searchName, searchCountry, searchTag]);

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
