import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of, Observable, SchedulerLike } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export class ApiModel {
  public data: any;
  public messages: string[] | undefined;
  public success: boolean | undefined;
}

export enum TypeMessageEnum {
  Success = 'S'.charCodeAt(0),
  Error = 'E'.charCodeAt(0),
  Info = 'I'.charCodeAt(0),
  Warn = 'W'.charCodeAt(0),
}
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
  protected getAnexo(route: string): Observable<Blob> {
    const url = this.getApiUrl(route);

    return this.http.get(url, { responseType: 'blob' });
  }
  protected postAnexo(route: string, request: any): Observable<Blob> {
    const url = this.getApiUrl(route);

    return this.http.post(url, request, { responseType: 'blob' });
  }
  protected post(route: string, body: any): Promise<any> {
    const url = this.getApiUrl(route);
    return this.http.post(url, body).toPromise();
  }

  protected delete(route: string, body: any): Promise<any> {
    const url = this.getApiUrl(route);
    return this.http.delete(url, {body: body}).toPromise();
  }

  protected postPipe(route: string, body: any) {
    let opts: string | any[] | SchedulerLike = [];
    const url = this.getApiUrl(route);
    return opts.length
      ? of(opts)
      : this.http.post<any>(url, body).pipe(tap((data) => (opts = data)));
  }

  protected put(route: string, body: any): Promise<any> {
    const url = this.getApiUrl(route);
    return this.http.put(url, body).toPromise() as Promise<ApiModel>;
  }

  protected putPromisse(route: string, body?: any): Promise<any> {
    const url = this.getApiUrl(route);
    return this.http.put<ApiModel>(url, body).toPromise();
  }

  protected observablePost(route: string, body: any): Observable<any> {
    const url = this.getApiUrl(route);
    return this.http.post(url, body);
  }

  //protected observableGet<T>(route: string): Observable<T> {
  //   const url = this.getApiUrl(route);

  //   return this.http
  //     .get(url)
  //     .pipe(map((apiReturn: ApiModel) => apiReturn.data as T));
  // }
  // protected observableGetMockado<T>(route: string): Observable<T> {
  //   return this.http
  //     .get(route)
  //     .pipe(map((apiReturn: ApiModel) => apiReturn.data as T));
  // }

  protected deletePromise(route: string, options?: any): Promise<any> {
    const url = this.getApiUrl(route);

    return this.http.delete(url, options).toPromise();
  }

  buildFormData(formData: FormData, data: any, parentKey?: any) {
    if (
      data &&
      typeof data === 'object' &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        this.buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? '' : data;
      if (value instanceof Date) {
        formData.append(parentKey, this.tolocalISOString(value));
      } else {
        formData.append(parentKey, value);
      }
    }
  }

  objectToFormData<T>(data: T) {
    const formData = new FormData();
    this.buildFormData(formData, data);
    return formData;
  }
  tolocalISOString = (date: Date) => {
    var tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
    return new Date(date.getTime() - tzoffset).toISOString();
  };
}
