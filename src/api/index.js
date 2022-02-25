import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "9db4e0efd1mshdcacb49a0866696p15ddc7jsn6d870d9ddc9d",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
