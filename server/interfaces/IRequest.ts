/**
 * Created by ep399 on 3/21/2017.
 */

import { IRequestRule } from './IRequestRule';

interface KeyPair {
    name: string;
    value?: string;
}

interface Authentication {
    oauthTokenURL?: string;
    oauthRefreshURL?: string;
    user?: string;
    password?: string;
    clientId?: string;
    clientSecret?: string;
}

export interface IRequest {
    path: string;
    method: string;
    isSSL: boolean;
    headers: Array<KeyPair>;
    parameters: Array<KeyPair>;
    body: string;
    authentication: Authentication;
    rules: Array<IRequestRule>;
}
