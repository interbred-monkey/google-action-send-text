import * as _ from 'lodash';
import * as Twilio from 'twilio';
import {ITextProvider} from '../Models/ITextProvider';

export class TextProvider implements ITextProvider {

  private fromNumber: any = process.env.TEXT_SVC_FROM_NUMBER;
  private apiKey: any = process.env.TEXT_SVC_API_KEY;
  private apiSecret: any = process.env.TEXT_SVC_API_SECRET;
  private library = Twilio(this.apiKey, this.apiSecret);
  private _sent: boolean = false;

  public message: string;
  public number: string;

  get sent(): boolean { return this._sent; };

  async send(): Promise<void> {

    try {

      const res = await this.library.messages.create({
          body: this.message,
          to: this.number,
          from: this.fromNumber
      });

      if (_.isString(res.sid)) {

        this._sent = true;

      }

    }

    catch(e) {

      throw e;

    }

  }

}