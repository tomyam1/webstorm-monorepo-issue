import { packageA } from '../../../packages/package-a/src';
import { packageB } from '../../../packages/package-b/src';

/*
Should have been:
import { packageA } from '@tepez/package-a/src';
import { packageB } from '@tepez/package-b/src';
 */

packageA
packageB