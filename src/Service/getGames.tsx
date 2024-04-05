import { AxiosError, AxiosResponse } from "axios";
import { GET_GAMES } from "../Constants";
import { GameList } from "../Pages/MyGames";
import api from "./axiosApi";

export const getGames = (): Promise<GameList[] | AxiosError> => {
    const url: string = process.env.REACT_APP_BACKEND_URL + GET_GAMES;
    console.log(url);
    return api.get(url)
        .then((response: AxiosResponse<GameList[]>) => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            console.error(error);
            return error;
        });
};
