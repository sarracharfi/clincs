// src/auth/rbac.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.get<string[]>('permissions', context.getHandler());
    if (!requiredPermissions || requiredPermissions.length === 0) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Map des permissions par rôle
    const rolePermissions = this.getPermissionsForRole(user.role);

    return requiredPermissions.every(p => rolePermissions.includes(p));
  }

  private getPermissionsForRole(role: string): string[] {
    const permissionsMap = {
      ADMIN: ['create_user', 'read_user', 'update_user', 'delete_user'],
      MEDECIN: ['read_user'],
      RECEPTIONNISTE: ['create_user', 'read_user'],
      PATIENT: ['read_user'],
    };
    return permissionsMap[role] || [];
  }
}
