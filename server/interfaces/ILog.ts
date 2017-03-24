/**
 * Created by ep399 on 3/21/2017.
 */
import { IApplication } from './IApplication';
import { IRequest } from './IRequest';
import { IEnvironment } from './IEnvironment';
import { IRequestRule } from './IRequestRule';
import { IResponse } from './IResponse';

interface RuleResult {
    rule: IRequestRule;
    value: string;
}

export interface ILog {
    application: IApplication;
    request: IRequest;
    environment: IEnvironment;
    isSuccess: boolean;
    startDate: number;
    endDate: number;
    errors: Array<RuleResult>;
    response: IResponse;
}
