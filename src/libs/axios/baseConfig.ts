export class AxiosBase {
  static #instance: AxiosBase;
  private baseUrl?: string;
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static getter that controls access to the singleton instance.
   *
   * This implementation allows you to extend the Singleton class while
   * keeping just one instance of each subclass around.
   */
  public static get instance(): AxiosBase {
    if (!AxiosBase.#instance) {
      AxiosBase.#instance = new AxiosBase();
    }

    return AxiosBase.#instance;
  }

  /**
   * Finally, any singleton can define some business logic, which can be
   * executed on its instance.
   */

  public getBaseUrl(): string | null | undefined {
    return this.baseUrl;
  }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }
}
