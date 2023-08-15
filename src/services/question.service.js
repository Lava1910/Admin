import api from "./api";

export const getAll = async () => {
    const url = "ManageQuestion/getAll";
    try {
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {};
    }
}

export const search = async (input) => {
    const url = `ManageQuestion/search/${input}`;
    try {
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return error;
    }
}

export const searchByTopic = async (topicName) => {
    const url = `ManageQuestion/searchByTopic?topicName=${topicName}`;
    try {
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return error;
    }
}

export const searchByType = async (type) => {
    const url = `ManageQuestion/searchByType?type=${type}`;
    try {
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return error;
    }
}