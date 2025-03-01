/**
 * Formate les données principales de l'utilisateur.
 */
 export const formatUserScore = (data) => {
    if (data){
        return {
        userId: data.id,
        firstName: data.userInfos.firstName,
        lastName: data.userInfos.lastName,
        age: data.userInfos.age,
        score: data.todayScore !== undefined ? data.todayScore : data.score, // Normalisation du score
        keyData: data.keyData,
        };
    } else {
        return {
            userId: "",
            firstName: "",
            lastName: "",
            age: "",
            score: "",
            keyData: [],
        };
    }
};

/**
 * Formate les données d'activité.
 */
export const formatUserActivity = (data) => {
    if(data){
        return {
            userId: data.userId,
            sessions: [...data.sessions], // Pas besoin de remapper, on peut retourner directement les sessions
        };
    } else {
        return {
            userId: "",
            sessions: ""
        };
    }
};

/**
 * Formate les sessions moyennes.
 */
export const formatUserAverageSessions = (data) => {
    if(data){
        return {
            sessions: data.sessions.map(({ day, sessionLength }) => ({ day, sessionLength })),
        };
    } else {
        return {
            sessions: [],
        };
    }
};

/**
 * Formate les performances de l'utilisateur.
 */
 export const formatUserPerformance = (data) => {
    if(data){
        return{
            userId: data.userId,
            kind: data.kind,
            data: data.data.map(({ value, kind }) => ({
                value,
                kind: data.kind[kind],
            })),
        };
    } else {
        return {
            userId: "",
            kind: "",
            data: []
        };
    }
};