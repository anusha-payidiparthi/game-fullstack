import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class GlobalDataService {
    loggedInSubject = new Subject<boolean>();
    localStorage: Storage;
    constructor() {
        this.localStorage = window.localStorage;
    }

    get isLocalStorageSupported(): boolean {
        return !!this.localStorage
    }

    set(key: string, value: any): any {
        value = JSON.stringify(value);
        if (this.isLocalStorageSupported) {
            this.localStorage.setItem(key, value);
            this.loggedInSubject.next(true);
        }
    }
    get(key: string): any {
        if (this.isLocalStorageSupported) {
            return this.localStorage.getItem(key);
        }
    }

    remove(key: string): any {
        if (this.isLocalStorageSupported) {
            this.localStorage.removeItem(key);
            this.loggedInSubject.next(false);
        }
    }
}