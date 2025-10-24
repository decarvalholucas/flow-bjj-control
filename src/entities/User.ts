import { randomUUID } from "crypto";

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string; //DEVE STAR COMO HASH
  public created_at: Date;
  
  constructor(props: Omit<User, 'id' | 'created_at'>, id?: string, created_at?: Date) {
   
    this.name =  props.name;
    this.email = props.email;
    this.password = props.password;

    if(!id) {
      this.id = randomUUID();
      this.created_at = new Date();
    } else {
      this.id = id
      this.created_at = created_at!;
    }
  }
}