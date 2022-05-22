import { User } from "../entites/User"; 
import { UserService } from "../service/user.service";

export class Datauser {

    tempuser:User;
    tempusers:User[];
    constructor(private myuser: UserService,private myusers:UserService) {}

    

    getuser(useremail:string):User {
        
        this.myuser.getUser('useremail').subscribe((data) => {
            // myu=data;
            return data;
      
           
          });
          return this.tempuser;
          
    }
   
    getusers():User[]{
        this.myusers.getUsers().subscribe((deta) => {
        
            return deta;
      
            
          });
          return this.tempusers;

    }
  
     
     
}
