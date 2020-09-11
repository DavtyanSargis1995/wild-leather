import {db} from "./firebase";

export const getData = (collection, {field, condition, value}) => {
  return db
    .collection(collection)
    .where(field, condition, value)
    .get()
}
