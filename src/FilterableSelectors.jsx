import React, { useState } from "react";

const data = [
  { city: "Marrakech", places: ["place1", "place2"] },
  { city: "Casablanca", places: ["place3", "place4"] },
  { city: "Rabat", places: ["place5", "place6"] },
  
];
const FilterableSelectors = () => {
  const [city, setCity] = useState("");
  const [places, setPlaces] = useState([]);
  const [conditions, setConditions] = useState({
    cond1: false,
    cond2: false,
    cond3: false,
    cond4: false,
    cond5: false,
    cond6: false,
    cond7: false,
  });

  async function save(e) {
    e.preventDefault();

    // Vérifier si au moins une des conditions est cochée
    if (Object.values(conditions).some((condition) => condition)) {
        alert("Impossible de s'inscrire en raison de conditions médicales.");
        return;
    }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    const selectedCity = data.find((item) => item.city === e.target.value);
    setPlaces(selectedCity.places);
  };

  const handleCheckboxChange = (condition) => {
    setConditions((prevConditions) => ({
        ...prevConditions,
        [condition]: !prevConditions[condition],
    }));
};

  return (
    <div className="filterable-selectors">
        <form className="FilterableSelectors-form" onSubmit={handleSubmit}>    
            <select value={city} onChange={handleCityChange}>
                <option value="">Ville</option>
                {data.map((item) => (
                <option key={item.city} value={item.city}>
                    {item.city}
                </option>
                ))}
            </select>
            <select>
                <option value=""> Centre</option>
                {places.map((place) => (
                <option key={place} value={place}>
                {place}
                </option>
                 ))}
            </select>

            <label htmlFor="Condition Temporelle">Souffrez-vous des conditions suivantes ?</label>
                <select onChange={(e) => handleCheckboxChange(e.target.value)}>
                    <option>Aucune Condition</option>
                    <option value="cond1" selected={conditions.con1}>cond1</option>
                    <option value="cond2" selected={conditions.cond2}>cond2</option>
                    <option value="cond3" selected={conditions.cond3}>cond3</option>
                    <option value="cond4" selected={conditions.cond4}>cond4</option>
                    <option value="cond5" selected={conditions.cond5}>cond5</option>
                    <option value="cond6" selected={conditions.cond6}>cond6</option>
                    <option value="cond7" selected={conditions.cond7}>cond7</option>
                </select>

                <button type="submit" onClick={save}>
                    Prendre rendez-vous
                </button>
        </form>
    </div>

  );
};
export default FilterableSelectors;
