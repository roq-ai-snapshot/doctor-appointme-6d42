interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read clinic information',
    'Read appointment details',
    'Read medical records',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage clinic information',
    'Manage appointment schedules',
    'Manage insurance provider information',
    'Manage medical records',
    'Manage billing information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4061cb5c-0193-4c4f-9f87-6223feaacadb',
};
