import {TextProvider} from '../Services/TextProvider';

class TextMessage extends TextProvider {

  constructor(number: string, message: string) {

    super();

    if (!number.length || !message.length) {

      throw new Error(`A number and a message are required`);

    }

    this.number = number;
    this.message = message;

    return;

  }

}

export {TextMessage};