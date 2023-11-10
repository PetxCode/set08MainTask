import axios from "axios";

const URL: string = "http://localhost:1122";
export const getProject = async () => {
  try {
    return await axios.get(`${URL}/view-project`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneProject = async (projectID: string) => {
  try {
    return await axios
      .get(`${URL}/view-one-project/${projectID}`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
