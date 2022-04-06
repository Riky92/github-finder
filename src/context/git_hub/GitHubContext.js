import {createContext, useReducer} from 'react'
import { createRenderer } from 'react-dom/test-utils';
import githubReducer from './GitHubReducer';

const GitHubContext = createContext()

export const GitHubProvider = ({children}) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    return <GitHubContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </GitHubContext.Provider>

}

export default GitHubContext