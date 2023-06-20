import axios from "axios";
import { useContext,createContext, useState, useEffect } from "react";


export const UserContext = createContext({});


export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [wishList, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
            if (!user) {
                axios.get('/api/v1/profile').then(({ data }) => {
                    console.log(data)
                    setUser(data);
                    setLoading(false)
                });
                
        }
        let existingItems = localStorage.getItem('wishlists');
        if (existingItems) {
            setWishlist(JSON.parse(existingItems ))
        }
          
        

       
    }, [])
    return (<UserContext.Provider value={{user,setUser,loading,setWishlist,wishList}}>
        {children}
    </UserContext.Provider>)
}