import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";

const Store = createContext("");

export const StoreProvider = ({children}) => {

    const [modalVisible,setModalVisible] =  useState(false);
    const [currentEndpoint,setCurrent] = useState("");
    const [userId,setUserId] = useState(null);

    const setCurrentEndpoint = (val) =>{
        setCurrent(val);
    }

    return <Store.Provider value={{userId,setUserId,modalVisible,setModalVisible,setCurrentEndpoint,currentEndpoint}}>
        {children}
    </Store.Provider>
}

export const useStore = () => useContext(Store);