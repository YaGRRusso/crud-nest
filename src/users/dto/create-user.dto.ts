import { IsFullName } from '@decorators/common.decorator'
import { Create } from '@interfaces/input.interface'
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator'
import { User } from '../entities/user.entity'

export class CreateUserDto implements Create<User> {
  @IsNotEmpty()
  @IsString()
  @IsFullName()
  name: string

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  cpf: string

  @IsOptional()
  @IsString()
  @Length(11, 11)
  phone?: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword({
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
    minLength: 8,
  })
  password: string
}
