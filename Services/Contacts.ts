import {DB} from './DB';

export class Contacts extends DB{

  constructor() {

    super("Contacts");

  }

  async SearchByFullName(fullName: string): Promise<object> {

    let searchParams = Object({
      query: `contactType = :contactType AND contains(fullName, :fullName)`,
      values: {':fullName': fullName, ':contactType': 'phone'}
    })

    let contacts = await this.Search(searchParams);

    return contacts;

  }

}