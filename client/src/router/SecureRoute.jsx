import { AppProvider, useApp } from "@/providers/AppProvider";
import {Box} from '@/ui';
import { CircularProgress } from '@/ui/Icons';
import { Navigate, useLocation } from "react-router";

export const SecureRoute = ({children, allowedRoles,  redirectTo = '/login'}) =>{
    const location = useLocation()
    const {currentUser, isLoading, isAuthenticiated} = useApp();
    if(isLoading){
        return(
            <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )
    }
    if(!isAuthenticiated){
        return <Navigate to={redirectTo} state={{from: location}} replace />
    }
    if(allowedRoles && allowedRoles.length>0){
        if(!currentUser || !allowedRoles.includes(currentUser.role)){
            return <Navigate to="/unauthorized" replace />
        }
    }
}