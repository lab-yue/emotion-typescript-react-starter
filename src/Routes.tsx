import About from './pages/About';

interface Routes {
  title: string;
  url: string;
  component: () => JSX.Element;
}

const routes: Routes[] = [
  {
    title: 'About',
    url: '/about',
    component: About,
  },
];

export default routes;
