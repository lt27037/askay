const endpoint = "https://askay-server.herokuapp.com";

const getData = async (path) => {
  try {
    const response = await fetch(`${endpoint}/${path}`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default getData;
