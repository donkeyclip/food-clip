export default {
  name: {
    label: "Name",
    type: "string",
  },
  category: {
    label: "Category",
    type: "string",
  },
  city: {
    label: "City",
    type: "string",
  },
  dishes:{
    label: "Dishes",
    type: "array",
    items:{
      type:"object",
      props: {
        image: { type: "string"},
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "string" },
        offer: { type: "string" },
      }
    }
  },
};
