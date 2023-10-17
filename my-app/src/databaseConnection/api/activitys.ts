import axiosInstance from "../axiosInstance";

export const  addActivity  = async (name :String, difficulty :Number) => {
    await axiosInstance.post('activity/add', { 
      name:name,
      difficulty: difficulty
      });
}

export const getAllActivitys = async () => {
   return  await  axiosInstance.get('activity/all');
}

