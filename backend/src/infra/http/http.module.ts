import { CreateUserUseCase } from "@application/use-cases/create-user/user-create-use-case";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user-controller";
import { PassportModule } from "@nestjs/passport";
import { AuthenticateUserUseCase } from "@application/use-cases/authenticate-user/authenticate-use-case";
import { ForgotPasswordUserUseCase } from "@application/use-cases/forgot-password-user/forgot-password-use-case";
import { KillSessionTokenForgotPasswordUseCase } from "@application/use-cases/kill-session-token-forgot-password/kill-session-token-forgot-password-use-case";
import { ValidateSessionTokenUseCase } from "@application/use-cases/validate-session-token/validate-session-token-use-case";
import { ResetPasswordUseCase } from "@application/use-cases/save-new-password/save-new-password-use-case";
import { JwtModule } from "@nestjs/jwt";
import { GetUserUseCase } from "@application/use-cases/get-user/get-user-use-case";

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ session: true }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY_TOKEN,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [
    UserController
  ],
  providers: [
    CreateUserUseCase,
    AuthenticateUserUseCase,
    ForgotPasswordUserUseCase,
    KillSessionTokenForgotPasswordUseCase,
    ValidateSessionTokenUseCase,
    ResetPasswordUseCase,
    GetUserUseCase
  ]
})
export class HttpModule { }