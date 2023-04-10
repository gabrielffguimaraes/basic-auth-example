
export class Account {

  public customerId: number | null;
  public accountNumber: number | null;
  public accountType: string;
  public branchAddress: string;
  

  constructor(customerId?: number,accountNumber?: number,accountType?: string, branchAddress?: string){
        this.customerId = customerId || null;
        this.accountNumber = accountNumber  || null;
        this.accountType = accountType || '';
        this.branchAddress = branchAddress || '';
  }

}
