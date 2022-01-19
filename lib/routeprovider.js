import React,{useState,useContext,createContext, useEffect} from 'react'
import { useRouter } from 'next/router'


const myRouteContext=createContext()


export function MyRouteProvider({children}) {
    const myRoute = useProvideMyRoute();
    return <myRouteContext.Provider value={myRoute}>{children}</myRouteContext.Provider>;
}

export const useMyRoute = () => {
    return useContext(myRouteContext);
};

function useProvideMyRoute(){
    const router = useRouter()
    const [section,setSection] = useState('/')

    
    useEffect(() => {
        if(section == '/'){
           router.push('/')
        }
        if(section == '/#about'){
            router.push('/#about')
         }
         if(section == '/#projects'){
            router.push('/#projects')
         }
         if(section == '/#contact'){
            router.push('/#contact')
         }
     }, [section])
    return {
      setSection,
      section
    }
}
