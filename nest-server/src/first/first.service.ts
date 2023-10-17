import { Injectable } from "@nestjs/common";

@Injectable({})
export class FirstService {
  addedOnText = ""
    test(text) {
        this.addedOnText += text

        return this.addedOnText   
    }
}