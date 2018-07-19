"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextProvider_1 = require("../Services/TextProvider");
class TextMessage extends TextProvider_1.TextProvider {
    constructor(number, message) {
        super();
        if (!number.length || !message.length) {
            throw new Error(`A number and a message are required`);
        }
        this.number = number;
        this.message = message;
        return;
    }
}
exports.TextMessage = TextMessage;
//# sourceMappingURL=TextMessage.js.map