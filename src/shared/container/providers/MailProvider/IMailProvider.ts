interface IMailContact {
    name: string;
    email: string;
}

interface IMailMessage {
    to: IMailContact;
    from?: IMailContact;
    subject: string;
    templateData: {
        template: string;
        variables: {
            [key: string]: string | number;
        };
    };
}

export interface IMailProvider {
    sendMail(message: IMailMessage): Promise<void>;
} 