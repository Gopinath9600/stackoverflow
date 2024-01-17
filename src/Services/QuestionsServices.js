export const getQuestions = async () => {
  const apiUrl =
    "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";

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

export const getQuestionsById = async (questionId) => {
  const apiUrl = `https://api.stackexchange.com/2.3/questions/${questionId}?order=desc&sort=activity&site=stackoverflow&filter=!6WPIomnMNcVD9`;

  try {
    const response = await fetch(apiUrl);
    console.log(response);
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

// export const getAnswers = async (
//   questionId,
//   sort = "votes",
//   order = "desc"
// ) => {
//   const apiUrl = `https://api.stackexchange.com/2.3/questions/${questionId}/answers?order=${order}&sort=${sort}&site=stackoverflow`;

//   try {
//     const response = await fetch(apiUrl);
//     // console.log(response);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// export const getAnswersById = async (
//   answerId,
//   sort = "votes",
//   order = "desc"
// ) => {
//   const apiUrl = `https://api.stackexchange.com/2.3/answers/${answerId}?order=${order}&sort=${sort}&site=stackoverflow`;

//   try {
//     const response = await fetch(apiUrl);
//     // console.log(response);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

export const getLinkedById = async (
  questionId,
  sort = "votes",
  order = "desc"
) => {
  const apiUrl = `https://api.stackexchange.com/2.3/questions/${questionId}/linked?order=${order}&sort=${sort}&site=stackoverflow`;

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

export const getRelatedById = async (
  questionId,
  sort = "votes",
  order = "desc"
) => {
  const apiUrl = `https://api.stackexchange.com/2.3/questions/${questionId}/related?order=${order}&sort=${sort}&site=stackoverflow`;

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
