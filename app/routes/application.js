import Route from "@ember/routing/route";
import RealtimeRouteMixin from "emberfire/mixins/realtime-route";

export default class ApplicationRoute extends Route.extend(RealtimeRouteMixin) {
  model() {
    return this.store.findAll("article");
  }
}
