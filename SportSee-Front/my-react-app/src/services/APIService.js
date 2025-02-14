import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/data";
import { formatUserActivity, formatUserAverageSessions, formatUserPerformance, formatUserScore } from "./modeles";

const API_URL = "http://localhost:3000/user"; 

export const ENDPOINTS = {
    MAIN: "",
    ACTIVITY: "/activity",
    AVERAGE_SESSIONS: "/average-sessions",
    PERFORMANCE: "/performance",
};

const isDataMocked = true;

export const fetchUserData = async (userId, endpoint, formatFunction) => {
    if(isDataMocked){
        const UserMainMockData = USER_MAIN_DATA.find((user) => user.id == userId);
        if (UserMainMockData) {
            console.log("Données simulées trouvées :", UserMainMockData);
            // Si des données simulées sont trouvées, sont renvoyer sous un format structuré
        return UserMainMockData;
        }
        console.log(`Aucune donnée simulée trouvée pour l'ID ${userId}`);
        return null; // si aucun utilisateur n'est trouvé avec cet ID
    } else {
        try {
            const response = await fetch(`${API_URL}/${userId}${endpoint}`);
            if (!response.ok) throw new Error("Erreur lors de la récupération des données");
            const data = await response.json();
            return formatFunction(data);
        } catch (error) {
            console.error(`❌ Erreur lors de la récupération des données (${endpoint}) :`, error.message);
            return null;
        }
    }
    
};

//faire 4 fois, la fetchuserData pour chaque endpoints au lieu d'utiliser le paramètre endpoint

// Fonctions spécifiques pour récupérer chaque type de données
export const getUserScore = (userId) => fetchUserData(userId, ENDPOINTS.MAIN, formatUserScore);
export const getUserActivity = (userId) => fetchUserData(userId, ENDPOINTS.ACTIVITY, formatUserActivity);
export const getUserAverageSessions = (userId) => fetchUserData(userId, ENDPOINTS.AVERAGE_SESSIONS, formatUserAverageSessions);
export const getUserPerformance = (userId) => fetchUserData(userId, ENDPOINTS.PERFORMANCE, formatUserPerformance);