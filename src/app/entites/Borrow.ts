import { Book } from './Book';
import { User } from './user';
export interface Borrow {
  id?: number;
  available?: boolean;
  startdate?: Date;
  enddate?: Date;
  returndate?: Date;
  user?: User;
  book?: Book;
}
