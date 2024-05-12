import House from '../models/House.js'
import Land from '../models/Land.js';

export const search = async (req, res) => {
  const { searchInput , propertyType,surface,bedrooms, bathrooms,   } = req.query;

 const query = {};

  if (searchInput) {
    query.$text = searchInput;
  }

  Object.keys(settings).forEach((key) => {
    if (settings[key]) query[key] = settings[key];
  });

  try {
    const result = await House.find(query);
    res.status(201).json({ message: "success!", result });
  } catch (error) {
    console.log("Error while performing search", error);
    res
      .status(500)
      .json({ message: "internal search error", error: error.message });
  }
};
