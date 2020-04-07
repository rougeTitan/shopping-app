export class User {
  constructor(
    public email: string,
    public id: string,
    //adding a token
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  //genreating token with validation of it
  get token() {
    //no expiration date or current date is more than expiration date
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
