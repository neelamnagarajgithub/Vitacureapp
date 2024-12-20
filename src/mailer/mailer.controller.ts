import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { Send } from 'express';
import { sendMailDto } from './mail.interface';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('/send-mail')
  async sendMail(){
    const dto:sendMailDto = {
        from:{name:"Vitacure",address:"admin@vitacure.life"},
        recipients:[{name:"Rithwik",address:"m.rithwik30@gmail.com"}],
        subject:"Testing",
        html:'<p><strong>Hi</strong> Rithwik Manchiaktla!</p>',
    }
    return await this.mailerService.sendMail(dto);

}
}
