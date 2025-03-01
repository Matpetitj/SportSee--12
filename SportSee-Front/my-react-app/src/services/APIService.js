import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, } from "../data/data";
import { formatUserActivity, formatUserAverageSessions, formatUserPerformance, formatUserScore } from "./modeles";

const API_URL = "http://localhost:3000/user";

const isDataMocked = true;

/**
 * Fonction pour récupérer des données mockées en fonction de l'endpoint.
 * @param {number} userId - ID de l'utilisateur
 * @param {Array} dataset - Tableau de données mockées
 * @returns {Object|null} - Données mockées trouvées ou null
 */
const getMockedData = (userId, dataset) => {
    return dataset.find(user => user.userId == userId || user.id == userId) || null;
};

/**
 * Récupération des données principales de l'utilisateur
 */
export const fetchUserData = async (userId, formatFunction) => {
    if (isDataMocked) {
        const userMockData = getMockedData(userId, USER_MAIN_DATA);
        if (userMockData) {
            // console.log("Données simulées trouvées :", userMockData);
            return formatFunction(userMockData); // On formate bien les données mockées
        }
        console.warn(`Aucune donnée simulée trouvée pour l'ID ${userId}`);
        return null;
    } else {
        try {
            const response = await fetch(`${API_URL}/${userId}`);
            if (!response.ok) throw new Error("Erreur lors de la récupération des données");
            const data = await response.json();
            return formatFunction(data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données user :", error.message);
            return null;
        }
    }
};

/**
 * Récupération des données d'activité
 */
export const fetchUserActivity = async (userId, formatFunction) => {
    if (isDataMocked) {
        const userMockData = getMockedData(userId, USER_ACTIVITY);
        if (userMockData) {
            // console.log("Données simulées trouvées :", userMockData);
            return formatFunction(userMockData); // On formate bien les données mockées
        }
        console.warn(`Aucune donnée simulée trouvée pour l'ID ${userId}`);
        return null;
    } else {
        try {
            const response = await fetch(`${API_URL}/${userId}/activity`);
            if (!response.ok) throw new Error("Erreur lors de la récupération des données");
            const data = await response.json();
            return formatFunction(data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données activité :", error.message);
            return null;
        }
    }
};

/**
 * Récupération des sessions moyennes
 */
export const fetchUserAverageSessions = async (userId, formatFunction) => {
    if (isDataMocked) {
        const userMockData = getMockedData(userId, USER_AVERAGE_SESSIONS);
        if (userMockData) {
            // console.log("Données simulées trouvées :", userMockData);
            return formatFunction(userMockData); //On formate bien les données mockées
        }
        console.warn(`Aucune donnée simulée trouvée pour l'ID ${userId}`);
        return null;
    } else {
        try {
            const response = await fetch(`${API_URL}/${userId}/average-sessions`);
            if (!response.ok) throw new Error("Erreur lors de la récupération des données");
            const data = await response.json();
            return formatFunction(data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données sessions :", error.message);
            return null;
        }
    }
};

/**
 * Récupération des performances
 */
export const fetchUserPerformance = async (userId, formatFunction) => {
    if (isDataMocked) {
        const userMockData = getMockedData(userId, USER_PERFORMANCE);
        if (userMockData) {
            // console.log("Données simulées trouvées :", userMockData);
            return formatFunction(userMockData); //On formate bien les données mockées
        }
        console.warn(`Aucune donnée simulée trouvée pour l'ID ${userId}`);
        return null;
    } else {
        try {
            const response = await fetch(`${API_URL}/${userId}/performance`);
            if (!response.ok) throw new Error("Erreur lors de la récupération des données");
            const data = await response.json();
            return formatFunction(data.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données performance :", error.message);
            return null;
        }
    }
};

// Fonctions spécifiques pour récupérer chaque type de données
export const getUserScore = (userId) => fetchUserData(userId, formatUserScore);
export const getUserActivity = (userId) => fetchUserActivity(userId, formatUserActivity);
export const getUserAverageSessions = (userId) => fetchUserAverageSessions(userId, formatUserAverageSessions);
export const getUserPerformance = (userId) =>  fetchUserPerformance(userId, formatUserPerformance);