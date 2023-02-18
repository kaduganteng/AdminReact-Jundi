import { Navigate, Outlet } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";

export default function DefaultLayout() {
    const { user, token } = userStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}
