
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EntityService {
  constructor(private http: HttpClient) {}
}
