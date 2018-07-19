"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Twilio = require("twilio");
class TextProvider {
    constructor() {
        this.fromNumber = process.env.TEXT_SVC_FROM_NUMBER;
        this.apiKey = process.env.TEXT_SVC_API_KEY;
        this.apiSecret = process.env.TEXT_SVC_API_SECRET;
        this.library = Twilio(this.apiKey, this.apiSecret);
        this._sent = false;
    }
    get sent() { return this._sent; }
    ;
    send() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.library.messages.create({
                    body: this.message,
                    to: this.number,
                    from: this.fromNumber
                });
                if (_.isString(res.sid)) {
                    this._sent = true;
                }
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.TextProvider = TextProvider;
//# sourceMappingURL=TextProvider.js.map