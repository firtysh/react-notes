import { Navigate } from 'react-router-dom'
function Protected({ redirect, path, children }) {

    if (redirect) {
        return <Navigate to={path} replace />
    }
    else {
        return (
            children
        )
    }
}

export default Protected