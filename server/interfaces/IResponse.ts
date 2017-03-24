/**
 * Created by ep399 on 3/21/2017.
 */
interface KeyPair {
    name: string;
    value: string;
}

export interface IResponse {
    body: string;
    headers: Array<KeyPair>;
    status: number;
    message: string;
    duration: number;
}
