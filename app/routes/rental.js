import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;
  
  async model({ rental_id }) {
    return this.store.findRecord('rental', rental_id);
  }
}
