import {Config} from './config';
import {CONFIG} from './mock-config';
import {Injectable} from 'angular2/core';

@Injectable()
export class ConfigService {
  getConfig() {
    return Promise.resolve(CONFIG);
  }
}
