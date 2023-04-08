
export class User{

  public id: number;
  public name: string;
  public mobileNumber: string;
  public email : string;
  public password: string;
  public authorities : any [];
  public statusCd: string;
  public statusMsg : string;
  public authStatus : string;


  constructor(id?: number,name?: string, mobileNumber?: string, email?: string,  password?: string,authorities?: any[],
      statusCd?:string,statusMsg?:string, authStatus?:string){
        this.id = id || 0;
        this.name = name || '';
        this.mobileNumber = mobileNumber || '';
        this.email = email || '';
        this.password = password || '';
        this.authorities = authorities || [];
        this.statusCd = statusCd || '';
        this.statusMsg = statusMsg || '';
        this.authStatus = authStatus || '';
  }

}
