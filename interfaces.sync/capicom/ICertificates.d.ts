import { ICertificate2 } from './ICertificate2';
import { CAPICOM_CERTIFICATE_FIND_TYPE } from '../../enums/@';

export interface ICertificates {
    // Add(Certificate: ICertificate2): void;
    // Clear(): void;

     // @TODO: расписать по значениям enum'а
    Find(FindType: CAPICOM_CERTIFICATE_FIND_TYPE): ICertificates;
    Find(
        FindType: CAPICOM_CERTIFICATE_FIND_TYPE,
        varCriteria: any
    ): ICertificates;
    Find(
        FindType: CAPICOM_CERTIFICATE_FIND_TYPE,
        varCriteria: any,
        bFindValidOnly: boolean
    ): ICertificates;

    // Remove(Index: number | string | ICertificate2): void;
    // Save(FileName: string, Password?: string, SaveAs?: any, ExportFlag?: any): void;
    // Select(Title?: string, DisplayString?: string, bMultiSelect?: boolean): ICertificates;
    Item(Index: number): ICertificate2;

    readonly Count: number;
}
