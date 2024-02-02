import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  // const [loadOptions, setLoadOptions] = useState([]);

  async function loadOptions(inputValue){
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;








// import { useState } from "react";
// import { AsyncPaginate } from "react-select-async-paginate";
// import { GEO_API_URL, geoApiOptions } from "../../api";

// const Search = ({ onSearchChange }) => {
//   // using GeoDB cities api to make auto complete work

//   const [search, setSearch] = useState(null);

//   const loadOptions = (inputValue) => {
//     return fetch(
//       `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
//     geoApiOptions
//     )

//     .then((response) => response.json())
//     .then((response) => {
//       return {
//         options: response.data.map((city) => {
//           return {
//             value: `${city.latitude} ${city.longitude}`,
//             label: `${city.name}, ${city.countryCode}`,
//           }
//         })
//       }
//     })
//     .catch(err => console.error(err));
//   }

//   // async function loadOptions(inputValue) {
//   //   try {
//   //     const response = await fetch(
//   //       `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
//   //     geoApiOptions
//   //     );
//   //     const result = await response.text();
//   //     console.log(result);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }

//   const handleOnChange = (searchData) => {
//     setSearch(searchData);
//     onSearchChange(searchData);
//   }

//   return (
//     <AsyncPaginate 
//       placeholder="search for city"
//       debounceTimeout={600}
//       value={search}
//       onChange={handleOnChange}
//       loadOptions={loadOptions}
//     />
//   )
// }

// export default Search;