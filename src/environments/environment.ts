// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const BACK_SERVER: String = '';
export const BACK_SERVER: String = "https://34.123.194.159:9443/";
export const FILES = 'https://34.123.194.159:9443/euc-commons/';
export const EUC20_APP: String = 'euc-pronosticos-proteccioncobros'; //proteccion-cobros  euc-sms

export const environment = {
  production: false,
  SECURITY_REST: BACK_SERVER + "euc-seguridad/rest",
  restAPI: `${BACK_SERVER}${EUC20_APP}rest`,
  restFileAPI: `${FILES}rest`,
  seguridadAPI : BACK_SERVER + "euc-seguridad/rest",
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const appHeaders = {
  'Content-Type': 'application/json'
};