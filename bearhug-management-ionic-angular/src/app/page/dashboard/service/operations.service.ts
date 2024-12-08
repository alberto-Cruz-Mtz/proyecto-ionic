import {Injectable} from '@angular/core';
import {body} from "ionicons/icons";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor() { }

  async useFetchData(url: string, method: 'GET' | 'DELETE') {
    try{
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async useBodyFetch(url: string, body: unknown, method: 'POST' | 'PUT') {
    try{
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}
