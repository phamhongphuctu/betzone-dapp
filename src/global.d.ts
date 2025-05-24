export {};

declare global {
  interface Window {
    Pi: {
      authenticate: (scopes: string[]) => Promise<any>;
      createPayment: (paymentData: {
        amount: number;
        memo: string;
        metadata: object;
      }) => Promise<any>;
      init: (options: { version: string; appId: string }) => void;
    };
  }
}
