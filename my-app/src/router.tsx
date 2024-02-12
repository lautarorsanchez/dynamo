import CreateTeams from './routes/createteams'
import Root from "./routes/root";
import SignUp from "./routes/signup"
import ErrorPage from "./error-page";
import MyTeams from "./routes/myteams"
import {
  createBrowserRouter,
} from "react-router-dom";
import TeamId from './routes/teamid';
import SelectTournament from './routes/selecttournament';
import Tournament from './routes/tournament';
import AddPlayer from './routes/addplayer';
import PlayerConfirm from './routes/playerconfirm';
import Confirmation from './routes/confirmation';
import MyTeams2 from './routes/myteams2';
import Teamlist from './routes/teamlist';
import Admin from './routes/admin';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/myteams",
      element: <MyTeams />
    },
    {
      path:"/createteams",
      element: <CreateTeams/>
    },
    {
      path:"/teamid",
      element: <TeamId/>
    },
    {
      path:"/selecttournament",
      element: <SelectTournament/>
    },
    {
      path:"/tournament",
      element: <Tournament/>
    },
    {
      path:"/addplayer",
      element: <AddPlayer/>
    },
    {
      path:"/playerconfirm",
      element:<PlayerConfirm/>
    },
    {
      path:"/confirmation",
      element: <Confirmation/>
    },
    {
      path: "/myteams2",
      element: <MyTeams2 />
    },
    {
      path: "/teamlist",
      element: <Teamlist />
    },
    {
      path: "/admin",
      element:<Admin/>
    }

  ]);
  