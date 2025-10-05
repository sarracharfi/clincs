import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RbacGuard } from '../auth/rbac.guard';
import { Permissions } from './permissions.decorator';
import { PermissionsService } from './permissions.service'; // Added import

@Controller('permissions')
@UseGuards(JwtAuthGuard)
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {}

  @Post()
  @UseGuards(RbacGuard)
  @Permissions('create_permission')
  async create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  @UseGuards(RbacGuard)
  @Permissions('read_permission')
  async findAll() {
    return this.permissionsService.findAll();
  }

  @Get(':id')
  @UseGuards(RbacGuard)
  @Permissions('read_permission')
  async findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(+id);
  }
}