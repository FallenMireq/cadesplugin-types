export const enum CAPICOM_KEY_USAGE {
    CAPICOM_ENCIPHER_ONLY_KEY_USAGE = 0x00000001,
    CAPICOM_CRL_SIGN_KEY_USAGE = 0x00000002,
    CAPICOM_OFFLINE_CRL_SIGN_KEY_USAGE = 0x00000002,
    CAPICOM_KEY_CERT_SIGN_KEY_USAGE = 0x00000004,
    CAPICOM_KEY_AGREEMENT_KEY_USAGE = 0x00000008,
    CAPICOM_DATA_ENCIPHERMENT_KEY_USAGE = 0x00000010,
    CAPICOM_KEY_ENCIPHERMENT_KEY_USAGE = 0x00000020,
    CAPICOM_NON_REPUDIATION_KEY_USAGE = 0x00000040,
    CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE = 0x00000080,
    CAPICOM_DECIPHER_ONLY_KEY_USAGE = 0x00008000,
}
