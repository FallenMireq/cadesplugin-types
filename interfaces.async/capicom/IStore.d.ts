import {
    CADESCOM_STORE_LOCATION,
    CAPICOM_STORE_NAMES,
    CAPICOM_STORE_OPEN_MODE,
} from '../../enums/@';

import { ICertificates } from './ICertificates';

/**
 * The Store object provides properties and methods that you can use to choose, manage, and use certificate stores and the certificates in those stores.
 * CAPICOM can use Current-User, Local-Machine, memory, and Active Directory stores.
 * Also, stores support smart card–based certificate stores.
 * Developers should be aware that some methods may fail with some stores if operations are attempted for which the user does not have rights.
 *
 * [MS Docs: IStore](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/store)
 */
export interface IStore {
    /** The Open method opens a specified certificate store. By default, the CAPICOM_CURRENT_USER_STORE location and CAPICOM_MY_STORE store are opened as read-only */
    Open(): Promise<void>;
    Open(StoreLocation: CADESCOM_STORE_LOCATION): Promise<void>;
    Open(
        StoreLocation: CADESCOM_STORE_LOCATION,
        StoreName: CAPICOM_STORE_NAMES | string
    ): Promise<void>;
    Open(
        StoreLocation: CADESCOM_STORE_LOCATION,
        StoreName: CAPICOM_STORE_NAMES | string,
        OpenMode: CAPICOM_STORE_OPEN_MODE
    ): Promise<void>;

    /** The Close method closes an open certificate store */
    Close(): Promise<void>;

    /** The Certificates property retrieves the collection that includes all of the certificates in the store */
    readonly Certificates: Promise<ICertificates>;

    /** The Location property retrieves the location of the certificate store that this object represents */
    readonly Location: Promise<CADESCOM_STORE_LOCATION>;

    /** The Name property retrieves the name of the certificate store that this object represents */
    readonly Name: Promise<CAPICOM_STORE_NAMES | string>;
}
