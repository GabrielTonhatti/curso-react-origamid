import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function autLogin() {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);

                    if (!response.ok) throw new Error("Token inválido");

                    await getUser(token);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }
        }

        autLogin();
    }, []);

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();

        setData(json);
        setLogin(true);
        console.log(json);
    }

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({ username, password });
        const tokenRes = await fetch(url, options);
        const { token } = await tokenRes.json();
        localStorage.setItem("token", token);
        getUser(token);
    }

    async function userLogout() {
        setData(null);
        setError(null);
        setLogin(false);
        setLogin(false);
        localStorage.removeItem("token");
    }

    return (
        <UserContext.Provider value={{ userLogin, userLogout, data }}>
            {children}
        </UserContext.Provider>
    );
};
