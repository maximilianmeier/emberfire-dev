import JSONAPISerializer from "@ember-data/serializer/json-api";
import FirestoreSerializer from "emberfire/serializers/firestore";

export default class ApplicationSerializer extends FirestoreSerializer {}
