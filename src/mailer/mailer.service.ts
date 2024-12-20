import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { sendMailDto } from './mail.interface';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailerService {

    constructor(private readonly ConfigService:ConfigService){}

    mailTransport(){
        const transporter = nodemailer.createTransport({
            host: this.ConfigService.get<string>('MAIL_HOST'),
            port: this.ConfigService.get<number>('MAIL_PORT'),
            secure:false,
            auth: {
              user: this.ConfigService.get<string>('MAIL_USER'),
              pass: this.ConfigService.get<string>('MAIL_PASS'),
            },
          });

          return transporter;
    }

    template(html:string,replacements:  Record<string,string> ){
        return html.replace(
            /%(\w*)%/g, // or /{(\w*)}/g for "{this} instead of %this%"
            function( m, key ){
              return replacements.hasOwnProperty( key ) ? replacements[ key ] : "";
            }
          );
    }

    async sendMail(dto: sendMailDto){
        const {from, recipients, subject, text, html, placeHolderReplacements} = dto;
        const transporter = this.mailTransport();

        const mailOptions:Mail.Options = {
            from: from ?? {
              name:this.ConfigService.get<string>('APP_NAME'),  
              address: this.ConfigService.get<string>('DEFAULT_FROM_EMAIL'),  
            },
            to: recipients,
            subject,
            text,
            html,
        };

        try{
            const result=await transporter.sendMail(mailOptions);
        }catch(error){
            console.error("Error: ",error);
        }
    } 
}
