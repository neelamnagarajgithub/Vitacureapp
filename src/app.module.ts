import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { NursesController } from './nurses/nurses.controller';
import { NursesService } from './nurses/nurses.service';
import { NursesModule } from './nurses/nurses.module';
import { CaregiversModule } from './caregivers/caregivers.module';

@Module({
  imports: [PatientsModule, NursesModule, CaregiversModule],
  controllers: [AppController, NursesController],
  providers: [AppService, NursesService],
})
export class AppModule {}
