import { TAccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
    public static TABLE_USERS = 'accounts'

    public async findAccounts(){

            const accountsDB: TAccountDB[] = await BaseDatabase.connection(AccountDatabase.TABLE_USERS)

        return accountsDB
    }


    public async findAccountById(id:string){
       
            const [accountDB]: TAccountDB[] | undefined[] = await BaseDatabase
            .connection("accounts")
            .where({ id })

        return accountDB
    }


}