import Model, { attr, belongsTo, hasMany } from "@ember-data/model";

export default class ArticleModel extends Model {
  @attr("string")
  title;
  @attr("string")
  body;
  @attr("date")
  publishedAt;
  @belongsTo("user")
  author;
  @hasMany("comments", { subcollection: true })
  comments;
}
