import React from 'react';
import { BrowserRouter, Route, Router  } from "react-router-dom";
import { createBrowserHistory } from 'history';
import "bootstrap/dist/css/bootstrap.min.css";

// import components
import Navbar from "./components/navbar.component";
import Sidebar from "./components/sidebar.component";
import Dashboard from "./components/dashboard.component";
import CreateTicket from "./components/create-ticket.component";
import CreateUser from "./components/create-user.component";
import ManageUsers from "./components/manage-users.component";
import ManageProjects from "./components/manage-projects.component";
import EditTicket from "./components/edit-ticket.component";
import TwilioFlexContainer from './components/TwilioFlexContainer';

export const history = createBrowserHistory();

export default class App extends BrowserRouter {
  render() {
    return (
      <Router history={history}>
          <Navbar />
          <div className="wrapper">
              <TwilioFlexContainer />
              <Sidebar />
              <div id="content">
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/tickets/create" component={CreateTicket} />
                  <Route path="/manage-users" component={ManageUsers} />
                  <Route path="/users/create" component={CreateUser} />
                  <Route path="/manage-projects" component={ManageProjects} />
                  <Route path="/edit/:id" component={EditTicket} />
              </div>
          </div>
      </Router>
    )
  }
}

// export default function App() {
//   return (
//     <Router>
//         <Navbar />
//         <div className="wrapper">
//             <TwilioFlexContainer />
//             <Sidebar />
//             <div id="content">
//                 <Route path="/" exact component={Dashboard} />
//                 <Route path="/tickets/create" component={CreateTicket} />
//                 <Route path="/manage-users" component={ManageUsers} />
//                 <Route path="/users/create" component={CreateUser} />
//                 <Route path="/manage-projects" component={ManageProjects} />
//                 <Route path="/edit/:id" component={EditTicket} />
//             </div>
//         </div>
//     </Router>
//   );
// }

