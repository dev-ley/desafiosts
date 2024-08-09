
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import App from '../App'
import Media from '../pages/Media'
import Dado from '../pages/Dado'
import Quiz from '../pages/Quiz'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/media',
            element: <Media/>,
        },
        {
            path: '/dado',
            element: <Dado/>,
        },
        {
            path: '/quiz',
            element: <Quiz/>,
        }
     ]
    }
])

export default router