import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PaginationUserDto } from './dto/pagination-user.dto'
import { SearchUserDto } from './dto/search-user.dto'
import { ApiTags } from '@nestjs/swagger'
import { IsPublic } from 'src/auth/decorators/public.decorator'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll(@Query() paginationUserDto: PaginationUserDto) {
    return this.usersService.findAll(paginationUserDto)
  }

  @Get('search')
  searchAll(
    @Query() paginationUserDto: PaginationUserDto,
    @Body() searchUserDto: SearchUserDto,
  ) {
    return this.usersService.searchAll(paginationUserDto, searchUserDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
