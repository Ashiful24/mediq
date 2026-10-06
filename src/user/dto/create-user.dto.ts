import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { userTypes } from '../../db/schema';

export class CreateUserDto {
  @ApiPropertyOptional({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    description: 'The first name of the user',
    example: 'John',
  })
  @IsString()
  firstName?: string;

  @ApiPropertyOptional({
    description: 'The last name of the user',
    example: 'Doe',
  })
  @IsString()
  lastName?: string;

  @ApiProperty({
    description: 'The phone number of the user',
    example: '+1234567890',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiPropertyOptional({
    description: 'The gender of the user',
    example: 'Male',
  })
  @IsString()
  gender?: string;

  @ApiPropertyOptional({
    description: 'The date of birth of the user',
    example: '1990-01-01',
  })
  @IsString()
  dateOfBirth?: string;

  @ApiPropertyOptional({
    description: 'The profile picture of the user',
    example: 'https://example.com/profile.jpg',
  })
  @IsString()
  profilePicture?: string;

  @ApiProperty({
    description: 'The user type of the user',
    example: 'USER',
  })
  @IsEnum(userTypes)
  userType: typeof userTypes.enumValues[number];

  @ApiProperty({
    description: 'The password of the user',
    example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
