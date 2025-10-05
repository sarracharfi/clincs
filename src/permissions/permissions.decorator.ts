// src/permissions/permissions.decorator.ts
import { SetMetadata } from '@nestjs/common';

/**
 * Décorateur @Permissions(...)
 * Permet de définir les permissions requises pour accéder à une route
 * Exemple : @Permissions('create_user', 'update_user')
 */
export const Permissions = (...permissions: string[]) => SetMetadata('permissions', permissions);
