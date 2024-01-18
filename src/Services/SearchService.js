export const getSearches = async () => {
  const apiUrl =
    "https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=vscode&site=stackoverflow";

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
