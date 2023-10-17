import axiosInstance from "../axiosInstance";

export const  addUser  = async (username :String, password :Number) => {
    await axiosInstance.post('users/add', { 
        username:username,
        password: password
      });
}

export const getAllUsers = async () => {
   return  await  axiosInstance.get('users/all');
}

