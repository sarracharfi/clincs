import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RbacGuard } from '../auth/rbac.guard';
import { Permissions } from 'src/permissions/permissions.decorator';

@Controller('roles')
@UseGuards(JwtAuthGuard)
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  @UseGuards(RbacGuard)
  @Permissions('create_role')
  async create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @UseGuards(RbacGuard)
  @Permissions('read_role')
  async findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @UseGuards(RbacGuard)
  @Permissions('read_role')
  async findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }
}