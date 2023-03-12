import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Ggmap = () => {
  const [address, setAddress] = React.useState("");

  const handleSelectAddress = async (value) => {
    const results = await geocodeByAddress(value);
    console.log(results);
  };

  console.log("first");

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelectAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          console.log(suggestions);
          return (
            <div>
              <input
                att={{ mb: 2 }}
                shrink
                label={"helo"}
                {...getInputProps({
                  placeholder: "type address",
                })}
              />
              {suggestions?.map((suggestion) => (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    backgroundColor: suggestion?.active ? "#ddd" : "#000",
                  })}
                >
                  {suggestion?.description}
                </div>
              ))}
            </div>
          );
        }}
      </PlacesAutocomplete>
    </>
  );
};

export default Ggmap;
