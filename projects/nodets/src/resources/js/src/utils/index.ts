import { MaritalStatus } from "../components/interface";

export const maritalStatusOptions = (maritalStatus: number | undefined): string => {
    if (maritalStatus === MaritalStatus.casado) {
        return 'casado';
    }
    if (maritalStatus === MaritalStatus.divorciado) {
        return 'divorciado';
    }
    if (maritalStatus === MaritalStatus.soltero) {
        return 'soltero';
    }
    if (maritalStatus === MaritalStatus.viudo) {
        return 'viudo';
    }
    return '-';
}
