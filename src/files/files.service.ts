import { join } from 'path';
import { existsSync } from 'fs';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  getStaticProductImage(fileName: string) {
    const path = join(__dirname, '../../static/uploads', fileName);

    if (!existsSync(path))
      throw new BadRequestException(`File ${fileName} not found`);

    return path;
  }
}
