export const getSearches = async (searchTerm) => {
  const apiUrl = `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${searchTerm}&site=stackoverflow`;

  try {
    const response = await fetch(apiUrl);
    // console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
