import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class BaseRequestService {
  protected routeBase: string | undefined;

  constructor(protected http: HttpClient) {}

  protected getApiUrl(route: string): string {
    return `${environment.WEBAPI_URL}/${route}`;
  }

  protected get(route: string): Promise<any> {
    const url = this.getApiUrl(route);

    return this.http.get(url).toPromise();
  }

  protected post(route: string, body: any): Promise<any> {
    const url = this.getApiUrl(route);
    return this.http.post(url, body).toPromise();
  }

  protected delete(route: string, body: any): Promise<any> {
    const url = this.getApiUrl(route);
    return this.http.delete(url, {body: body}).toPromise();
  }

  protected put(route: string, body: any): Promise<any> {
    const url = this.getApiUrl(route);
    return this.http.put(url, body).toPromise() as Promise<any>;
  }
}
