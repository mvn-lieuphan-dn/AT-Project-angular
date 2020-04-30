import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalerService {

  constructor() { }
  saveLocalStorage(data: any, name: string) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  getLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }

  saveSessionStorage(data: any, name: string) {
    sessionStorage.setItem(name, JSON.stringify(data));
  }

  getSessionStorage(name: string) {
    return JSON.parse(sessionStorage.getItem(name));
  }

  delLocalStorage(name: string) {
    localStorage.removeItem(name)
  }
}
