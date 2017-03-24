/**
 * Created by ep399 on 3/21/2017.
 */
import { IEnvironment } from './IEnvironment';
import { IMonitor } from './IMonitor';

export interface IApplication {
    _id?: string;
    name: string;
    environment?: Array<IEnvironment>;
    monitors?: Array<IMonitor>;
}
