import { jwtDecode } from "jwt-decode";
import { createContext } from "react";

export const UserContext = createContext(null);

export const userDecodeToken = (theToken) => {
    const decoded = jwtDecode(theToken);//objeto do payload
    console.log(decoded);
    return { role: decoded.role, nome: decoded.name, token: theToken }
}