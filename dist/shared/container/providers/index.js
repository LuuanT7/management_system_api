"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const EtherealMailProvider_1 = require("./MailProvider/implementations/EtherealMailProvider");
tsyringe_1.container.registerSingleton("MailProvider", EtherealMailProvider_1.EtherealMailProvider);
