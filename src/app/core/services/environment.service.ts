import { Injectable } from '@angular/core';

export interface Environment {
  production: boolean;
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  environment: Environment = {
    production: false,
    apiUrl: 'http://localhost:8000'
  };

  constructor() {
    this.loadEnvironment();
  }

  private loadEnvironment(): void {
    // Check for global API URL from index.html or window object
    const apiUrl = (window as any)['__API_URL__'] || 
                   localStorage.getItem('apiUrl');
    
    if (apiUrl) {
      this.environment.apiUrl = apiUrl;
    }

    // Check if production
    this.environment.production = location.hostname !== 'localhost' && 
                                  location.hostname !== '127.0.0.1';
  }

  getApiUrl(): string {
    return this.environment.apiUrl;
  }

  isProduction(): boolean {
    return this.environment.production;
  }
}
