import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Task List',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Work Order	',
  },
];
export default routeConfig;