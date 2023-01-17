import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailsPage, {
  loader as eventDetailsLoader,
  action as eventDeleteAction
} from './pages/EventDetails';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import EventsRootLayer from './pages/EventsRoot';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayer />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-details',
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: eventDeleteAction
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction
              }
            ]
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction
          }
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
