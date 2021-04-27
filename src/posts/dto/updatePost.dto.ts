import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString({ each: true })
  @IsNotEmpty()
  id: number;
  content: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}

export default CreatePostDto;