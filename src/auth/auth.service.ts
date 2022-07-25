import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
   login(){
    return {msg:"i am log in "}
  }

  signUp(){
    return {msg:"i am sign up"}

  }

}