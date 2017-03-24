/**
 * Created by ep399 on 3/21/2017.
 */

import { INotification } from './INotification';
import { IRequest } from './IRequest';

interface MonitorRule {
    retries?: number;
    failureLimit?: number;
    notification?: Array<INotification>;
}

export interface IMonitor {
    _id: string;
    name: string;
    request?: IRequest;
    delay?: number;
    rules?: Array<MonitorRule>;
}
