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
const DB_1 = require("./DB");
class Contacts extends DB_1.DB {
    constructor() {
        super("Contacts");
    }
    SearchByFullName(fullName) {
        return __awaiter(this, void 0, void 0, function* () {
            let searchParams = Object({
                query: `contactType = :contactType AND contains(fullName, :fullName)`,
                values: { ':fullName': fullName, ':contactType': 'phone' }
            });
            let contacts = yield this.Search(searchParams);
            return contacts;
        });
    }
}
exports.Contacts = Contacts;
//# sourceMappingURL=Contacts.js.map