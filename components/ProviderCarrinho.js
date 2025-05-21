import { children, createContext,useContext,useState } from "react";

const CarrinhoContext = createContext();
export function ProviderCarrinho({children}){
    const [carrinho,setCarrinho] = useState([]);
    function addProducts(produtos){
        setCarrinho((anterior) => [...anterior, produtos])
    }
    return(
        <CarrinhoContext.Provider value={{carrinho, addProducts}}>
            {children}
        </CarrinhoContext.Provider>
    )
}
export function useCarrinho(){
    return useContext(CarrinhoContext);
}