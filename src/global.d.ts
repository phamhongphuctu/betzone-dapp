export {};

declare global {
  interface Window {
    Pi: {
      authenticate: (scopes: string[]) => Promise<any>;
      init?: any; // tùy cần dùng thêm
    };
  }
}
